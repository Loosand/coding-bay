<script setup>
import Masonry from '@/components/Masonry.vue'
import { useNodeStore } from '@/stores/node'
import { ref } from 'vue'
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'

const nodeStore = useNodeStore()

const isFormShow = ref(false)
const toggleFormShow = () => {
  isFormShow.value = !isFormShow.value
}
</script>

<template>
  <!--  <button @click="toggleFormShow" class="m-10 rounded-xl bg-white p-10 shadow-md outline">-->
  <!--    添加数据-->
  <!--  </button>-->

  <!--  <div v-show="isFormShow">-->
  <!--    <div-->
  <!--      @click="toggleFormShow"-->
  <!--      class="absolute inset-0 z-50 h-screen w-screen bg-gray-900 opacity-50"-->
  <!--    ></div>-->

  <!--    <form-->
  <!--      method="post"-->
  <!--      class="absolute inset-0 z-50 m-auto flex h-fit w-fit flex-col gap-4 bg-gray-300 p-10"-->
  <!--    >-->
  <!--      <div class="flex items-center gap-4">-->
  <!--        <label class="w-20" for="name">Name</label>-->
  <!--        <div>-->
  <!--          <input-->
  <!--            type="text"-->
  <!--            name="name"-->
  <!--            id="name"-->
  <!--            class="block w-56 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"-->
  <!--          />-->
  <!--        </div>-->
  <!--      </div>-->

  <!--      <div class="flex items-center gap-4">-->
  <!--        <label class="w-20" for="type">Type</label>-->
  <!--        <div>-->
  <!--          <input-->
  <!--            type="text"-->
  <!--            name="type"-->
  <!--            id="type"-->
  <!--            class="block w-56 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"-->
  <!--          />-->
  <!--        </div>-->
  <!--      </div>-->

  <!--      <div class="flex items-center gap-4">-->
  <!--        <label class="w-20" for="Sub_Title">Sub Title</label>-->
  <!--        <div>-->
  <!--          <input-->
  <!--            type="text"-->
  <!--            name="name"-->
  <!--            id="name"-->
  <!--            class="block w-56 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"-->
  <!--          />-->
  <!--        </div>-->
  <!--      </div>-->

  <!--      <div class="flex items-center gap-4">-->
  <!--        <label class="w-20" for="color">Color</label>-->
  <!--        <div>-->
  <!--          <input-->
  <!--            type="text"-->
  <!--            name="color"-->
  <!--            id="name"-->
  <!--            class="block w-56 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"-->
  <!--          />-->
  <!--        </div>-->
  <!--      </div>-->

  <!--      <div class="flex items-center gap-4">-->
  <!--        <label class="w-20" for="intro">Intro</label>-->
  <!--        <div>-->
  <!--          <textarea-->
  <!--            name="intro"-->
  <!--            id="intro"-->
  <!--            class="block w-56 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"-->
  <!--          />-->
  <!--        </div>-->
  <!--      </div>-->

  <!--      <div class="flex items-center gap-4">-->
  <!--        <label class="w-20" for="zh_url">zh url</label>-->
  <!--        <div>-->
  <!--          <input-->
  <!--            type="url"-->
  <!--            name="zh_url"-->
  <!--            id="zh_url"-->
  <!--            class="block w-56 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"-->
  <!--          />-->
  <!--        </div>-->
  <!--      </div>-->

  <!--      <div class="flex items-center gap-4">-->
  <!--        <label class="w-20" for="en_url">en url</label>-->
  <!--        <div>-->
  <!--          <input-->
  <!--            type="url"-->
  <!--            name="en_url"-->
  <!--            id="en_url"-->
  <!--            class="block w-56 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"-->
  <!--          />-->
  <!--        </div>-->
  <!--      </div>-->

  <!--      <div class="flex items-center gap-4">-->
  <!--        <label class="w-20" for="icon_url">icon url</label>-->
  <!--        <div>-->
  <!--          <input-->
  <!--            type="url"-->
  <!--            name="icon_url"-->
  <!--            id="icon_url"-->
  <!--            class="block w-56 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"-->
  <!--          />-->
  <!--        </div>-->
  <!--      </div>-->

  <!--      <button type="submit" class="mt-10 h-10 rounded-md bg-green-500 bg-white">Submit</button>-->
  <!--    </form>-->
  <!--  </div>-->
  <div class="space-y-16 transition-all">
    <div v-for="i in nodeStore.cssList" :key="i.id">
      <Masonry :title="i.name" :id="i.id" :store="i.children" />
    </div>
  </div>
</template>
