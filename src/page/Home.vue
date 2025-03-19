<template>
  <div>
    Home
    <test-plugin></test-plugin>
    <p><router-link to="/page">Page111页面</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {}
}
</script>

<style scoped lang="less">
div {
  color: aquamarine;
}
</style>
