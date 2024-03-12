import { SidebarObjectOptions } from '../interface';

export const interviewSidebar: SidebarObjectOptions = {
  '/Interview/': [
    {
      text: 'JavaScript',
      collapsible: true,
      children: [
        { text: '1 - 闭包', link: 'JavaScript/Closure/' },
        {
          text: '2 - 异步',
          collapsible: true,
          children: [
            { text: '2.1 - 异步流程', link: 'JavaScript/Async/' },
            { text: '2.2 - 微任务', link: 'JavaScript/MicroTasks/' },
            { text: '2.3 - 宏任务', link: 'JavaScript/MacroTasks/' },
            { text: '2.4 - 执行机制', link: 'JavaScript/EventLoop/' },
            { text: '2.5 - 回调地狱', link: 'JavaScript/CallbackHell/' },
          ]
        },
        // { text: '1.2 - ECMAScript 6', link: 'Standard/ES6/' },
        // { text: '1.3 - RESTful API', link: 'Standard/RESTful/' },
      ]
    }
  ],
};
