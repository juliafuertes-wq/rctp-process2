import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { patchInitechProfile } from '../../utils/initechFlow';
import { RiskLevelIcon } from './profileAssets';
import styles from './profile.module.css';

export const STATUS_CONFIG = {
  'Pending Approval':             { cls: 'badge-pending',      icon: 'pending' },
  'Approved':                     { cls: 'badge-approved',     icon: 'check_circle' },
  'Not Approved':                 { cls: 'badge-not-approved', icon: 'dangerous' },
  'Declined':                     { cls: 'badge-declined',     icon: 'feedback' },
  'Approved*':                    { cls: 'badge-expired',      icon: 'history_toggle_off' },
  'Approved - Renewal Required': { cls: 'badge-expired',      icon: 'history_toggle_off' },
};

export default function ProfilePageHeader({ profile: profileProp }) {
  const profile = patchInitechProfile(profileProp);
  const statusLabel = profile.currentStatus?.label ?? 'Pending Approval';
  const { cls, icon } = STATUS_CONFIG[statusLabel] ?? STATUS_CONFIG['Pending Approval'];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 10); }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const riskLevelCls = profile.riskLevel?.level === 'high'   ? ' ' + styles.tpTopStripHigh
    : profile.riskLevel?.level === 'medium' ? ' ' + styles.tpTopStripMedium
    : ' ' + styles.tpTopStripLow;

  const riskCapCls = 'badge-' + (profile.riskLevel?.level ?? 'low');

  return (
    <div
      className={`${styles.tpTopStrip}${riskLevelCls}${scrolled ? ' ' + styles.tpTopStripScrolled : ''}`}
    >
      <div className={styles.tpPageHeader}>
        <Link to={`/profile/${profile.id}`} className={styles.tpBack}>
          <span className="material-icons-outlined">chevron_left</span> Back
        </Link>
        <div className={styles.tpTitleRow}>
          <div className={styles.tpNameGroup}>
            <h1>{profile.name}</h1>
            <span className={styles.tpVerified}>
              <span className="material-icons-outlined">verified</span>
              {profile.verifiedText}
            </span>
          </div>
          <div className={styles.tpBadges}>
            <div className={styles.tpBadgeGroup}>
              <div className={styles.tpBadgeLabel}>Current status:</div>
              <div className={`badge ${cls} badge-btn`}>
                {statusLabel}
                <span className="material-icons-outlined" style={{ fontSize: 16 }}>{icon}</span>
              </div>
            </div>
            <div className={styles.tpBadgeGroup}>
              <div className={styles.tpBadgeLabel}>Risk level:</div>
              <Link to={`/profile/${profile.id}/risk-report`} style={{ textDecoration: 'none' }}>
                <div className={`badge ${riskCapCls} badge-btn`}>
                  {profile.riskLevel?.label}
                  <RiskLevelIcon level={profile.riskLevel?.level} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
