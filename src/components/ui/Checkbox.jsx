export default function Checkbox({ checked, indeterminate, disabled, error, size = 'default', onChange, ...rest }) {
  const small = size === 'small';

  let boxClass = 'checkbox-box';
  if (small) boxClass += ' checkbox-box-sm';

  if (disabled) {
    // disabled wins over error — spec: disabled+error shows neutral fill, not red
    boxClass += checked || indeterminate ? ' checkbox-box-disabled-checked' : ' checkbox-box-disabled-empty';
  } else if (error) {
    boxClass += checked || indeterminate ? ' checkbox-box-error' : ' checkbox-box-error-empty';
  } else if (checked || indeterminate) {
    boxClass += ' checkbox-box-checked';
  } else {
    boxClass += ' checkbox-box-empty';
  }

  function handleChange(e) {
    if (disabled) return;
    onChange && onChange(e);
  }

  return (
    <label className={`checkbox${disabled ? ' checkbox-disabled' : ''}`}>
      <input
        type="checkbox"
        className="checkbox-input"
        checked={checked || false}
        disabled={disabled}
        onChange={handleChange}
        ref={el => { if (el) el.indeterminate = !!indeterminate; }}
        {...rest}
      />
      <span className={boxClass}>
        {(checked && !indeterminate) && (
          <svg className={`checkbox-icon${small ? ' checkbox-icon-sm' : ''}`} viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4L3.8 7L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        {indeterminate && (
          <svg className={`checkbox-icon${small ? ' checkbox-icon-sm' : ''}`} viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
      </span>
    </label>
  );
}
