<template>
  <div data-v-29774714=""
       class="fixed-toolbar"
       style="z-index: 100;">
    <div class="tool-box">
      <div class="tool-list">
        <router-link tag="a"
                     to="/orderItem"
                     class="dpd-hover zindex">
          <i class="dpd-refer tool-i-person"></i>
          <div class="dpd-layer left-bottom">我的工品</div>
        </router-link>
        <router-link tag="a"
                     to="/mycart"
                     class="dpd-hover zindex">
          <i class="dpd-refer tool-i-cart">
            <i class="i-warn"></i>
          </i>
          <div class="dpd-layer left-bottom">购物车</div>
        </router-link>
        <router-link tag="a"
                     to="/myCollect"
                     class="dpd-hover zindex">
          <i class="dpd-refer tool-i-star"></i>
          <div class="dpd-layer left-bottom">我的收藏</div>
        </router-link>
        <!-- <router-link tag="a"
                     to="/feedBack"
                     class="dpd-hover zindex">
          <i class="dpd-refer tool-i-edit"></i>
          <div class="dpd-layer left-bottom">意见反馈</div>
        </router-link> -->
      </div>
      <div class="tool-list">
        <a :href="QQservice"
           id="service"
           class="dpd-hover zindex">
          <i class="dpd-refer tool-i-mic"></i>
          <div id="customerService"
               class="dpd-layer left-bottom">在线客服</div>
        </a>
        <a href="javascript:;"
           class="dpd-hover zindex">
          <i class="dpd-refer tool-i-phone"></i>
          <div class="dpd-layer left-bottom">
            <span id="gpyhPhone"
                  style="text-decoration: underline;">{{service}}</span>
          </div>
        </a>
        <a href="javascript:;"
           class="dpd-hover zindex">
          <i class="dpd-refer tool-i-qrcode"></i>
          <div class="dpd-layer left-bottom">
            <div class="tool-qrcode-detail">
              <!-- <img src="../../assets/image/qr_code_app.e577134.png" alt="qr_code_app"> -->
              <div style="border-bottom: 1px solid rgb(204, 204, 204); margin: 0px 18px;"></div>
              <img src="../../assets/image/wechat.png"
                   class="official"
                   alt="qr_code_wx">
            </div>
          </div>
        </a>
        <a href="javascript:;"
           id="abc"
           class="dpd-hover zindex"
           style="display: block;">
          <i class="dpd-refer tool-i-top"></i>
          <div class="dpd-layer left-bottom">返回顶部</div>
        </a>
      </div>
    </div>
  </div>

</template>


<script>
import makeSign from '../../api/makeSign'
import indexItem from '../../api/indexItem'
import Code from '../../api/Code'
export default {
  data () {
    return {
      service:{},
      QQservice:''
    }
  },
  methods:{
    //获取客服电话
    getService () {
      let timestamp = Date.parse(new Date()) / 1000;
      let platform = 1;
      let sign = this.$md5(makeSign.makeSign({ timestamp, platform }))
      let formData = { timestamp, sign, platform };
      indexItem.getService(formData).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.service = data.data.fixed.number
          console.log(this.service)
          this.QQservice = "tencent://message/?uin=" + data.data.qq.number + "&amp;Site=gpyd&amp;Menu=yes"
        } else {
          console.log('客服获取失败--' + data.msg)
        }
      })
    },
  },
  mounted () {
    this.getService()
    // 返回顶部隐藏与点击事件
    $("#abc").hide();
    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        $("#abc").fadeIn(200);
      } else {
        $("#abc").fadeOut(200);
      }
    })
    $("#abc").click(function () {
      $('body,html').animate({
        scrollTop: 0
      })
    })
  },
  
}



</script>


<style scope>
a {
  color: #333333;
  text-decoration: none;
}
a:hover {
  color: #333333;
  text-decoration: none;
  cursor: pointer;
}
</style>