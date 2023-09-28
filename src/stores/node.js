import { defineStore } from 'pinia'

export const useNodeStore = defineStore('node', () => {
  const node = [
    {
      id: 1,
      title: 'Node.js',
      titleColor: 'text-black',
      subTitle: 'Node.js文档',
      intro: 'Node.js 是一个开源的、跨平台的 JavaScript 运行时环境。',
      enUrl: 'https://nodejs.org/',
      zhUrl: 'https://nodejs.cn/',
      icon: '/src/assets/icons/docs.svg'
    },
    {
      id: 2,
      title: 'Express.js',
      titleColor: 'text-black',
      subTitle: 'Express文档',
      intro: '快速、独立、极简的 Node.js Web 框架。',
      enUrl: 'http://expressjs.com/',
      zhUrl: 'https://express.nodejs.cn/',
      icon: '/src/assets/icons/docs.svg'
    },
    {
      id: 3,
      title: 'Nest.js',
      titleColor: 'text-black',
      subTitle: 'Nest.js文档',
      intro: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架。',
      enUrl: 'https://nestjs.com/',
      zhUrl: 'https://docs.nestjs.cn/10/firststeps',
      icon: '/src/assets/icons/nest.svg'
    }
  ]

  const engineering = [
    {
      id: 1,
      title: 'Webpack',
      titleColor: 'text-black',
      subTitle: 'Webpack文档',
      intro: 'webpack 是一个用于现代 JavaScript 应用程序的 静态模块打包工具。',
      enUrl: 'https://webpack.js.org/',
      zhUrl: 'https://www.webpackjs.com/',
      icon: '/src/assets/icons/docs.svg'
    },
    {
      id: 2,
      title: 'Npm',
      titleColor: 'text-black',
      subTitle: 'npm文档',
      intro: 'npm 为你和你的团队打开了连接整个 JavaScript 天才世界的一扇大门。',
      enUrl: 'https://typescript.bootcss.com/index.html',
      zhUrl: 'https://www.npmjs.cn/',
      icon: '/src/assets/icons/npm.svg'
    },
    {
      id: 3,
      title: 'Git',
      titleColor: 'text-black',
      subTitle: '版本控制工具',
      intro:
        'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
      enUrl: 'https://git-scm.com/',
      zhUrl: 'http://gitref.justjavac.com/index.html',
      icon: '/src/assets/icons/git.svg'
    },
    {
      id: 4,
      title: 'Rollup',
      titleColor: 'text-black',
      subTitle: '模块打包工具',
      intro: 'Rollup 是一个 JavaScript 模块打包工具，可以将多个小的代码片段编译为完整的库和应用。',
      enUrl: 'https://rollupjs.org/guide/en.html',
      zhUrl: 'https://www.rollupjs.com/',
      icon: '/src/assets/icons/npm.svg'
    },
    {
      id: 5,
      title: 'Bable',
      titleColor: 'text-black',
      subTitle: '现在就开始使用下一代 JavaScript 语法吧。',
      intro: 'Babel 是一个 JavaScript 编译器。',
      enUrl: 'https://babeljs.io/',
      zhUrl: 'https://babel.docschina.org/',
      icon: '/src/assets/icons/babel.svg'
    },
    {
      id: 6,
      title: 'Yarn',
      titleColor: 'text-black',
      subTitle: '安全、稳定、reproducible projects',
      intro:
        'Yarn 是一个软件包管理器，还可以作为项目管理工具。无论你是小型项目还是大型单体仓库（monorepos），无论是业余爱好者还是企业用户，Yarn 都能满足你的需求。',
      enUrl: 'https://yarnpkg.com/',
      zhUrl: 'https://www.yarnpkg.cn/',
      icon: '/src/assets/icons/yarn.svg'
    },
    {
      id: 7,
      title: 'PostCSS',
      titleColor: 'text-black',
      subTitle: 'A tool for transforming CSS with JavaScript',
      intro: 'Post CSS 是一个用 JavaScript 工具和插件转换 CSS 代码的工具',
      enUrl: 'https://postcss.org/',
      zhUrl: 'https://www.postcss.com.cn/',
      icon: '/src/assets/icons/postcss.png'
    },
    {
      id: 8,
      title: 'EsLint',
      titleColor: 'text-black',
      subTitle: '可组装的JavaScript和JSX检查工具',
      intro:
        'ESLint 通过静态分析代码以快速发现问题。大多数文本编辑器都内置了 ESLint 支持， 但你也可以在持续集成管道中运行 ESLint。',
      enUrl: 'https://eslint.org/',
      zhUrl: 'https://zh-hans.eslint.org/',
      icon: '/src/assets/icons/eslint.png'
    },
    {
      id: 9,
      title: 'Prettier',
      titleColor: 'text-black',
      subTitle: '一个“有态度”的代码格式化工具',
      intro: 'Prettier is an opinionated code formatter',
      enUrl: 'https://prettier.io/',
      zhUrl: 'https://www.prettier.cn/',
      icon: '/src/assets/icons/prettier.png'
    }
  ]

  const tool = []

  return { node, engineering, tool }
})
