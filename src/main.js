import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { scrollTo } from 'vue-scrollto'


scrollTo('#element', 500, { easing: 'ease-in-out' })

createApp(App).use(router).mount('#app')




