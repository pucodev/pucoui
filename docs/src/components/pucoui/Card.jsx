/**
 * @typedef {object} CardProps
 * @property {React.ReactNode} props.children - Child elements.
 * @property {string} [props.className] - Additional CSS classes.
 */

/**
 * Main Card component.
 * @param {React.HTMLAttributes<HTMLDivElement> & CardProps} props
 * @returns {import("react").JSX.Element}
 */
export function Card({ children, className, ...props }) {
  return (
    <div className={`card ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

/**
 * @typedef {object} CardImageProps
 * @property {string} props.src - Image URL.
 * @property {string} [props.alt] - Image alt text.
 * @property {string} [props.className] - Additional CSS classes.
 */

/**
 * Card image component.
 * @param {React.HTMLAttributes<HTMLDivElement> & CardImageProps} props
 * @returns {import("react").JSX.Element}
 */
export function CardImage({ src, alt, className, ...props }) {
  return (
    <figure className={`image ${className || ''}`} {...props}>
      <img src={src} alt={alt} />
    </figure>
  )
}

/**
 * @typedef {object} CardBodyProps
 * @property {React.ReactNode} props.children - Child elements.
 * @property {string} [props.className] - Additional CSS classes.
 */

/**
 * Card body component.
 * @param {React.HTMLAttributes<HTMLDivElement> & CardBodyProps} props
 * @returns {import("react").JSX.Element}
 */
export function CardBody({ children, className, ...props }) {
  return (
    <div className={`card-body ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

/**
 * @typedef {object} CardTitleProps
 * @property {React.ReactNode} props.children - Child elements.
 * @property {string} [props.className] - Additional CSS classes.
 */

/**
 * Card title component.
 * @param {React.HTMLAttributes<HTMLDivElement> & CardTitleProps} props
 * @returns {import("react").JSX.Element}
 */
export function CardTitle({ children, className, ...props }) {
  return (
    <div className={`card-title ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

/**
 * @typedef {object} CardContentProps
 * @property {React.ReactNode} props.children - Child elements.
 * @property {string} [props.className] - Additional CSS classes.
 */

/**
 * Card content component.
 * @param {React.HTMLAttributes<HTMLDivElement> & CardContentProps} props
 * @returns {import("react").JSX.Element}
 */
export function CardContent({ children, className, ...props }) {
  return (
    <div className={`card-content ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

/**
 * @typedef {object} CardActionProps
 * @property {React.ReactNode} props.children - Child elements.
 * @property {string} [props.className] - Additional CSS classes.
 */

/**
 * Card action component.
 * @param {React.HTMLAttributes<HTMLDivElement> & CardActionProps} props
 * @returns {import("react").JSX.Element}
 */
export function CardActions({ children, className, ...props }) {
  return (
    <div className={`card-actions ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

/**
 * Default export for all card components.
 */
export default {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardContent,
  CardActions,
}
