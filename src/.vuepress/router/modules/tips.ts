import { SidebarObjectOptions } from '../interface';

export const tipsSidebar: SidebarObjectOptions = {
  '/Tips/': [
    {
      text: 'CSS',
      icon: 'iconfont icon-css',
      activeMatch: '/CSS/(.*)$',
      // collapsible: true,
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
    {
      text: 'JavaScript',
      icon: 'iconfont icon-javascript',
      activeMatch: '/JavaScript/(.*)$',
      // collapsible: true,
      children: [
        {
          text: '数据相关',
          children: [
            'JavaScript/001/',
            'JavaScript/003/',
          ]
        },
        {
          text: '优化相关',
          children: [
            'JavaScript/002/',
          ]
        }
      ]
    },
  ],
};
