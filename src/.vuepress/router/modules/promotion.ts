import { SidebarObjectOptions } from '../interface';

export const promotionsSidebar: SidebarObjectOptions = {
  '/Promotion/': [
    {
      text: 'CSS',
      collapsible: false,
      children: [
        'BFC/',
      ]
    },
    {
      text: 'JavaScript',
      activeMatch: '/JavaScript/(.*)$',
      collapsible: false,
      children: [
        'JavaScript-Skill/',

      ]
    },
    {
      text: '运维',
      activeMatch: '/JavaScript/(.*)$',
      collapsible: false,
      children: [
        'Server/',
        'Nginx/',
        'Git/',
      ]
    },
    {
      text: '原理',
      activeMatch: '/JavaScript/(.*)$',
      collapsible: false,
      children: [
        'QianKun/',
        'Webpack/',
      ]
    },
  ],
};
