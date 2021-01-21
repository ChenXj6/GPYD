<template>
  <div data-v-2c1fbd4d=""
       class="layout-common">
    <section data-v-985e2336=""
             data-v-2c1fbd4d=""
             class="app-main">
      <div data-v-985e2336=""
           class="login-passport">
        <!-- header -->
        <div class="header-passport">
          <div class="header-logo">
            <div class="header-warpper">
              <div class="header-l">
                <a href="/">
                  <img src="../../assets/image/login.png"
                       alt="logo_main" /></a>
              </div>
              <span class="line"></span>
              <div class="headR">
                <div class="headR-l"><span>欢迎登录</span></div>
                <div class="headR-r">
                  <img src="../../assets/image/serive.png"
                       alt="">
                  <a href="javascript:;">{{service}}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 登录页面内容 -->
        <div class="login-content">
          <div class="login-content-wrap ">
            <!-- left -->
            <div class="warpCenter">
              <!-- 左侧图片 -->
              <img src="../../../static/img/login_left.png"
                   class="warpCenter-l"
                   alt="">
              <!-- 二维码 -->
              <div class="warpCenter-r">
                <img src="../../assets/image/official.jpg"
                     alt="">
                <div>
                  <p>扫描关注工品易达微信</p>
                  <span>更多惊喜等着你</span>
                </div>

              </div>
            </div>
            <!-- right 登录信息 -->
            <div class="form-wrap">
              <div class="form">
                <!-- title -->
                <div class="title">
                  <div class="textAlignLeft fontSize0 textTitle">
                    <span class="title-tab">密码登录</span>
                    <!-- <span class="line"></span> -->
                    <span class="title-tab">验证码登录</span>
                  </div>
                  <!-- <div class="textAlignLeft fontSize0" style="display: none;">
                    <span class="title-tab">扫码登录</span>
                  </div> -->
                </div>

                <!-- 密码登录表单 -->
                <el-form ref="loginForm"
                         :rules="rules"
                         style="display:none"
                         :model="loginForm"
                         class="account-login"
                         label-width="0"
                         label-position="left">
                  <el-form-item class="label"
                                prop="user_name">
                    <el-input v-model="loginForm.user_name"
                              placeholder="请输入用户名或手机号"></el-input>
                  </el-form-item>
                  <el-form-item prop="password">
                    <el-input v-model="loginForm.password"
                              placeholder="请输入密码"
                              clearable
                              show-password></el-input>
                  </el-form-item>

                  <div class="otheritem">
                    <span class="remember"><input type="checkbox"
                             id="isRemember"
                             name="isRemember"
                             v-model="loginForm.isRememder" />
                      <label for="isRemember"
                             @click="rem_user">记住用户名</label></span>
                    <span class="forgetPass"><a href="/passport/findPwd?t=1591950321123"
                         class=""
                         target="_blank">
                        <router-link tag="a"
                                     target="_blank"
                                     to="/findPwd">找回密码</router-link>
                      </a></span>
                  </div>
                  <div class="btn-wrapper"
                       style="margin-top:55px">
                    <input type="button"
                           value="登 录"
                           class="loginBtn"
                           @click="login()"
                           v-on:keyup.enter="sumbit()" />
                  </div>
                </el-form>

                <!-- 验证码登录 -->
                <el-form :model="verification_code_Form"
                         class="account-login"
                         style="display:none"
                         ref="codeForm"
                         :rules="rules1">
                  <el-form-item prop="mobile">
                    <el-input v-model="verification_code_Form.mobile"
                              placeholder="请输入手机号"></el-input>
                  </el-form-item>
                  <el-form-item prop="verification_code">
                    <el-input v-model.number="verification_code_Form.verification_code"
                              placeholder="短信验证码"
                              class="inputStyle"
                              style="width:68%" />
                    <el-button :type="colorClass? 'primary' : 'info'"
                               :disabled="disabled"
                               @click="saveCode"
                               style="width:32%;height:40px">{{phoneCodeText}}</el-button>
                  </el-form-item>
                  <div class="otheritem">
                    <span class="remember"><input type="checkbox"
                             id="isRemember"
                             name="isRemember"
                             v-model="loginForm.isRememder" />
                      <label for="isRemember"
                             @click="rem_user">记住用户名</label></span>
                    <span class="forgetPass"><a href="/passport/findPwd?t=1591950321123"
                         class=""
                         target="_blank">
                        <router-link tag="a"
                                     target="_blank"
                                     to="/findPwd">找回密码</router-link>
                      </a></span>
                  </div>
                  <div class="btn-wrapper"
                       style="margin-top:55px">
                    <input type="button"
                           value="登 录"
                           class="loginBtn"
                           @click="codeLogin()"
                           v-on:keyup.enter="sumbit()" />
                  </div>
                </el-form>

                <!-- 二维码登录 -->
                <!-- <div class="qrcode-login" style="display: none;">
                  <div class="state-code">
                    <div class="qrcode-section">
                      <div class="qrcode-imgbox">
                        <img src="" class="qrcode-img" />
                        <div class="qrcode-err">
                          <p class="qrcode-errtxt">二维码已失效</p>
                          <a href="javascript:;" class="qrcode-new">刷新</a>
                        </div>
                      </div>
                      <img
                        src="/static/img/scan_app.3113472.png"
                        class="scan-app"
                      />
                    </div>
                    <p class="scan-tip">
                      <i class="i-scan"></i
                      >打开<span>工品一号APP&nbsp;(最新版本)</span>&nbsp;&nbsp;扫描登录
                    </p>
                  </div>
                  <div class="state-scaned">
                    <i class="i-success"></i>
                    <p class="qrcode-scanedtxt">扫描成功！请在手机上确认登录</p>
                    <p class="qrcode-scanedtip">
                      请勿刷新本页面，按APP提示操作！
                    </p>
                  </div>
                </div> -->

                <!--  -->
                <div class="register-wrapper">
                  <div class="register">
                    <div class="floatRight">
                      <span>还不是会员?</span>
                      <a href="/passport/register?t=1591950321124"
                         class=""><span class="freeRegister">
                          <router-link to="/register">免费注册</router-link>
                        </span>
                        <span class="rightArrowIcon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYTdlMTQ2YS05MGE0LTMxNDktOTNkYS00YTc3ZDZkYWM1N2MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0U0MjNFRjkwMUNBMTFFOUI3QTBBMzQwMUUzMkQ2MzQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0U0MjNFRjgwMUNBMTFFOUI3QTBBMzQwMUUzMkQ2MzQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZGNkZDUxN2ItY2MyMy0wYTQ5LTgyMTktY2RhNDg5MTZmMjliIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YmY4YTI1NzEtZWQ1OS0xMWU4LTg0YzQtYTJkMTFkZjc4NzNiIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+JbhTVwAAAX1JREFUeNqE0ssrRGEYx/GZs1AWjFCyZCG3jbWFcikyuV+2FEVJ2Sh/gbKgJClkOy65hFKULGxZmNwWysrCnSSTGt+nfkdvB3nrU9P7Ps/vnHnPE86MjocCqxg9qEOe9q6wgzmcusWe8zsFU9jHLToQkU7t2dkMUoMB1ryNXBRgDGn4xAdOMKqzbGyp5ztgAq9owzN6cYglv1DLztrxhHE/oASt6EJShQd4RAtigRCr6VZPiacLm8aLU3SGajygGYuBEKudtF4LqMVG6Oc6Usg9mrAcCLF7qLWAfJyHfl/HqFFIA1ackAvr9UL/r6RzN+HAZ094GpLCP5rLsKdPt6mLS+jM3vza04Q1/tG8iyzdUZvTbKvewi1gHv1Idw6L9GRrXtdUus1WO2ijbQFxrGLB+Y8VyMSaxthtDqvWeuL+JQ4pdUWzP4vyX54c0efMUM/3KCf0n25wiWENS1i3XYoRnd0h6ge7n9E2BlCJHL3Nm6Yxpr0q9OHdb/oSYABX51sQRIKaqAAAAABJRU5ErkJggg=="
                               alt="trigle" /></span></a>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 右上角图片 -->
              <!-- <img
                src="data:image/png;base64,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"
                alt="qrcode"
                class="sanjiaoCode"
              /> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- footer -->
    <div data-v-2c1fbd4d=""
         class="footer-passport">
      <div class="footer-content">
        <div class="icon-wrap">
          <div class="wrap">
            <div class="pItem">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYTdlMTQ2YS05MGE0LTMxNDktOTNkYS00YTc3ZDZkYWM1N2MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkQ3OUQyQTAwN0UzMTFFOUJDRDdBNjkxRjc5QUY4QUIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkQ3OUQyOUYwN0UzMTFFOUJDRDdBNjkxRjc5QUY4QUIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZDYwMzY3N2YtZjdhZi1iZTQwLWFmMjEtNTZjMGUzNDVhOTY1IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTA2ZjhkYzAtZWQ1ZC0xMWU4LTg0YzQtYTJkMTFkZjc4NzNiIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+DkapOgAAA/VJREFUeNrEl39MjVEYx99bXbdUIiJKJGtmfuTXyq+aFGZaozYaZsN//MEW14/xT5Oujdn43/xhjCUbIgu1Kyo/0jLDRn7MEIt+aFfi9T1vz+HpeN973/KHZ/uc+77nPO89zznPOc9zjkMv0exKMMgAKWAeSAbhoAe8APXgHqjR3Hqr3T912DBgOCgEa8FYG//ZAS6B7TDkQyDlkADte4EbRJq0fQddwAVCWb3QLQBBYM1ADRgBLoD5Sn0V8IIroJkMGARiQTa5KIc6vzVQF4wCD+lPpVwE+6m+r7j1vu8exziU0ahvYHUxxhpy6+8DGRABnoA4ev8CNoNSyyGoBqjicaShvEGLOAv6Xt4cpKhfY523gZl+O7cnC0EYuaoaBg21MmArmEvP3dR5M2s/ACrAdIuRhoJScB4MYy3HmOsc4LSVAYfY8zra21ImgT1gCbgPpiqdO1HeBavASrCeuciHcjnTXgb9VNWAQpomIXXgnDI+sZ/fsIBUCyazzoVfpzD9WmWdvEO5j9UcURfhWzCG6sTUN5hM8khwGyTRu9iC+WR8JtPLRoeVFm4SizqK3sZD71UQ+VR2/syicyEtFH5l+2BQzjoXBs2y7LxXytjzUumCFFZZGWBF/wTp4KlS32b41q0/CPA9X4AZMhJOY5Ves2BFIXkjcNJMhCk6YiAlmOJ4eq839N16h6InXPiNwnei/DCZKTSZGCD2bxF9EE9rJEHRiaQMmUDk085Rg1Ynyo/sG8MAF1PpMjGg28hsmtZKmU7Sw3S+Km2nwGMLN3TTr0u6wMcaw00+ELH2KMHlMtvfEzC6FpuR0ckNCaEFlUOVYi8/svgwltYDzxtSJsL/wcq+N9uGYoAx7NxgGNCkxO0zJgvsLMjzM6oapaPnKBeYZL80dnZ4Kf+8kSlkWpwZ8vqZgJJYUuNSwJ6r5Z83UiSMo5WbouR94atcsIXCsFgTP8AcI+//2V6dLLR7Tc8OvblCSgUPxTvFxLFckGZjlOKQsoKeozDd7QHOBbtQHvwdJ9x6Kk9Gh9luEA2rbRgQqSxQf53Hsc6FbFOzoZjSHUrITOzHebItgO5V9lyO0d8xOw8cp3O9DL8PTCKepoyizDg7+Dt+exzXlVS9wd+ZcAjFBTmlIvptohNy/86EHofIMScodEtZBP0qf2fCdiOlatoneo+mUZb+dQqyHnEMKKbdxTvPVTv3dzOKpVU+W6kX03mTfPqacoCLolsWWEx5nof0TmO3uPXqgVzNiuhm5DRp8zEDIiy+Pwl2W4Zmm3fDeIoTIsWOtuEEH90Ni/tcTv7BAI2lz3SKgDNo2p20hT/ThabOiIomNyBrA3Rd+5/yS4ABAFWRCY8D0na7AAAAAElFTkSuQmCC"
                   alt="point1" />
              <span>13%增税</span>
            </div>
            <div class="pItem">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYTdlMTQ2YS05MGE0LTMxNDktOTNkYS00YTc3ZDZkYWM1N2MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjBFQUIzMzkwN0U0MTFFOUFEQzNBOTZDQTY0RDY0ODMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjBFQUIzMzgwN0U0MTFFOUFEQzNBOTZDQTY0RDY0ODMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZDYwMzY3N2YtZjdhZi1iZTQwLWFmMjEtNTZjMGUzNDVhOTY1IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTA2ZjhkYzAtZWQ1ZC0xMWU4LTg0YzQtYTJkMTFkZjc4NzNiIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jFIpsAAAA/ZJREFUeNrEV1lsTkEUvkOttS+piiCWB0IoQtAQYk0s8VA8iCWWhiDxoBeJBInlvoiklsS+hwgajQYR+xZLFLWLIJaoXTW2cn0z/3fbMZ3/+v+WmOSbMzN35syZOcucK3zfd/5nSYh5pidqoe4HpAFdgCZAVX79CTwFrgO7gWOO6z+Pha344w14oi7qBUA6UCWOw20HFkOQO2UXwBNjUa8EanLkErAVOAu8BN5zPBFoBKQA44C+Gpc5EMKLXwBPrEM9ib0sYCkYXYxRXa1QzwKmceQIMBzrv8QmgCey1IJIGYeFW8tkYZ4YiHozbycP6Apen/UpFSyL1nPzt0C7Mm8ui+sfRt0euKV4Oc4Jc0oFY/ORqCfSqlPB4Kb1VJ7oEIcQr9XJHeeFop5YahfAEzVQ72BvNBbejsLyEA0xnpsoRD2o2Cg90dQWB5axfxQL9vyBpW/cikA9AehEfRfyxLvAK5dCXMe8ZUoAx5EGPrBEAE9I/55KdukxnOm90a8MbLDMKwBytf48CjAAezaHUI+CGxhEddzE4EPjdMmolwCNtcjXCePSoD4Al4FMjudifQq+yflzgRxDFT7dezJdNCOh2NUiJdNyis7AeGNMBqbebA+jn0vDDVxsFGmehd9aCiANPiMwwm6kJy0LikgH4wSC7QtsrwniCe3iE/st1Old/7uF333SZroXJJG+CTG4QotQ37THyFHh2RN92N4ZxSOk2vJNN6xIJgW2cE36wSLAF0PQH8BQ9m+EGPHjaM+xH6KCLTjdC7aloR2gfXw1BL1Kmszn2VZ+2CKhbNcIUUFHZQeRUpsnlZ6h67m+8v1IGRFyA41NAV6R1glJWvprRniO7VWG0PVpeNI2xkZ5oKqjbmoKEOirS4jUhZYr/GrMSSRdAVRTwaZ0aaYfOhBgE+nMECOsYnlDKhtzAiE7aDHCLEFM2a8zyibtwRRML5VIj+NbYPU92Z6ueZF+Iy2ZIz6zCDCDdHWJABHfzOKH5cYCmYZtJJXP8z7gIN/4U8B84B6FaEh+rdVVu/5eQ//pSjVS5a5/7feMKPJEBv7ZHRMuxJH5JNAbXmNdwyhzGvCFTFC25vpXfndD13+CenaxSkqrIuy9L6I6JobMyubmu4LN7TmhJ+R70Au4rd4I1y8o99+HJ3IYQ/LBLyk8J5T+HtF1G6UrT/Qsx8YtgNPc/KNSbYxZcSJTr1SOLFK+7frv4rCJKQxUsjwAhmD93Xh/TOQPRYYWfDYxH7wLZvnG3Hp0vzSmZw34ZZuyDfvTHNOvWQqzmzTjS77m5/W0CBeUM8BCbHy0fP+GJYLIvH6MukrHaatFP708UEmtvCXXP/93fk7/cfklwAAnW0Tvl+GWaAAAAABJRU5ErkJggg=="
                   alt="point2" />
              <span>量大包邮</span>
            </div>
            <div class="pItem">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYTdlMTQ2YS05MGE0LTMxNDktOTNkYS00YTc3ZDZkYWM1N2MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NENEMjc4QUQwN0U0MTFFOTg5ODlENDdEMTY3QjJFQTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NENEMjc4QUMwN0U0MTFFOTg5ODlENDdEMTY3QjJFQTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZDYwMzY3N2YtZjdhZi1iZTQwLWFmMjEtNTZjMGUzNDVhOTY1IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTA2ZjhkYzAtZWQ1ZC0xMWU4LTg0YzQtYTJkMTFkZjc4NzNiIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bziQOwAAAotJREFUeNrsl1+ITUEcx+/sXfmf1p941saGojyIJyLlQXmQ5IEktfsiKzltWZRYg0gUijwID17wjJDCPqw2u6TsPiAS2xaFte0dnzn3d7dpnOOee+9xb2Lq+51zz+/3m9/cmfn95neUMSZTy1aXqXGr+QTqy7bUqgluBzPAoUxg7pczjCr5DGjVAB8D2zzJPbCLiTz9c1ug1Vb4VYRz25aDLnQOp78CWk2DL4M1nuQ0eA98p8/BBlajt/IV0GoT/MJz/lYc7AAdPC8G7hmYB3qw3V/+CmjVCJ8Aaz3JKdCG428RNi3wUTDJedsDWtG/nWwCWk2Ht4ODIOtI7oK9DPSoyIrNsgw2e5KLoAP7vvgJaLUCvgkmOzof5B9cK/HALoOPg6WepJmxzsdNoFf2r9DOgT0YfKkgX7TKIR03+i4wKu4QjkhvHa5CsaUi53lnJ+E54JkzdmwUfJf+I4Z3Usu3gXkDd8qv4SSpeAxLl8VwxFnK1Y7NJ2SdJU5jSnl3gVZj4cdgkff+CJNoq8ZtWPeL83xbUJ3b0CYcrebztBGYcHvsFuQjpErXcWBsbt/3DxckWs0OLx8Sl6TnAXCBlRl2dKx8roSZ1XmYpEhJEgXj4ZcRuivBetFphs9G2C4pFq5JtiAH+iLev3aeB2LsvqYRBUP8k4VSD+RGo8Bd3sBcR8eGaqNsQX2YOwLzLq0oGIJvFNHphrv/+ijIen3hMNmqaIsTBYNhwRKYfpFPhA/IrVeIggdyE/pjq99NYKr0MyXr2cEnwLciJt/kFBs7wW5Pvg7bLuesNHh95BbYKvdzWMkEJifvfoArco8PSm+rpEteudbv6TyREr7QzkgKv1rZh8n/j9OU208BBgCX7NKcd2KWbwAAAABJRU5ErkJggg=="
                   alt="point3" />
              <span>库存充足</span>
            </div>
            <div class="pItem">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYTdlMTQ2YS05MGE0LTMxNDktOTNkYS00YTc3ZDZkYWM1N2MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDQ5MTk0NUEwN0UzMTFFOUFCM0JDRDk5RTZGNTRDNzQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDQ5MTk0NTkwN0UzMTFFOUFCM0JDRDk5RTZGNTRDNzQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZDYwMzY3N2YtZjdhZi1iZTQwLWFmMjEtNTZjMGUzNDVhOTY1IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTA2ZjhkYzAtZWQ1ZC0xMWU4LTg0YzQtYTJkMTFkZjc4NzNiIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+znsYKwAAA25JREFUeNq0l3tozWEYx3/nOEabSTSaMbLchjVkUcTmlnJvlkhNuURJyVJCFFlq7jVNLn8gd5lS5PKHPyRlLtkIZczmftlpLts5O75PfX/19HN+5/zes3nq0/u+v97L83vf532e5/VFSi0T6QxGg0EgF6SDJPAZ1JAn4K3XCQMe+40Ci0kvD/3PgjPgYryOvjg7kAnKQKHj+yPwDnwFraArFcsBKarfU7AOXE9kB4rAMZCsFpW/ugyqXcaIIvPAbDAfDAPXwE6w0WQHtoBtrH8B68Fxy0zk2HaDiWzfBFOcnfxRBq5Vi8vWDUlgcZEHYBLYzvZk7kZMBeaAvazLVk+nhbdFNoMVrE8DJ90U6AbOsX4XzLXaTw6DEtYX0T7+sQHptAyEQXfQyO/ZYBboRIv3Ij7Oc5s/Y8stkA8+8dZE7FuQwcVF1qjFRUqpQCIiV7WPai8EDSANrASHAmpRix6s3DHJJlDL4wqrY5P6cFAA3vP4/GoHIuC8Y66PsihYzWtZIUfgo6HJtm9VN8CLTOVNucG6FxkMnrGeJxpncXGRIzEG5tIxjVPfMlSM8CrPQRXrBX41oZxNXYyBYsXFdK1OCRvaxkOWY8QGRrJRG2fQL5ZNLl7vDujA8xdCYBeojNL/Mcu0gNrGujgKhBylllQwPsr3YhcFGlh2CVBby+COR5PXYI+aqyMIglMu/e0j84kC9Q6DSkRegv0G/XuyDPoZs0X6tkGBZMP+OSx/+JWrlOSjR4xBTVGM8BvLZkMFcllWBZjHtfDclqhoqP26uNPebKdT2Qidip2I9Fe3wB5Xp26PLTJPnp0j2MGoAiynMtmOAffUgERkIG1Ex5YNdMuZtu8uYzmUKZXTwMRqf4LvPIJW8pvfguwTUoS5SIuaK4kJj8gB8EeH4ytgptrSoBqYwkATMfhzvyOqWgxYhfwJOYpGnZTKEbxhDtjqYoBtkSKVXZfYymkFJKT2Y7IQstpXZjCjtpPTcrecsOE/LC6Pmausv2CeGTMr1jIA7FC2YSIS5o+CE2xX8zaFTZ5m8h5Yxbo8s06DC3HixliwwBG2LzEdazZ9muXQMeWrb/VMKCR8v+KkGbzvWcrL2SmehOSDib4NbZE0eqnBUdQwe9oXz037DJ/n8koaASbwr1PpfsUhfWCmc9+RiseUvwIMACWA0l6sUWKnAAAAAElFTkSuQmCC"
                   alt="point4" />
              <span>正品保证</span>
            </div>
          </div>
        </div>
      </div>
      <div class="link-wrapper">
        <div class="link">
          <router-link tag="a"
                       to="/webhelp">帮助中心&nbsp;</router-link>
        </div>
        &nbsp;
        <div class="link">
          <span class="links-split"
                style="color: rgb(194, 194, 194);"></span>&nbsp;&nbsp;
          <router-link tag="a"
                       to="/payMethod"
                       style="color: rgb(115, 115, 115);">支付方式&nbsp;</router-link>
        </div>
        &nbsp;
        <div class="link">
          <span class="links-split"
                style="color: rgb(194, 194, 194);"></span>&nbsp;&nbsp;
          <router-link tag="a"
                       to="/deliverMethod"
                       style="color: rgb(115, 115, 115);">配送方式&nbsp;</router-link>
        </div>
        &nbsp;
        <div class="link">
          <span class="links-split"
                style="color: rgb(194, 194, 194);"></span>&nbsp;&nbsp;
          <router-link tag="a"
                       to="/aboutUs"
                       style="color: rgb(115, 115, 115);">关于我们&nbsp;</router-link>
        </div>
        &nbsp;
        <div class="link">
          <span class="links-split"
                style="color: rgb(194, 194, 194);"></span>&nbsp;&nbsp;
          <router-link tag="a"
                       to="/newsCenter?id=1"
                       style="color: rgb(115, 115, 115);">新闻中心&nbsp;</router-link>
        </div>
        &nbsp;
        <div class="link">
          <span class="links-split"
                style="color: rgb(194, 194, 194);"></span>&nbsp;&nbsp;
          <router-link tag="a"
                       to="/webhelp"
                       style="color: rgb(115, 115, 115);">网站地图&nbsp;</router-link>
        </div>
      </div>
      <div class="credit-wrapper">
        <div class="credit"
             style="color: rgb(115, 115, 115);">
          © 2015-2025 www.gpyd.cn 版权所有
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32059002002946"
             target="_blank"
             style="border-right: none; padding-right: 0px;"><img src="https://passport.gpyh.com/static/img/police.d0289dc.png"
                 alt="police"
                 style="position: relative; height: 15px; width: 15px; top: 3px;" />
            备案号 &nbsp;</a>
          <a href="http://beian.miit.gov.cn"
             target="_blank">闽ICP备19024395号</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '../../api/loginAndReg'
