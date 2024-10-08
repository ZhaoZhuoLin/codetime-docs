import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'
import { nav } from './nav'
import mdItCustomAttrs from "markdown-it-custom-attrs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // appearance: 'dark',
  title: "代码时间 | CodeTime",
  description: "代码时间",
  head: [
    ["link", {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css"
    }],
    ["script", {
      src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"
    }],
  ],
  markdown: {
    lineNumbers: false,
    theme: { light: 'github-light', dark: 'github-dark' },
    config: (md) => md.use(mdItCustomAttrs, "image", {
      "data-fancybox": "gallery"
    })
  },
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: 'local'
    },
    outlineTitle: '目录',
    logo: "./codetime.jpg",
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZhaoZhuoLin' }
    ],
    footer: {
      message: "MIT License.",
      copyright: "Copyright © 2024 CodeTime",
    },
    lastUpdatedText: '最后一次更新于',
    editLink: {
      pattern:
        'https://github.com/chengpeiquan/learning-vue3/edit/main/docs/:path',
      text: '在 GitHub 上编辑本章内容',
    },
    docFooter: {
      prev: '上一章',
      next: '下一章',
    },
  }
})
