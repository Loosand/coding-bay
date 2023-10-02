import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/api/node'
import { onBeforeMount, ref } from 'vue'

export const useNodeStore = defineStore('node', () => {
  const categoryList = ref([])

  const cssList = ref([])
  const jsList = ref([])
  const vueList = ref([])
  const reactList = ref([])
  const nodeList = ref([])
  const uiList = ref([])
  const serverList = ref([])
  // const testList = ref([])
  // const maintainList = ref([])
  const toolList = ref([])
  const blogList = ref([])
  const commonList = ref([])
  const assemblyList = ref([])

  const getCategory = async () => {
    const res = await getCategoryAPI()
    categoryList.value = res.data

    cssList.value = res.data[0].children
    jsList.value = res.data[1].children
    vueList.value = res.data[2].children
    reactList.value = res.data[3].children
    nodeList.value = res.data[4].children
    serverList.value = res.data[5].children
    uiList.value = res.data[6].children
    // testList.value = res.data[7].children
    // maintainList.value = res.data[7].children
    toolList.value = res.data[7].children
    blogList.value = res.data[8].children
    commonList.value = res.data[9].children
    assemblyList.value = res.data[10].children
  }

  onBeforeMount(() => {
    getCategory()
  })

  return {
    categoryList,
    getCategory,
    cssList,
    jsList,
    vueList,
    reactList,
    nodeList,
    serverList,
    uiList,
    // testList,
    // maintainList,
    toolList,
    blogList,
    commonList,
    assemblyList
  }
})
