export default function Radio({ checked, disabled, onChange, ...rest }) {
  function handleChange(e) {
    if (disabled) return;
    onChange && onChange(e);
  }

  let circleClass = 'radio-circle';
  if (disabled) {
    circleClass += checked ? ' radio-circle-disabled-checked' : ' radio-circle-disabled-empty';
  } else if (checked) {
    circleClass += ' radio-circle-checked';
  } else {
    circleClass += ' radio-circle-empty';
  }

  return (
    <label className={`radio${disabled ? ' radio-disabled' : ''}`}>
      <input
        type="radio"
        className="radio-input"
        checked={checked || false}
        disabled={disabled}
        onChange={handleChange}
        {...rest}
      />
      <span className={circleClass}>
        {checked && <span className="radio-dot" />}
      </span>
    </label>
  );
}
