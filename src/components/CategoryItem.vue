<script setup>
defineProps({
  item: {
    type: Object,
    required: true
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
    class="relative w-40 cursor-pointer overflow-hidden rounded-2xl bg-white drop-shadow-lg transition-all hover:shadow-xl dark:bg-gray-700 md:w-52 lg:w-64"
  >
    <!-- CONTENT -->
    <div class="flex flex-col gap-2 p-5 md:gap-3 lg:gap-4">
      <div class="flex gap-4">
        <img
          v-if="item.icon"
          class="h-4 w-4 self-center md:h-5 md:w-5 lg:h-7 lg:w-7 lg:self-start"
          :src="item.icon"
          alt="icon"
        />
        <h1
          :class="item.titleColor"
          class="text-lg font-bold dark:text-white md:text-xl lg:text-2xl"
        >
          {{ item.title }}
        </h1>
      </div>

      <h2
        class="text-xs font-semibold text-gray-500 dark:text-gray-300 dark:text-white md:text-base md:text-black lg:text-lg"
      >
        {{ item.subTitle }}
      </h2>

      <p v-if="item.intro" class="hidden h-32 text-sm text-gray-500 md:block md:h-fit">
        {{ item.intro }}
      </p>
    </div>

    <!-- LINK -->
    <div class="absolute inset-0 flex h-full text-xl font-semibold md:text-2xl">
      <a
        v-if="item.zhUrl"
        :class="{ 'flex-1': item.zhUrl }"
        @click="handleLink(item.zhUrl)"
        class="flex h-full w-1/2 items-center justify-center bg-red-400 px-4 opacity-0 transition-opacity hover:opacity-100"
        >中文</a
      >
      <a
        v-if="item.enUrl"
        :class="{ 'flex-1 ': item.enUrl }"
        @click="handleLink(item.enUrl)"
        class="flex w-1/2 items-center justify-center bg-red-400 px-4 opacity-0 hover:opacity-100"
        >English</a
      >
    </div>
  </div>
</template>
