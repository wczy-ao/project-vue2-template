<template>
  <router-view></router-view>
</template>

<script>
import $ from 'jquery'
import { cloneDeep } from 'lodash'
export default {
  name: 'App',
  mounted() {
    const aa = {
      ddd: () => {
        console.log(1111)
      }
    }
    console.log(cloneDeep(aa))

    console.log($('.app'))
  }
}
</script>

<style scoped></style>
