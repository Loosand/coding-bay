<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import CategoryItem from '@/components/CategoryItem.vue'

defineProps({
  title: {
    type: String
  },
  id: {
    type: Number
  },
  store: {
    type: Object
  }
})
</script>

<template>
  <section class="space-y-6">
    <h1 class="text-3xl font-bold dark:text-white">
      {{ title }}
    </h1>

    <div class="z-10 m-auto" transition-duration=".3s" gutter="10" v-masonry="containerId">
      <CategoryItem class="mb-5" v-masonry-tile v-for="(i, index) in store" :key="index" :item="i">
      </CategoryItem>
    </div>
  </section>
</template>
