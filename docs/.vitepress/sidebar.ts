import type { DefaultTheme } from 'vitepress'
export const sidebar: DefaultTheme.Sidebar = {
  "Engine": [
    {
      text: "前端工程化",
      collapsed: false,
      items: [{
        text: '理解工程化',
        link: '/Engine/01-认识工程化'
      }, {
        text: 'JavaScript模块化',
        link: '/Engine/02-JavaScript模块化'
      }, {
        text: '详解AST及其应用',
        link: '/Engine/03-AST及其应用'
      }, {
        text: '好站分享',
        link: '/Engine/好站分享'
      },]
    },
  ]
}
