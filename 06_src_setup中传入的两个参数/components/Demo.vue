<template>
  <div>
    <h1>个人信息</h1>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <button @click="test" >自定义事件</button>
    <slot name="abc"></slot>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Demo",
  // beforeCreate() {
  //   console.log('------beforeCreate-------')
  // },
  props:["msg","school"],
  emits:["hello"],
  setup(props,context) {
    // setup 比 beforeCreate 执行时间早 而且里面的 this是 undefined
    // console.log('------setup-------',props)
    // console.log('------setup-------',context)
    // console.log('------setup-------',context.attrs) //使用与vue2中的$attrs一样
    // console.log('------setup-------',context.emit) //出发自定义事件的
    // console.log('------setup-------',context.slots) // 插槽的使用
    const person = reactive({
      name: "张三",
      age: 18
    });

    function test() {
      // 自定义事件的回调
      context.emit('hello',666)
    }
    // 返回一个对象（常用）
    return {
      person,
      test
    };
  }
};
</script>

<style>
</style>
