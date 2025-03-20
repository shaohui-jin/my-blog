import { SidebarObjectOptions } from '../interface';

export const frontEndSidebar: SidebarObjectOptions = {
  '/FrontEnd/': [
    {
      text: 'CSS收藏模版',
      collapsible: true,
      children: [
        'CssComponent/Checked/',
        'CssComponent/Login/',
        'CssComponent/Shutters/',
        'CssComponent/StreamerButton/',
      ]
    },
    {
      text: '图形技术',
      collapsible: true,
      children: [
        'Draw/Svg/',
        'Draw/Canvas/'
      ]
    },
    {
      text: 'JavaScript',
      collapsible: true,
      children: [
        {
          text: '理论知识',
          collapsible: true,
          children: [
            { text: 'Reflect', link: 'JavaScript/Reflect/' },
            { text: '面试问题', link: 'JavaScript/Question/' },
          ]
        },
        {
          text: '代码题',
          collapsible: true,
          children: [
            { text: '请使用JS完成一个LRU缓存', link: 'JavaScript/LRU/' },
            { text: '请封装一个Storage', link: 'JavaScript/Storage/' },
            { text: '请使用JS完成一个JSON扁平化', link: 'JavaScript/FlatJson/' },
          ]
        },
      ]
    },
    {
      text: '打包配置',
      collapsible: true,
      children: [
        { text: '(dev)Dependencies', link: 'Configuration/Dependencies/' },
      ]
    },
    {
      text: 'VUE',
      collapsible: true,
      children: [
        {
          text: '知识模块',
          collapsible: true,
          children: [
            { text: '面试问题', link: 'Vue/Question/' },
          ]
        },
        {
          text: '源码解读',
          collapsible: true,
          children: [
            { text: 'VUE3工具函数源码解析', link: 'Vue3/ToolFunction/' },
          ]
        },
        {
          text: 'VUE 指令',
          collapsible: true,
          children: [
            { text: '点击组件外部', link: 'Vue/Directive/ClickOutside/' },
          ]
        },
        {
          text: '小技巧',
          collapsible: true,
          children: [
            { text: '懒加载', link: 'Vue/Skill/LazyLoader/' },
            { text: '数据冻结', link: 'Vue/Skill/Freeze/' },
            { text: '上下文批量引入', link: 'Vue/Skill/Context/' },
            { text: '父组件里监听子组件的生命周期', link: 'Vue/Skill/@Hook/' },
            { text: 'Computed中使用this', link: 'Vue/Skill/Computed/' },
            { text: '父组件通信', link: 'Vue/Skill/Sync/' },
            { text: '插槽', link: 'Vue/Skill/Slot/' },
          ]
        },
      ]
    },
    {
      text: 'React篇',
      collapsible: true,
      children: [
        { text: '浅谈12个Hooks', link: 'React/Hooks/' },
      ]
    },
    {
      text: '性能优化',
      collapsible: true,
      children: [
        { text: '浅谈性能优化', link: 'Performance/info/' },
        { text: '性能优化方法', link: 'Performance/Skill/' },
      ]
    },
  ],
};
