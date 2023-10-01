<script setup>
import { useWindowScroll } from '@vueuse/core'
import { useMenuStore } from '@/stores/nav'
import { ref } from 'vue'

const menuStore = useMenuStore()
const { y } = useWindowScroll()

// const keyword = ''
//
// const search = (i) => {}

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
    class="relative z-40 flex h-20 w-full items-center justify-around gap-4 bg-gradient-to-r from-cyan-600 to-sky-600 font-bold transition-all duration-300 dark:bg-gradient-to-r dark:from-gray-900 dark:to-stone-900 dark:text-white md:h-24 md:justify-center"
  >
    <!-- MOBILE MENU ICON -->
    <i
      :class="menuStore.ismenuOpen ? 'ri-close-line' : 'ri-menu-line'"
      @click="menuStore.toggleMenu()"
      class="text-4xl md:hidden"
    ></i>

    <!--TITLE -->
    <h1
      :class="{ 'justify-items-starts': y > 60, 'md:text-6xl': y < 60 }"
      class="hidden text-3xl dark:text-red-500 md:block md:text-3xl"
    >
      <span class="font-light">Cod</span>ing Bay
    </h1>

    <!-- SEARCH INPUT -->
    <div class="flex items-center gap-4 text-5xl">
      <div
        :class="{ 'flex-col before:hidden after:hidden': y > 60 }"
        class="flex gap-4 overflow-hidden before:content-['{'] after:content-['}']"
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
          class="mt-2 w-72 rounded-sm px-3 py-2 text-base font-semibold text-black shadow-md outline-white focus:outline-black dark:bg-gray-900 dark:outline dark:focus:outline-white"
        />
      </div>
    </div>

    <!--    -->
    <button class="absolute right-32 mb-8 hidden text-4xl md:block">
      <i v-show="mode" @click="darkMode" class="ri-sun-fill absolute"></i>
      <i v-show="!mode" @click="lightMode" class="ri-moon-fill absolute"></i>
    </button>
  </header>
</template>
