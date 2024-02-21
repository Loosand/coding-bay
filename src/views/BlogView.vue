<script setup>
import Masonry from '@/components/Masonry.vue'
import data from '../data/blog.json'
</script>

<template>
  <div class="space-y-16 transition-all">
    <div v-for="i in data" :key="i.id">
      <Masonry :title="i.name" :id="i.id" :store="i.children" />
    </div>
  </div>
</template>
