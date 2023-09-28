<script setup>
import { useNodeStore } from '@/stores/node'
import Masonry from '@/components/Masonry.vue'

const nodeStore = useNodeStore()
</script>

<template>
  <div class="space-y-16 transition-all">
    <Masonry title="工程化" :store="nodeStore.engineering" />

    <Masonry title="服务器" :store="nodeStore.node" />

    <Masonry title="Tool" :store="nodeStore.tool" />
  </div>
</template>

<style scoped></style>
