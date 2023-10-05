<script setup>
import LayoutHeader from '@/layout/Components/LayoutHeader.vue'
import LayoutNav from '@/layout/Components/LayoutNav.vue'
import { defineComponent } from 'vue'

defineComponent({
  components: { LayoutNav, LayoutHeader }
})
</script>

<template>
  <header class="fixed top-0 z-40 w-screen">
    <LayoutHeader />
    <LayoutNav />
  </header>

  <div class="ml-8 mr-5 pb-52 pt-28 md:ml-36 md:pt-[26rem] lg:pt-[26rem] navScreen:pt-[22rem]">
    <RouterView />
  </div>
</template>
