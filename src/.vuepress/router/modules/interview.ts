import { SidebarObjectOptions } from '../interface';

export const interviewSidebar: SidebarObjectOptions = {
  '': [
    {
      text: 'CSS',
      icon: 'iconfont icon-css',
      activeMatch: '/CSS/(.*)$',
      collapsible: true,
      children: [
        {
          text: '└─ 理论',
          // collapsible: true,
          children: [
            { text: '├─ 字体大小', link: '/CSS/FontSize/' },
            { text: '├─ 格式化上下文模型 FC', link: '/CSS/FormattingContext/' },
            { text: '└─ 选择器特性', link: '/CSS/SelectorFeatures/' },
          ]
        }
      ]
    },
    {
      text: 'JavaScript',
      icon: 'iconfont icon-javascript',
      activeMatch: '/JavaScript/(.*)$',
      collapsible: true,
      children: [
        { text: '├─ 闭包以及内存泄漏原因', link: '/JavaScript/Closure/' },
        {
          text: '├─ 浏览器',
          // collapsible: true,
          children: [
            { text: '浏览器进程模型', link: '/JavaScript/BrowserProcessModel/' },
            { text: '浏览器渲染原理', link: '/JavaScript/BrowserRenderingPrinciples/' },
            { text: '浏览器缓存', link: '/JavaScript/BrowserCache/' }
          ]
        },
        {
          text: '└─ 网络',
          children: [
            '/JavaScript/AJAX/',
            '/JavaScript/CSRFAndXSS/',
            '/JavaScript/CrossDomain/',
          ],
        }
      ]
    },
    {
      text: 'TypeScript',
      icon: 'iconfont icon-typescript',
      activeMatch: '/TypeScript/(.*)$',
      collapsible: true,
      children: [
        { text: '├─ TS中的类', link: '/TypeScript/Class/'},
        { text: '├─ TS的数据类型', link: '/TypeScript/DataType/'},
        { text: '└─ TS的枚举类型', link: '/TypeScript/Enum/'},
      ]
    },
    {
      text: 'Vue',
      icon: 'iconfont icon-vuejs',
      activeMatch: '/Vue/(.*)$',
      collapsible: true,
      children: [
        { text: '├─ 生命周期', link: '/Vue/LifeCycle/' },
        { text: '└─ 通讯方式', link: '/Vue/Communication/' },
      ],
    },
    {
      text: 'React',
      collapsible: true,
      activeMatch: '/React/(.*)$',
      icon: 'iconfont icon-react',
      children: [
        { text: '└─ React 通讯方式', link: '/React/Communication/' },
      ],
    },
    {
      text: '规范指南',
      icon: 'iconfont icon-guifan',
      collapsible: true,
      children: [
        { text: '├─ HTML规范指南', link: '/Standard/HTML/' },
        { text: '├─ Restful Api', link: '/Standard/RestfulApi/' },
        { text: '└─ ECMAScript 6', link: '/Standard/ES6/' }

      ]
    },
    {
      text: '微前端',
      collapsible: true,
      activeMatch: '/Micro/(.*)$',
      icon: 'iconfont icon-qiankun',
      children: [
        { text: '└─ 乾坤', link: '/Micro/QianKun/' },
      ],
    }
  ],
};
