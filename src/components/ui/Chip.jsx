export default function Chip({
  label,
  selected = false,
  count = null,
  showClose = false,
  onClick,
  onClose,
  disabled = false,
}) {
  const hasTrailing = selected
    ? (count != null && count > 0)
    : showClose;

  return (
    <button
      type="button"
      className={`chip ${selected ? 'chip-selected' : ''} ${disabled ? 'chip-disabled' : ''}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      <span>{label}</span>

      {count != null && (
        <span className="chip-count">{count}</span>
      )}

      {!selected && showClose && count == null && (
        <span
          className={`material-icons-outlined chip-close-icon`}
          onClick={e => {
            e.stopPropagation();
            onClose?.();
          }}
        >
          close
        </span>
      )}
    </button>
  );
}
