import { defineStore } from 'pinia'
import docs_icon from '@/assets/icons/docs.svg'
import cssreference_icon from '@/assets/icons/cssreference.png'
import cssportal_icon from '@/assets/icons/cssportal.png'
import htmlreference_icon from '@/assets/icons/htmlreference.png'
import wxbook_icon from '@/assets/icons/wxbook.svg'
import video_icon from '@/assets/icons/video.svg'
import book_icon from '@/assets/icons/book.svg'
import tailwind_icon from '@/assets/icons/tailwind.svg'
import unocss_icon from '@/assets/icons/unocss.svg'
import bootstrap_icon from '@/assets/icons/bootstrap.png'
// import sass_icon from '@/assets/icons/sass.svg'
// import less_icon from '@/assets/icons/less.svg'

export const useCssStore = defineStore('css', () => {
  const css = [
    {
      id: 1,
      title: 'MDN',
      titleColor: 'text-black',
      subTitle: 'Resources for Developers,by Developers',
      intro: 'Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.',
      enUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      zhUrl: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS',
      icon: docs_icon
    },
    {
      id: 2,
      title: 'css Reference',
      titleColor: 'text-black',
      subTitle: 'CSS 可视化文档',
      enUrl: 'https://cssreference.io/',
      zhUrl: 'https://blog.poetries.top/css-reference/',
      icon: cssreference_icon
    },
    {
      id: 3,
      title: 'CSS Portal',
      titleColor: 'text-green-600',
      subTitle: 'Generators & Resources',
      intro:
        'CSS Portal is home to many examples of CSS / HTML and how it can be used in website design. ',
      enUrl: 'https://www.cssportal.com/',
      icon: cssportal_icon
    },
    {
      id: 4,
      title: 'HTML Reference',
      titleColor: 'text-orange-600',
      subTitle: 'A free guide to HTML',
      intro:
        'Learn by example: htmlreference.io is a free guide to HTML. It features all elements and attributes.',
      enUrl: 'https://htmlreference.io/',
      icon: htmlreference_icon
    },
    {
      id: 5,
      title: 'HTML5元素周期表',
      titleColor: 'text-green-600',
      subTitle: 'Periodic Table of the HTML5 Elements',
      enUrl: 'https://www.xuanfengge.com/funny/html5/element/',
      icon: docs_icon
    },
    {
      id: 6,
      title: 'CSS世界',
      titleColor: 'text-green-600',
      subTitle: 'CSS2圣经',
      intro:
        '本书从前端开发人员的需求出发，以“流”为线索，从结构、内容到美化装饰等方面，全面且深入地讲解前端开发人员必须了解和掌握的大量的CSS知识点。',
      zhUrl: 'https://weread.qq.com/web/bookDetail/00932ab0715a41e90093ab5',
      icon: wxbook_icon
    },
    {
      id: 7,
      title: 'CSS新世界',
      titleColor: 'text-green-600',
      subTitle: 'CSS3圣经',
      intro: '这是一本关于CSS的进阶读物，专门讲CSS3及其之后版本的新特性。',
      zhUrl: 'https://weread.qq.com/web/bookDetail/13c32c90726fa07d13c0072',
      icon: wxbook_icon
    },
    {
      id: 8,
      title: 'CSS揭秘',
      titleColor: 'text-green-600',
      subTitle: '使用CSS3特性增强体验',
      intro: '本书将带领读者循序渐进地探寻更优雅的解决方案，攻克每天都会遇到的各种网页样式难题。',
      zhUrl: 'https://weread.qq.com/web/bookDetail/77832ba0718ff5d377894a0',
      icon: wxbook_icon
    },
    {
      id: 9,
      title: 'CSS选择器世界',
      titleColor: 'text-green-600',
      subTitle: '提升你的竞争力',
      intro:
        '以CSS选择器的基本概念、优先级、命名、best实践以及各伪类选择器的适用场景为技术主线，为CSS开发人员介绍有竞争力的知识和技能。',
      zhUrl: 'https://weread.qq.com/web/bookDetail/19832760813ab7cfbg011dcc',
      icon: wxbook_icon
    },
    {
      id: 10,
      title: 'HTML&CSS系统课',
      titleColor: 'text-purple-600',
      subTitle: '使用 HTML 和 CSS 构建响应式真实世界网站',
      intro: '最实用、最容易应用的网页设计和开发课程。',
      zhUrl:
        'https://www.bilibili.com/video/BV1A34y1e7wL/?p=1&vd_source=7a9a8e283cdf9d5ce89d9263c3f4fc4f',
      icon: video_icon
    },
    {
      id: 11,
      title: 'CSS3系统课',
      titleColor: 'text-purple-600',
      subTitle: 'Advanced CSS and Sass',
      intro:
        '您将学习复杂的 CSS 动画、高级响应式设计技术、flexbox 布局、Sass、CSS 架构、基本 CSS 概念等等。',
      zhUrl:
        'https://www.bilibili.com/video/BV1n94y1o7yS/?spm_id_from=333.999.0.0&vd_source=7a9a8e283cdf9d5ce89d9263c3f4fc4f',
      icon: video_icon
    },
    {
      id: 12,
      title: 'Web内容无障碍指南',
      titleColor: 'text-blue-600',
      subTitle: 'Web内容无障碍指南（WCAG）2.1涵盖了使Web内容更易于访问的各种建议。',
      intro: '遵循这些准则将使更多残疾人更容易获取网站内容,但不会满足这些残疾用户的所有需求。',
      zhUrl: 'https://www.w3.org/Translations/WCAG21-zh/#abstract',
      icon: book_icon
    }
  ]

  const tool = [{}]

  const frame = [
    {
      id: 1,
      title: 'TailwindCSS',
      titleColor: 'text-blue-400',
      subTitle: '只需书写 HTML 代码，无需书写 CSS，即可快速构建美观的网站。',
      intro:
        '本 CSS 框架本质上是一个工具集，包含了大量类似 flex、 pt-4、 text-center 以及 rotate-90 等工具类，可以组合使用并直接在 HTML 代码上实现任何 UI 设计。',
      enUrl: 'https://tailwindcss.com/',
      zhUrl: 'https://www.tailwindcss.cn/',
      icon: tailwind_icon
    },
    {
      id: 2,
      title: 'UnoCSS',
      titleColor: 'text-green-400',
      subTitle: '按需引入、即时原子化CSS引擎',
      intro: '没有核心实用程序，所有功能都通过预设提供。',
      enUrl: 'https://getbootstrap.com/',
      zhUrl: 'https://venerable-strudel-d42cce.netlify.app/',
      icon: unocss_icon
    },
    {
      id: 3,
      title: 'Bootstrap',
      titleColor: 'text-purple-400',
      subTitle: '用 Bootstrap 构建快速、响应式布局的网站',
      intro:
        '强大、可扩展、功能丰富的前端开发工具包。它提供的功能包括：基于 Sass 进行编译和定制、内置的网格系统和组件、强大的 JavaScript 插件等。',
      enUrl: 'https://unocss.dev/',
      zhUrl: 'https://v5.bootcss.com/',
      icon: bootstrap_icon
    },
    {
      id: 4,
      title: 'Sass',
      titleColor: 'text-black',
      subTitle: 'CSS 预处理器',
      intro: '世界上最成熟、最稳定、最强大的专业级CSS扩展语言！',
      enUrl: 'https://sass-lang.com/',
      icon: bootstrap_icon
    },
    {
      id: 5,
      title: 'Less',
      titleColor: 'text-black',
      subTitle: '给 CSS 加点料。',
      intro: "It's CSS, with just a little more.\n！",
      enUrl: 'https://lesscss.org/',
      zhUrl: 'https://less.bootcss.com/',
      icon: bootstrap_icon
    }
  ]

  return { css, frame, tool }
})
