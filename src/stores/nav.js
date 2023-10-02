import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'
// import { useWindowSize } from '@vueuse/core'

import { getCategoryAPI } from '@/api/node'

export const useNavStore = defineStore(
  'nav',
  () => {
    let currentIndex = ref(1)

    const items = ref([])
    const getNav = async () => {
      const res = await getCategoryAPI()
      items.value = res.data
    }

    getNav()

    const changeIndex = computed((index) => {
      currentIndex = index
    })

    return {
      currentIndex,
      items,
      // items: testStore.nodeList,
      changeIndex
    }
  },
  {
    persist: {
      enabled: true
    },
    strategies: [
      {
        key: 'menuIndex',
        storage: localStorage,
        paths: ['currentIndex']
      }
    ]
  }
)

export const useMenuStore = defineStore(
  'menu',
  () => {
    const isMenuOpen = ref(false)

    // const { width } = useWindowSize()
    //
    // if (width > 768) {
    //   isMenuOpen.value = true
    // }

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    return {
      isMenuOpen,
      toggleMenu
    }
  }
  // {
  //   persist: {
  //     enabled: true
  //   },
  //   strategies: [
  //     {
  //       key: 'menuOpen',
  //       storage: localStorage,
  //       paths: ['isMenuOpen']
  //     }
  //   ]
  // }
)
