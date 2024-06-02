import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

if (!navigator.geolocation) {
    alert('tu navegador no soporta geolocation');
    console.log('tu navegador no soporta geolocation');
}

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')