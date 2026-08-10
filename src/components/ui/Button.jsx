export default function Button({ variant = 'outline', size = 'md', children, icon, ...props }) {
  const variantClass = {
    filled:  'btn btn-primary',
    outline: 'btn btn-outline-secondary',
    danger:  'btn btn-outline-danger',
    text:    'btn btn-link',
    soft:    'btn btn-soft',
    ghost:   'btn btn-link',
  }[variant] ?? 'btn btn-outline-secondary';

  const sizeClass = {
    sm: 'btn-sm',
    lg: 'btn-lg',
    row40: 'btn-40',
    md: '',
  }[size] ?? '';

  const iconSize = size === 'sm' ? 14 : 16;

  return (
    <button className={`${variantClass} ${sizeClass}`.trim()} {...props}>
      {children}
      {icon && <span className="material-icons-outlined" style={{ fontSize: iconSize, verticalAlign: 'middle', marginLeft: children ? 6 : 0 }}>{icon}</span>}
    </button>
  );
}
