/**
 * @typedef {object} RadioFieldProps
 * @property {string} [props.className] - Additional CSS classes.
 * @property {React.ReactNode} props.children - Child elements.
 */

/**
 * Radio field component.
 * @param {React.HTMLAttributes<HTMLDivElement> & RadioFieldProps} props
 * @returns {import("react").JSX.Element}
 */
export function RadioField({ children, className, ...props }) {
  return (
    <div className={`field radio ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

/**
 * @typedef {object} RadioProps
 */

/**
 * Radio input field component.
 * @param {React.InputHTMLAttributes<HTMLInputElement> & RadioProps} props
 * @returns {import("react").JSX.Element}
 */
export function Radio({ ...props }) {
  return <input type="radio" {...props} />
}

/**
 * @typedef {object} RadioLabelProps
 * @property {React.ReactNode} props.children - Child elements.
 */

/**
 * Radio label component.
 * @param {React.LabelHTMLAttributes<HTMLLabelElement> & RadioLabelProps} props
 * @returns {import("react").JSX.Element}
 */
export function RadioLabel({ children, ...props }) {
  return <label {...props}>{children}</label>
}

/**
 * Default export of form field components.
 */
export default {
  Radio,
  RadioField,
  RadioLabel,
}
