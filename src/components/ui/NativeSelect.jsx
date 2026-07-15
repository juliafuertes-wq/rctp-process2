import { useState, useRef, useEffect } from 'react';

export default function NativeSelect({
  label,
  value,
  onChange,
  options = [],
  placeholder,
  error = false,
  disabled = false,
  ...rest
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (!open) return;
    function handle(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [open]);

  const getVal = opt => typeof opt === 'string' ? opt : opt.value;
  const getLbl = opt => typeof opt === 'string' ? opt : opt.label;

  const selected = options.find(o => getVal(o) === value);
  const displayValue = selected ? getLbl(selected) : '';

  return (
    <div className="form-group mb-0" {...rest}>
      {label && <label className="form-label">{label}</label>}
      <div ref={ref} style={{ position: 'relative' }}>
        <div
          className={`form-control d-flex align-items-center justify-content-between${error ? ' is-invalid' : ''}`}
          style={{ cursor: disabled ? 'not-allowed' : 'pointer', userSelect: 'none', background: disabled ? '#f4f4f4' : undefined }}
          onClick={() => { if (!disabled) setOpen(v => !v); }}
        >
          <span style={{ color: displayValue ? undefined : '#adb5bd' }}>
            {displayValue || placeholder || ''}
          </span>
          <span className="material-icons-outlined" style={{ fontSize: 18, color: '#adb5bd', transition: 'transform 0.15s', transform: open ? 'rotate(180deg)' : 'none' }}>
            expand_more
          </span>
        </div>
        {open && (
          <div className="dropdown-menu show w-100" style={{ position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 200 }}>
            {options.map(opt => {
              const v = getVal(opt);
              const l = getLbl(opt);
              return (
                <button
                  key={v}
                  className={`dropdown-item${value === v ? ' active' : ''}`}
                  onMouseDown={e => { e.preventDefault(); onChange(v); setOpen(false); }}
                >
                  {value === v && <span className="material-icons-outlined" style={{ fontSize: 14, marginRight: 4 }}>check</span>}
                  {l}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
