<template>
  <div>
    <h1>个人信息</h1>姓：
    <input type="text" v-model="person.firstName">
    <br>名：
    <input type="text" v-model="person.lastName">
    <br>
    <h2>全名：{{fullName}}</h2>
    <input type="text" v-model="fullName">
  </div>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "Demo",
  setup() {
    const person = reactive({
      firstName: "张",
      lastName: "三"
    });

    // 计算属性简写 （没有考虑计算属性被修改的情况）
    /* let fullName = computed(()=>{
     return person.firstName + '-' + person.lastName;
   }) */

    // 计算属性完整写法 （考虑读和写）
    let fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(value) {
        const newArr = value.split("-")
        person.firstName = newArr[0]
        person.lastName = newArr[1]
      }
    });

    // 返回一个对象（常用）
    return {
      person,
      fullName
    };
  }
};
</script>

<style>
</style>
