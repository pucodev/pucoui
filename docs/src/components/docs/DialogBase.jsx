import { CardImage } from '../pucoui/Card'
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '../pucoui/Dialog'
import ReactComment from '../ReactComment'

/**
 *
 * @param {object} props
 * @param {object} [props.content]
 * @param {boolean} [props.isScrollable]
 * @param {boolean} [props.isCentered]
 * @param {boolean} [props.isOutlined]
 * @param {boolean} [props.hasImage]
 * @returns
 */
export default function DialogBase({
  content,
  isScrollable,
  isCentered,
  isOutlined,
  hasImage,
}) {
  return (
    <Dialog isActive isScrollable={isScrollable} isCentered={isCentered}>
      <DialogContent className={`${isOutlined ? 'is-outlined' : ''}`}>
        {hasImage ? (
          <>
            <ReactComment text={'Dialog Image'} />
            <CardImage
              src="/pucoui/img/pucoui-img-1-lg.jpeg"
              className="is-16by9"
            />
            {'\n\n'}
          </>
        ) : (
          <></>
        )}
        <ReactComment text={'Dialog Header'} />
        <DialogHeader>Título del dialog</DialogHeader>

        {'\n\n'}
        <ReactComment text={'Dialog Body'} />
        <DialogBody>
          {content ||
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eveniet nemo possimus debitis quae?'}
        </DialogBody>

        {'\n\n'}
        <ReactComment text={'Dialog Footer'} />
        <DialogFooter>
          <button className="btn is-outlined">Cancelar</button>
          <button className="btn">Guardar</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
