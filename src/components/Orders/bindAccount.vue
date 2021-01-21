<template>
  <div class="gc_content">
    <div class="bindAll-wrapper">
      <div class="title">
        <img src="https://site.gpyh.com/static/dist/img/tipIcon.png"
             class="tipIcon">
        <span>为了使您的登录更加快捷，请绑定其他登录方式。</span>
      </div>
      <div class="bind-content-wrapper">
        <div class="bind-content">
          <div class="bind-content-left">
            <img src="https://site.gpyh.com/static/dist/img/qq.png"
                 class="qq">
            <span>绑定后可直接使用QQ账号登录工品商城进行购物</span>
            <span style="display: inline-block;color: #ff5000;margin-left: 10px;">未绑定</span>
          </div>
          <div class="bind-content-right">
            <input type="button"
                   class="bindBtn"
                   value="绑定">
          </div>
        </div>
        <div class="bind-content">
          <div class="bind-content">
            <div class="bind-content-left">
              <img src="https://site.gpyh.com/static/dist/img/weixin.png"
                   class="qq">
              <span>绑定后可直接使用微信扫一扫登录工品商城进行购物</span>
              <span style="display: inline-block;color: #ff5000;margin-left: 10px;">未绑定</span>
            </div>
            <div class="bind-content-right">
              <input type="button"
                     class="bindBtn"
                     value="绑定">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.bindAll-wrapper .title {
    height: 40px;
    line-height: 40px;
    background: #ffffe0;
    margin-top: 10px;
    margin-bottom: 20px;
    border: 1px solid #fce1b1;
    box-sizing: border-box;
    font-size: 0px;
}
.bindAll-wrapper .title img {
    margin: 12px 5px 0px 20px;
}
.bindAll-wrapper .title span {
    display: inline-block;
    font-size: 14px;
    color: #737373;
    position: relative;
    top: -3px;
}
.bind-content {
    height: 80px;
    box-sizing: border-box;
    background: #f5f5f5;
    margin-bottom: 10px;
    line-height: 80px;
}
.bind-content-left {
    float: left;
    height: 80px;
}
.bind-content-left img {
    margin: 22px 15px 0px 20px;
}
.bind-content-left span {
    display: inline-block;
    font-size: 12px;
    color: #525252;
    text-align: left;
    position: relative;
    top: -13px;
}
.bind-content-right {
    float: right;
}
.bind-content-right .bindBtn {
    width: 58px;
    height: 28px;
    display: inline-block;
    margin-right: 20px;
    color: #ffffff;
    font-size: 12px;
    border-radius: 4px;
    background: #124c8e;
    border: 1px solid;
}
</style>