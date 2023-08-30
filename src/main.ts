import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Paginate from 'vuejs-paginate-next'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('Paginate', Paginate)

app.mount('#app')
