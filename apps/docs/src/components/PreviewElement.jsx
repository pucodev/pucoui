export default function PreviewElement(props) {
  return (
    <div className="docu-preview">
      <div className="docu-preview__bg"></div>
      <div className="pucoui">
        <div className="docu-preview__content is-pui-initial-vars">
          {props.children}
        </div>
      </div>
    </div>
  )
}
