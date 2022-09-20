import { createApp } from 'vue'
import App from './App.vue'

import createLimeberry from '.'

const app = createApp(App)

app.use(createLimeberry())

app.mount('#app')
