import { createApp } from 'vue'
import App from './App.vue'
import { ElButton } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import lang from 'element-plus/lib/locale/lang/ja'
import locale from 'element-plus/lib/locale'

locale.use(lang)
createApp(App)
  .use(ElButton)
  .mount('#app')
