import { Icon } from './Icon'

/**
 * @typedef {object} DialogFooterProps
 * @property {React.ReactNode} props.children - Child elements
 * @property {string} [props.className] - Additional CSS classes
 */

/**
 * Main Card component.
 * @param {React.HTMLAttributes<HTMLDivElement> & DialogFooterProps} props
 * @returns {import("react").JSX.Element}
 */
export function DialogFooter({ children, className, ...props }) {
  return (
    <footer className={`dialog-footer ${className || ''}`} {...props}>
      {children}
    </footer>
  )
}

/**
 * @typedef {object} DialogBodyProps
 * @property {React.ReactNode} props.children - Child elements
 * @property {string} [props.className] - Additional CSS classes
 */

/**
 * Main Card component.
 * @param {React.HTMLAttributes<HTMLDivElement> & DialogBodyProps} props
 * @returns {import("react").JSX.Element}
 */
export function DialogBody({ children, className, ...props }) {
  return (
    <section className={`dialog-body ${className || ''}`} {...props}>
      {children}
    </section>
  )
}

/**
 * @typedef {object} DialogHeaderProps
 * @property {React.ReactNode} props.children - Child elements
 * @property {string} [props.className] - Additional CSS classes
 */

/**
 * Main Card component.
 * @param {React.HTMLAttributes<HTMLDivElement> & DialogHeaderProps} props
 * @returns {import("react").JSX.Element}
 */
export function DialogHeader({ children, className, ...props }) {
  return (
    <header className={`dialog-header ${className || ''}`} {...props}>
      <div className="dialog-title">{children}</div>
      <button className="btn is-close">
        <Icon icon="mdi:close" />
      </button>
    </header>
  )
}

/**
 * @typedef {object} DialogContentProps
 * @property {React.ReactNode} props.children - Child elements
 * @property {string} [props.className] - Additional CSS classes
 */

/**
 * Main Card component.
 * @param {React.HTMLAttributes<HTMLDivElement> & DialogContentProps} props
 * @returns {import("react").JSX.Element}
 */
export function DialogContent({ children, className, ...props }) {
  return (
    <div className={`dialog-card ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

/**
 * @typedef {object} DialogProps
 * @property {React.ReactNode} props.children - Child elements
 * @property {string} [props.className] - Additional CSS classes
 * @property {boolean} [props.isActive] - Show dialog
 * @property {boolean} [props.isCentered] - Center dialog
 * @property {boolean} [props.isScrollable] - Set body dialog scrollable
 */

/**
 * Main Card component.
 * @param {React.HTMLAttributes<HTMLDivElement> & DialogProps} props
 * @returns {import("react").JSX.Element}
 */
export function Dialog({
  children,
  className,
  isActive,
  isCentered,
  isScrollable,
  ...props
}) {
  return (
    <div
      className={`dialog ${isScrollable ? 'dialog-scrollable' : ''} ${isCentered ? 'dialog-centered' : ''} ${isActive ? 'is-active' : ''} ${className || ''}`}
      {...props}
    >
      {/* <div className="dialog-bg"></div> */}
      <div className="dialog-overlay">{children}</div>
    </div>
  )
}

export default {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
}
