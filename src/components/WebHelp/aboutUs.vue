<template>
  <div data-v-212111fa=""
       id="aboutUsDataMain"
       class="r_content detail-main">
    <!---->
    <video ref="myVideo"
           class="video-js"
           :src="host + data.video">
      <source :src="host + data.video"
              type='video/mp4' />
    </video>
    <div v-html="data.content">{{data.content}}</div>
  </div>
</template>
<script>

import makeSign from '../../api/makeSign'
import Code from '../../api/Code'
import webHelp from '../../api/webHelp'
import url from '../../api/urls'
export default {
  computed: {
    host () {
      return url.BWS
    }
  },
  data () {
    return {
      data: '',
      player: null
    }
  },
  methods: {
    getData () {
      let timestamp = Date.parse(new Date()) / 1000;
      let sign = this.$md5(makeSign.makeSign({ timestamp }));
      webHelp.getAboutUs({ timestamp, sign }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.data = data.data;
        } else {
          console.log('error')
        }
      })
    },
    initVideo () {
      //初始化视频方法
      this.player = this.$video(this.$refs.myVideo, {
        //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        controls: true,
        //自动播放属性,muted:静音播放
        autoplay: "muted",
        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: "auto",
        //设置视频播放器的显示宽度（以像素为单位）
        width: "900px",
        //设置视频播放器的显示高度（以像素为单位）
        height: "450px"
      });
    }
  },
  mounted () {
    this.getData();
    this.initVideo();
  }
}
</script>
<style scoped>
</style>