<script setup>
import Masonry from '@/components/Masonry.vue'
import { useNodeStore } from '@/stores/node'

const nodeStore = useNodeStore()
</script>

<template>
  <div class="space-y-16 transition-all">
    <div v-for="i in nodeStore.uiList" :key="i.id">
      <Masonry :title="i.name" :store="i.children" />
    </div>
  </div>
</template>
