import { AutoLinkOptions } from 'vuepress-theme-hope';
import { frontEndSidebar, interviewSidebar, javaSidebar, nginxSidebar, tipsSidebar } from './modules';

// 重新调整sidebar的侧边栏类型
type SidebarItem = AutoLinkOptions | Omit<AutoLinkOptions, 'link'> | string;
type SidebarObjectOptions = Record<string, SidebarItem[] | "structure" | "heading" | false>;

export const nav: AutoLinkOptions[] = [
  { text: '首页', link: '/' },
  { text: '前端知识库', link: '/FrontEnd/JavaScript/Reflect/', activeMatch: '/FrontEnd/(.*)$', },
  { text: 'Java', link: '/Java/Stream/', activeMatch: '/Java/(.*)$', icon: 'iconfont icon-java' },
  { text: '设计模式', link: '/DesignPattern/Info/', activeMatch: '/DesignPattern/(.*)$', icon: 'iconfont icon-note' },
  { text: '常用算法', link: '/Algorithm/Dichotomy/', activeMatch: '/Algorithm/(.*)$', icon: 'iconfont icon-function' },
  { text: '自信面试', link: '/CSS/FontSize/', icon: 'iconfont icon-mian-shi-ti' },
  { text: '每日复习', link: '/InterviewQuestion/', icon: 'iconfont icon-mian-shi-ti' },
  { text: '小技巧', link: '/Tips/CSS/Form/001/' },
  { text: 'Git', link: '/Git/', icon: 'iconfont icon-git' },
  { text: '文章推广', link: '/Promotion/Server/',  activeMatch: '/Promotion/(.*)$' },
  { text: '推荐', link: '/Recommend/CSS/', activeMatch: '/Recommend/(.*)$', icon: 'iconfont icon-hot' }
]

export const sidebar: SidebarObjectOptions = {
  ...frontEndSidebar,
  ...interviewSidebar,
  ...nginxSidebar,
  ...javaSidebar,
  ...tipsSidebar,
  '/InterviewQuestion/': [
    // ''
  ],
  '/Promotion/': [
    'Server/',
    'Nginx/',
    'QianKun/',
    'Webpack/',
    'JavaScript-Skill/',
  ],
  '/DesignPattern/': [
    // { text: '设计模式', icon: 'iconfont icon-note' },
    'Info/', // 简单介绍
    'Observer/', // 观察者模式
  ],
  '/Algorithm/': [
    // { text: '常用算法', icon: 'iconfont icon-function' },
    'Dichotomy/', // 二分查找理论
    'DynamicProgram/', // 动态规划算法
    'PriorityTraversal/', // 优先遍历算法
  ],
  '/Performance/': [
    // { text: '性能优化', icon: 'iconfont icon-creative' },
    'Info/',
    'Skill/',
  ],
  '/Recommend': [
    // { text: '推荐', icon: 'iconfont icon-hot' },
    'CSS/',
    'Other/',
  ]
}
