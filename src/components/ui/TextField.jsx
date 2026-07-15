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
  return (
    <div className="form-group mb-0">
      {label && <label className="form-label">{label}</label>}
      {icon ? (
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <span className="material-icons-outlined" style={{ fontSize: 16 }}>{icon}</span>
            </span>
          </div>
          <input
            className={`form-control${error ? ' is-invalid' : ''}`}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            {...rest}
          />
        </div>
      ) : (
        <input
          className={`form-control${error ? ' is-invalid' : ''}`}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          {...rest}
        />
      )}
      {error && errorText && <div className="invalid-feedback d-block">{errorText}</div>}
      {!error && helperText && <small className="form-text text-muted">{helperText}</small>}
    </div>
  );
}
