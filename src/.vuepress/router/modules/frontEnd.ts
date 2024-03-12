import { SidebarObjectOptions } from '../interface';

export const frontEndSidebar: SidebarObjectOptions = {
  '/FrontEnd/': [
    {
      text: '1 - 规范指南',
      icon: 'iconfont icon-guifan',
      collapsible: true,
      children: [
        { text: '1.1 - HTML规范指南', link: 'Standard/HTML/' },
        { text: '1.2 - ECMAScript 6', link: 'Standard/ES6/' },
        { text: '1.3 - RESTful API', link: 'Standard/RESTful/' },
      ]
    },
    {
      text: '2 - CSS',
      icon: 'iconfont icon-space_demo',
      collapsible: true,
      children: [
        {
          text: '2.1 - 收藏模版',
          collapsible: false,
          children: [
            { text: '2.1.1 - 打钩动画', link: 'CssComponent/Checked/' },
            { text: '2.1.2 - 登录页', link: 'CssComponent/Login/' },
            { text: '2.1.3 - 百叶窗', link: 'CssComponent/Shutters/' },
            { text: '2.1.4 - 流光按钮', link: 'CssComponent/StreamerButton' },
          ]
        },
      ]
    },
    {
      text: '3 - 图形技术',
      icon: 'iconfont icon-bim_donghua',
      collapsible: true,
      children: [
        { text: '3.1 - Svg 入门', link: 'Draw/Svg/' },
        { text: '3.1 - Canvas 入门', link: 'Draw/Canvas/' },
      ]
    },
    {
      text: '4 - JavaScript',
      icon: 'iconfont icon-javascript',
      collapsible: true,
      children: [
        {
          text: '4.1 - 理论知识',
          collapsible: true,
          children: [
            { text: '4.1.2 - Reflect', link: 'JavaScript/Reflect/' },
            { text: '4.1.3 - 面试问题', link: 'JavaScript/Question/' },
          ]
        },
        {
          text: '4.2 - 跨域相关',
          collapsible: true,
          children: [
            { text: '4.2.1 - Jsonp', link: 'JavaScript/Jsonp/' },
          ]
        },
        {
          text: '4.3 - 小技巧',
          collapsible: true,
          children: [
            { text: '4.3.1 - JavaScript 小技巧', link: 'JavaScript/Skill/' },
          ]
        },
        {
          text: '4.4 - 代码题',
          collapsible: true,
          children: [
            { text: '4.4.1 - 请使用JS完成一个LRU缓存', link: 'JavaScript/LRU/' },
            { text: '4.4.2 - 请封装一个Storage', link: 'JavaScript/Storage/' },
            { text: '4.4.3 - 请使用JS完成一个JSON扁平化', link: 'JavaScript/FlatJson/' },
          ]
        },
      ]
    },
    {
      text: '5 - 打包配置',
      icon: 'iconfont icon-dabaopeizhi',
      collapsible: true,
      children: [
        { text: '5.1 - 手写Webpack', link: 'Configuration/Webpack/' },
        { text: '5.2 - (dev)Dependencies', link: 'Configuration/Dependencies/' },
      ]
    },
    {
      text: '6 - VUE',
      icon: 'iconfont icon-vue',
      collapsible: true,
      children: [
        {
          text: '6.1 - 知识模块',
          collapsible: true,
          children: [
            { text: '6.1.1 - 生命周期', link: 'Vue/LifeCycle/' },
            { text: '6.1.2 - 组件通讯方式', link: 'Vue/Communicate/' },
            { text: '6.1.3 - 面试问题', link: 'Vue/Question/' },
          ]
        },
        {
          text: '6.2 - 源码解读',
          collapsible: true,
          children: [
            { text: '6.2.1 - VUE3工具函数源码解析', link: 'Vue3/ToolFunction/' },
          ]
        },
        {
          text: '6.3 - VUE 指令',
          collapsible: true,
          children: [
            { text: '6.3.1 - 点击组件外部', link: 'Vue/Directive/ClickOutside/' },
          ]
        },
        {
          text: '6.4 - 小技巧',
          collapsible: true,
          children: [
            { text: '6.4.1 - 懒加载', link: 'Vue/Skill/LazyLoader/' },
            { text: '6.4.2 - 数据冻结', link: 'Vue/Skill/Freeze/' },
            { text: '6.4.3 - 上下文批量引入', link: 'Vue/Skill/Context/' },
            { text: '6.4.4 - 父组件里监听子组件的生命周期', link: 'Vue/Skill/@Hook/' },
            { text: '6.4.5 - Computed中使用this', link: 'Vue/Skill/Computed/' },
            { text: '6.4.6 - 父组件通信', link: 'Vue/Skill/Sync/' },
            { text: '6.4.7 - 插槽', link: 'Vue/Skill/Slot/' },
          ]
        },
      ]
    },
    {
      text: '7 - React篇',
      icon: 'iconfont icon-react',
      collapsible: true,
      children: [
        { text: '7.1 - 浅谈12个Hooks', link: 'React/Hooks/' },
      ]
    },
    {
      text: '8 - 微前端',
      icon: 'iconfont icon-wu',
      collapsible: true,
      children: [
        { text: '8.1 - 乾坤', link: 'Micro/QianKun/' },
      ]
    },
    {
      text: '9 - 浏览器',
      icon: 'iconfont icon-liulanqi',
      collapsible: true,
      children: [
        { text: '9.1 - 浏览器缓存', link: 'Network/BrowserCache/' },
        { text: '9.2 - 跨域', link: 'Network/CrossDomain/' },
        { text: '9.3 - 面试问题', link: 'Network/Question/' },
      ]
    },
    {
      text: '10 - 性能优化',
      icon: 'iconfont icon-creative',
      collapsible: true,
      children: [
        { text: '10.1 - 浅谈性能优化', link: 'Performance/info/' },
        { text: '10.2 - 性能优化方法', link: 'Performance/Skill/' },
      ]
    },
  ],
};
