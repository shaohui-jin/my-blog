import { SidebarObjectOptions } from '../interface';

export const javaSidebar: SidebarObjectOptions = {
  '/Java/': [
    {
      text: '技能',
      children: [
        { text: '1 - Stream 流', link: 'Stream/' },
        { text: '2 - Lambda表达式', link: 'Lambda/' },
      ]
    },
    {
      text: '工具',
      children: [
        { text: '1 - Java 工具类', link: 'Utils/' },
      ]
    },
  ],
};
