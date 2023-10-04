<script setup>
import { useNodeStore } from '@/stores/node'
import CategoryItem from '@/components/CategoryItem.vue'
import { useSearchStore } from '@/stores/search'
import LayoutHeader from '@/layout/Components/LayoutHeader.vue'
import router from '@/router'
const { keyword, searchList } = useSearchStore()

const nodeStore = useNodeStore()
</script>

<template>
  <div class="fixed top-0 z-40 w-screen">
    <div class="relative">
      <LayoutHeader class="md:shadow-lg" />
      <i
        @click="router.back()"
        class="ri-arrow-go-back-line absolute inset-0 w-10 cursor-pointer p-7 text-4xl font-bold text-white hover:text-sky-600"
      ></i>
    </div>
  </div>

  <div class="ml-8 mr-5 h-[1000px] space-y-6 pt-28 md:ml-36 md:pt-72">
    <h1 class="text-4xl font-bold dark:text-white">{{ keyword }}的搜索结果</h1>

    <div class="z-10 m-auto" transition-duration=".3s" gutter="16" v-masonry="containerId">
      <CategoryItem
        class="mb-5"
        v-masonry-tile
        v-for="(i, index) in searchList"
        :key="index"
        :item="i"
      >
      </CategoryItem>
    </div>
  </div>
</template>
