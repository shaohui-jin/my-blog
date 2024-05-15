import { SidebarObjectOptions } from '../interface';

export const tipsSidebar: SidebarObjectOptions = {
  '/Tips/': [
    {
      text: 'CSS',
      icon: 'iconfont icon-css',
      activeMatch: '/CSS/(.*)$',
      collapsible: true,
      children: [
        {
          text: '表单相关',
          children: [
            'CSS/001/',
            'CSS/002/',
          ]
        },
        {
          text: '排版相关',
          children: [
            'CSS/003/',
            'CSS/004/'
          ]
        }
      ]
    },
  ],
};
