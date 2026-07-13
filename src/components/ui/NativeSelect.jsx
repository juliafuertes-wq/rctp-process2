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

  let triggerClass = 'ns-trigger';
  if (error) triggerClass += ' ns-trigger-error';
  if (disabled) triggerClass += ' ns-trigger-disabled';
  if (open) triggerClass += ' ns-trigger-open';

  return (
    <div className="ns-wrap" {...rest}>
      {label && <label className="ns-label">{label}</label>}
      <div
        ref={ref}
        className={triggerClass}
        onClick={() => { if (!disabled) setOpen(v => !v); }}
      >
        <span className={`ns-display${!displayValue ? ' ns-display-placeholder' : ''}`}>
          {displayValue || placeholder || ''}
        </span>
        <span className={`material-icons-outlined ns-caret${open ? ' ns-caret-open' : ''}`}>
          expand_more
        </span>
        {open && (
          <div className="ns-dropdown">
            {options.map(opt => {
              const v = getVal(opt);
              const l = getLbl(opt);
              return (
                <div
                  key={v}
                  className={`ns-item${value === v ? ' ns-item-selected' : ''}`}
                  onMouseDown={e => { e.preventDefault(); onChange(v); setOpen(false); }}
                >
                  {value === v && <span className="material-icons-outlined" style={{ fontSize: 14, marginRight: 4 }}>check</span>}
                  {l}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