import Code from '../../api/Code'
import makeSign from '../../api/makeSign'
import saveCode from '../../api/loginAndReg'
import indexItem from '../../api/indexItem'



export default {
  data () {
    return {
      loginType: 1,
      sign: '',
      service: '',
      loginForm: {
        isRememder: false,
        user_name: '',
        password: '',
        platform: 1,
        login_type: 1
      },
      disabled: false, //发送验证码按钮是否可以点击
      phoneCodeText: '获取验证码',
      outTime: 60, // 设置发送验证码倒计时时间
      colorClass: true,
      verification_code_Form: {
        mobile: '',
        verification_code: '',
        platform: 1
      },
      rules: {
        user_name: [
          { required: true, message: '请输入用户名或手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { pattern: /^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i, message: '密码必须由字母和数字组成', trigger: 'blur' }
        ],
      },
      rules1: {
        verification_code: [
          { required: true, message: '请输入短信验证码', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '请输入正确格式', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[3|4|5|7|8][0-9]\d{8}$/, message: '请输入正确的电话号码', trigger: 'blur', },
        ],
      }
    }
  },
  methods: {
    submit () {
      console.log(1)
    },
    // 获取验证码
    saveCode () {
      let mobile = this.verification_code_Form.mobile;
      if (mobile == '') {
        this.$message.warning('请输入手机号码')
        return
      }
      let timestamp = Date.parse(new Date()) / 1000;
      let send_type = 3;
      let sign = this.$md5(makeSign.makeSign({ mobile, timestamp, send_type }))
      saveCode.saveCode({ mobile, send_type, timestamp, sign }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.disabled = true;
          this.colorClass = false;
          if (!this.timer) {
            this.timer = setInterval(() => {
              this.phoneCodeText = this.outTime + 's后重新发送';
              this.outTime = this.outTime - 1;
              if (this.outTime < 0) {
                clearInterval(this.timer);
                this.phoneCodeText = '获取验证码';
                this.outTime = 60;
                this.timer = null;
                this.disabled = false;
                this.colorClass = true
              }
            }, 1000);
          }
        } else {
          this.$message.error(data.msg)
        }
      })
    },
    // 用户名密码登录
    login () {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          // 是否记住用户名，密码
          if (this.loginForm.isRememder) {
            this.rem_user(this.loginForm.user_name, true)
          } else {
            this.clear_rem()
          }
          let timestamp = Date.parse(new Date()) / 1000;
          delete this.loginForm.isRememder;
          this.sign = this.$md5(makeSign.makeSign(this.loginForm))
          let formData = {
            user_name: this.loginForm.user_name,
            password: this.loginForm.password,
            platform: 1,
            sign: this.sign,
            timestamp: timestamp,
            login_type: 1
          }
          Login.checkLogin(formData).then(res => {
            let data = res.data;
            if (data.code === Code.CODE_SUCCESS) {
              sessionStorage.setItem('balance', data.data.balance);
              this.$store.dispatch('initBeforePay', data.data.balance)
              sessionStorage.setItem('active', 1);
              this.$store.dispatch('login', data.data).then(() => {
                let url = this.$route.query.redirect || '/'
                this.$router.push({ path: url })
              })
            } else if (data.code === Code.CODE_FAIL) {
              this.$message.warning(data.msg);
            }
          })
        } else {
          return
        }
      })
    },
    // 验证码登录
    codeLogin () {
      
      this.$refs['codeForm'].validate((valid) => {
        if (valid) {
          let timestamp = Date.parse(new Date()) / 1000;
          let login_type = 2;
          let mobile = this.verification_code_Form.mobile;
          let verification_code = this.verification_code_Form.verification_code;
          let platform = 1;
          let sign = this.$md5(makeSign.makeSign({ timestamp, login_type, mobile, verification_code, platform }))
          Login.checkLogin({ timestamp, login_type, mobile, verification_code, platform, sign }).then(res => {
            let data = res.data;
            if (data.code === Code.CODE_SUCCESS) {
              sessionStorage.setItem('active', 1);
              sessionStorage.setItem('balance', data.data.balance);
              this.$store.dispatch('initBeforePay', data.data.balance)
              this.$store.dispatch('login', data.data).then(() => {
                let url = this.$route.query.redirect || '/'
                this.$router.push({ path: url })
                this.$message({
                  message: data.msg,
                  type: 'success'
                });
              })
            } else if (data.code === Code.CODE_FAIL) {
              this.$message.warning(data.msg);
            }
          })
        } else {
          return
        }
      })
    },
    // 记住用户名
    rem_user (userName, isRem) {
      localStorage.setItem("rem_username", userName)
      localStorage.setItem("isRem", isRem)
    },
    // 获取用户名
    get_user () {
      this.loginForm.user_name = localStorage.getItem("rem_username")
      this.loginForm.isRememder = localStorage.getItem("isRem")
    },
    // 清除localStorge中保存的用户名
    clear_rem () {
      this.rem_user('', '')
    },
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
        } else {
          console.log('客服获取失败--' + data.msg)
        }
      })
    },
  },
  mounted () {
    this.get_user();
    this.getService();
    $('.title-tab').eq(0).addClass('active')
    $('.account-login').eq(0).addClass('isActive')
    $('.title-tab').on('click', function () {
      let index = $(this).index();
      this.loginType = 1
      if (index == 1) {
        this.loginType = 2
      }
      $(this).addClass('active').siblings().removeClass('active');
      $('.account-login').eq(index).addClass('isActive').siblings().removeClass('isActive');
    });
    document.onkeydown = function () {
      var key = window.event.keyCode;
      if (key == 13 || key == 100) {
        $('.isActive').find('.loginBtn').click()
      }
    }
  },
}




