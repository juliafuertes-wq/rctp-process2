import { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageLayout from '../layout/PageLayout';
import Breadcrumb from '../layout/Breadcrumb';
import { profiles } from '../../data/profiles';
import ProfilePageHeader from './ProfilePageHeader';
import { Sidebar } from './ProfilePage';
import Chip from '../ui/Chip';
import styles from './profile.module.css';
import secStyles from './ProfileProcessSection.module.css';
import icLogo from '../../assets/integrity-check-logo.png';
import createStyles from './ProfileIntegrityCheckCreate.module.css';

const SUGGESTIONS = {
  entity: [
    {
      id: 'e1',
      name: 'Open Joint Stock Company Gazprom',
      relation: 'Joint Venture partner',
      country: 'Russia',
      idLabel: 'DUNS Number: 644903627',
      website: 'https://www.gazprom-international.com/',
      address: '16 Nametkina St. Moscow, 117997',
      dimmed: false,
    },
    {
      id: 'e2',
      name: 'Avtogas of Gazprom Armenia Closed Joint Stock Company',
      relation: 'Subsidiary',
      country: 'Armenia',
      idLabel: 'Company Identification No.: 1027700070518',
      website: null,
      address: null,
      dimmed: true,
    },
    {
      id: 'e3',
      name: 'Gazprom Series 2008',
      relation: 'Other associated entity',
      country: 'Russia',
      idLabel: null,
      website: 'https://www.gazprom.ru',
      address: '16 Nametkina St. Moscow, 117997',
      dimmed: false,
    },
  ],
  person: [
    {
      id: 'p1',
      name: 'Alexey Borisovich Miller',
      relation: 'Director',
      country: 'Russia',
      idLabel: 'Passport No.: 4512 847291',
      website: null,
      address: 'Moscow, Russia',
      dimmed: false,
    },
    {
      id: 'p2',
      name: 'Elena Mikhailovna Burmistrova',
      relation: 'Key Executive',
      country: 'Russia',
      idLabel: null,
      website: null,
      address: 'Saint Petersburg, Russia',
      dimmed: true,
    },
    {
      id: 'p3',
      name: 'Vitaly Aleksandrovich Markelov',
      relation: 'Board Member',
      country: 'Russia',
      idLabel: 'Company ID: 7736050003',
      website: null,
      address: 'Moscow, Russia',
      dimmed: false,
    },
  ],
};

export default function ProfileIntegrityCheckCreate() {
  const { profileId } = useParams();
  const navigate = useNavigate();
  const profile = profiles[profileId];
  if (!profile) return null;

  const [subjectType, setSubjectType] = useState(null);
  const [subject, setSubject] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [chips, setChips] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchProgress, setSearchProgress] = useState(0);
  const timerRef = useRef(null);
  const searchTimerRef = useRef(null);
  const progressTimerRef = useRef(null);

  function handleSubjectChange(e) {
    setSubject(e.target.value);
    setSelectedId(null);
    setChips([]);
  }

  function handleSubjectTypeChange(type) {
    setSubjectType(type);
    setSelectedId(null);
    setSubject('');
    setChips([]);
    setShowSuggestions(false);
    clearTimeout(timerRef.current);
    setLoading(true);
    timerRef.current = setTimeout(() => {
      setLoading(false);
      setShowSuggestions(true);
    }, 1200);
  }

  function handleSelectSuggestion(suggestion) {
    setSelectedId(suggestion.id);
    setSubject('');
    const newChips = [];
    if (suggestion.name) newChips.push({ key: 'name', label: suggestion.name });
    if (suggestion.country) newChips.push({ key: 'country', label: suggestion.country });
    if (suggestion.idLabel) newChips.push({ key: 'id', label: suggestion.idLabel, bold: true });
    setChips(newChips);
  }

  function removeChip(key) {
    const remaining = chips.filter(c => c.key !== key);
    setChips(remaining);
    if (remaining.length === 0) setSelectedId(null);
  }

  function handleContinue() {
    setSearching(true);
    setSearchProgress(0);
    let progress = 0;
    progressTimerRef.current = setInterval(() => {
      progress += 2;
      setSearchProgress(Math.min(progress, 95));
      if (progress >= 95) clearInterval(progressTimerRef.current);
    }, 60);
    searchTimerRef.current = setTimeout(() => {
      clearInterval(progressTimerRef.current);
      setSearchProgress(100);
      const selected = (subjectType && SUGGESTIONS[subjectType] || []).find(s => s.id === selectedId);
      setTimeout(() => navigate(
        `/profile/${profileId}/integrity-check/results`,
        { state: { entity: selected ? {
          name: selected.name,
          matchScore: '100%',
          description: 'Gazprom PAO (Public Joint Stock Company Gazprom) is a Russian majority state-owned multinational energy corporation. It is the largest company in Russia by market capitalization as of 2022 and a global leader in natural gas exploration and production.',
          country: selected.country,
          website: selected.website,
          matchNote: `Exact match on ${selected.name} and location in ${selected.country}, aligning with the registered name and headquarters of ${selected.name}`,
        } : null }}
      ), 200);
    }, 3000);
  }

  const suggestions = (subjectType && SUGGESTIONS[subjectType]) || [];
  const hasSelection = selectedId !== null && chips.length > 0;
  const canContinue = hasSelection || subject.trim().length > 0;

  return (
    <PageLayout>
      <Breadcrumb items={[
        { label: 'Third Parties', to: '/third-parties' },
        { label: profile.name, to: `/profile/${profileId}` },
        { label: 'Integrity Check', to: `/profile/${profileId}/integrity-check` },
        { label: 'Create New Report' },
      ]} />

      <ProfilePageHeader profile={profile} />

      <div className={styles.pageBody}>
        <Sidebar profile={profile} />

        <main className={styles.mainContent}>
          <section className={secStyles.card}>
            <div className={`${secStyles.cardHeader} ${createStyles.cardHeader}`}>
              <div className={secStyles.cardTitleRow}>
                <h2 className={styles.cardTitle}>Integrity Check Report</h2>
                <div className={secStyles.poweredBy}>
                  POWERED BY
                  <img src={icLogo} alt="Xapien" className={secStyles.poweredByImg} />
                </div>
              </div>
            </div>

            {searching && (
              <div className={createStyles.searchingBody}>
                <div className={createStyles.searchingInner}>
                  <div className={createStyles.progressBar}>
                    <div className={createStyles.progressFill} style={{ width: `${searchProgress}%` }} />
                  </div>
                  <p className={createStyles.searchingLabel}>Searching for Matches...</p>
                  <p className={createStyles.searchingWarning}>Leaving this page will cancel this report request</p>
                </div>
              </div>
            )}

            <div className={createStyles.formBody} style={searching ? { display: 'none' } : {}}>
              <div className={createStyles.fieldGroup}>
                <label className={createStyles.fieldLabel}>
                  Choose Report Subject <span className={createStyles.required}>*</span>
                </label>
                <div className={createStyles.segmentedGroup}>
                  <button
                    className={`${createStyles.segBtn} ${subjectType === 'entity' ? createStyles.segBtnActive : ''}`}
                    onClick={() => handleSubjectTypeChange('entity')}
                    type="button"
                  >
                    <span className="material-icons-outlined" style={{ fontSize: 18 }}>domain</span>
                    Entity
                  </button>
                  <button
                    className={`${createStyles.segBtn} ${subjectType === 'person' ? createStyles.segBtnActive : ''}`}
                    onClick={() => handleSubjectTypeChange('person')}
                    type="button"
                  >
                    <span className="material-icons-outlined" style={{ fontSize: 18 }}>person</span>
                    Person
                  </button>
                </div>
              </div>

              {loading && (
                <p className={createStyles.loadingSuggestions}>Loading suggestions...</p>
              )}

              {showSuggestions && !loading && (
                <div className={createStyles.suggestionsSection}>
                  <p className={createStyles.suggestionsHeader}>
                    <strong>Suggestions:</strong> Select from your existing list of entities and persons, or type the report subject into the text field.
                  </p>
                  <div className={createStyles.suggestionCards}>
                    {suggestions.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        className={`${createStyles.suggestionCard} ${selectedId === s.id ? createStyles.suggestionCardSelected : s.dimmed ? createStyles.suggestionCardDimmed : ''}`}
                        onClick={() => handleSelectSuggestion(s)}
                      >
                        <div className={createStyles.suggestionCardHead}>
                          <span className={createStyles.suggestionName}>{s.name}</span>
                          <span className={createStyles.suggestionRelation}>Relation: {s.relation}</span>
                        </div>
                        <div className={createStyles.suggestionDetails}>
                          {s.country && (
                            <div className={createStyles.suggestionRow}>
                              <span className="material-icons-outlined" style={{ fontSize: 20, color: 'var(--text-light)' }}>public</span>
                              <span className={createStyles.suggestionRowText}>{s.country}</span>
                            </div>
                          )}
                          {s.idLabel && (() => {
                            const colonIdx = s.idLabel.indexOf(':');
                            const label = colonIdx !== -1 ? s.idLabel.slice(0, colonIdx + 1) : s.idLabel;
                            const value = colonIdx !== -1 ? s.idLabel.slice(colonIdx + 1) : '';
                            return (
                              <div className={createStyles.suggestionRow}>
                                <span className="material-icons-outlined" style={{ fontSize: 20, color: 'var(--text-light)' }}>badge</span>
                                <span className={createStyles.suggestionRowText}>
                                  <strong>{label}</strong>{value}
                                </span>
                              </div>
                            );
                          })()}
                          {s.website && (
                            <div className={createStyles.suggestionRow}>
                              <span className="material-icons-outlined" style={{ fontSize: 20, color: 'var(--text-light)' }}>language</span>
                              <span className={createStyles.suggestionRowLink}>{s.website}</span>
                            </div>
                          )}
                          {s.address && (
                            <div className={createStyles.suggestionRow}>
                              <span className="material-icons-outlined" style={{ fontSize: 20, color: 'var(--text-light)' }}>pin_drop</span>
                              <span className={createStyles.suggestionRowText}>{s.address}</span>
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className={createStyles.fieldGroup}>
                <div className={createStyles.inputGroup}>
                  {hasSelection ? (
                    <div className={createStyles.chipInput}>
                      {chips.map(chip => (
                        <Chip
                          key={chip.key}
                          label={chip.label}
                          selected={false}
                          showClose
                          onClose={() => removeChip(chip.key)}
                        />
                      ))}
                    </div>
                  ) : (
                    <input
                      className={createStyles.subjectInput}
                      type="text"
                      placeholder="Select a report subject"
                      value={subject}
                      onChange={handleSubjectChange}
                    />
                  )}
                  <span className={createStyles.seeExamples}>See Examples</span>
                </div>
              </div>

              <button
                className={`${styles.btn} ${styles.btnFilled} ${createStyles.continueBtn} ${loading ? createStyles.continueBtnLoading : ''}`}
                disabled={!canContinue || loading}
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          </section>
        </main>
      </div>
    </PageLayout>
  );
}
