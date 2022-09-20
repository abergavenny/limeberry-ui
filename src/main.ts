import { createApp } from 'vue'
import App from './App.vue'

// Lib
import createLimeberry from '.'
import * as components from './components'

const app = createApp(App)

app.use(createLimeberry({ components }))

app.mount('#app')
