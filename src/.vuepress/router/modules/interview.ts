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
        {
          text: '2 - 同步、异步',
          collapsible: true,
          children: [
            { text: '2.1 - JS的同步和异步', link: 'JavaScript/Async/' },
            { text: '2.2 - 事件循环', link: 'JavaScript/EventLoop/' },
            { text: '2.3 - 回调地狱', link: 'JavaScript/CallbackHell/' },
            {
              text: '2.2 - 微任务',
              collapsible: false,
              children: [
                { text: '2.2.1 - 简介', link: 'JavaScript/MicroTasks/' },
                { text: '2.2.2 - Promise,Async Await', link: 'JavaScript/Promise/' },
              ]
            },
            { text: '2.3 - 宏任务', link: 'JavaScript/MacroTasks/' },
          ]
        },
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
