import { AutoLinkOptions as AutoLinkOption } from 'vuepress-theme-hope';

// 重新调整sidebar的侧边栏类型
interface SidebarItemNew extends AutoLinkOptions{
  children: SidebarItem[];
  collapsible?: boolean
}

export type SidebarItem = AutoLinkOptions | SidebarItemNew | Omit<AutoLinkOptions, 'link'> | string;
export type SidebarObjectOptions = Record<string, SidebarItem[] | "structure" | "heading" | false>;
export type AutoLinkOptions = AutoLinkOption;