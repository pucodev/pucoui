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
      items: ['component/alert', 'component/card'],
    },
  ],
}

export default sidebars
