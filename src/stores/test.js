import { defineStore } from 'pinia'
import { getNodeAPI } from '@/api/node'
import { onMounted, ref } from 'vue'

export const useTestStore = defineStore('test', () => {
  const node = ref([])
  const getNode = async () => {
    const res = await getNodeAPI()
    node.value = res.result
  }

  getNode()

  return {
    node
  }
})
