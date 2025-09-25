import ImageBase from '../../docs/ImageBase'

export default function ImageRounded() {
  return (
    <div className="is-flex is-gap-4">
      <ImageBase image={1} size={128} className="is-rounded" />

      {'\n\n'}
      <ImageBase image={2} size={128} className="is-rounded-2" />

      {'\n\n'}
      <ImageBase image={3} size={128} className="is-rounded-4" />

      {'\n\n'}
      <ImageBase image={1} size={128} className="is-rounded-6" />
    </div>
  )
}
