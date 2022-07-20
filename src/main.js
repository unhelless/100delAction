import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import useVuelidate from "@vuelidate/core";

// import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const app = createApp(App)
app.AOS = new AOS.init({
    disable: function() {
        var maxWidth = 548;
        return window.innerWidth < maxWidth;
    }
});

app
    .mount('#app')

// createApp(App)
//     .use(AOS)
//     // .use(store)
//     .mount('#app')
