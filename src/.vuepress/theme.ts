import { hopeTheme } from "vuepress-theme-hope";
import { nav, sidebar } from "./router";
import { MR_HOPE_AVATAR } from "./logo";

export default hopeTheme({
  hostname: "https://shaohui-jin.github.io",

  author: {
    name: "石怜安",
    url: "https://shaohui-jin.github.io"
  },

  iconPrefix: "iconfont icon-",
  // iconAssets: "fontawesome-with-brands",

  logo: "https://shaohui-jin.github.io/picx-images-hosting/blog/Logo/User.73tpi84jwb.gif",

  repo: 'https://github.com/shaohui-jin/shaohui-jin.github.io',
  repoDisplay: false,

  docsDir: "src",

  blog: {
    medias: {
      QQ: "http://wpa.qq.com/msgrd?v=3&uin=1051131737&site=qq&menu=yes",
      Qzone: "https://1051131737.qzone.qq.com/",
      Gmail: "mailto:a1051131737@outlook.com",
      // Zhihu: "https://www.zhihu.com/people/mister-hope",
      // Steam: "https://steamcommunity.com/id/Mr-Hope/",
      Weibo: "https://weibo.com/6459900628/profile?topnav=1&wvr=6&is_all=1",
      // GitHub: "https://github.com/Mister-Hope",
      Gitee: "https://gitee.com/jin-shaohui",
      // Baidu: "https://example.com",
      // BiliBili: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      // Email: "mailto:info@example.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      // GitHub: "https://example.com",
      // Gitlab: "https://example.com",
      // Gmail: "mailto:info@example.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
      // MrHope: ["https://mister-hope.com", MR_HOPE_AVATAR],
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: nav,

      // sidebar
      sidebar: sidebar,

      footer: "默认页脚",

      displayFooter: true,

      blog: {
        description: "一个前端开发者",
        intro: "/intro",
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },

  // enable it to preview all changes in time
  // hotReload: true,

  plugins: {
    blog: true,
    components: {
      components: ["Badge", "VPCard"],
    },
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      include: true,
      mark: true,
      footnote: true,
      vuePlayground: true,
      figure: true, // 启用 figure
      imgLazyload: true, // 启用图片懒加载
      imgMark: true, // 启用图片标记
      imgSize: true, // 启用图片大小
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
    },
  },
});
