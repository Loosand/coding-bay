<script setup>
defineProps({
  item: {
    type: Object
  }
})

// 页面跳转行为
const handleLink = (url) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div
    @click="handleLink(item.enUrl ? item.enUrl : item.zhUrl)"
    class="shadow-mine flex h-fit w-64 cursor-pointer flex-col justify-around overflow-hidden rounded-xl bg-white outline outline-1 transition-all hover:shadow-2xl"
  >
    <div class="flex w-full items-center gap-4 p-5">
      <img v-if="item.icon" class="h-7 w-7 self-start" :src="item.icon" alt="" />
      <h1 :class="item.titleColor" class="text-2xl font-bold">{{ item.title }}</h1>
    </div>

    <h2 class="px-5 text-lg font-semibold">{{ item.subTitle }}</h2>

    <p v-if="item.intro" class="px-5 text-sm text-gray-500">{{ item.intro }}</p>

    <div class="flex h-20 pt-6 text-lg font-semibold">
      <a
        v-if="item.zhUrl"
        :class="{ 'flex-1': item.zhUrl }"
        @click="handleLink(item.zhUrl)"
        class="flex w-1/2 items-center justify-center rounded-es-xl bg-blue-400 px-4 hover:bg-blue-500"
        >中文</a
      >
      <a
        v-if="item.enUrl"
        :class="{ 'flex-1 ': item.enUrl }"
        @click="handleLink(item.enUrl)"
        class="flex w-1/2 items-center justify-center bg-green-400 px-4 hover:bg-green-500"
        >English</a
      >
    </div>
  </div>
</template>

<style scoped></style>
