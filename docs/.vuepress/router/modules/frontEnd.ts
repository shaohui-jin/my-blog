import { SidebarObjectOptions } from '../interface';

export const frontEndSidebar: SidebarObjectOptions = {
  '/FrontEnd/': [
    {
      text: '规范指南',
      icon: 'iconfont icon-guifan',
      collapsible: true,
      children: ['Standard/HTML/', 'Standard/ES6/', 'Standard/RESTful/',]
    },
    {
      text: 'CSS Demo',
      icon: 'iconfont icon-space_demo',
      collapsible: true,
      children: ['CssComponent/Checked/', 'CssComponent/Login/', 'CssComponent/Shutters/', 'CssComponent/StreamerButton/',]
    },
    {
      text: '绘制',
      icon: 'iconfont icon-bim_donghua',
      collapsible: true,
      children: ['Draw/Canvas/', 'Draw/Svg/',]
    },
    {
      text: 'JavaScript',
      icon: 'iconfont icon-javascript',
      collapsible: true,
      children: [
        { text: '知识模块', collapsible: true, children: ['JavaScript/EventLoop/', 'JavaScript/Reflect/', 'JavaScript/Question/',] },
        { text: '跨域', collapsible: true, children: ['JavaScript/Jsonp/'] },
        { text: '小技巧', collapsible: true, children: ['JavaScript/Skill/'] },
        { text: '代码题', collapsible: true, children: ['JavaScript/LRU/', 'JavaScript/Storage/', 'JavaScript/FlatJson/',] },
      ]
    },
    {
      text: '打包配置',
      icon: 'iconfont icon-dabaopeizhi',
      collapsible: true,
      children: ['Configuration/Webpack/', 'Configuration/Dependencies/',]
    },
    {
      text: 'VUE',
      icon: 'iconfont icon-vue',
      collapsible: true,
      children: [
        { text: '知识模块', collapsible: true, children: ['Vue/LifeCycle/','Vue/Communicate/','Vue/Question/'] },
        { text: 'VUE 指令', collapsible: true, children: ['Vue/Directive/ClickOutside/'] },
        { text: '小技巧', collapsible: true, children: [ 'Vue/Skill/LazyLoader/', 'Vue/Skill/Freeze/', 'Vue/Skill/Context/', 'Vue/Skill/@Hook/', 'Vue/Skill/Computed/', 'Vue/Skill/Sync/', 'Vue/Skill/Slot/'] },
      ]
    },
    {
      text: 'React篇',
      icon: 'iconfont icon-react',
      collapsible: true,
      children: ['React/Hooks/']
    },
    {
      text: '微前端',
      icon: 'iconfont icon-wu',
      collapsible: true,
      children: ['Micro/QianKun/']
    },
    {
      text: '浏览器',
      icon: 'iconfont icon-liulanqi',
      collapsible: true,
      children: ['Network/BrowserCache/', 'Network/CrossDomain/', 'Network/Question/']
    },
  ],
};