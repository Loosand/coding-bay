import '@/assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

import App from './App.vue'
import router from './router'

import { VueMasonryPlugin } from 'vue-masonry'

const store = createPinia()
store.use(piniaPluginPersist)

const app = createApp(App)

app.use(store)
app.use(VueMasonryPlugin)
app.use(router)

app.mount('#app')
