/**
 * @typedef {object} FieldProps
 * @property {string} [props.className] - Additional CSS classes.
 * @property {React.ReactNode} props.children - Child elements.
 */

/**
 * Field wrapper component for form controls.
 * @param {React.HTMLAttributes<HTMLDivElement> & FieldProps} props
 * @returns {import("react").JSX.Element}
 */
export function Field({ className, children, ...props }) {
  return (
    <div className={`field ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

/**
 * @typedef {object} FieldLabelProps
 * @property {string} [props.className] - Additional CSS classes.
 * @property {React.ReactNode} props.children - Label text or elements.
 */

/**
 * Label component for form fields.
 *
 * @param {React.LabelHTMLAttributes<HTMLLabelElement> & FieldLabelProps} props
 * @returns {import("react").JSX.Element}
 */
export function FieldLabel({ className, children, ...props }) {
  return (
    <label className={`label ${className || ''}`} {...props}>
      {children}
    </label>
  )
}

/**
 * @typedef {object} FieldHelpTextProps
 * @property {string} [props.className] - Additional CSS classes.
 * @property {React.ReactNode} props.children - Help or hint text.
 */

/**
 * Help text component for form fields.
 * @param {React.HTMLAttributes<HTMLSpanElement> & FieldHelpTextProps} props
 * @returns {import("react").JSX.Element}
 */
export function FieldHelpText({ className, children, ...props }) {
  return (
    <span className={`help ${className || ''}`} {...props}>
      {children}
    </span>
  )
}

/**
 * Default export of form field components.
 */
export default {
  Field,
  FieldLabel,
  FieldHelpText,
}
