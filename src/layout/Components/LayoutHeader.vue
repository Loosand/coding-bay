<script setup>
import { ref } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { useMenuStore } from '@/stores/nav'
import { useSearchStore } from '@/stores/search'

const menuStore = useMenuStore()
const searchStore = useSearchStore()
const { y } = useWindowScroll()
const { keyword, search } = searchStore

// 黑暗模式
const mode = ref(true)
const darkMode = () => {
  if (localStorage.theme === 'dark' || !('theme' in localStorage)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  localStorage.theme = 'light'

  localStorage.theme = 'dark'
  localStorage.removeItem('theme')

  mode.value = !mode.value // toggle mode
}
const lightMode = () => {
  document.documentElement.classList.remove('dark')
  mode.value = !mode.value // toggle mode
}
</script>

<template>
  <header
    :class="{ 'md:h-64 md:flex-col': y < 60 }"
    class="relative flex h-20 items-center justify-around gap-4 bg-gray-800 font-bold text-white shadow-lg transition-all duration-300 dark:bg-gray-900 dark:text-white md:h-24 md:justify-center md:bg-gray-900 md:shadow-none dark:md:bg-gradient-to-r dark:md:from-gray-900 dark:md:to-stone-900"
  >
    <!-- MOBILE MENU ICON -->
    <img
      :src="
        menuStore.isMenuOpen
          ? 'https://loosand-picture.oss-cn-hangzhou.aliyuncs.com/img/close.svg'
          : 'https://loosand-picture.oss-cn-hangzhou.aliyuncs.com/img/menu.svg'
      "
      @click="menuStore.toggleMenu()"
      class="md:hidden"
      alt="menu icon"
    />

    <!--TITLE -->
    <h1
      :class="{ 'justify-items-starts': y > 60, 'md:text-6xl': y < 60 }"
      class="hidden text-3xl dark:text-red-500 md:block"
    >
      <span class="font-light">Cod</span>ing Bay
    </h1>

    <!-- SEARCH INPUT -->
    <div class="flex items-center gap-4 pb-1">
      <div
        :class="{ 'flex-col md:before:hidden md:after:hidden': y > 60 }"
        class="flex gap-4 overflow-hidden text-5xl before:hidden before:content-['{'] after:hidden after:content-['}'] md:before:block md:after:block"
      >
        <input
          v-model="keyword"
          @keyup.enter="search(keyword)"
          type="search"
          autofocus
          placeholder="🔎 学习最前沿、实用的前端技术"
          autocomplete="off"
          spellcheck="false"
          role="combobox"
          class="mt-2 w-80 rounded-sm px-3 py-2 text-base font-semibold text-black shadow-md outline-white focus:outline-black dark:bg-gray-900 dark:text-white dark:outline dark:focus:outline-white"
        />
      </div>
    </div>

    <!-- Dark Mode  -->
    <button class="absolute right-32 hidden md:block">
      <img
        src="https://loosand-picture.oss-cn-hangzhou.aliyuncs.com/img/sun.svg"
        v-show="mode"
        @click="darkMode"
        alt="light mode"
      />
      <img
        src="https://loosand-picture.oss-cn-hangzhou.aliyuncs.com/img/moon.svg"
        v-show="!mode"
        @click="lightMode"
        alt="dark mode"
      />
    </button>
  </header>
</template>

<style scoped>
img {
  @apply w-10;
}
</style>
