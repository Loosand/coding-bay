<script setup>
import { useCssStore } from '@/stores/css'
import Masonry from '@/components/Masonry.vue'

const cssStore = useCssStore()
</script>

<template>
  <div class="space-y-16 transition-all">
    <Masonry title="Learn CSS" :store="cssStore.css" />

    <Masonry title="Frame" :store="cssStore.frame" />

    <Masonry title="Tool" :store="cssStore.tool" />
  </div>
</template>

<style scoped></style>
