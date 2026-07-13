import { RiskLevelIcon } from '../profile/profileAssets';

const config = {
  high:    { cls: 'badge-high',    label: 'High Risk' },
  medium:  { cls: 'badge-medium',  label: 'Medium Risk' },
  low:     { cls: 'badge-low',     label: 'Low Risk' },
  unknown: { cls: 'badge-unknown', label: 'Unknown' },
};

export default function RiskBadge({ level }) {
  const { cls, label } = config[level] || config.low;
  return (
    <span className={`badge ${cls}`}>
      {label}
      <RiskLevelIcon level={level || 'low'} size={16} />
    </span>
  );
}
