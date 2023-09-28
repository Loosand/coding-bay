<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :href="`#${name}`" />
  </svg>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>
