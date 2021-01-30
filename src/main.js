import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// ant-design-vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// 语言
// import VueI18n from './languages'

createApp(App).use(store).use(router).use(Antd).mount('#app')
