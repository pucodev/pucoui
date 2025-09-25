import CardBase from '../../docs/CardBase'
import ReactComment from '../../ReactComment'

export default function CardElevation() {
  return (
    <div className="is-hstack">
      <ReactComment
        text={'################### Elevation 1 ###################'}
      />
      <CardBase className="elevation-1" showImage title="Elevation 1" />

      {'\n\n'}
      <ReactComment
        text={'################### Elevation 3 ###################'}
      />
      <CardBase className="elevation-3" showImage title="Elevation 3" />

      {'\n\n'}
      <ReactComment
        text={'################### Elevation 5 ###################'}
      />
      <CardBase className="elevation-5" showImage title="Elevation 5" />
    </div>
  )
}
