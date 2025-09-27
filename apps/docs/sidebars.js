// @ts-check
const sidebars = {
  docSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Customize',
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
        'helper/elevation',
        'helper/border',
        'helper/breakpoint',
      ],
    },
    {
      type: 'category',
      label: 'Elements',
      link: { type: 'doc', id: 'element/index' },
      items: [
        'element/badge',
        'element/button',
        'element/columns',
        'element/icon',
        'element/image',
        'element/stack',
      ],
    },
    {
      type: 'category',
      label: 'Components',
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
      label: 'Forms',
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
      label: 'Showcases',
      link: { type: 'doc', id: 'showcase/index' },
      items: ['showcase/register'],
    },
  ],
}

export default sidebars
