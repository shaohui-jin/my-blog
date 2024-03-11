import { photoSwipePlugin } from "vuepress-plugin-photo-swipe";
import { getDirname, path } from "@vuepress/utils";
import theme from './theme'
import { defineUserConfig } from '@vuepress/cli';
// const __dirname = getDirname(import.meta.url);

import { viteBundler } from '@vuepress/bundler-vite'
// module.exports = (options, context) => ({
export default defineUserConfig({
  base: '/', // base 将会作为前缀自动地插入到所有以 / 开始的其他选项的链接中
  dest: 'public', // vuepress build 的输出目录
  lang: 'zh-CN',
  title: '繁华中自律，落魄中自愈', // 网站的标题
  description: 'Just playing around', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
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
  // head: [
  //   ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css' }],  // 网站数据icon
  //   ['link', { rel: 'javascript', href: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js' }], // 网站数据来源
  //   ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }], // 网站数据所需
  //   ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_3114978_qe0b39no76.css' }] // 代码块隐藏的icon
  // ],
  theme,
  plugins: [
    photoSwipePlugin({
      delay: 1000,
      selector: '.theme-hope-content img'
    }),
  ],
  markdown: {
    headers: {
      level: [2,3,4]
    }
  },
  bundler: viteBundler({
    viteOptions: {
      build: {
        minify: 'terser'
      }
    },
    vuePluginOptions: {},
  }),
  // alias: {
  //   '@': path.resolve(__dirname, './../../'),
  // }
  // chainWebpack (config) {
    // config.resolve.alias.set('core-js/library/fn', 'core-js/features');
  // }
})
