import { defineStore } from 'pinia'
import { ref } from 'vue'

import route from '@/router'

export const useSearchStore = defineStore('search', () => {
  const keywordPinia = ref('')

  const updateKeyword = async (key) => {
    keywordPinia.value = key
    await route.push('/search')
  }

  return {
    keywordPinia,
    updateKeyword
  }
})
