/**
 * @typedef {object} SelectProps
 * @property {string} [props.className] - Additional CSS classes.
 * @property {React.ReactNode} props.children - Label text or elements.
 */

import { Children } from 'react'

/**
 * Input field component.
 * @param {React.SelectHTMLAttributes<HTMLSelectElement> & SelectProps} props
 * @returns {import("react").JSX.Element}
 */
export function SelectNative({ className, children, ...props }) {
  return (
    <select className={`select ${className || ''}`} {...props}>
      {children}
    </select>
  )
}

/**
 * Default export of form field components.
 */
export default {
  SelectNative,
}
