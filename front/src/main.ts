import { createApp } from 'vue'
import App from './App.vue'
import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import lang from 'element-plus/lib/locale/lang/ja'
import locale from 'element-plus/lib/locale'
import './plugins/axios'

locale.use(lang)
createApp(App)
  .use(ElButton)
  .use(ElForm)
  .use(ElFormItem)
  .use(ElInput)
  .mount('#app')

