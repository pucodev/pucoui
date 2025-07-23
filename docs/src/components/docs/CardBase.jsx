import {
  Card,
  CardActions,
  CardBody,
  CardContent,
  CardImage,
  CardTitle,
} from '../pucoui/Card'
import ReactComment from '../ReactComment'

/**
 *
 * @param {object} props
 * @param {boolean} [props.showImage]
 * @param {boolean} [props.isImageEnd]
 * @param {boolean} [props.hideActions]
 * @param {string} [props.className]
 * @param {string} [props.title]
 * @returns
 */
export default function CardBasic({
  showImage,
  isImageEnd,
  hideActions,
  className,
  title,
}) {
  const imgSrc = '/pucoui/img/pucoui-img-1.png'
  const Image = (
    <>
      <ReactComment text={'Card Image'} />
      <CardImage src={imgSrc} alt={'Puco UI'} className="is-16by9" />
    </>
  )

  return (
    <Card style={{ maxWidth: '320px' }} className={className}>
      {showImage && !isImageEnd ? Image : <></>}

      {'\n\n'}
      <ReactComment text={'Card Body'} />
      <CardBody>
        <CardTitle>{title || 'Card Title'}</CardTitle>
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            nostrum omnis laborum dolore accusamus.
          </p>
        </CardContent>
      </CardBody>

      {!hideActions ? (
        <>
          {'\n\n'}
          <ReactComment text={'Card Actions'} />
          <CardActions>
            <button className="btn is-outlined">Cancelar</button>
            <button className="btn">Guardar</button>
          </CardActions>
        </>
      ) : (
        <></>
      )}

      {showImage && isImageEnd ? Image : <></>}
    </Card>
  )
}
