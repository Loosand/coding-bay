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
    class="relative w-60 cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl dark:bg-gray-700 md:w-64"
  >
    <!-- CONTENT -->
    <div class="flex flex-col gap-3 p-5">
      <div class="flex gap-4">
        <img
          v-if="item.icon"
          class="my-auto w-6 lg:self-start"
          :src="item.icon"
          :alt="item.name + ' icon'"
        />
        <h1 class="text-xl font-bold dark:text-white">
          {{ item.name }}
        </h1>
      </div>

      <h2 class="whitespace-break-spaces font-semibold text-sky-600 dark:text-gray-400">
        {{ item.sub_title }}
      </h2>

      <p v-if="item.intro" class="hidden h-fit text-gray-400 dark:text-gray-300 md:block">
        {{ item.intro }}
      </p>
    </div>

    <!-- LINK -->
    <div class="absolute inset-0 flex h-full font-semibold text-white dark:text-black">
      <a
        v-if="item.zh_url"
        :class="{ 'flex-1': item.zh_url }"
        @click="handleLink(item.zh_url)"
        class="flex h-full w-1/2 items-center justify-center bg-gray-700 px-4 opacity-0 transition-opacity hover:opacity-100 dark:bg-white"
        >中文</a
      >
      <a
        v-if="item.en_url"
        :class="{ 'flex-1 ': item.en_url }"
        @click="handleLink(item.en_url)"
        class="flex w-1/2 items-center justify-center bg-gray-700 px-4 opacity-0 hover:opacity-100 dark:bg-white"
        >English</a
      >
    </div>
  </div>
</template>
