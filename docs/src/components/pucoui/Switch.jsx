/**
 * @typedef {object} SwitchFieldProps
 * @property {string} [props.className] - Additional CSS classes.
 * @property {React.ReactNode} props.children - Child elements.
 */

/**
 * Switch field component.
 * @param {React.HTMLAttributes<HTMLDivElement> & SwitchFieldProps} props
 * @returns {import("react").JSX.Element}
 */
export function SwitchField({ children, className, ...props }) {
  return (
    <div className={`field switch ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

/**
 * @typedef {object} SwitchInputProps
 * @property {string} [props.className] - Additional CSS classes.
 */

/**
 * Switch input field component.
 * @param {React.InputHTMLAttributes<HTMLInputElement> & SwitchInputProps} props
 * @returns {import("react").JSX.Element}
 */
export function SwitchInput({ ...props }) {
  return <input type="checkbox" role="switch" {...props} />
}

/**
 * @typedef {object} SwitchControlProps
 */

/**
 * Switch control label component.
 * @param {React.LabelHTMLAttributes<HTMLLabelElement> & SwitchControlProps} props
 * @returns {import("react").JSX.Element}
 */
export function SwitchControl({ ...props }) {
  return <label className="slider" {...props}></label>
}

/**
 * @typedef {object} SwitchProps
 * @property {string} [props.className] - Additional CSS classes.
 * @property {string} props.id - id
 */

/**
 * Switch input field component.
 * @param {React.HTMLAttributes<HTMLDivElement> & SwitchProps} props
 * @returns {import("react").JSX.Element}
 */
export function Switch({ id, className, ...props }) {
  return (
    <SwitchField className={className}>
      <SwitchInput id={id} />
      <SwitchControl htmlFor={id} />
    </SwitchField>
  )
}

/**
 * Default export of form field components.
 */
export default {
  SwitchInput,
  SwitchField,
  SwitchControl,
  Switch,
}
