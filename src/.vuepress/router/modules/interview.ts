import { SidebarObjectOptions } from '../interface';

export const interviewSidebar: SidebarObjectOptions = {
  '': [
    {
      text: 'JavaScript',
      // collapsible: true,
      icon: 'iconfont icon-javascript',
      activeMatch: '/JavaScript/(.*)$',
      children: [
        { text: '1 - 闭包以及内存泄漏原因', link: '/JavaScript/Closure/' },
        { text: '2 - 浏览器进程模型', link: '/JavaScript/BrowserProcessModel/' },
        { text: '3 - 浏览器渲染原理', link: '/JavaScript/BrowserRenderingPrinciples/' },
        { text: '4 - ECMAScript 6', link: '/JavaScript/ES6/' },
      ]
    },
    {
      text: 'CSS',
      // collapsible: true,
      icon: 'iconfont icon-css',
      activeMatch: '/CSS/(.*)$',
      children: [
        { text: '1 - CSS 盒模型', link: '/CSS/BoxModel/' },
        { text: '2 - CSS 选择器优先级', link: '/CSS/SelectorPriority/' },
        { text: '3 - CSS 隐藏元素', link: '/CSS/HiddenElements/' },
        { text: '4 - CSS 居中定位', link: '/CSS/Center/' },
        { text: '5 - CSS 字体大小', link: '/CSS/FontSize/' },
      ]
    },
    {
      text: 'Vue',
      // collapsible: true,
      icon: 'iconfont icon-vuejs',
      activeMatch: '/Vue/(.*)$',
      children: [
        { text: '1 - Vue 生命周期', link: '/Vue/LifeCycle/' },
        { text: '2 - Vue 通讯方式', link: '/Vue/Communication/' },
      ],
    },
    {
      text: 'React',
      // collapsible: true,
      activeMatch: '/React/(.*)$',
      icon: 'iconfont icon-react',
      children: [
        { text: '1 - React 通讯方式', link: '/React/Communication/' },
      ],
    },
    {
      text: '微前端',
      // collapsible: true,
      activeMatch: '/Micro/(.*)$',
      icon: 'iconfont icon-micro',
      children: [
        { text: '1 - 乾坤', link: '/Micro/QianKun/' },
      ],
    }
  ],
};
