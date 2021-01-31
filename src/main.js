import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// ant-design-vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// 语言
// import VueI18n from './languages'

const app = createApp(App)
app.use(store).use(router).use(Antd).mount('#app')

// 注入axios
app.config.globalProperties.$axios = axios
