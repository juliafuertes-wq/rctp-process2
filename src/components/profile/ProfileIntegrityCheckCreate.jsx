import { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageLayout from '../layout/PageLayout';
import Breadcrumb from '../layout/Breadcrumb';
import { profiles } from '../../data/profiles';
import ProfilePageHeader from './ProfilePageHeader';
import { Sidebar } from './ProfilePage';
import styles from './profile.module.css';
import secStyles from './ProfileProcessSection.module.css';
import icLogo from '../../assets/integrity-check-logo.png';
import createStyles from './ProfileIntegrityCheckCreate.module.css';

export default function ProfileIntegrityCheckCreate() {
  const { profileId } = useParams();
  const navigate = useNavigate();
  const profile = profiles[profileId];
  if (!profile) return null;

  const [subjectType, setSubjectType] = useState('entity');
  const [subject, setSubject] = useState('');
  const [loading, setLoading] = useState(false);
  const timerRef = useRef(null);

  function handleSubjectChange(e) {
    const val = e.target.value;
    setSubject(val);
    clearTimeout(timerRef.current);
    if (val.trim()) {
      setLoading(true);
      timerRef.current = setTimeout(() => setLoading(false), 1200);
    } else {
      setLoading(false);
    }
  }

  function handleContinue() {
    // Placeholder — next screen will be provided via Figma
    navigate(`/profile/${profileId}/integrity-check`);
  }

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
            <div className={createStyles.cardTop}>
              <h2 className={styles.cardTitle}>Integrity Check Report</h2>
              <div className={secStyles.poweredBy}>
                POWERED BY
                <img src={icLogo} alt="Xapien" className={createStyles.poweredByImg} />
              </div>
            </div>

            <div className={createStyles.formBody}>
              <div className={createStyles.fieldGroup}>
                <label className={createStyles.fieldLabel}>
                  Choose Report Subject <span className={createStyles.required}>*</span>
                </label>
                <div className={createStyles.segmentedGroup}>
                  <button
                    className={`${createStyles.segBtn} ${subjectType === 'entity' ? createStyles.segBtnActive : ''}`}
                    onClick={() => setSubjectType('entity')}
                    type="button"
                  >
                    <span className="material-icons-outlined" style={{ fontSize: 18 }}>domain</span>
                    Entity
                  </button>
                  <button
                    className={`${createStyles.segBtn} ${subjectType === 'person' ? createStyles.segBtnActive : ''}`}
                    onClick={() => setSubjectType('person')}
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

              <div className={createStyles.fieldGroup}>
                <div className={createStyles.inputGroup}>
                  <input
                    className={createStyles.subjectInput}
                    type="text"
                    placeholder="Select a report subject"
                    value={subject}
                    onChange={handleSubjectChange}
                  />
                  <span className={createStyles.seeExamples}>See Examples</span>
                </div>
              </div>

              <button
                className={`${styles.btn} ${styles.btnFilled} ${createStyles.continueBtn} ${loading ? createStyles.continueBtnLoading : ''}`}
                disabled={!subject.trim() || loading}
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
