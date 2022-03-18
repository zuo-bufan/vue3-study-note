<template>
  <div>
    <h1>个人信息</h1>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>职业：{{person.obj.type}}</h2>
    <h2>工资：{{person.obj.salry}}</h2>
    <h2>爱好：{{person.hobby}}</h2>
    <button @click="changeMsg">修改信息</button>
  </div>
</template>

<script>
// 引入reactive 返回对象的响应式副本
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    // reactive函数定义响应式引入数据类型
    // let name = ref("张三");
    // let age = ref(18);
    // reactive 将解包所有深层的 refs，同时维持 ref 的响应性。
    // let obj = reactive({
    // type: "前端攻城狮",
    // salry: "30k"
    // });
    // const 代理对象 = reactive(源对象)
    const person = reactive({
      name: "张三",
      age: 18,
      obj: {
        type: "前端攻城狮",
        salry: "30k"
      },
      hobby: ["抽烟", "喝酒", "烫头"]
    });

    // let p = reactive(person);
    // let hobby = reactive(["抽烟", "喝酒", "烫头"]);

    function changeMsg() {
      person.name = "李四";
      person.age = 26;
      // obj.value.type = "后端攻城狮";
      // obj.value.salry = "10k";
      // obj对象 ref 改为 reactive 后不需要使用.value修改值
      person.obj.type = "后端攻城狮";
      person.obj.salry = "10k";
      // console.log(obj);
      person.hobby[0] = "学习";
    }

    // 返回一个对象（常用）
    return {
      person,
      changeMsg
    };
  }
};
</script>

<style>
</style>
