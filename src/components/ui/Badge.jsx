const STYLE_MAP = {
  'action-required': 'badge-action-required',
  'no-action':       'badge-no-action',
  'incomplete':      'badge-incomplete',
  'not-initiated':   'badge-not-initiated',
  'completed':       'badge-completed',
  'confirmed':       'badge-confirmed',
  'cleared':         'badge-cleared',
};

export default function Badge({ label = '12', style = 'action-required', size = 'large', shape = 'round', bgColor, textColor }) {
  const styleClass = bgColor ? '' : (STYLE_MAP[style] || 'badge-action-required');

  const sizeClass = size === 'small' ? 'badge-dot'
    : size === 'medium' ? 'badge-dot-md'
    : shape === 'square' ? 'badge-lg badge-square'
    : 'badge-lg badge-round';

  const inlineStyle = bgColor ? { background: bgColor, color: textColor || '#fff' } : undefined;

  return (
    <span className={`badge ${styleClass} ${sizeClass}`} style={inlineStyle}>
      {size === 'large' && label}
    </span>
  );
}
