import { SidebarObjectOptions } from '../interface';

export const nginxSidebar: SidebarObjectOptions = {
  '/Nginx/': [
    {
      text: 'nginx的功能',
      link: 'Function/',
      collapsible: true,
      children: [
        { text: 'nginx常用变量', link: 'CommonVariables/' },
        { text: 'nginx内核模块', link: 'Core/' },
      ]
    },
  ],
};
