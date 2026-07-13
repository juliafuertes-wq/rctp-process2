export default function TextField({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  error = false,
  errorText,
  helperText,
  icon,
  disabled = false,
  ...rest
}) {
  let wrapClass = 'tf-input-wrap';
  if (error) wrapClass += ' tf-input-wrap-error';
  if (disabled) wrapClass += ' tf-input-wrap-disabled';

  return (
    <div className="tf-wrap">
      {label && <label className="tf-label">{label}</label>}
      <div className={wrapClass}>
        {icon && <span className={`material-icons-outlined tf-icon`}>{icon}</span>}
        <input
          className="tf-input"
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          {...rest}
        />
      </div>
      {error && errorText && <span className="tf-error-text">{errorText}</span>}
      {!error && helperText && <span className="tf-helper-text">{helperText}</span>}
    </div>
  );
}
