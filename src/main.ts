import './assets/main.css'
import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
import router from './router'
import { createPinia } from 'pinia'

