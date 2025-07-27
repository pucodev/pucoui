/**
 * @typedef {object} ButtonProps
 * @property {string} [props.className] - Additional CSS classes.
 * @property {React.ReactNode} props.children - Content of the button
 * @property {import("../variables").Color} [props.color] - Color of the button
 * @property {boolean} [props.outlined] - Whether the button is outlined
 * @property {boolean} [props.tonal] - Whether the button is tonal
 * @property {'sm' | 'md' | 'lg'} [props.size] - Size of the button
 * @property {boolean} [props.rounded] - Whether the button has rounded corners
 */

/**
 * Button component
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps} props
 * @returns {import("react").JSX.Element}
 */
export function Button({
  children,
  color,
  outlined,
  tonal,
  size,
  rounded,
  className,
  ...props
}) {
  return (
    <button
      className={`btn ${color ? `is-${color}` : ''} ${tonal ? 'is-tonal' : ''} ${outlined ? 'is-outlined' : ''} ${size ? `is-${size}` : ''} ${rounded ? 'is-rounded' : ''} ${className || ''}`}
    >
      {children}
    </button>
  )
}

export function ButtonIcon({ icon, ...props }) {
  return <iconify-icon className="icon" icon={icon} {...props}></iconify-icon>
}

export default {
  Button,
  ButtonIcon,
}
