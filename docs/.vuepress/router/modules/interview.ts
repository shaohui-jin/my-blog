import { SidebarObjectOptions } from '../interface';

export const interviewSidebar: SidebarObjectOptions = {
  '/Interview/': [
    {
      text: 'JavaScript',
      collapsible: true,
      children: [
        { text: '1.1 - 闭包', link: 'JavaScript/Closure/' },
        // { text: '1.2 - ECMAScript 6', link: 'Standard/ES6/' },
        // { text: '1.3 - RESTful API', link: 'Standard/RESTful/' },
      ]
    }
  ],
};
