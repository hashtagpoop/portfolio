import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import '/src/assets/styles/main.css';

const app = createApp(App)
app.use(router)
app.mount('#app')
