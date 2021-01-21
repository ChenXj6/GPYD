<template>
  <div data-v-212111fa=""
       id="aboutUsDataMain"
       class="r_content detail-main">
    <div data-v-212111fa="">
      <h1 data-v-212111fa=""
          class="hd"
          style="text-align: center; padding: 15px 0px; line-height: 30px; font-size: 25px;">{{newsDetails.title}}</h1>
      <p data-v-212111fa=""
         style="text-align: center;">{{newsDetails.date_issued}} &nbsp;&nbsp;&nbsp;浏览：{{newsDetails.page_view}}次</p>
      <div v-html="newsDetails.content">{{newsDetails.content}}</div>
    </div>
  </div>
</template>
<script>
import makeSign from '../../api/makeSign'
import Code from '../../api/Code'
import webHelp from '../../api/webHelp'
export default {
  data () {
    return {
      newsDetails: [],
      id: 1
    }
  },
  methods: {
    getNewsDetails () {
      let id = this.id
      let timestamp = Date.parse(new Date()) / 1000;
      let sign = this.$md5(makeSign.makeSign({ timestamp, id }));
      webHelp.getNewsDetail({ timestamp, id, sign }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.newsDetails = data.data;
        } else {
          console.log('error')
        }
      })
    }
  },
  mounted () {
    this.id = this.$route.query.id
    this.getNewsDetails();
  },
  watch: {
    '$route' () {
      this.id = this.$route.query.id
    },
    id () {
      this.getNewsDetails()
    }
  }
}
</script>
<style scoped>
</style>