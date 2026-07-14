export default function Toggle({
  value = false,
  onChange,
  labelOn = 'Active',
  labelOff = 'Inactive',
  disabled = false,
}) {
  let cls = 'toggle';
  if (!value) cls += ' toggle-off';
  if (disabled) cls += ' toggle-disabled';

  return (
    <div
      className={cls}
      role="button"
      tabIndex={disabled ? -1 : 0}
      onClick={() => { if (!disabled) onChange?.(!value); }}
      onKeyDown={e => { if (!disabled && (e.key === 'Enter' || e.key === ' ')) onChange?.(!value); }}
      aria-pressed={value}
    >
      <div className="toggle-track">{value ? labelOn : labelOff}</div>
      <div className="toggle-thumb" />
    </div>
  );
}
