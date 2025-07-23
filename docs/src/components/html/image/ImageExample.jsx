import ImageBase from '../../docs/ImageBase'
import { Image, ImageFallback } from '../../pucoui/Image'

export default function ImageExample() {
  return (
    <div className="is-flex is-gap-4">
      <ImageBase image={1} size={128} />

      {'\n\n'}
      <ImageBase image={2} size={128} className="is-rounded" />

      {'\n\n'}
      <ImageBase image={3} size={128} className="is-rounded-4" />

      {'\n\n'}
      <Image size={128} className="is-rounded-4">
        <ImageFallback>PUI</ImageFallback>
      </Image>
    </div>
  )
}
