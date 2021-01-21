<template>
  <div data-v-cf0bb7e4=""
       id="aboutUsDataMain"
       class="r_content detail-main">
    <!---->
    <div data-v-cf0bb7e4="">
      <h1 data-v-cf0bb7e4=""
          class="hd"
          style="text-align: center; padding: 15px 0px; line-height: 30px; font-size: 25px;">支付方式</h1>
      <!---->
      <div data-v-cf0bb7e4=""
           class="bd"
           style="border-bottom: 1px solid rgb(238, 238, 238); padding-bottom: 20px;">
        <p></p>
        <p><br></p>
        <p><br></p>
        <p><br></p>
        <p style="line-height: 1.75em;">
          <span style="font-family: 微软雅黑, 'Microsoft YaHei';">
            <strong><span style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: medium; white-space: pre-wrap;">支付宝支付</span></strong>
            <strong style="margin:0 20px"><img :src="host + data.applylogo" title="" alt="zhifubao.png"> &nbsp; &nbsp;</strong>
            <span style="font-size: medium; white-space: pre-wrap; font-family: 微软雅黑, 'Microsoft YaHei';">支付宝官方账号：{{data.account}}</span>
          </span>
        </p>
        <p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, 'Microsoft YaHei';"><br></span></p>
        <p style="line-height: 1.75em;">
          <span style="font-family: 微软雅黑, 'Microsoft YaHei';">
            <strong>
              <span style="font-family: 微软雅黑, ">
                <strong style="font-family: 微软雅黑, ">
                  <span style="font-size: medium; white-space: pre-wrap;">网银支付</span>
                </strong>
              </span>
            </strong>
          </span>
          <span style="font-family: 微软雅黑, 'Microsoft YaHei';">
            <strong><span style="font-family: 宋体, SimSun; font-size: medium; white-space: pre-wrap;margin:0 26px"> &nbsp; &nbsp;</span></strong>
            <strong><span style="font-family: 宋体, SimSun; font-size: medium; white-space: pre-wrap;">
              <img :src="host + data.e_banklogo" title="" style="width:50px" alt="yinlian.png"></span></strong>
            <span style="font-family: 宋体, SimSun;">
              <span style="margin-left:25px;font-family: 微软雅黑, 'Microsoft YaHei'; font-size: medium; white-space: pre-wrap;">{{data.bankbranch}}</span>
            </span>
          </span>
        </p>
        <p style="line-height: 1.75em;">
          <span style="margin-left:190px;font-size: medium; white-space: pre-wrap; font-family: 微软雅黑, 'Microsoft YaHei';">账号：{{data.cardnum}}</span>
        </p>
        <p style="line-height: 1.75em;">
          <span style="margin-left:190px;font-size: medium; white-space: pre-wrap; font-family: 微软雅黑, 'Microsoft YaHei';">账户名称：{{data.cardname}}</span>
        </p>
        <p style="line-height: 1.75em;">
          <span style="margin-left:190px;font-size: medium; white-space: pre-wrap; font-family: 微软雅黑, 'Microsoft YaHei';">行号：{{data.banknum}}</span>
        </p>
        <p style="line-height: 1.75em;">
          <span style="margin-left:190px;font-size: medium; white-space: pre-wrap; font-family: 微软雅黑, 'Microsoft YaHei';"><br></span>
        </p>
        <p style="line-height: 1.75em;">
          <span style="font-family: 微软雅黑, 'Microsoft YaHei';">
            <strong>
              <span style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: medium; white-space: pre-wrap;">稍后支付 </span>
            </strong>
            <span style="margin-left:120px;font-family: 微软雅黑, 'Microsoft YaHei'; font-size: medium; white-space: pre-wrap;">{{data.paylater}}</span>
          </span>
        </p>
        <p style="line-height: 1.75em;">
          <span style="margin-left:190px;font-size: medium; white-space: pre-wrap; font-family: 微软雅黑, 'Microsoft YaHei';">{{data.laternote}}</span>
        </p>
        <p style="line-height: 1.75em;">
          <span style="margin-left:190px;font-size: medium; white-space: pre-wrap; font-family: 微软雅黑, 'Microsoft YaHei';"><br></span>
        </p>
        <p style="line-height: 1.75em;">
          <span style="margin-right:50px;font-size: medium; white-space: pre-wrap; font-family: 微软雅黑, 'Microsoft YaHei';">
            <strong style="font-family: 微软雅黑, ">
              <span style="font-size: medium; white-space: pre-wrap;">如何使用专属账号付款 &nbsp; &nbsp; &nbsp;</span>
            </strong>
          </span>
              <a href="http://site.gpyh.com/article/h-2-28.html" target="_self">
                <span style="font-size: 14px; white-space: pre-wrap; font-family: 微软雅黑, 'Microsoft YaHei';">{{data.exclusive}}</span>
              </a>
          </p>
      </div>
      <!---->
    </div>
  </div>
</template>
<script>

import makeSign from '../../api/makeSign'
import Code from '../../api/Code'
import webHelp from '../../api/webHelp'
import url from '../../api/urls'
export default {
  computed:{
    host(){
      return url.BWS
    }
  },
  data () {
    return {
      data: ''
    }
  },
  methods: {
    getData () {
      let timestamp = Date.parse(new Date()) / 1000;
      let sign = this.$md5(makeSign.makeSign({ timestamp }));
      webHelp.getPayMethod({ timestamp, sign }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.data = data.data;
        } else {
          console.log('error')
        }
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style scoped>
.page .detail-main .bd {
    line-height: 2em;
    font-size: 14px;
}

</style>