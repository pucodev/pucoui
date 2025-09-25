import type React from 'react'

/**
 * Props for the {@link Input} component.
 *
 * Extends {@link React.InputHTMLAttributes} to include all native
 * `<input>` attributes.
 */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Additional CSS classes to apply to the input element */
  className?: string

  /** The input type (e.g. `"text"`, `"email"`, `"password"`, `"number"`, etc) */
  type: string

  /** Placeholder text to display inside the input field */
  placeholder?: string
}

/**
 * A styled input component.
 *
 * @remarks
 * Renders a standard `<input>` element with a base `input` class, and supports
 * all native input attributes such as `value`, `defaultValue`, `onChange`, etc.
 *
 * @example
 * Basic usage:
 * ```tsx
 * <Input
 *   type="text"
 *   placeholder="Enter your name"
 * />
 * ```
 *
 * @example
 * With custom styling:
 * ```tsx
 * <Input
 *   type="email"
 *   placeholder="Enter your email"
 *   className="is-primary"
 * />
 * ```
 */
export function Input({ className, type, placeholder, ...props }: InputProps) {
  return (
    <input
      className={`input ${className || ''}`}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  )
}

export default {
  Input,
}
