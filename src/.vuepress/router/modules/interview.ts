import { SidebarObjectOptions } from '../interface';

export const interviewSidebar: SidebarObjectOptions = {
  '': [
    {
      text: 'CSS',
      // icon: 'iconfont icon-css',
      activeMatch: '/CSS/(.*)$',
      collapsible: true,
      children: [
        // {
          // text: '└─ 理论',
          // collapsible: true,
          // children: [
        { text: '字体大小', link: '/CSS/FontSize/' },
        { text: '选择器特性', link: '/CSS/SelectorFeatures/' },
          // ]
        // }
      ]
    },
  ],
};
