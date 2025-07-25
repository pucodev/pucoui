/**
 * @typedef {object} InputProps
 * @property {string} [props.className] - Additional CSS classes.
 * @property {string} props.type - Input type (e.g., "text", "email", "password").
 * @property {string} [props.placeholder] - Placeholder text.
 */

/**
 * Input field component.
 * @param {React.InputHTMLAttributes<HTMLInputElement> & InputProps} props
 * @returns {import("react").JSX.Element}
 */
export function Input({ className, type, placeholder, ...props }) {
  return (
    <input
      className={`input ${className || ''}`}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  )
}

/**
 * Default export of form field components.
 */
export default {
  Input,
}
