<template>
  <Demo @hello="showAlert" msg="你好啊" school="尚硅谷">
    <template v-slot:abc>
      <span>尚硅谷</span>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/Demo";
export default {
  name: "App",
  components: {
    Demo
  },
  setup() {
    function showAlert(value) {
      // alert(`接收自定义事件的参数${value}`,value)
      console.log(value);
    }
    return {
      showAlert
    };
  }
};
</script>

<style>
</style>
