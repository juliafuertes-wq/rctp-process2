import { useState } from 'react';
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

              <div className={createStyles.fieldGroup}>
                <input
                  className={createStyles.subjectInput}
                  type="text"
                  placeholder="Select a report subject"
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                />
                <span className={createStyles.seeExamples}>See Examples</span>
              </div>

              <button
                className={`${styles.btn} ${styles.btnFilled} ${createStyles.continueBtn}`}
                disabled={!subject.trim()}
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
