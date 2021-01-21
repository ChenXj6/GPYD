<template>
  <div data-v-212111fa=""
       id="aboutUsDataMain"
       class="r_content detail-main">
    <div id="h"
         v-html="data.content">{{data.content}}</div>
  </div>
</template>
<script>
import makeSign from '../../api/makeSign'
import Code from '../../api/Code'
import webHelp from '../../api/webHelp'
import photo from '../../api/photo'
export default {
  data () {
    return {
      data: {},
      id: '',
    }
  },
  methods: {
    getData () {
      let id = this.$route.query.id || 15;
      let timestamp = Date.parse(new Date()) / 1000;
      let sign = this.$md5(makeSign.makeSign({ timestamp, id }));
      webHelp.getHelpCenter({ timestamp, sign, id }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          if (data.data.content != null) {
            if (data.data.content.indexOf('img') != -1) { //判断img是否存在
              let da = photo.changePhoto(data.data.content);
              data.data.content = da;
              this.data = data.data
            } else {
              this.data = data.data
            }
          } else {
            this.data = data.data
          }

        } else {
          console.log('error')
        }
      })
    }
  },
  mounted () {
    this.getData();
  },
  watch: {
    '$route' () {
      this.id = this.$route.query.id;
    },
    id () {
      this.getData()
    }
  }
}
</script>
<style scoped>
</style>