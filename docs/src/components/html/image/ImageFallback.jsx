import { Image, ImageFallback } from '../../pucoui/Image'

export default function ImageFallbackItem() {
  return (
    <div className="is-flex is-gap-4">
      <Image size={64} className="is-rounded" src="not-found-img.png">
        <ImageFallback>PUI</ImageFallback>
      </Image>

      <Image size={64} className="is-rounded-3" src="not-found-img.png">
        <ImageFallback>PUI</ImageFallback>
      </Image>
    </div>
  )
}
