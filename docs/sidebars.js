// @ts-check

const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introducción',
    },
    {
      type: 'category',
      label: 'Personalización',
      link: { type: 'doc', id: 'customize/index' },
      items: ['customize/color', 'customize/spacing', 'customize/fontsize'],
    },
    {
      type: 'category',
      label: 'Helpers',
      link: { type: 'doc', id: 'helper/index' },
      items: [
        'helper/typography',
        'helper/color',
        'helper/spacing',
        'helper/flexbox',
        'helper/breakpoint',
      ],
    },
    {
      type: 'category',
      label: 'Elementos',
      link: { type: 'doc', id: 'element/index' },
      items: [
        'element/badge',
        'element/button',
        'element/icon',
        'element/image',
        'element/stack',
      ],
    },
    {
      type: 'category',
      label: 'Componentes',
      link: { type: 'doc', id: 'component/index' },
      items: [
        'component/alert',
        'component/card',
        'component/breadcrumb',
        'component/dialog',
        'component/table',
      ],
    },
    {
      type: 'category',
      label: 'Formularios',
      link: { type: 'doc', id: 'form/index' },
      items: [
        'form/field',
        'form/input',
        'form/textarea',
        'form/select',
        'form/checkbox',
        'form/radio',
        'form/switch',
      ],
    },
    {
      type: 'category',
      label: 'Demostraciones',
      link: { type: 'doc', id: 'showcase/index' },
      items: ['showcase/register'],
    },
  ],
}

export default sidebars
