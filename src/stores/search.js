import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getSearchAPI } from '@/api/search'
import route from '@/router'

export const useSearchStore = defineStore('search', () => {
  const keyword = ref('')
  const searchList = ref([])
  const search = async (key) => {
    const res = await getSearchAPI(key)
    searchList.value = res.data
    keyword.value = key
    await route.push('/search/' + key)
  }

  return {
    keyword,
    searchList,
    search
  }
})
