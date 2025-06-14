import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { getDirname, path } from "vuepress/utils";
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/my-blog/",
  dest: 'public', // vuepress build 的输出目录
  lang: 'zh-CN',
  head: [
    // 百度站点验证
    ['link', { rel: 'javascript', href: 'https://cdn.bootcdn.net/ajax/libs/view-design/4.7.0/iview.js' }],
    ["meta", { name: "baidu-site-verification", content: "nGf5yi0Gec" }],
    ["meta", { name: "baidu-site-verification", content: "4H7tszevS8" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/assets/safari-pinned-tab.svg",
        color: "#5c92d1",
      },
    ],
  ],
  theme,
  markdown: {
    headers: {
      level: [1,2,3,4,5,6]
    }
  },
  alias: {
    '@src': path.resolve(__dirname, '..'),
  },
  // Enable it with pwa
  // shouldPrefetch: false,
});
