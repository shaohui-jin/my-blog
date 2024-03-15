import { SidebarObjectOptions } from '../interface';

export const interviewSidebar: SidebarObjectOptions = {
  '/Interview/': [
    {
      text: 'JavaScript',
      collapsible: true,
      children: [
        {
          text: '1 - 基础',
          collapsible: true,
          children: [
            { text: '1.1 - 闭包', link: 'JavaScript/Closure/' },
            { text: '1.2 - 类继承', link: 'JavaScript/Class/' },
          ]
        },
        {
          text: '2 - 执行机制',
          collapsible: true,
          children: [
            {
              text: '2.1 - 异步',
              collapsible: false,
              children: [
                { text: '2.2.1 - 简介', link: 'JavaScript/Async/' },
                { text: '2.2.2 - 事件循环', link: 'JavaScript/EventLoop/' },
                { text: '2.2.3 - 回调地狱', link: 'JavaScript/CallbackHell/' },
              ]
            },
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
        // { text: '1.2 - ECMAScript 6', link: 'Standard/ES6/' },
        // { text: '1.3 - RESTful API', link: 'Standard/RESTful/' },
      ]
    }
  ],
};
