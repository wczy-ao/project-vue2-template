<template>
  <div>
    Page
    <p><router-link to="/">Home页面</router-link></p>
    <img src="../assets/img/test.jpg" alt="" srcset="" />
  </div>
</template>

<script>
export default {
  name: 'Page',
  mounted() {
    const aa = () => {
      console.log('测试es6写。 法')
    }
    aa()
  }
}
</script>

<style scoped lang="less">
img {
  width: 300px;
  height: 400px;
}
</style>
