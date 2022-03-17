<template>
  <div>
    <h1>个人信息</h1>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>职业：{{obj.type}}</h2>
    <h2>工资：{{obj.salry}}</h2>
    <h2>爱好：{{hobby}}</h2>
    <button @click="changeMsg">修改信息</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "App",
  // 此处只是测试setup，暂不考虑响应式的问题。
  setup() {
    //拉开帷幕的setup配置组合式api
    // ref函数定义响应式数据
    let name = ref("张三");
    let age = ref(18);
    let obj = reactive({
      type: "前端攻城狮",
      salry: "30k"
    });

    let hobby = reactive(["抽烟", "喝酒", "烫头"]);

    function changeMsg() {
      name.value = "李四";
      age.value = 26;
      // obj.value.type = "后端攻城狮";
      // obj.value.salry = "10k";
      // obj对象 ref 改为 reactive 后不需要使用.value修改值
      obj.type = "后端攻城狮";
      obj.salry = "10k";
      // console.log(obj);
      hobby[0] = "学习";
    }

    // 返回一个对象（常用）
    return {
      name,
      age,
      obj,
      hobby,
      changeMsg
    };
  }
};
</script>

<style>
</style>
