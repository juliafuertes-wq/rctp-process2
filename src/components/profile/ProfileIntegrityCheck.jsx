import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useRef } from 'react';
import PageLayout from '../layout/PageLayout';
import Breadcrumb from '../layout/Breadcrumb';
import { profiles } from '../../data/profiles';
import { setWaystarFlow } from '../../utils/initechFlow';
import { Sidebar } from './ProfilePage';
import ProfilePageHeader from './ProfilePageHeader';
import { getICRows, deleteICRow, updateICRowStatus } from '../../utils/icStore';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import styles from './profile.module.css';
import secStyles from './ProfileProcessSection.module.css';
import icStyles from './ProfileIntegrityCheck.module.css';

export default function ProfileIntegrityCheck() {
  const { profileId } = useParams();
  const profile = profiles[profileId];
  if (!profile) return null;

  const navigate = useNavigate();
  useLocation(); // re-render on navigation back
  const [, forceUpdate] = useState(0);
  const [confirmIndex, setConfirmIndex] = useState(null);
  const [showDeletedBanner, setShowDeletedBanner] = useState(false);
  const [showInProgressBanner, setShowInProgressBanner] = useState(false);
  const bannerTimerRef = useRef(null);
  const inProgressTimerRef = useRef(null);
  const isWaystar = profileId === 'waystar' || profileId === 'lospollos';
  const rows = getICRows(profileId);

  function handleDelete(id) {
    deleteICRow(profileId, id);
    setConfirmIndex(null);
    setShowDeletedBanner(true);
    clearTimeout(bannerTimerRef.current);
    bannerTimerRef.current = setTimeout(() => setShowDeletedBanner(false), 3000);
    forceUpdate(n => n + 1);
  }

  function handleViewClick(id) {
    updateICRowStatus(profileId, id, 'inprogress');
    setShowInProgressBanner(true);
    clearTimeout(inProgressTimerRef.current);
    inProgressTimerRef.current = setTimeout(() => setShowInProgressBanner(false), 3000);
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

      {showDeletedBanner && (
        <div className={`${styles.connAlert} ${styles.connAlert_success}`}>
          <span className={`material-icons-outlined ${styles.connAlertIcon}`}>check_circle</span>
          <span className={styles.connAlertText}>Integrity Check Report successfully deleted</span>
        </div>
      )}
      {showInProgressBanner && (
        <div className={`${styles.connAlert} ${styles.connAlert_success}`}>
          <span className={`material-icons-outlined ${styles.connAlertIcon}`}>check_circle</span>
          <span className={styles.connAlertText}>Renewed Integrity Check Report is being generated</span>
        </div>
      )}

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
              <Button variant="filled" onClick={handleCreateReport}>
                Create New Report
              </Button>
            </div>

            <div className={secStyles.tableWrap}>
              {rows.length === 0 ? (
                <div className={secStyles.emptyState}>
                  <span className="material-icons-outlined">info</span>
                  No integrity check reports yet.
                </div>
              ) : (
                <table className={`${styles.table} ${icStyles.icTable}`} style={{ minWidth: 0, tableLayout: 'fixed', width: '100%' }}>
                  <thead>
                    <tr>
                      <th style={{ width: '26.98%' }}>Subject</th>
                      <th style={{ width: '19.05%' }}>Requestor</th>
                      <th style={{ width: '11.9%' }}>Created Date</th>
                      <th style={{ width: '11.9%' }}>Renewal Date</th>
                      <th style={{ width: '18.25%' }}>Status</th>
                      <th style={{ width: '11.9%' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => (
                      <tr key={row._id} style={{ height: 32 }}>
                        <td style={{ padding: '0 8px' }}>{row.subject}</td>
                        <td style={{ padding: '0 8px' }}>{row.requestor}</td>
                        <td style={{ padding: '0 8px' }}>{row.createdDate || ''}</td>
                        <td style={{ padding: '0 8px' }}>{row.renewalDate || ''}</td>
                        <td style={{ padding: '0 8px' }}>
                          {row.status === 'inprogress' ? 'In Progress' : row.status === 'completed' ? 'Completed' : ''}
                        </td>
                        <td style={{ padding: 0, verticalAlign: 'middle' }}>
                          {(() => {
                            const completed = row.status === 'completed';
                            const inProgress = row.status === 'inprogress';
                            return (
                              <div className={secStyles.actionBtns} style={{ gap: 16, margin: '0 auto', width: 92 }}>
                                <Button
                                  variant="ghost" size="sm"
                                  icon="visibility"
                                  title="View"
                                  onClick={() => { if (completed) handleViewClick(row._id); }}
                                  style={{ width: 20, height: 20, padding: 0, color: inProgress ? 'var(--text-disabled)' : 'var(--primary-600)', cursor: completed ? 'pointer' : 'default' }}
                                />
                                <Button
                                  variant="ghost" size="sm" icon="content_copy" title="Copy"
                                  onClick={() => { if (completed) handleViewClick(row._id); }}
                                  style={{ width: 20, height: 20, padding: 0, color: inProgress ? 'var(--text-disabled)' : 'var(--primary-600)' }}
                                />
                                <Button
                                  variant="ghost" size="sm" icon="delete_outline" title="Delete"
                                  onClick={() => setConfirmIndex(row._id)}
                                  style={{ width: 20, height: 20, padding: 0, color: 'var(--primary-600)' }}
                                />
                              </div>
                            );
                          })()}
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
      <Modal
        open={confirmIndex !== null}
        title="Delete an Integrity Check report"
        onClose={() => setConfirmIndex(null)}
        onConfirm={() => handleDelete(confirmIndex)}
        confirmLabel="Continue"
        cancelLabel="Cancel"
      >
        <p style={{ margin: 0, fontSize: 16, fontWeight: 500, color: 'var(--text-light)', lineHeight: '24px', letterSpacing: '0.5px' }}>
          This will permanently delete the selected Integrity Check report
        </p>
        <p style={{ margin: '8px 0 0', fontStyle: 'italic', fontSize: 16, color: 'var(--text-light)', lineHeight: '24px', letterSpacing: '0.5px' }}>
          Do you want to continue?
        </p>
      </Modal>
    </PageLayout>
  );
}
