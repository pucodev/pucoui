/**
 * Renders an image inside a figure element with optional size and aspect ratio classes.
 *
 * @typedef {Object} ImageProps - Component props.
 * @property {number} [props.size] - Optional size modifier for the image (e.g., 16, 24, 32, etc).
 * @property {string} [props.ratio] - Optional aspect ratio for the image (e.g., '16 9', '1 1').
 * @property {string} [props.src] - Source URL of the image.
 * @property {string} [props.alt] - Alternative text for the image.
 * @property {string} [props.className] - Alternative classnames
 * @property {React.ReactNode} [props.children] - Content of the figure - use for fallback
 */

/**
 * Image component
 * @param {React.HTMLAttributes<HTMLElement> & ImageProps} props
 * @returns {import("react").JSX.Element} The rendered image component.
 */
export function Image({
  size,
  ratio,
  src,
  alt,
  className,
  children,
  ...props
}) {
  let ratioClass
  if (ratio) {
    const ratios = ratio.split(' ')
    if (ratios.length === 2) {
      ratioClass = `is-${ratios[0]}by${ratios[1]}`
    } else {
      ratioClass = `is-${ratio}`
    }
  }
  return (
    <figure
      className={`image ${size ? `is-size-${size}` : ''} ${ratioClass || ''} ${className || ''}`}
      {...props}
    >
      {children}
      {src ? <img src={src} alt={alt || ''} /> : <></>}
    </figure>
  )
}

/**
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content of the fallback
 * @returns
 */
export function ImageFallback({ children }) {
  return <div className="fallback">{children}</div>
}

export default {
  Image,
  ImageFallback,
}
