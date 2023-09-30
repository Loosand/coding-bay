<script>
import LayoutHeader from '@/layout/Components/LayoutHeader.vue'
import LayoutNav from '@/layout/Components/LayoutNav.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { LayoutNav, LayoutHeader }
})
</script>

<template>
  <header class="fixed top-0 z-50 w-screen text-white">
    <LayoutHeader />
    <LayoutNav />
  </header>

  <div class="mb-52 ml-20 mr-5 pt-28 md:ml-40 md:pt-[26rem] lg:pt-[23rem]"><RouterView /></div>
</template>
