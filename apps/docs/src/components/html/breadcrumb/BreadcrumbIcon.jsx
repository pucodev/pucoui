import { Breadcrumb } from '../../pucoui/Breadcrumb'

export default function BreadcrumbBasic() {
  const items = [
    {
      href: '#',
      icon: 'mdi:home',
    },
    {
      href: '#',
      icon: 'mdi:files',
      item: 'Documentos',
    },
    {
      icon: 'mdi:add-bold',
      item: 'Agregar',
    },
  ]
  return <Breadcrumb items={items} />
}
