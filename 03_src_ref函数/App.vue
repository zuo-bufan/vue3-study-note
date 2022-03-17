<template>
  <div>
    <h1>个人信息</h1>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>职业：{{obj.type}}</h2>
    <h2>工资：{{obj.salry}}</h2>
    <button @click="changeMsg">修改信息</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  // 此处只是测试setup，暂不考虑响应式的问题。
  setup() {
    //拉开帷幕的setup配置组合式api
    // ref函数定义响应式数据
    let name = ref("张三");
    let age = ref(18);
    let obj = ref({
      type:'前端攻城狮',
      salry:'30k'
    })

    function changeMsg() {
      name.value = "李四";
      age.value = 26;
      obj.value.type = '后端攻城狮'
      obj.value.salry = '10k' 
      console.log(obj.value)
      console.log(name, age);
    }

    // 返回一个对象（常用）
    return {
      name,
      age,
      obj,
      changeMsg
    };
  }
};
</script>

<style>
</style>
