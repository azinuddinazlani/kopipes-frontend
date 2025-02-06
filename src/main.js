import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// ant design vue
app.use(Antd)

app.mount('#app')
