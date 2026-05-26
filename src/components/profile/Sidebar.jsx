import { Link, useLocation } from 'react-router-dom';
import { patchInitechProfile } from '../../utils/initechFlow';
import { PARTNER_ICONS } from './profileAssets';
import styles from './profile.module.css';

const DOT_LABELS = {
  green:   'Complete',
  amber:   'Required — In Progress',
  red:     'Required — Not Started',
  grey:    'Not Required',
  blocked: 'Blocked by another activity',
};

function PartnerIcon({ partner, tooltip }) {
  const img = PARTNER_ICONS[partner];
  if (!img) return null;
  const icon = (
    <span className={styles.navPartnerIcon}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="7.5" fill="white" stroke="#B1BCC5" />
      </svg>
      <img src={img} alt="" />
    </span>
  );
  if (tooltip) {
    return (
      <span className={styles.navPartnerIconWrap}>
        {icon}
        <span className={styles.navTooltip}>{tooltip}</span>
      </span>
    );
  }
  return icon;
}

function reorderSteps(original) {
  const screeningIdx = original.findIndex(s => s.label === 'Screening & Monitoring');
  const riskIdx = original.findIndex(s => s.label === 'Risk Assessment');
  if (screeningIdx < 0 || riskIdx < 0 || screeningIdx === riskIdx + 1) return original;
  const screening = original[screeningIdx];
  const without = original.filter((_, i) => i !== screeningIdx);
  const insertAt = without.findIndex(s => s.label === 'Risk Assessment') + 1;
  return [...without.slice(0, insertAt), screening, ...without.slice(insertAt)];
}

function effectiveDotFor(step, profileLoading) {
  if (!profileLoading) return step.dot;
  if (step.label === 'Approval') return 'red';
  if (step.label === 'Risk Mitigation') return 'green';
  if (step.label === 'Due Diligence') return 'black';
  if (step.partner === 'ubo') return 'grey';
  return step.dot;
}

export default function Sidebar({ profile: profileProp, profileLoading = false }) {
  const profile = patchInitechProfile(profileProp);
  const location = useLocation();
  const currentPath = location.pathname;

  const summaryPath = `/profile/${profile.id}`;
  const summaryActive = currentPath === summaryPath;

  const steps = reorderSteps(profile.sidebarSteps || []);
  const stepDots = steps.map(s => effectiveDotFor(s, profileLoading));
  const nextIdx = stepDots.findIndex(d => d === 'red' || d === 'amber' || d === 'black');

  return (
    <aside className={styles.sideNav}>
      {summaryActive ? (
        <div className={styles.navItemActive}>Summary Page</div>
      ) : (
        <Link to={summaryPath} className={styles.navItem} style={{ textDecoration: 'none' }}>
          Summary Page
        </Link>
      )}

      <div className={styles.navDivider} />

      {steps.map((step, i) => {
        const effectiveDot = stepDots[i];
        const dotCls = effectiveDot === 'red'     ? styles.dotRed
          : effectiveDot === 'green'   ? styles.dotGreen
          : effectiveDot === 'amber'   ? styles.dotAmber
          : effectiveDot === 'blocked' ? styles.dotBlocked
          : effectiveDot === 'black'   ? styles.dotBlack
          : styles.dotGrey;

        const dotEl = (
          <span className={styles.dotWrap}>
            <span className={`${styles.dot} ${dotCls}`} />
            <span className={styles.dotTooltip}>{DOT_LABELS[effectiveDot] ?? DOT_LABELS.grey}</span>
          </span>
        );

        const stepPath = step.path ? `/profile/${profile.id}/${step.path}` : null;
        const stepActive = stepPath && currentPath === stepPath;
        const isNext = i === nextIdx;
        const isLast = i === steps.length - 1;
        const connectorDone = effectiveDot === 'green';

        const nextChip = isNext ? <span className={styles.navNextChip}>Next</span> : null;
        const inner = step.tooltip || step.newTag || isNext ? (
          <div className={styles.navItemWrap}>
            {dotEl}
            {step.label}
            {step.partner && <PartnerIcon partner={step.partner} tooltip={step.tooltip} />}
            {step.newTag && <span className={styles.navNewTag}>New</span>}
            {nextChip}
          </div>
        ) : (
          <>
            {dotEl}
            {step.label}
            {step.partner && <PartnerIcon partner={step.partner} />}
          </>
        );

        const itemClass = [
          stepActive ? styles.navItemActive : styles.navItem,
          isNext && styles.navItemNext,
        ].filter(Boolean).join(' ');

        const itemNode = stepPath && !stepActive ? (
          <Link to={stepPath} className={itemClass} style={{ textDecoration: 'none' }}>
            {inner}
          </Link>
        ) : (
          <div className={itemClass}>
            {inner}
          </div>
        );

        return (
          <div key={i} className={styles.navStepRow}>
            {itemNode}
            {!isLast && (
              <span
                className={`${styles.navConnector} ${connectorDone ? styles.navConnectorDone : ''}`}
              />
            )}
          </div>
        );
      })}

      <div className={styles.navDivider} />

      {profile.sidebarSections.map((sec, i) => {
        if (sec.path) {
          const fullPath = `/profile/${profile.id}/${sec.path}`;
          const active = currentPath === fullPath;
          const secInner = (
            <>
              {sec.label}
              {sec.partner && <PartnerIcon partner={sec.partner} tooltip={sec.tooltip} />}
            </>
          );
          if (active) {
            return <div key={i} className={styles.navSectionLabelActive}>{secInner}</div>;
          }
          return (
            <Link key={i} to={fullPath} className={styles.navSectionLabel} style={{ textDecoration: 'none' }}>
              {secInner}
            </Link>
          );
        }
        return (
          <div key={i} className={styles.navSectionLabel}>
            {sec.label}
            {sec.partner && <PartnerIcon partner={sec.partner} tooltip={sec.tooltip} />}
          </div>
        );
      })}

      <div className={styles.navDivider} />
    </aside>
  );
}

export { PartnerIcon };
