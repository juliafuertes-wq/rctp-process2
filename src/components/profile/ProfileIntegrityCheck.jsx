import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import PageLayout from '../layout/PageLayout';
import Breadcrumb from '../layout/Breadcrumb';
import { profiles } from '../../data/profiles';
import { setWaystarFlow } from '../../utils/initechFlow';
import { Sidebar } from './ProfilePage';
import ProfilePageHeader from './ProfilePageHeader';
import { getICRows, deleteICRow } from '../../utils/icStore';
import styles from './profile.module.css';
import secStyles from './ProfileProcessSection.module.css';

export default function ProfileIntegrityCheck() {
  const { profileId } = useParams();
  const profile = profiles[profileId];
  if (!profile) return null;

  const navigate = useNavigate();
  useLocation(); // re-render on navigation back
  const [, forceUpdate] = useState(0);
  const isWaystar = profileId === 'waystar';
  const rows = getICRows(profileId);

  function handleDelete(index) {
    deleteICRow(profileId, index);
    forceUpdate(n => n + 1);
  }

  function handleCreateReport() {
    if (isWaystar) {
      navigate(`/profile/${profileId}/integrity-check/create`);
    }
  }

  return (
    <PageLayout>
      <Breadcrumb items={[
        { label: 'Third Parties', to: '/third-parties' },
        { label: profile.name },
      ]} />

      <ProfilePageHeader profile={profile} />

      <div className={styles.pageBody}>
        <Sidebar profile={profile} />

        <main className={styles.mainContent}>
          <section className={secStyles.card}>
            <div className={secStyles.cardHeader} style={{ borderBottom: 'none', paddingBottom: 0 }}>
              <div className={secStyles.cardTitleRow}>
                <h2 className={styles.cardTitle}>Integrity Check</h2>
                <span className={secStyles.poweredBy}>
                  POWERED BY
                  <span className={secStyles.poweredByLogo}>xapien</span>
                </span>
              </div>
              <button className={`${styles.btn} ${styles.btnFilled}`} onClick={handleCreateReport}>
                Create New Report
              </button>
            </div>

            <div className={secStyles.tableWrap}>
              {rows.length === 0 ? (
                <div className={secStyles.emptyState}>
                  <span className="material-icons-outlined">info</span>
                  No integrity check reports yet.
                </div>
              ) : (
                <table className={styles.table} style={{ minWidth: 0, tableLayout: 'fixed', width: '100%' }}>
                  <thead>
                    <tr>
                      <th style={{ width: 272 }}>Subject</th>
                      <th style={{ width: 192 }}>Requestor</th>
                      <th style={{ width: 120 }}>Created Date</th>
                      <th style={{ width: 120 }}>Renewal Date</th>
                      <th>Status</th>
                      <th style={{ width: 120 }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, i) => (
                      <tr key={i} style={{ height: 32 }}>
                        <td style={{ padding: '0 8px', height: 32 }}>{row.subject}</td>
                        <td style={{ padding: '0 8px', height: 32 }}>{row.requestor}</td>
                        <td style={{ padding: '0 8px', height: 32 }}>{row.createdDate || ''}</td>
                        <td style={{ padding: '0 8px', height: 32 }}>{row.renewalDate || ''}</td>
                        <td style={{ padding: '0 8px', height: 32 }}>
                          {row.status && 'In Progress'}
                        </td>
                        <td style={{ padding: '0 8px', height: 32 }}>
                          <div className={secStyles.actionBtns}>
                            <button className={secStyles.iconBtn} title="View">
                              <span className="material-icons-outlined" style={{ fontSize: 18 }}>visibility</span>
                            </button>
                            <button className={secStyles.iconBtn} title="Copy">
                              <span className="material-icons-outlined" style={{ fontSize: 18 }}>content_copy</span>
                            </button>
                            <button className={secStyles.iconBtn} title="Delete" onClick={() => handleDelete(i)}>
                              <span className="material-icons-outlined" style={{ fontSize: 18 }}>delete_outline</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </section>
        </main>
      </div>
    </PageLayout>
  );
}
