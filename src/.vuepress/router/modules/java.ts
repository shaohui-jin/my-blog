import { SidebarObjectOptions } from '../interface';

export const javaSidebar: SidebarObjectOptions = {
  '/': [
    {
      text: '技能',
      children: [
        { text: '1 - Stream 流', link: '/Java/Stream/' },
        { text: '2 - Lambda表达式', link: '/Java/Lambda/' },
      ]
    },
    {
      text: '工具',
      children: [
        { text: '1 - Java 工具类', link: '/Java/Utils/' },
      ]
    },
  ],
};
