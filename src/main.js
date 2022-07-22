import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Maska from 'maska'

export const app = createApp(App)
app
    .use(Maska)
    .mount('#app')