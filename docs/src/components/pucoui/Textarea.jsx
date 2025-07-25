/**
 * @typedef {object} TextareaProps
 * @property {string} [props.className] - Additional CSS classes.
 * @property {string} [props.placeholder] - Placeholder text.
 */

/**
 * Input field component.
 * @param {React.TextareaHTMLAttributes<HTMLTextAreaElement> & TextareaProps} props
 * @returns {import("react").JSX.Element}
 */
export function Textarea({ className, placeholder, ...props }) {
  return (
    <textarea
      className={`textarea ${className || ''}`}
      placeholder={placeholder}
      {...props}
    ></textarea>
  )
}

export default {
  Textarea,
}
