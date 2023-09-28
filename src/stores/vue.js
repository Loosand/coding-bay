import { defineStore } from 'pinia'

export const useVueStore = defineStore('vue', () => {
  const vue = [
    {
      id: 1,
      title: 'Vue',
      titleColor: 'text-black',
      subTitle: '渐进式\n' + 'JavaScript 框架',
      intro: '易学易用，性能出色，适用场景丰富的 Web 前端框架。',
      enUrl: 'https://vuejs.org/',
      zhUrl: 'https://cn.vuejs.org/',
      icon: '/src/assets/icons/vue.svg'
    },
    {
      id: 2,
      title: 'Pinia',
      titleColor: 'text-yellow-600',
      subTitle: '符合直觉的 \n' + 'Vue.js 状态管理库',
      intro: '您将喜欢使用的 Vue 存储库',
      enUrl: 'https://pinia.vuejs.org/',
      zhUrl: 'https://pinia.vuejs.org/zh/',
      icon: '/src/assets/icons/pinia.svg'
    },
    {
      id: 3,
      title: 'Vue Router',
      titleColor: 'text-green-600',
      subTitle: 'Vue.js 的官方路由',
      intro: '为 Vue.js 提供富有表现力、可配置的、方便的路由',
      enUrl: 'https://router.vuejs.org/',
      zhUrl: 'https://router.vuejs.org/zh/',
      icon: '/src/assets/icons/vue.svg'
    },
    {
      id: 4,
      title: 'VueX',
      titleColor: 'text-green-600',
      subTitle: '集中式存储管理应用状态',
      intro: '一个专为 Vue.js 应用程序开发的状态管理模式 + 库',
      enUrl: 'https://vuex.vuejs.org/',
      zhUrl: 'https://vuex.vuejs.org/zh/',
      icon: '/src/assets/icons/vue.svg'
    },
    {
      id: 5,
      title: 'Nuxt',
      titleColor: 'text-green-600',
      subTitle: '易懂的Web框架',
      intro: '使用Nuxt自信地构建下一个Vue.js应用程序。',
      enUrl: 'https://nuxt.com/',
      zhUrl: 'https://nuxt.com.cn/',
      icon: '/src/assets/icons/nuxt.svg'
    }
  ]

  const tool = [
    {
      id: 1,
      title: 'VueUse',
      titleColor: 'text-green-600',
      subTitle: 'Collection of Vue Composition Utilities',
      intro: 'Collection of Essential Vue Composition Utilities',
      enUrl: 'https://vueuse.org/',
      icon: '/src/assets/icons/vueuse.svg'
    },
    {
      id: 2,
      title: 'VueHooks Plus',
      titleColor: 'text-green-600',
      subTitle: '让开发具有飞一般的体验的Hook',
      enUrl: 'https://inhiblab-core.gitee.io/docs/hooks/en/index.html',
      zhUrl: 'https://inhiblab-core.gitee.io/docs/hooks/index.html',
      icon: '/src/assets/icons/vuehook.svg'
    },
    {
      id: 3,
      title: 'Vue Cli',
      titleColor: 'text-green-600',
      subTitle: '🛠️ Vue.js 开发的标准工具',
      intro:
        'Vue CLI 现已处于维护模式!\n' +
        '现在官方推荐使用 create-vue 来创建基于 Vite 的新项目。另外请参考 Vue 3 工具链指南 以了解最新的工具推荐。',
      enUrl: 'https://cli.vuejs.org',
      zhUrl: 'https://cli.vuejs.org/zh/',
      icon: '/src/assets/icons/vue.svg'
    },
    {
      id: 4,
      title: 'Vite',
      titleColor: 'text-purple-600',
      subTitle: '下一代的前端工具链',
      intro: '为开发提供极速响应',
      enUrl: 'https://vitejs.dev',
      zhUrl: 'https://cn.vitejs.dev',
      icon: '/src/assets/icons/vite.svg'
    },
    {
      id: 5,
      title: 'VuePress',
      titleColor: 'text-green-600',
      subTitle: 'Vue 驱动的静态网站生成器',
      enUrl: 'https://vuepress.vuejs.org',
      zhUrl: 'https://vuepress.vuejs.org/zh/',
      icon: '/src/assets/icons/vuepress.png'
    },
    {
      id: 6,
      title: 'VitePress',
      titleColor: 'text-green-600',
      subTitle: 'Vite & Vue Powered Static Site Generator',
      intro: "Simple, powerful, and fast. Meet the modern SSG framework you've always wanted.",
      enUrl: 'https://vitepress.dev/',
      zhUrl: 'https://vitejs.cn/vitepress/',
      icon: '/src/assets/icons/vitepress.webp'
    }
  ]

  const ui = [
    {
      id: 1,
      title: 'Element Plus',
      titleColor: 'text-blue-400',
      subTitle: '基于 Vue 3，面向设计师和开发者的组件库',
      enUrl: 'https://element-plus.gitee.io/en-US/',
      zhUrl: 'https://element-plus.gitee.io/zh-CN/',
      icon: '/src/assets/icons/element.svg'
    },
    {
      id: 2,
      title: 'Vuetify',
      titleColor: 'text-blue-400',
      subTitle: 'Material style Components',
      enUrl: 'https://vuetifyjs.com/en/',
      zhUrl: 'https://vuetifyjs.com/zh-Hans/',
      icon: '/src/assets/icons/vuetify.svg'
    }
  ]

  return { vue, tool, ui }
})
