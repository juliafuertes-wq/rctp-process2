import { useState, useRef, useEffect } from 'react';

export default function Combobox({
  value,
  onChange,
  options = [],
  placeholder = 'Choose…',
  label,
  hasError = false,
  disabled = false,
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const ref = useRef();

  useEffect(() => {
    if (!open) return;
    function handle(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setQuery('');
      }
    }
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [open]);

  const getVal = opt => typeof opt === 'string' ? opt : opt.value;
  const getLbl = opt => typeof opt === 'string' ? opt : opt.label;

  const filtered = query
    ? options.filter(o => getLbl(o).toLowerCase().includes(query.toLowerCase()))
    : options;

  const displayValue = open ? query : (value ? getLbl(options.find(o => getVal(o) === value) ?? value) : '');

  let triggerClass = 'cb-trigger';
  if (hasError) triggerClass += ' cb-trigger-error';
  if (disabled) triggerClass += ' cb-trigger-disabled';
  if (open) triggerClass += ' cb-trigger-open';

  return (
    <div className="cb-wrap">
      {label && <label className="cb-label">{label}</label>}
      <div className={triggerClass} ref={ref}>
        <input
          className="cb-input"
          value={displayValue}
          placeholder={placeholder}
          disabled={disabled}
          onChange={e => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => { if (!disabled) { setOpen(true); setQuery(''); } }}
        />
        <span
          className={`material-icons-outlined cb-caret${open ? ' cb-caret-open' : ''}`}
          onClick={() => { if (!disabled) setOpen(v => !v); }}
        >
          expand_more
        </span>
        {open && filtered.length > 0 && (
          <div className="cb-dropdown">
            {filtered.map(opt => {
              const v = getVal(opt);
              const l = getLbl(opt);
              return (
                <div
                  key={v}
                  className={`cb-item${value === v ? ' cb-item-selected' : ''}`}
                  onMouseDown={e => { e.preventDefault(); onChange(v); setOpen(false); setQuery(''); }}
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
