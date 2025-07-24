/**
 *
 * @param {object} props
 * @param {boolean} [props.isBordered]
 * @param {boolean} [props.isStriped]
 * @param {string} [props.color]
 * @param {string} [props.className]
 * @param {'sm' | 'md' | 'lg'} [props.size]
 * @param {boolean} [props.isHoverable]
 * @param {number} [props.total]
 * @returns
 */
export default function TableBase({
  isBordered,
  isStriped,
  color,
  className,
  isHoverable,
  size,
  total,
}) {
  let items = [
    {
      name: 'Mario',
      lastname: 'Bross',
    },
    {
      name: 'Luigi',
      lastname: 'Bross',
    },
    {
      name: 'Koopa',
      lastname: 'Troopa',
    },
    {
      name: 'Donkey',
      lastname: 'Kong',
    },
    {
      name: 'Princesa',
      lastname: 'Peach',
    },
  ]

  if (total) {
    items = items.slice(0, total)
  }

  return (
    <table
      className={`table ${size ? `is-${size}` : ''} ${color ? `is-${color}` : ''} ${isBordered ? 'is-bordered' : ''} ${isStriped ? 'is-striped' : ''} ${className || ''} ${isHoverable ? 'is-hoverable' : ''}`}
    >
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.lastname}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
