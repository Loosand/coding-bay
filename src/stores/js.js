import { defineStore } from 'pinia'

export const useJsStore = defineStore('js', () => {
  const js = [
    {
      id: 1,
      title: 'JavaScript现代教程',
      titleColor: 'text-black',
      subTitle: 'JavaScript文档',
      intro:
        '以最新的 JavaScript 标准为基准。通过简单但足够详细的内容，为你讲解从基础到高阶的 JavaScript 相关知识。',
      enUrl: 'https://javascript.info/',
      zhUrl: 'https://zh.javascript.info/',
      icon: '/src/assets/icons/js.svg'
    },
    {
      id: 2,
      title: 'TypeScript',
      titleColor: 'text-black',
      subTitle: 'TypeScript文档',
      intro:
        'TypeScript具有类型系统，且是JavaScript的超集。 它可以编译成普通的JavaScript代码。 TypeScript支持任意浏览器，任意环境，任意系统并且是开源的。',
      enUrl: 'https://typescript.bootcss.com/index.html',
      zhUrl: 'https://www.typescriptlang.org/',
      icon: '/src/assets/icons/typescript.svg'
    },
    {
      id: 3,
      title: 'JQuery',
      titleColor: 'text-black',
      subTitle: 'JQuery API文档',
      intro:
        'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. ',
      enUrl: 'https://jquery.com/',
      zhUrl: 'https://jquery.cuishifeng.cn/index.html',
      icon: '/src/assets/icons/docs.svg'
    },
    {
      id: 4,
      title: 'Vue.js',
      titleColor: 'text-black',
      subTitle: '渐进式 JavaScript 框架',
      intro: '易学易用，性能出色，适用场景丰富的 Web 前端框架。',
      enUrl: 'https://vuejs.org/',
      zhUrl: 'https://cn.vuejs.org/',
      icon: '/src/assets/icons/vue.svg'
    },
    {
      id: 5,
      title: 'React.js',
      titleColor: 'text-black',
      subTitle: 'React 文档',
      intro: '用于构建 Web 和原生交互界面的库',
      enUrl: 'https://react.dev/',
      zhUrl: 'https://zh-hans.react.dev/',
      icon: '/src/assets/icons/react.svg'
    },
    {
      id: 6,
      title: 'Angular.js',
      titleColor: 'text-black',
      subTitle: '充满自信地交付 Web 应用',
      intro: '构建未来的 Web 开发框架',
      enUrl: 'https://angular.io/',
      zhUrl: 'https://angular.cn/',
      icon: '/src/assets/icons/angular.svg'
    },
    {
      id: 7,
      title: 'Svelte.js',
      titleColor: 'text-black',
      subTitle: 'Cybernetically enhanced web apps',
      intro:
        'Svelte 是一种全新的构建用户界面的方法。传统框架如 React 和 Vue 在浏览器中需要做大量的工作，而 Svelte 将这些工作放到构建应用程序的编译阶段来处理。',
      enUrl: 'https://svelte.dev/',
      zhUrl: 'https://www.svelte.cn/',
      icon: '/src/assets/icons/svelte.svg'
    },
    {
      id: 8,
      title: 'Solid.js',
      titleColor: 'text-black',
      subTitle: 'Solid 文档',
      intro: '一个用于构建用户界面，简单高效、性能卓越的JavaScript库',
      enUrl: 'https://www.solidjs.com/',
      zhUrl: 'https://www.solidjs.com/',
      icon: '/src/assets/icons/solid.svg'
    },
    {
      id: 9,
      title: 'Lodash',
      titleColor: 'text-black',
      subTitle: 'Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。',
      intro:
        'Lodash 通过降低 array、number、objects、string 等等的使用难度从而让 JavaScript 变得更简单。',
      enUrl: 'https://lodash.com',
      zhUrl: 'https://www.lodashjs.com',
      icon: '/src/assets/icons/lodash.svg'
    },
    {
      id: 10,
      title: 'JavaScript系统课',
      titleColor: 'text-purple-600',
      subTitle: 'The Complete JavaScript Course 2023: From Zero to Expert! ',
      intro: 'JavaScript 是世界上最流行的编程语言。它为整个现代网络提供动力。',
      zhUrl:
        'https://www.bilibili.com/video/BV1vA4y197C7/?spm_id_from=333.999.0.0&vd_source=7a9a8e283cdf9d5ce89d9263c3f4fc4f',
      icon: '/src/assets/icons/video.svg'
    },
    {
      id: 11,
      title: 'JavaScript进阶',
      titleColor: 'text-purple-600',
      subTitle: 'The Advanced Concepts  ',
      intro:
        '无需花费数年时间学习高级 Javascript 概念，您可以在短短 30 天内快速掌握并获得高级 javascript 开发人员所掌握的知识。',
      zhUrl:
        'https://www.bilibili.com/video/BV19i4y1Q7w7/?spm_id_from=333.999.0.0&vd_source=7a9a8e283cdf9d5ce89d9263c3f4fc4f',
      icon: '/src/assets/icons/video.svg'
    }
    // {
    //   id: ,
    //   title: '',
    //   titleColor: 'text-black',
    //   subTitle: '',
    //   intro: '',
    //   enUrl: '',
    //   zhUrl: '',
    //   icon: '/src/assets/icons/react.svg'
    // },
    // {
    //   id: ,
    //   title: '',
    //   titleColor: 'text-black',
    //   subTitle: '',
    //   intro: '',
    //   enUrl: '',
    //   zhUrl: '',
    //   icon: '/src/assets/icons/react.svg'
    // },
    // {
    //   id: ,
    //   title: '',
    //   titleColor: 'text-black',
    //   subTitle: '',
    //   intro: '',
    //   enUrl: '',
    //   zhUrl: '',
    //   icon: '/src/assets/icons/react.svg'
    // },
  ]

  const frame = []

  const tool = []

  return { js, frame, tool }
})
