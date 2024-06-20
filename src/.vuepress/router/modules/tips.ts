import { SidebarObjectOptions } from '../interface';

export const tipsSidebar: SidebarObjectOptions = {
  '/Tips/': [
    {
      text: 'CSS',
      icon: 'iconfont icon-css',
      activeMatch: '/CSS/(.*)$',
      // collapsible: true,
      children: [
        {
          text: '表单相关',
          children: [
            'CSS/Form/001/',
            'CSS/Form/002/',
          ]
        },
        {
          text: '文本排版相关',
          children: [
            'CSS/TextLayout/001/',
            'CSS/TextLayout/002/',
            'CSS/TextLayout/003/',
            'CSS/TextLayout/004/',
          ]
        },
        {
          text: '布局排版相关',
          children: [
            'CSS/Layout/001/',
            'CSS/Layout/002/',
            'CSS/Layout/003/',
            'CSS/Layout/004/',
            'CSS/Layout/005/',
          ]
        },
        {
          text: '过渡动画相关',
          children: [
            'CSS/Transition/001/',
            'CSS/Transition/002/',
          ]
        }
      ]
    },
    {
      text: 'JavaScript',
      icon: 'iconfont icon-javascript',
      activeMatch: '/JavaScript/(.*)$',
      // collapsible: true,
      children: [
        {
          text: '数据操作相关',
          children: [
            'JavaScript/Data/001/',
            'JavaScript/Data/002/',
            'JavaScript/Data/003/',
            'JavaScript/Data/004/',
          ]
        },
        {
          text: '设计模式相关',
          children: [
            'JavaScript/DesignPatterns/001/',
          ]
        },
        {
          text: '交互相关',
          children: [
            'JavaScript/Interaction/001/',
          ]
        },
        {
          text: 'Vue相关',
          children: [
            'JavaScript/Vue/001/',
          ]
        },
        {
          text: 'WEB API相关',
          children: [
            'JavaScript/WebApi/001/',
            'JavaScript/WebApi/002/',
            'JavaScript/WebApi/003/',
          ]
        },
        {
          text: '优化相关',
          children: [
            'JavaScript/Optimization/001/',
          ]
        }
      ]
    },
  ],
};
