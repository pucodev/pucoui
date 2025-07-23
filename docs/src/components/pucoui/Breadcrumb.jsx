import { Icon } from './Icon'

/**
 * @typedef {object} BreadcrumbItemProps
 * @property {React.ReactNode} props.children - Child elements
 * @property {string} [props.href] - href link
 */

/**
 * Main Card component.
 * @param {React.AnchorHTMLAttributes<HTMLAnchorElement> & BreadcrumbItemProps} props
 * @returns {import("react").JSX.Element}
 */
export function BreadcrumbItem({ children, href, ...props }) {
  return href ? (
    <a href={href} {...props}>
      {children}
    </a>
  ) : (
    <>{children}</>
  )
}

/**
 * @typedef {object} BreadcrumbProps
 * @property {{icon?: string, item?: string, href?: string}[]} items
 * @property {string} [props.className] - Additional CSS classes.
 */

/**
 * Main Card component.
 * @param {React.HTMLAttributes<HTMLDivElement> & BreadcrumbProps} props
 * @returns {import("react").JSX.Element}
 */
export function Breadcrumb({ items, className, ...props }) {
  return (
    <div className={`breadcrumbs ${className || ''}`} {...props}>
      <ol>
        {items.map((item) => (
          <li>
            <BreadcrumbItem href={item.href}>
              {item.icon ? <Icon icon={item.icon} /> : <></>}
              {item.item ? <span>{item.item}</span> : <></>}
            </BreadcrumbItem>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default {
  Breadcrumb,
}
