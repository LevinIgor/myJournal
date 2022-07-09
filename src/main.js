import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Markdown from 'vue3-markdown-it';

const app = createApp(App)

app.use(router).use(Markdown)

app.mount('#app')
