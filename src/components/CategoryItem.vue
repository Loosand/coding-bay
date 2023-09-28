<script setup>
import Vue from '@/components/icons/vue.vue'
import SvgIcon from '@/components/SvgIcon.vue'

defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})

const handleLink = (url) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div
    @click="handleLink(item.enUrl ? item.enUrl : item.zhUrl)"
    class="flex h-fit w-64 cursor-pointer flex-col justify-around space-y-5 rounded-lg bg-white p-6 text-2xl shadow-lg outline outline-1 transition-all hover:-translate-y-1 hover:shadow-2xl"
  >
    <div class="center flex items-center gap-4">
      <img v-if="item.icon" class="h-7 w-7 self-start" :src="item.icon" alt="" />
      <h1 :class="item.titleColor" class="text-2xl font-bold">{{ item.title }}</h1>
    </div>

    <h2 class="text-lg font-semibold">{{ item.subTitle }}</h2>

    <p v-if="item.intro" class="text-sm text-gray-500">{{ item.intro }}</p>

    <div class="flex gap-3 text-lg">
      <a
        v-if="item.zhUrl"
        @click="handleLink(item.zhUrl)"
        class="flex items-center justify-center rounded-md px-4 py-2 outline outline-1 hover:bg-gray-100"
        >中文</a
      >
      <a
        v-if="item.enUrl"
        @click="handleLink(item.enUrl)"
        class="rounded-md px-4 py-2 outline outline-1 hover:bg-gray-100"
        >English</a
      >
    </div>
  </div>
</template>

<style scoped></style>
