import styles from './TextField.module.scss';

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
      <div className={styles.inputWrap}>
        <input
          className={`form-control${error ? ' is-invalid' : ''}`}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          style={icon ? { paddingRight: 32 } : undefined}
          {...rest}
        />
        {icon && (
          <span
            className={`material-icons-outlined ${styles.icon}`}
          >{icon}</span>
        )}
      </div>
      {error && errorText && <div className="invalid-feedback d-block">{errorText}</div>}
      {!error && helperText && <small className="form-text text-muted">{helperText}</small>}
    </div>
  );
}
