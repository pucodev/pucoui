export default function TabBase() {
  return (
    <div className="tabs">
      <ul>
        <li>
          <a className="tabs__item is-active" href="#">
            TAB 1
          </a>
        </li>
        <li>
          <a className="tabs__item" href="#">
            TAB 2
          </a>
        </li>
        <li>
          <a className="tabs__item is-plain" href="#">
            TAB 3
          </a>
        </li>
        <li>
          <a className="tabs__item" href="#">
            TAB 4
          </a>
        </li>
      </ul>
    </div>
  )
}
