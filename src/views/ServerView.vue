<script setup>
// import { useCssStore } from '@/stores/css'
import Masonry from '@/components/Masonry.vue'

// const cssStore = useCssStore()
</script>

<template>
  <div class="space-y-16 transition-all">
    <Masonry title="Learn CSS" />

    <Masonry title="Frame" />

    <Masonry title="Tool" />
  </div>
</template>

<style scoped></style>
