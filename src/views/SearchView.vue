<script setup>
import CategoryItem from '@/components/CategoryItem.vue'
import LayoutHeader from '@/layout/Components/LayoutHeader.vue'
import router from '@/router'
import allData from '../data/all.json'
import { useMenuStore } from '@/stores/nav'
import { useNavStore } from '@/stores/nav'

const menuStore = useMenuStore()
const navStore = useNavStore()
</script>

<template>
  <header class="fixed top-0 z-40 w-screen">
    <div class="relative">
      <LayoutHeader class="md:shadow-lg" />
      <!-- MENU-MOBILE -->
      <nav v-show="menuStore.isMenuOpen" class="block text-white transition md:hidden">
        <ul class="item-center flex flex-col flex-wrap gap-3 bg-gray-600 px-8 py-4 font-bold">
          <li
            v-for="i in allData"
            key="i.id"
            class="cursor-pointer rounded-md transition hover:bg-white hover:text-black dark:hover:bg-gray-800 dark:hover:text-white"
            :class="{ current_mobile: navStore.currentIndex === i.id }"
            @click="navStore.currentIndex = i.id"
          >
            <keep-alive
              ><router-link
                class="flex h-12 items-center justify-center whitespace-nowrap px-6 last:md:px-8"
                :to="i.link"
                @click="menuStore.toggleMenu()"
                >{{ i.name }}</router-link
              ></keep-alive
            >
          </li>
        </ul>
      </nav>

      <svg
        class="absolute inset-0 m-16 hidden w-16 cursor-pointer fill-white hover:fill-sky-600 md:block"
        @click="router.back()"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"
        ></path>
      </svg>
    </div>
  </header>

  <!-- 未搜索
  <div class="m-auto w-fit pt-28 text-4xl font-bold md:pt-72 dark:text-white">
    <div>
      <h1>
        没有找到关于<span class="px-3 text-red-500">{{ searchStore.keywordPinia }}</span
        >的搜索结果
      </h1>
    </div>
    <div>请搜索</div>
  </div> -->

  <!-- 已搜索 -->
  <div class="ml-8 mr-5 h-[1000px] space-y-6 pt-28 md:ml-36 md:pt-72">
    <h1 class="text-4xl font-bold dark:text-white">
      <span class="px-3 text-red-500"></span>的搜索结果
    </h1>

    <div class="z-10 m-auto" transition-duration=".3s" gutter="16" v-masonry="containerId">
      <CategoryItem class="mb-5" v-masonry-tile v-for="i in allData" :key="i.id" :item="i">
      </CategoryItem>
    </div>
  </div>
</template>
