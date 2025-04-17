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
          text: 'VUE 指令',
          collapsible: true,
          children: [
            { text: '点击组件外部', link: 'Vue/Directive/ClickOutside/' },
          ]
        },
        {
          text: '小技巧',
          collapsible: true,
          children: [
            { text: '懒加载', link: 'Vue/Skill/LazyLoader/' },
            { text: '数据冻结', link: 'Vue/Skill/Freeze/' },
            { text: '上下文批量引入', link: 'Vue/Skill/Context/' },
            { text: '父组件里监听子组件的生命周期', link: 'Vue/Skill/@Hook/' },
            { text: 'Computed中使用this', link: 'Vue/Skill/Computed/' },
            { text: '父组件通信', link: 'Vue/Skill/Sync/' },
            { text: '插槽', link: 'Vue/Skill/Slot/' },
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
      text: '图形技术',
      collapsible: false,
      children: [
        'Graphics/Svg/',
        'Graphics/Canvas/'
      ]
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
    {
      text: '代码题',
      collapsible: false,
      children: [
        'Code/LRU/',
        'Code/FlatJson/'
      ]
    },
  ],
};
