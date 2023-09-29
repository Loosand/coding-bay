<script setup>
import { useWindowScroll } from '@vueuse/core'
import { useMenuStore } from '@/stores/nav'

const menuStore = useMenuStore()
const { y } = useWindowScroll()
</script>

<template>
  <header
    :class="{ 'md:h-64 md:flex-col': y < 60 }"
    class="z-50 flex h-20 w-full items-center justify-around gap-4 bg-gray-900 font-bold transition-all duration-300 md:h-24 md:justify-center"
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
      class="hidden text-3xl md:block md:text-3xl"
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
          type="search"
          autofocus
          placeholder="🔎 学习最前沿、实用的前端技术"
          autocomplete="off"
          spellcheck="false"
          role="combobox"
          class="mt-2 w-72 rounded-sm px-3 py-2 text-base font-semibold text-black shadow-md outline-white focus:outline-black"
        />
      </div>
    </div>
  </header>
</template>
