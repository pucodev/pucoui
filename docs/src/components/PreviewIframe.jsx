import { Icon } from './pucoui/Icon'

/**
 * Componente que muestra una vista previa embebida en un iframe.
 *
 * @param {object} props
 * @param {string} props.src - Ruta o URL del contenido a mostrar.
 * @param {string} [props.title] - Título accesible del iframe.
 * @param {string|number} [props.height=300] - Altura del iframe.
 * @param {string|number} [props.width='100%'] - Ancho del iframe.
 * @returns {import('react').JSX.Element}
 */
export default function PreviewIframe({
  src,
  title = 'Preview',
  height = 300,
  width = '100%',
}) {
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
          <iframe
            src={src}
            title={title}
            height={height}
            width={width}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
