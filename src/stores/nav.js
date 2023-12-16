import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNavStore = defineStore(
  'nav',
  () => {
    let currentIndex = ref(1)

    const items = ref([
      {
        id: 1,
        name: 'CSS',
        link: '/css'
      },
      {
        id: 2,
        name: 'JS',
        link: '/js'
      },
      {
        id: 3,
        name: 'Vue',
        link: '/vue'
      },
      {
        id: 4,
        name: 'React',
        link: '/react'
      },
      {
        id: 5,
        name: 'Node',
        link: '/node'
      },
      {
        id: 6,
        name: 'Server',
        link: '/server'
      },
      {
        id: 7,
        name: 'UI',
        link: '/ui'
      },
      {
        id: 8,
        name: 'Tool',
        link: '/tool'
      },
      {
        id: 9,
        name: 'Blog',
        link: '/blog'
      },
      {
        id: 10,
        name: 'Common',
        link: '/common'
      },
      {
        id: 11,
        name: 'Assembly',
        link: '/assembly'
      }
    ])

    const changeIndex = computed((index) => {
      currentIndex = index
    })

    return {
      currentIndex,
      items,
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

export const useMenuStore = defineStore('menu', () => {
  const isMenuOpen = ref(false)

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  return {
    isMenuOpen,
    toggleMenu
  }
})
