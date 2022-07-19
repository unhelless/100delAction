import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
// import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const app = createApp(App)
app.AOS = new AOS.init({ disable: "phone" });

app.use(AOS).mount('#app')

// createApp(App)
//     .use(AOS)
//     // .use(store)
//     .mount('#app')
