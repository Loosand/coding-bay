<script setup>
import { useNavStore } from '@/stores/nav'
import { defineAsyncComponent } from 'vue'

// const AsyncCss = defineAsyncComponent(() => import('@/views/CssView.vue'))
// const AsyncVue = defineAsyncComponent(() => import('@/views/VueView.vue'))
// const AsyncJs = defineAsyncComponent(() => import('@/views/JsView.vue'))
// const AsyncUi = defineAsyncComponent(() => import('@/views/UiView.vue'))
// const AsyncTool = defineAsyncComponent(() => import('@/views/ToolView.vue'))
// const AsyncCommon = defineAsyncComponent(() => import('@/views/CommonView.vue'))
// const AsyncBlog = defineAsyncComponent(() => import('@/views/BlogView.vue'))

import CssView from '@/views/CssView.vue'
import VueView from '@/views/VueView.vue'
import JsView from '@/views/JsView.vue'
import UiView from '@/views/UiView.vue'
import ToolView from '@/views/ToolView.vue'
import CommonView from '@/views/CommonView.vue'
import BlogView from '@/views/BlogView.vue'

const navStore = useNavStore()
</script>

<template>
  <CssView v-show="navStore.currentIndex === 1" />
  <VueView v-show="navStore.currentIndex === 2" />
  <JsView v-show="navStore.currentIndex === 3" />
  <UiView v-show="navStore.currentIndex === 4" />
  <ToolView v-show="navStore.currentIndex === 5" />
  <CommonView v-show="navStore.currentIndex === 6" />
  <BlogView v-show="navStore.currentIndex === 7" />
</template>

<style scoped></style>
