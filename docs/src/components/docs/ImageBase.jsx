import { Image } from '../pucoui/Image'

/**
 * Renders an image inside a figure element with optional size and aspect ratio classes.
 *
 * @param {Object} props - Component props.
 * @param {number} [props.size] - Optional size modifier for the image (e.g., 16, 24, 32, etc).
 * @param {string} [props.ratio] - Optional aspect ratio for the image (e.g., '16 9', '1 1').
 * @param {1 | 2 | 3} props.image - image index.
 * @param {string} [props.alt] - Alternative text for the image.
 * @param {string} [props.className] - Alternative classnames
 * @returns {import("react").JSX.Element} The rendered image component.
 */
export default function ImageBase({
  image,
  alt,
  size,
  ratio,
  className,
  ...props
}) {
  const images = [
    '/pucoui/img/pucoui-img-1.png',
    '/pucoui/img/pucoui-img-2.png',
    '/pucoui/img/pucoui-img-3.png',
  ]
  return (
    <Image
      src={images[image - 1]}
      alt={alt}
      size={size}
      ratio={ratio}
      className={className}
      {...props}
    />
  )
}
