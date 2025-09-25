import { Icon } from './pucoui/Icon'

/**
 * Componente que muestra una vista previa embebida en un iframe.
 *
 * @param {object} props
 * @param {string} props.src - Ruta o URL del contenido a mostrar.
 * @param {string} [props.title] - Título accesible del iframe.
 * @param {string|number} [props.height=300] - Altura del iframe.
 * @param {string|number} [props.width='100%'] - Ancho del iframe.
 * @param {string|number} [props.maxWidth='100%'] - Maximo Ancho del iframe.
 * @param {string|number} [props.minWidth] - Mínimo Ancho del iframe.
 * @param {boolean} [props.isTablet] - Configura el ancho minimo en 800px
 * @param {boolean} [props.isLaptop] - Configura el ancho minimo en 1200px
 * @returns {import('react').JSX.Element}
 */
export default function PreviewIframe({
  src,
  title = 'Preview',
  height = 800,
  width = '100%',
  maxWidth = '100%',
  minWidth,
  isTablet,
  isLaptop,
}) {
  let computedMinWitdth = minWidth
  if (isTablet) {
    computedMinWitdth = '800px'
  } else if (isLaptop) {
    computedMinWitdth = '1200px'
  }
  return (
    <div className="docu-preview">
      <div className="docu-preview__bg"></div>
      <div className="pucoui">
        <div className="docu-preview__content is-pui-initial-vars">
          <div className="is-flex is-justify-content-flex-end pb-3">
            <a href={src} target="_blank" className="icon-text">
              <span>Ver en pantalla completa</span>{' '}
              <Icon icon="mdi:open-in-new" />
            </a>
          </div>
          <div style={{ display: 'block', margin: '0 auto', overflow: 'auto' }}>
            <iframe
              src={src}
              title={title}
              height={height}
              width={width}
              loading="lazy"
              style={{ maxWidth, minWidth: computedMinWitdth }}
              className="mx-auto is-block"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
