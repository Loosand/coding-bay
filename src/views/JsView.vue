<script setup>
import { useJsStore } from '@/stores/js'
import Masonry from '@/components/Masonry.vue'

const jsStore = useJsStore()
</script>

<template>
  <div class="space-y-16 transition-all">
    <Masonry title="Learn JS" :store="jsStore.js" />

    <Masonry title="Frame" :store="jsStore.frame" />

    <Masonry title="Tool" :store="jsStore.tool" />
  </div>
</template>

<style scoped></style>
