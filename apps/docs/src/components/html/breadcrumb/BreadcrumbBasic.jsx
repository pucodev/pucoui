import { Breadcrumb } from '../../pucoui/Breadcrumb'

export default function BreadcrumbBasic() {
  const items = [
    {
      href: '#',
      item: 'Home',
    },
    {
      href: '#',
      item: 'Documentos',
    },
    {
      item: 'Agregar',
    },
  ]
  return <Breadcrumb items={items} />
}
