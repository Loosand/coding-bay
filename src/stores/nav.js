import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNavStore = defineStore('nav', () => {
  let currentIndex = ref(1)
  const items = [
    {
      id: 1,
      name: 'CSS',
      link: '/'
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
      name: 'Node',
      link: '/node'
    },
    {
      id: 5,
      name: 'Serve',
      link: '/serve'
    },
    {
      id: 6,
      name: 'UI',
      link: '/ui'
    },

    {
      id: 7,
      name: 'Tool',
      link: '/tool'
    },
    {
      id: 8,
      name: 'Blog',
      link: '/blog'
    },
    {
      id: 9,
      name: '综合',
      link: '/common'
    }
  ]

  const changeIndex = (index) => {
    currentIndex = index
  }

  return {
    currentIndex,
    items,
    changeIndex
  }
})

export const useMenuStore = defineStore('menu', () => {
  const ismenuOpen = ref(false)
  const toggleMenu = () => {
    ismenuOpen.value = !ismenuOpen.value
  }

  return {
    ismenuOpen,
    toggleMenu
  }
})
