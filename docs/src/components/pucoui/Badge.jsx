/**
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content of the badge
 * @param {boolean} [props.outlined] - Whether the badge is outlined
 * @param {boolean} [props.tonal] - Whether the badge has a tonal style
 * @param {import("../variables").Color} [props.color] - Color of the badge
 * @param {boolean} [props.circle] - Whether the badge is circular
 * @param {'md' | 'lg'} [props.size] - Size of the badge
 * @returns
 */
export function Badge({
  children,
  outlined,
  tonal,
  color,
  circle,
  size,
  ...props
}) {
  return (
    <span
      className={`badge ${color ? `is-${color}` : ''} ${outlined ? 'is-outlined' : ''} ${circle ? 'is-circle' : ''} ${size ? `is-${size}` : ''} ${tonal ? 'is-tonal' : ''}`}
    >
      {children}
    </span>
  )
}

export function BadgeIcon({ icon, ...props }) {
  return <iconify-icon className="icon" icon={icon} {...props}></iconify-icon>
}

export default {
  Badge,
  BadgeIcon,
}
