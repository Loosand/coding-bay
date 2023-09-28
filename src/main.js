import '@/assets/tailwind.css'
import 'remixicon/fonts/remixicon.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { VueMasonryPlugin } from 'vue-masonry'

const app = createApp(App)

app.use(createPinia())
app.use(VueMasonryPlugin)
app.use(router)

app.mount('#app')
