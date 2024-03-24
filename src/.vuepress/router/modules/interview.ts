import { SidebarObjectOptions } from '../interface';

export const interviewSidebar: SidebarObjectOptions = {
  '/Interview/': [
    {
      text: 'JavaScript',
      collapsible: true,
      icon: 'iconfont icon-javascript',
      activeMatch: '/Interview/JavaScript/(.*)$',
      children: [
        { text: '1 - 闭包', link: 'JavaScript/Closure/' },
        { text: '2 - 进程模型与事件循环', link: 'JavaScript/Async/' },
        {
          text: '3 - ECMAScript',
          collapsible: true,
          children: [
            { text: '3.1 - ECMAScript 6', link: 'JavaScript/ES6/' },
          ]
        },
        { text: '4 - 类继承', link: 'JavaScript/Class/' },
      ]
    },
    {
      text: '框架',
      collapsible: true,
      activeMatch: '/Interview/Framework/(.*)$',
      children: [
        {
          text: '1 - Vue',
          collapsible: true,
          activeMatch: '/Interview/Framework/Vue/(.*)$',
          children: [
            { text: '1.1 - 通讯方式', link: 'Framework/Vue/Communication/' },
          ]
        },
        {
          text: '2 - React',
          collapsible: true,
          activeMatch: '/Interview/Framework/React/(.*)$',
          children: [
            { text: '2.1 - 通讯方式', link: 'Framework/React/Communication/' },
          ]
        },
        {
          text: '3 - 微前端',
          collapsible: true,
          activeMatch: '/Interview/Framework/Micro/(.*)$',
          children: [
            { text: '3.1 - 乾坤', link: 'Framework/Micro/QianKun/' },
          ]
        },
      ]
    }
  ],
};
