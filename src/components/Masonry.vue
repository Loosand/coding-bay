<script setup>
import CategoryItem from '@/components/CategoryItem.vue'
import { Dialog } from '@headlessui/vue'

defineProps({
  title: {
    type: String
  },
  store: {
    type: Object
  }
})
</script>

<template>
  <section class="space-y-12">
    <h1 class="text-4xl font-bold">{{ title }}</h1>

    <div class="z-10 m-auto" transition-duration=".3s" gutter="16" v-masonry="containerId">
      <CategoryItem class="mb-5" v-masonry-tile v-for="(i, index) in store" key="i.id" :item="i">
        <component :is="i.icon"></component>
      </CategoryItem>
    </div>
  </section>
</template>
