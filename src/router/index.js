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
          path: '/blog',
          component: () => import('@/views/BlogView.vue')
        },
        {
          path: '/common',
          component: () => import('@/views/CommonView.vue')
        },
        {
          path: '/js',
          component: () => import('@/views/JsView.vue')
        },
        {
          path: '/tool',
          component: () => import('@/views/ToolView.vue')
        },
        {
          path: '/ui',
          component: () => import('@/views/UiView.vue')
        },
        {
          path: '/vue',
          component: () => import('@/views/VueView.vue')
        },
        {
          path: '/node',
          component: () => import('@/views/NodeView.vue')
        },
        {
          path: '/serve',
          component: () => import('@/views/ServerView.vue')
        },
        {
          path: '/test',
          component: () => import('@/views/TestView.vue')
        }
      ]
    }
  ]
})

export default router
