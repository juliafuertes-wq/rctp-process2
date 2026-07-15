import { useParams } from 'react-router-dom';
import PageLayout from '../layout/PageLayout';
import Breadcrumb from '../layout/Breadcrumb';
import { profiles } from '../../data/profiles';
import { Sidebar } from './ProfilePage';
import ProfilePageHeader from './ProfilePageHeader';
import styles from './profile.module.scss';

export default function ProfilePlaceholder({ title }) {
  const { profileId } = useParams();
  const profile = profiles[profileId];
  if (!profile) return null;

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
          <div className="bg-white text-muted" style={{ borderTop: '3px solid #028FBB', minHeight: 600, padding: '60px 0', textAlign: 'center' }}>
            <span className="material-icons-outlined" style={{ fontSize: 48, display: 'block', marginBottom: 12 }}>construction</span>
            <h2 className="text-body" style={{ fontSize: 20, fontWeight: 500 }}>{title}</h2>
            <p style={{ marginTop: 8, fontSize: 13 }}>This page is under construction.</p>
          </div>
        </main>
      </div>
    </PageLayout>
  );
}
