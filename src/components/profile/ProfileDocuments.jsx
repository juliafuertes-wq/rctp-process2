import { useParams } from 'react-router-dom';
import PageLayout from '../layout/PageLayout';
import Breadcrumb from '../layout/Breadcrumb';
import { profiles } from '../../data/profiles';
import { Sidebar } from './ProfilePage';
import ProfilePageHeader from './ProfilePageHeader';
import styles from './profile.module.scss';

export default function ProfileDocuments() {
  const { profileId } = useParams();
  const profile = profiles[profileId];

  if (!profile) return <div style={{ padding: 40, textAlign: 'center' }}>Profile not found</div>;

  const docs = profile.documents || [];
  const totalDocs = docs.length;
  const totalPages = Math.max(1, Math.ceil(totalDocs / 20));

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
          <section className={styles.documentsCard}>
            <div className={`${styles.cardHeader} ${styles.documentsCardHeader}`}>
              <h2 className={styles.cardTitle}>Documents</h2>
            </div>

            <div className={styles.tableWrap}>
              <table className={styles.table} style={{ minWidth: 0 }}>
                <thead>
                  <tr>
                    <th>Name <span className="material-icons-outlined" style={{ fontSize: 12 }}>arrow_drop_down</span></th>
                    <th>Type <span className="material-icons-outlined" style={{ fontSize: 12 }}>arrow_drop_down</span></th>
                    <th>Size <span className="material-icons-outlined" style={{ fontSize: 12 }}>arrow_drop_down</span></th>
                    <th>Section <span className="material-icons-outlined" style={{ fontSize: 12 }}>arrow_drop_down</span></th>
                    <th>Date <span className="material-icons-outlined" style={{ fontSize: 12 }}>arrow_drop_down</span></th>
                    <th>Owner <span className="material-icons-outlined" style={{ fontSize: 12 }}>arrow_drop_down</span></th>
                  </tr>
                </thead>
                <tbody>
                  {docs.map((doc, i) => (
                    <tr key={i}>
                      <td><span className={styles.cellLink}>{doc.name}</span></td>
                      <td>{doc.type}</td>
                      <td>{doc.size}</td>
                      <td>{doc.section}</td>
                      <td>{doc.date}</td>
                      <td>{doc.owner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="d-flex align-items-center justify-content-end flex-wrap" style={{ gap: 12, paddingTop: 12 }}>
              <div className="d-flex align-items-center" style={{ gap: 8 }}>
                <select className="form-control form-control-sm" style={{ width: 'auto' }}>
                  <option>20</option><option>50</option><option>100</option>
                </select>
                <span className="text-muted small">Showing results 1 – {Math.min(20, totalDocs)} of {totalDocs}</span>
              </div>
              <ul className="pagination pagination-sm mb-0">
                <li className="page-item disabled"><button className="page-link" disabled><span className="material-icons-outlined" style={{ fontSize: 16 }}>first_page</span></button></li>
                <li className="page-item disabled"><button className="page-link" disabled><span className="material-icons-outlined" style={{ fontSize: 16 }}>chevron_left</span></button></li>
                <li className="page-item disabled"><span className="page-link">Page</span></li>
                <li className="page-item"><input type="number" defaultValue={1} min={1} max={totalPages} className="page-link form-control form-control-sm" style={{ width: 48, textAlign: 'center' }} /></li>
                <li className="page-item disabled"><span className="page-link">of {totalPages}</span></li>
                <li className={`page-item${totalPages <= 1 ? ' disabled' : ''}`}><button className="page-link" disabled={totalPages <= 1}><span className="material-icons-outlined" style={{ fontSize: 16 }}>chevron_right</span></button></li>
                <li className={`page-item${totalPages <= 1 ? ' disabled' : ''}`}><button className="page-link" disabled={totalPages <= 1}><span className="material-icons-outlined" style={{ fontSize: 16 }}>last_page</span></button></li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </PageLayout>
  );
}
