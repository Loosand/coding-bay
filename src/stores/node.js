import { defineStore } from 'pinia'
import { getCategoryAPI, getAllNodeAPI } from '@/api/node'
import { computed, ref } from 'vue'
import { useSearchStore } from '@/stores/search'

export const useNodeStore = defineStore('node', () => {
  const categoryList = ref([])
  const cssList = ref([])
  const jsList = ref([])
  const vueList = ref([])
  const reactList = ref([])
  const nodeList = ref([])
  const uiList = ref([])
  const serverList = ref([])
  const toolList = ref([])
  const blogList = ref([])
  const commonList = ref([])
  const assemblyList = ref([])

  const getCategory = async () => {
    try {
      const res = await getCategoryAPI()
      categoryList.value = res.data
      cssList.value = res.data[0].children
      jsList.value = res.data[1].children
      vueList.value = res.data[2].children
      reactList.value = res.data[3].children
      nodeList.value = res.data[4].children
      serverList.value = res.data[5].children
      uiList.value = res.data[6].children
      toolList.value = res.data[7].children
      blogList.value = res.data[8].children
      commonList.value = res.data[9].children
      assemblyList.value = res.data[10].children
    } catch (e) {
      console.log(e)
    }
  }

  getCategory()

  return {
    categoryList,
    cssList,
    jsList,
    vueList,
    reactList,
    nodeList,
    serverList,
    uiList,
    toolList,
    blogList,
    commonList,
    assemblyList
  }
})

export const useAllNodeStore = defineStore('allNode', () => {
  const searchStore = useSearchStore()
  const nodes = ref([])

  // 获取 Nodes
  const getAllNode = async () => {
    const res = await getAllNodeAPI()
    nodes.value = res.data
  }
  getAllNode()

  // 搜索
  const filterNodes = computed(() => {
    return nodes.value.filter((item) => {
      const keyword = item.name.concat(item.sub_title)?.toLowerCase()
      if (searchStore.keywordPinia) {
        return keyword.includes(searchStore.keywordPinia)
      }
    })
  })

  // 搜索结果
  const searchResult = computed(() => {
    return filterNodes.value.length > 0 ? true : false
  })

  return {
    filterNodes,
    searchResult
  }
})
