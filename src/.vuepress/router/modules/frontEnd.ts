import { SidebarObjectOptions } from '../interface';

export const frontEndSidebar: SidebarObjectOptions = {
  '/FrontEnd/': [
    {
      text: 'JavaScript',
      collapsible: true,
      children: [
        { text: '面试问题', link: 'JavaScript/Question/' },
        { text: '面试问题', link: 'Vue/Question/' },
      ]
    },
    {
      text: '性能优化',
      collapsible: true,
      children: [
        { text: '浅谈性能优化', link: 'Performance/info/' },
        { text: '性能优化方法', link: 'Performance/Skill/' },
      ]
    },
  ],
};
