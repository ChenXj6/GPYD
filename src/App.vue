<template>
  <div id="app"
       @click="isTimeOut">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>



<script>


export default {
  name: 'App',
  data () {
    return {
      lastTime: null,
      currentTime: null,
      timeOut: 30 * 60 * 1000
    }
  },
  created () {
    this.lastTime = new Date().getTime()
  },
  methods: {
    isTimeOut () {
      this.currentTime = new Date().getTime();
      if (sessionStorage.getItem('token')) {
        if (this.currentTime - this.lastTime > this.timeOut) {
          this.$store.dispatch('logout')
          this.$message.warning('登录信息已过期，请重新登录');
          setTimeout(()=>{
            this.$router.push({ path: '/login' })
          },300)
          this.lastTime = new Date().getTime()
        } else {
          this.lastTime = new Date().getTime()
        }
      } else {
        this.lastTime = new Date().getTime()
      }
    }
  },
  mounted () {
    // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
    window.onbeforeunload = function () {
      var storage = window.localStorage;
      storage.removeItem('car')
    }
  }
}

</script>





<style>
#app {
  background-color: #ffffff;
}
button,
input,
textarea {
  outline: none;
}
</style>
