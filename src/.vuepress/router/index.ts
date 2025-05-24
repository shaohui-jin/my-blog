import { AutoLinkOptions } from 'vuepress-theme-hope';
import {
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
  { text: '每日复习', link: '/InterviewQuestion/', icon: 'iconfont icon-hot' },
  { text: '精选文章', link: getFirstRouter(promotionsSidebar), activeMatch: '/Promotion/(.*)$', icon: 'iconfont icon-hot' },
  { text: '代码仓', link: getFirstRouter(tipsSidebar), icon: 'iconfont icon-hot', activeMatch: '^/Tips/(.*)$' },
  // { text: '前端知识库', link: getFirstRouter(frontEndSidebar), activeMatch: '/FrontEnd/(.*)$', },
  { text: 'Java', link: getFirstRouter(javaSidebar), activeMatch: '/Java/(.*)$' },
  { text: '设计模式', link: getFirstRouter(designPatternSidebar), activeMatch: '^/DesignPattern/(.*)$' },
  { text: '常用算法', link: getFirstRouter(algorithmSidebar), activeMatch: '/Algorithm/(.*)$' },
  { text: '推荐', link: getFirstRouter(recommendSidebar), activeMatch: '/Recommend/(.*)$' }
]

export const sidebar: SidebarObjectOptions = {
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
