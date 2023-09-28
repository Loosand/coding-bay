<script setup>
import { useNavStore, useMenuStore } from '@/stores/nav'

const navStore = useNavStore()
const menuStore = useMenuStore()
</script>

<template>
  <!-- NAV-DESKTOP -->
  <nav class="hidden md:block">
    <!--    <div class="bg bg-t z-50"></div>-->
    <ul
      class="item-center flex flex-wrap justify-center gap-2 bg-red-500 px-8 pb-2 pt-3 font-bold md:flex md:text-xl lg:gap-10 [&>li]:cursor-pointer [&>li]:text-xl"
    >
      <li
        v-for="i in navStore.items"
        key="i.id"
        class="rounded-md transition-all duration-300 hover:text-4xl"
        :class="{ current: navStore.currentIndex === i.id }"
        @click="navStore.currentIndex = i.id"
      >
        <keep-alive
          ><router-link
            class="flex h-12 items-center justify-center whitespace-nowrap rounded-md px-6 text-xl transition-all duration-300 hover:bg-white hover:text-black last:md:px-8"
            :to="i.link"
            >{{ i.name }}</router-link
          ></keep-alive
        >
      </li>
    </ul>
    <div class="bg bg-b"></div>
  </nav>

  <!-- MENU-MOBILE -->
  <nav v-show="menuStore.ismenuOpen" class="block transition-all md:hidden">
    <ul
      class="item-center flex flex-col flex-wrap gap-4 bg-gray-600 px-8 py-4 font-bold [&>li]:cursor-pointer [&>li]:text-xl"
    >
      <li
        v-for="i in navStore.items"
        key="i.id"
        class="rounded-md transition-all duration-300 hover:text-4xl"
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
</template>

<style scoped>
.bg {
  background-color: #101827;
  height: 1rem;
  position: relative;
  background-image: linear-gradient(45deg, rgb(239 68 68) 50%, transparent 0);
  background-size: 1rem 1rem;
}

.bg::after,
.bg::before {
  content: '';
  position: absolute;
  height: 1rem;
  width: 100%;
  background-image: linear-gradient(-45deg, rgb(239 68 68) 50%, transparent 0);
  background-size: 1rem 1rem;
}

.bg-b {
  background-color: transparent;
  transform: rotate(180deg);
}

.current {
  @apply bg-white text-black;
}

.current_mobile {
  @apply bg-white text-2xl text-black;
}
</style>