</script>

<style scope>
body {
  background-color: #ffffff !important;
}
.Erroractive {
  font-size: 12px;
  color: #f53100;
  position: absolute;
  left: 50px;
}
.el-form-item--small .el-form-item__label{
  height: 40px;
  line-height: 40px;
  color: #333 !important;
}
/deep/input::-webkit-input-placeholder {
  color: #333; 
}
/deep/input::-moz-input-placeholder {
  color: #333;
}
/deep/input::-ms-input-placeholder {
  color: #333;
}
.isActive {
  display: block !important;
}
.headR {
  width: 835px;
  height: 50px;
  margin: 25px 0 0 50px;
  position: relative;
  top: 30px;
  left: 50px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  color: #525252;
}
.headR-l > span {
  font-weight: 400;
  font-size: 18px;
}
.headR-r {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.headR-r > img {
  width: 20px;
  height: 20px;
  margin: 0 5px 0 0;
}
.headR-r > a {
  color: #124c8e;
  font-size: 14px;
}
.textTitle {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.warpCenter {
  height: 500px;
  padding: 50px 0;
  display: flex;
  margin-right: 400px;
  justify-content: space-between;
}
.warpCenter > img {
  width: 450px;
  height: 450px;
}
.warpCenter-r {
  width: 150px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.warpCenter-r > img {
  width: 100px;
  height: 100px;
  display: block;
  margin: 0 auto;
}
.warpCenter-r > div {
  width: 100%;
  padding: 10px;
  text-align: center;
  box-sizing: border-box;
}

.textTitle:after {
  content: "";
  position: relative;
  left: -43%;
  height: 30px;
  width: 1px;
  background: #e6e6e6;
}
.el-input--small .el-input__inner {
  height: 40px;
  line-height: 40px;
}
</style>
