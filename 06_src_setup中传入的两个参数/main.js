//vue3.0 引入的不再是Vue构造函数 引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
// 创建实例应用对象 —— app (类似vue2中的vm，但app比vm更轻)
const app = createApp(App)
// console.log("@app",app)
// 挂载页面
app.mount('#app')

// vue2.0 写法 在vue3的项目中不可以在用vue2 的写法
// const vm =  new Vue({
// render:h=> h('App')
// })

// vm.$mount('#app')