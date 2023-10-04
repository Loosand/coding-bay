import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/CssView.vue')
        },
        {
          path: '/css',
          component: () => import('@/views/CssView.vue')
        },
        {
          path: '/js',
          component: () => import('@/views/JsView.vue')
        },
        {
          path: '/vue',
          component: () => import('@/views/VueView.vue')
        },
        {
          path: '/react',
          component: () => import('@/views/ReactView.vue')
        },
        {
          path: '/node',
          component: () => import('@/views/NodeView.vue')
        },
        {
          path: '/server',
          component: () => import('@/views/ServerView.vue')
        },
        {
          path: '/ui',
          component: () => import('@/views/UiView.vue')
        },
        {
          path: '/tool',
          component: () => import('@/views/ToolView.vue')
        },
        {
          path: '/blog',
          component: () => import('@/views/BlogView.vue')
        },
        {
          path: '/common',
          component: () => import('@/views/CommonView.vue')
        },
        {
          path: '/assembly',
          component: () => import('@/views/AssemblyView.vue')
        }
      ]
    },
    {
      path: '/search/:keyword',
      component: () => import('@/views/SearchView.vue')
    }
  ]
})

export default router
