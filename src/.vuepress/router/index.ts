import { AutoLinkOptions } from 'vuepress-theme-hope';
import {
  frontEndSidebar,
  javaSidebar,
  nginxSidebar,
  tipsSidebar,
  promotionsSidebar,
  designPatternSidebar,
  algorithmSidebar,
  recommendSidebar,
  performanceSidebar,
  getFirstRouter
} from './modules';

// 重新调整sidebar的侧边栏类型
type SidebarItem = AutoLinkOptions | Omit<AutoLinkOptions, 'link'> | string;
type SidebarObjectOptions = Record<string, SidebarItem[] | "structure" | "heading" | false>;

export const nav: AutoLinkOptions[] = [
  { text: '首页', link: '/' },
  { text: '每日复习', link: '/InterviewQuestion/', icon: 'iconfont icon-mian-shi-ti' },
  { text: '精选文章', link: getFirstRouter(promotionsSidebar),  activeMatch: '/Promotion/(.*)$' },
  { text: '前端知识库', link: getFirstRouter(frontEndSidebar), activeMatch: '/FrontEnd/(.*)$', },
  { text: 'Java', link: getFirstRouter(javaSidebar), activeMatch: '/Java/(.*)$', icon: 'iconfont icon-java' },
  { text: '设计模式', link: getFirstRouter(designPatternSidebar), activeMatch: '^/DesignPattern/(.*)$', icon: 'iconfont icon-note' },
  { text: '常用算法', link: getFirstRouter(algorithmSidebar), activeMatch: '/Algorithm/(.*)$', icon: 'iconfont icon-function' },
  { text: '小技巧', link: getFirstRouter(tipsSidebar), activeMatch: '^/Tips/(.*)$' },
  { text: '推荐', link: getFirstRouter(recommendSidebar), activeMatch: '/Recommend/(.*)$', icon: 'iconfont icon-hot' }
]

export const sidebar: SidebarObjectOptions = {
  ...frontEndSidebar,
  ...nginxSidebar,
  ...javaSidebar,
  ...tipsSidebar,
  ...promotionsSidebar,
  ...designPatternSidebar,
  ...algorithmSidebar,
  ...recommendSidebar,
  ...performanceSidebar,
  '/InterviewQuestion/': [
    // ''
  ],
}
