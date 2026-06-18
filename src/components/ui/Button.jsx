import styles from './Button.module.css';

export default function Button({ variant = 'outline', size = 'md', children, icon, className, ...props }) {
  const sizeClass = size !== 'md' ? styles[size] : '';
  const cls = [styles.btn, styles[variant], sizeClass, className].filter(Boolean).join(' ');
  return (
    <button className={cls} {...props}>
      {children}
      {icon && <span className="material-icons-outlined" style={{ fontSize: size === 'sm' ? 14 : 16 }}>{icon}</span>}
    </button>
  );
}
