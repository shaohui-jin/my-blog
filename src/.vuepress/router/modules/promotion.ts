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
        'Vue3/ToolFunction/',
        {
          text: '指令',
          collapsible: true,
          children: [
            { text: '点击组件外部', link: 'Vue/Directive/ClickOutside/' },
          ]
        },
      ]
    },
    {
      text: 'React',
      collapsible: false,
      children: [
        'React/Communication/',
        'React/Hooks/'
      ],
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
      text: '图形技术',
      collapsible: true,
      children: [
        'Graphics/Svg/',
        'Graphics/Canvas/'
      ]
    },
    {
      text: '运维',
      collapsible: true,
      children: [
        'Server/',
        'Nginx/',
        'Git/',
      ]
    },
    {
      text: '规范指南',
      collapsible: true,
      children: [
        'Standard/HTML/',
        'Standard/RestfulApi/',
        'Standard/ES6/',
      ]
    },
    {
      text: '代码题',
      collapsible: true,
      children: [
        'Code/LRU/',
        'Code/FlatJson/',
        'Code/PromiseImg/',
        'Code/PromiseAjax/'
      ]
    },
  ],
};
