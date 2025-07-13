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
      items: ['customize/colors', 'customize/spacing', 'customize/fontsizes'],
    },
  ],
}

export default sidebars
