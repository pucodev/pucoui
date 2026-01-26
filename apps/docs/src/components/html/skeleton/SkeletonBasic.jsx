export default function SkeletonBasic() {
  return (
    <div className="is-flex is-gap-6 is-flex-column sm:is-flex-row is-align-items-center">
      <div>
        <div className="is-w-128 is-h-128 skeleton"></div>
      </div>
      <div className="is-flex is-flex-column is-gap-3 w-100">
        <div className="skeleton is-h-128 w-100"></div>
        <div className="skeleton is-h-16 is-w-4-12"></div>
        <div className="skeleton is-h-16 w-100"></div>
        <div className="skeleton is-h-16 w-100"></div>
      </div>
    </div>
  )
}
