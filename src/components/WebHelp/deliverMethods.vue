<template>
  <div data-v-212111fa="" id="aboutUsDataMain" class="r_content detail-main">
        <div v-html="data.content">{{data.content}}</div>
  </div>
</template>
<script>

import makeSign from '../../api/makeSign'
import Code from '../../api/Code'
import webHelp from '../../api/webHelp'
export default {
  data () {
    return {
      data: ''
    }
  },
  methods: {
    getData () {
      let timestamp = Date.parse(new Date()) / 1000;
      let sign = this.$md5(makeSign.makeSign({ timestamp }));
      webHelp.getDeliverM({ timestamp, sign }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.data = data.data;
        } else {
          console.log('error')
        }
      })
    }
  },
  mounted(){
    this.getData()
  }
}
</script>
<style scoped>
</style>