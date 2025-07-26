/**
 * @typedef {object} CheckboxFieldProps
 * @property {string} [props.className] - Additional CSS classes.
 * @property {React.ReactNode} props.children - Child elements.
 */

/**
 * Checkbox field component.
 * @param {React.HTMLAttributes<HTMLDivElement> & CheckboxFieldProps} props
 * @returns {import("react").JSX.Element}
 */
export function CheckboxField({ children, className, ...props }) {
  return (
    <div className={`field checkbox ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

/**
 * @typedef {object} CheckboxProps
 * @property {string} [props.className] - Additional CSS classes.
 */

/**
 * Checkbox input field component.
 * @param {React.InputHTMLAttributes<HTMLInputElement> & CheckboxProps} props
 * @returns {import("react").JSX.Element}
 */
export function Checkbox({ ...props }) {
  return <input type="checkbox" {...props} />
}

/**
 * @typedef {object} CheckboxLabelProps
 * @property {React.ReactNode} props.children - Child elements.
 */

/**
 * Checkbox label component.
 * @param {React.LabelHTMLAttributes<HTMLLabelElement> & CheckboxLabelProps} props
 * @returns {import("react").JSX.Element}
 */
export function CheckboxLabel({ children, ...props }) {
  return <label {...props}>{children}</label>
}

/**
 * Default export of form field components.
 */
export default {
  Checkbox,
  CheckboxField,
  CheckboxLabel,
}
