import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { patchInitechProfile } from '../../utils/initechFlow';
import { RiskLevelIcon } from './profileAssets';

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

  const level = profile.riskLevel?.level ?? 'low';
  const stripCls = `ph-strip ph-strip-${level}${scrolled ? ' ph-strip-scrolled' : ''}`;
  const riskCapCls = 'badge-' + level;

  return (
    <div className={stripCls}>
      <div className="ph-header">
        <Link to={`/profile/${profile.id}`} className="ph-back">
          <span className="material-icons-outlined">chevron_left</span> Back
        </Link>
        <div className="ph-title-row">
          <div className="ph-name-group">
            <h1>{profile.name}</h1>
            <span className="ph-verified">
              <span className="material-icons-outlined">verified</span>
              {profile.verifiedText}
            </span>
          </div>
          <div className="ph-badges">
            <div className="ph-badge-group">
              <div className="ph-badge-label">Current status:</div>
              <div className={`badge ${cls} badge-btn`}>
                {statusLabel}
                <span className="material-icons-outlined" style={{ fontSize: 16 }}>{icon}</span>
              </div>
            </div>
            <div className="ph-badge-group">
              <div className="ph-badge-label">Risk level:</div>
              <Link to={`/profile/${profile.id}/risk-report`} style={{ textDecoration: 'none' }}>
                <div className={`badge ${riskCapCls} badge-btn`}>
                  {profile.riskLevel?.label}
                  <RiskLevelIcon level={level} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
