import { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageLayout from '../layout/PageLayout';
import Breadcrumb from '../layout/Breadcrumb';
import { profiles } from '../../data/profiles';
import ProfilePageHeader from './ProfilePageHeader';
import { Sidebar } from './ProfilePage';
import Chip from '../ui/Chip';
import Button from '../ui/Button';
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
  entity_lospollos: [
    {
      id: 'lp1',
      name: 'Los Pollos Hermanos LLC',
      relation: 'Subsidiary',
      country: 'United States',
      idLabel: 'DUNS Number: 362819047',
      website: 'https://www.lospollos.com/',
      address: '6200 Central Ave SW, Albuquerque, NM',
      people: ['Gustavo Fring', 'Lyle Headley', 'Michael Ehrmantraut'],
      dimmed: false,
    },
    {
      id: 'lp2',
      name: 'Madrigal Electromotive GmbH',
      relation: 'Joint Venture partner',
      country: 'Germany',
      idLabel: 'Company Identification No.: HRB 48291',
      website: null,
      address: 'Hanover, Germany',
      people: ['Peter Schuler', 'Lydia Rodarte-Quayle'],
      dimmed: false,
    },
    {
      id: 'lp3',
      name: 'Lavandería Brillante S.A.',
      relation: 'Other associated entity',
      country: 'Mexico',
      idLabel: null,
      website: null,
      address: 'Juárez, Chihuahua, Mexico',
      people: ['Saul Goodman', 'Kim Wexler'],
      dimmed: true,
    },
    {
      id: 'lp4',
      name: 'Pollos Logistics International',
      relation: 'Subsidiary',
      country: 'United States',
      idLabel: 'DUNS Number: 509183762',
      website: null,
      address: '821 N. Industrial Blvd, El Paso, TX',
      people: ['Don Eladio', 'Juan Bolsa', 'Hector Salamanca'],
      dimmed: false,
    },
  ],
  person_lospollos: [],
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
  const [carouselOffset, setCarouselOffset] = useState(0);
  const [chips, setChips] = useState([]);
  const [showExamples, setShowExamples] = useState(false);
  const [searching, setSearching] = useState(false);
  const [searchProgress, setSearchProgress] = useState(0);
  const [personNoMatch, setPersonNoMatch] = useState(false);
  const [personNoMatchText, setPersonNoMatchText] = useState('');
  const [expandedPeople, setExpandedPeople] = useState(null);
  const timerRef = useRef(null);
  const searchTimerRef = useRef(null);
  const progressTimerRef = useRef(null);

  function handleSubjectChange(e) {
    setSubject(e.target.value);
    setSelectedId(null);
    setChips([]);
    setPersonNoMatch(false);
  }

  function handleSubjectKeyDown(e) {
    if (e.key === 'Enter' && subject.trim().length > 0) {
      setChips(prev => [...prev, { key: `typed_${Date.now()}`, label: subject.trim() }]);
      setSubject('');
    }
  }

  function handleSubjectTypeChange(type) {
    setSubjectType(type);
    setSelectedId(null);
    setSubject('');
    setChips([]);
    setShowSuggestions(false);
    setCarouselOffset(0);
    setPersonNoMatch(false);
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
      const selected = (SUGGESTIONS[suggestionsKey] || []).find(s => s.id === selectedId);
      const isLosPollos = profileId === 'lospollos';
      const isPerson = subjectType === 'person';
      if (isLosPollos && isPerson) {
        const typedChips = chips.filter(c => c.key.startsWith('typed'));
        const text = selected ? selected.name : (typedChips.length > 0 ? typedChips.map(c => c.label).join(', ') : subject.trim());
        setPersonNoMatchText(text);
        setPersonNoMatch(true);
        setSearching(false);
        return;
      }
      const noExactMatch = isLosPollos;
      setTimeout(() => navigate(
        `/profile/${profileId}/integrity-check/results`,
        { state: { noExactMatch, entity: selected ? {
          name: selected.name,
          country: selected.country,
          website: selected.website,
          address: selected.address,
          matchScore: '100%',
          description: noExactMatch ? null : 'Gazprom PAO (Public Joint Stock Company Gazprom) is a Russian majority state-owned multinational energy corporation. It is the largest company in Russia by market capitalization as of 2022 and a global leader in natural gas exploration and production.',
          matchNote: noExactMatch ? null : `Exact match on ${selected.name} and location in ${selected.country}, aligning with the registered name and headquarters of ${selected.name}`,
        } : null }}
      ), 200);
    }, 3000);
  }

  const profileKey = subjectType ? `${subjectType}_${profileId}` : null;
  const suggestionsKey = profileKey && profileKey in SUGGESTIONS ? profileKey : subjectType;
  const suggestions = (suggestionsKey && SUGGESTIONS[suggestionsKey]) || [];
  const hasSelection = chips.length > 0;
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

            {personNoMatch && (
              <div className={createStyles.personNoMatchBanner}>
                <p className={createStyles.personNoMatchTitle}>We could not find any organisations using this description:</p>
                <p className={createStyles.personNoMatchSub}>{personNoMatchText}</p>
                <p className={createStyles.personNoMatchHint}><strong>Check the name you typed or add more context.</strong> You can view tips on best practices by clicking See Examples below.</p>
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
                  <div className={createStyles.suggestionsInner}>
                  {suggestions.length === 0 ? (
                    <p className={createStyles.noSuggestions}>
                      No suggestions found for this {subjectType === 'entity' ? 'Entity' : 'Person'}. Please type the report subject into the text field. You can view tips on best practices by clicking See examples below.
                    </p>
                  ) : (
                  <>
                  <p className={createStyles.suggestionsHeader}>
                    <strong>Suggestions:</strong> Select from your existing list of entities and persons, or type the report subject into the text field.
                  </p>
                  <div className={createStyles.carouselWrap}>
                    {carouselOffset > 0 && (
                      <div className={createStyles.carouselFadeLeft}>
                        <button type="button" className={createStyles.carouselArrow} onClick={() => setCarouselOffset(o => o - 1)}>
                          <span className="material-icons-outlined" style={{ fontSize: 20, color: 'var(--neutral-300)' }}>chevron_left</span>
                        </button>
                      </div>
                    )}
                  <div className={createStyles.suggestionCards}>
                    {suggestions.slice(carouselOffset, carouselOffset + 3).map((s) => (
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
                          {s.people && s.people.length > 0 && (() => {
                            const isExpanded = expandedPeople === s.id;
                            return (
                              <div className={createStyles.suggestionPeopleRow}>
                                <div className={createStyles.suggestionPeopleIcon}>
                                  <span className="material-icons-outlined" style={{ fontSize: 16, color: '#495158' }}>group</span>
                                </div>
                                {isExpanded ? (
                                  <>
                                    <span className={createStyles.suggestionPeopleExpanded}>
                                      {s.people.join(', ')}.
                                    </span>
                                    <span
                                      className={createStyles.suggestionViewMore}
                                      onClick={e => { e.stopPropagation(); setExpandedPeople(null); }}
                                    >view less</span>
                                  </>
                                ) : (
                                  <>
                                    <span className={createStyles.suggestionRowText}>
                                      {s.people.slice(0, 2).join(', ')}{s.people.length > 2 ? ', ' + s.people[2].split(' ')[0] + ' ' + s.people[2].split(' ').slice(-1)[0][0] + '...' : ''}
                                    </span>
                                    {s.people.length > 2 && (
                                      <span
                                        className={createStyles.suggestionViewMore}
                                        onClick={e => { e.stopPropagation(); setExpandedPeople(s.id); }}
                                      >view more</span>
                                    )}
                                  </>
                                )}
                              </div>
                            );
                          })()}
                        </div>
                      </button>
                    ))}
                  </div>
                    {carouselOffset + 3 < suggestions.length && (
                      <div className={createStyles.carouselFadeRight}>
                        <button type="button" className={createStyles.carouselArrow} onClick={() => setCarouselOffset(o => o + 1)}>
                          <span className="material-icons-outlined" style={{ fontSize: 20, color: 'var(--primary-500)' }}>chevron_right</span>
                        </button>
                      </div>
                    )}
                  </div>
                  </>
                  )}
                  </div>
                </div>
              )}

              <div className={createStyles.fieldGroup}>
                <div className={createStyles.inputGroup}>
                  <div className={createStyles.chipInput}>
                    {chips.map(chip => (
                      <Chip
                        key={chip.key}
                        label={chip.label}
                        selected={false}
                        showClose
                        size="sm"
                        bold={!!chip.bold}
                        onClose={() => removeChip(chip.key)}
                      />
                    ))}
                    <input
                      className={`${createStyles.chipTextInput} ${subjectType !== null ? createStyles.subjectInputActive : ''}`}
                      type="text"
                      placeholder={chips.length === 0 ? 'Select a report subject' : ''}
                      value={subject}
                      onChange={handleSubjectChange}
                      onKeyDown={handleSubjectKeyDown}
                      disabled={subjectType === null}
                    />
                  </div>
                  <span className={createStyles.seeExamples} onClick={() => setShowExamples(v => !v)}>
                    {showExamples ? 'Hide Examples' : 'See Examples'}
                  </span>
                  {showExamples && (
                    <div className={createStyles.examplesBox}>
                      <p className={createStyles.examplesInstruction}>
                        Start by typing in the organisation's full name and add any related context such as where they are based. You can also add other context such as sectors they operate in, incorporation date, related person, etc.
                      </p>
                      <div className={createStyles.examplesList}>
                        <div className={createStyles.examplesItem}>
                          <span className="material-icons-outlined" style={{ fontSize: 16, color: 'var(--text-light)' }}>factory</span>
                          <span className={createStyles.examplesItemText}>Acme holding LTD, company no. 28219-GB</span>
                        </div>
                        <div className={createStyles.examplesItem}>
                          <span className="material-icons-outlined" style={{ fontSize: 16, color: 'var(--text-light)' }}>factory</span>
                          <span className={createStyles.examplesItemText}>Dyson, engineering</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <Button
                variant="filled"
                size="lg"
                style={{ width: 151, opacity: loading ? 0.6 : undefined }}
                disabled={!canContinue || loading}
                onClick={handleContinue}
              >
                Continue
              </Button>
            </div>
          </section>
        </main>
      </div>
    </PageLayout>
  );
}
