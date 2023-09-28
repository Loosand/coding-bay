<script setup>
import { useWindowScroll } from '@vueuse/core'
import { useMenuStore } from '@/stores/nav'

const menuStore = useMenuStore()
const { y } = useWindowScroll()
</script>

<template>
  <!-- HERO -->
  <div
    :class="{ 'h-20 md:h-64': y < 60 }"
    class="z-50 flex h-20 items-center justify-center bg-gray-900 transition-all duration-300 md:h-24"
  >
    <div
      :class="{ 'md:flex-col': y < 60 }"
      class="flex w-full items-center justify-around gap-4 md:justify-center"
    >
      <i
        :class="{ 'ri-menu-line': !menuStore.ismenuOpen, 'ri-close-line': menuStore.ismenuOpen }"
        @click="menuStore.toggleMenu()"
        class="-ml-10 text-4xl font-bold transition-all duration-500 hover:rotate-90 md:hidden"
      ></i>

      <h1
        :class="{ 'justify-items-starts': y > 60, 'text-7xl': y < 60 }"
        class="hidden text-3xl font-bold md:block"
      >
        <span class="font-light">Cod</span>ing Bay
      </h1>
      <div class="flex items-center gap-4 text-5xl font-bold">
        <span class="shadow-md">{</span>
        <div :class="{ 'flex-col': y > 80 }" class="flex gap-4">
          <input
            type="search"
            autofocus
            placeholder="🔎 学习最前沿、实用的前端技术"
            autocomplete="off"
            spellcheck="false"
            role="combobox"
            class="mt-2 w-72 rounded-md px-3 py-2 text-base font-semibold text-black shadow-md outline"
          />
        </div>
        <span class="shadow-md">}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
