/* import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app') */
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import SweetAlert2 from './sweetalert2';

createApp(App)
.use(SweetAlert2)
.use(store)
.use(router)
.mount('#app')
