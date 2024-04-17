import { SidebarObjectOptions } from '../interface';

export const interviewSidebar: SidebarObjectOptions = {
  '': [
    {
      text: 'CSS',
      icon: 'iconfont icon-css',
      activeMatch: '/CSS/(.*)$',
      children: [
        { text: '├─ CSS 面试题总纲', link: '/CSS/InterviewQuestionOutline/', },
        {
          text: '├─ 理论',
          collapsible: true,
          children: [
            { text: '├─ 盒模型', link: '/CSS/BoxModel/' },
            { text: '└─ 选择器特性', link: '/CSS/SelectorFeatures/' },
          ]
        },
        {
          text: '└─ 样式',
          collapsible: true,
          children: [
            { text: '├─ 字体大小', link: '/CSS/FontSize/' },
            { text: '├─ 居中定位', link: '/CSS/Center/' },
            { text: '└─ 隐藏元素', link: '/CSS/HiddenElements/' },
          ]
        },
      ]
    },
    {
      text: 'JavaScript',
      icon: 'iconfont icon-javascript',
      activeMatch: '/JavaScript/(.*)$',
      children: [
        { text: '├─ JavaScript 面试题总纲', link: '/JavaScript/InterviewQuestionOutline/', },
        {
          text: '├─ 函数',
          collapsible: true,
          children: [
            { text: '└─ 闭包以及内存泄漏原因', link: '/JavaScript/Closure/' }
          ]
        },
        {
          text: '├─ 浏览器',
          collapsible: true,
          children: [
            { text: '├─ 浏览器进程模型', link: '/JavaScript/BrowserProcessModel/' },
            { text: '└─ 浏览器渲染原理', link: '/JavaScript/BrowserRenderingPrinciples/' }
          ]
        },
        {
          text: '└─ ECMAScript',
          collapsible: true,
          children: [
            { text: '└─ ECMAScript 6', link: '/JavaScript/ES6/' }
          ]
        },
      ]
    },
    {
      text: 'TypeScript',
      icon: 'iconfont icon-typescript',
      activeMatch: '/TypeScript/(.*)$',
      children: [
        { text: '├─ 说说TypeScript中的类', link: '/TypeScript/Class/'},
        { text: '├─ 说说TypeScript中的数据类型', link: '/TypeScript/DataType/'},
        { text: '└─ 说说TypeScript中的枚举类型', link: '/TypeScript/Enum/'},
      ]
    },
    {
      text: 'Vue',
      icon: 'iconfont icon-vuejs',
      activeMatch: '/Vue/(.*)$',
      children: [
        { text: '├─ Vue 生命周期', link: '/Vue/LifeCycle/' },
        { text: '└─ Vue 通讯方式', link: '/Vue/Communication/' },
      ],
    },
    {
      text: 'React',
      // collapsible: true,
      activeMatch: '/React/(.*)$',
      icon: 'iconfont icon-react',
      children: [
        { text: '└─ React 通讯方式', link: '/React/Communication/' },
      ],
    },
    {
      text: '微前端',
      // collapsible: true,
      activeMatch: '/Micro/(.*)$',
      icon: 'iconfont icon-micro',
      children: [
        { text: '└─ 乾坤', link: '/Micro/QianKun/' },
      ],
    }
  ],
};
