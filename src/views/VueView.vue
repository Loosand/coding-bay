<script setup>
import Masonry from '@/components/Masonry.vue'
import { useNodeStore } from '@/stores/node'

const nodeStore = useNodeStore()
</script>

<template>
  <div class="space-y-16 transition-all">
    <div v-for="i in nodeStore.vueList" :key="i.id">
      <Masonry :title="i.name" :id="i.id" :store="i.children" />
    </div>
  </div>
</template>
