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
      collapsible: false,
      children: [
        'JavaScript/Closure/',
        'JavaScript/BrowserProcessModel/',
        'JavaScript/BrowserRenderingPrinciples/',
        'JavaScript/BrowserCache/',
        'JavaScript/AJAX/',
        'JavaScript/CSRFAndXSS/',
        'JavaScript/CrossDomain/',
        'JavaScript/TypeScript/',
      ]
    },
    {
      text: 'Vue',
      collapsible: false,
      children: [
        'Vue/LifeCycle/',
        'Vue/Communication/',
      ]
    },
    {
      text: 'React',
      collapsible: false,
      children: [
        'React/Communication/'
      ],
    },
    {
      text: '运维',
      collapsible: false,
      children: [
        'Server/',
        'Nginx/',
        'Git/',
      ]
    },
    {
      text: '原理',
      collapsible: false,
      children: [
        'QianKun/',
        'Webpack/',
      ]
    },
    {
      text: '规范指南',
      collapsible: false,
      children: [
        'Standard/HTML/',
        'Standard/RestfulApi/',
        'Standard/ES6/',
      ]
    },
  ],
};
