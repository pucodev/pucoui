/**
 * @typedef {object} SwitchFieldProps
 * @property {string} [props.className] - Additional CSS classes.
 * @property {React.ReactNode} props.children - Child elements.
 */

import { useState } from 'react'

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
 * @property {boolean} [checked]
 * @property {function} [onCheckedChange]
 */

/**
 * Switch input field component.
 * @param {React.InputHTMLAttributes<HTMLInputElement> & SwitchInputProps} props
 * @returns {import("react").JSX.Element}
 */
export function SwitchInput({
  checked: initialChecked,
  onCheckedChange,
  ...props
}) {
  const [checked, setChecked] = useState(initialChecked ?? false)
  const handleChange = (e) => {
    setChecked(e.target.checked)
    onCheckedChange?.(e)
  }
  return (
    <input
      type="checkbox"
      role="switch"
      {...props}
      checked={checked}
      onChange={handleChange}
    />
  )
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
 * @property {boolean} [checked]
 */

/**
 * Switch input field component.
 * @param {React.HTMLAttributes<HTMLDivElement> & SwitchProps} props
 * @returns {import("react").JSX.Element}
 */
export function Switch({ id, className, checked, ...props }) {
  return (
    <SwitchField className={className}>
      <SwitchInput id={id} checked={checked} />
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
