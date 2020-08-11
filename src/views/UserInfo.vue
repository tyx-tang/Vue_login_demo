<template>
  <div v-wechat-title="$route.meta.title" class="wrapper">
    <ul>
      <li>用户名：{{userInfo.user_num}}</li>
      <li>用户名：{{userInfo.user_password}}</li>
    </ul>
  </div>

</template>

<script>
import store from '../store/index'
// import Vue from 'vue'
export default {
  computed: {
    userInfo () {
      return this.$store.state.login
    }
  },
  store
}
</script>
