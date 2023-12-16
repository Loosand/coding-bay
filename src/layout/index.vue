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

  <div class="1362:pt-[24rem] 1212:pt-[28rem] ml-8 mr-5 pb-10 pt-28 md:ml-36 md:pt-[26rem]">
    <RouterView />
  </div>
</template>
