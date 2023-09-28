<script setup>
import { useVueStore } from '@/stores/vue'
import Masonry from '@/components/Masonry.vue'

const vueStore = useVueStore()
</script>

<template>
  <div class="space-y-16 transition-all">
    <Masonry title="Learn Vue" :store="vueStore.vue" />

    <Masonry title="Tool" :store="vueStore.tool" />

    <Masonry title="UI" :store="vueStore.ui" />
  </div>
</template>

<style scoped></style>
