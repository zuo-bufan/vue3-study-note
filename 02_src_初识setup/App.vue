<template>
  <div>
    <h1>个人信息</h1>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>性别：{{sex}}</h2>
    <button @click="sayHello">按钮(vue3的所配置的sayWelcom)</button>
    <br>
    <br>
    <button @click="sayWelcome">按钮(vue2的所配置的sayWelcom)</button>
    <br>
    <br>
    <button @click="test">按钮(vue2的配置中读取vue3的数据、方法 )</button>
    <br>
    <br>
    <button @click="test2">按钮(vue3的setup配置中读取vue2的数据、方法 )</button>
  </div>
</template>

<script>
import { h, onMounted } from "vue";
export default {
  name: "App",
  data() {
    return {
      sex: "男"
    };
  },
  methods: {
    sayWelcome() {
      alert("欢迎来到尚硅谷！！！");
    },
    // vue2的配置中调用vue3的数据、方法
    test() {
      console.log(this.sex);
      console.log(this.name);
      console.log(this.age);
      this.sayHello();
    }
  },
  /* 
    注意点：
      尽量不要把vue3与vue2 配置混用
        vue2的配置可以读取vue3的setup数据
        vue3的setup不可以读取vue2的配置
        如果有重名，vue3的setup优先
 */
  // 此处只是测试setup，暂不考虑响应式的问题。
  setup() {
    //拉开帷幕的setup配置组合式api
    let name = "张三";
    let age = 18;

    // 定义方法
    function sayHello() {
      alert(`我叫${name},我${age}岁了，你好啊！`);
    }

    function test2() {
      console.log(name);
      console.log(age);
      console.log(this.sex);
      this.sayWelcome();
    }
    // 生命周期挂载函数
    onMounted(() => {});
    // 返回一个对象（常用）
    return {
      name,
      age,
      sayHello,
      test2
    };

    // 返回一个函数（渲染函数）
    // return ()=>{return h('h1',"尚硅谷")}
  }
};
</script>

<style>
</style>
