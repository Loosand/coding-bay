<script setup>
import { useNavStore, useMenuStore } from '@/stores/nav'

const navStore = useNavStore()
const menuStore = useMenuStore()
</script>

<template>
  <!--  <nav v-show="!menuStore.isMenuOpen">-->
  <!--    <ul-->
  <!--      class="item-center flex flex-col flex-wrap justify-center gap-2 bg-gray-600 px-8 py-3 font-bold shadow-xl md:flex md:flex-row md:bg-red-500 md:pb-2 md:text-xl lg:gap-4"-->
  <!--    >-->
  <!--      <li-->
  <!--        v-for="i in navStore.items"-->
  <!--        key="i.id"-->
  <!--        class="cursor-pointer rounded-md text-xl hover:text-4xl"-->
  <!--        :class="{ current: navStore.currentIndex === i.id }"-->
  <!--        @click="(navStore.currentIndex = i.id), menuStore.toggleMenu()"-->
  <!--      >-->
  <!--        <keep-alive>-->
  <!--          <router-link-->
  <!--            class="flex h-12 items-center justify-center whitespace-nowrap rounded-md px-6 text-xl hover:bg-white hover:text-black hover:dark:bg-gray-900 hover:dark:text-white last:md:px-8"-->
  <!--            :to="i.link"-->
  <!--            >{{ i.name }}</router-link-->
  <!--          >-->
  <!--        </keep-alive>-->
  <!--      </li>-->
  <!--    </ul>-->
  <!--    <div class="bg bg-b hidden md:block"></div>-->
  <!--  </nav>-->

  <!-- NAV-DESKTOP -->
  <nav class="hidden text-white md:block">
    <ul
      class="item-center flex flex-wrap justify-center gap-2 bg-red-500 px-8 pb-2 pt-3 font-bold md:flex md:text-xl lg:gap-4"
    >
      <li
        v-for="i in navStore.items"
        key="i.id"
        class="cursor-pointer rounded-md text-xl hover:text-4xl"
        :class="{ current: navStore.currentIndex === i.id }"
        @click="navStore.currentIndex = i.id"
      >
        <keep-alive>
          <router-link
            class="flex h-12 items-center justify-center whitespace-nowrap rounded-md px-6 text-xl hover:bg-white hover:text-black hover:dark:bg-gray-900 hover:dark:text-white last:md:px-8"
            :to="i.link"
            >{{ i.name }}</router-link
          >
        </keep-alive>
      </li>
    </ul>
    <div class="bg bg-b"></div>
  </nav>

  <!-- MENU-MOBILE -->
  <nav v-show="menuStore.isMenuOpen" class="block text-white transition md:hidden">
    <ul class="item-center flex flex-col flex-wrap gap-3 bg-gray-600 px-8 py-4 font-bold">
      <li
        v-for="i in navStore.items"
        key="i.id"
        class="cursor-pointer rounded-md text-xl transition hover:bg-white hover:text-black dark:hover:bg-gray-800 dark:hover:text-white"
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

<style scoped lang="scss">
.bg {
  @apply relative h-4 bg-[length:1rem_1rem];
  background-image: linear-gradient(45deg, rgb(239 68 68) 50%, transparent 0);

  &::after {
    @apply absolute h-4 w-full bg-[length:1rem_1rem] content-[''];
    background-image: linear-gradient(-45deg, rgb(239 68 68) 50%, transparent 0);
  }
}

.bg-b {
  background-color: transparent;
  transform: rotate(180deg);
}

.current {
  @apply bg-white text-black dark:bg-gray-800 dark:text-white;
}

.current_mobile {
  @apply bg-white text-2xl text-black dark:bg-gray-800 dark:text-white;
}
</style>
