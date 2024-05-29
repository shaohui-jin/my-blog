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
          text: '排版相关',
          children: [
            'CSS/Layout/001/',
            'CSS/Layout/002/'
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
          ]
        },
        {
          text: '设计模式相关',
          children: [
            'JavaScript/DesignPatterns/001/',
          ]
        },
        {
          text: 'Vue相关',
          children: [
            'JavaScript/Vue/001/',
          ]
        },
        {
          text: '文件操作相关',
          children: [
            'JavaScript/File/001/'
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
