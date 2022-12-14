import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style/common.css'
import axios from 'axios'

import VueWriter from "vue-writer";

//axios.defaults.baseURL = 'http://localhost:8080'

const app = createApp(App)
app.config.globalProperties.axios = axios;

app.use(router)
    .use(VueWriter)
    .mount('#app')