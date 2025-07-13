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
      items: ['helper/typography'],
    },
  ],
}

export default sidebars
