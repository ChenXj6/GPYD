<template>
  <div data-v-29774714=""
       class="top_box">
    <!---->
    <div class="topbar">
      <div class="wrap">
        <div class="link_w left">
          <div id="summary-stock"
               class="clearfix">
            <a href="https://www.gpyh.com"
               id="toHomePage"
               style="float: left; margin-right: 10px; display: none;"><i class="fa fa-home"
                 style="font-size: 14px;"></i>
              <span>首页</span></a>
            <!-- 地址选择 -->
            <div id="store-selector">
              <!-- <div class="site-addr"> -->
              <div class="left">送至：</div>
              <VDistpicker class="address" @selected="onSelected" province='福建省'></VDistpicker>
            </div>
            <!-- </div> -->
          </div>
        </div>

        <div class="link_w right">
          <li class="sd-mark"
              style="display: none;">
            <a href="javascript:;">首单有礼</a>
          </li>
          <li>
            <router-link to="/login"
                         v-if="!$store.state.user_name">请登录</router-link>
            <router-link tag="a" to="/orderItem" v-else>{{$store.state.user_name}}</router-link>
          </li>
          <li v-if="!$store.state.user_name">
            <router-link to="/register"
                         tag="a"
                         href="javascript:;"
                         class="yellow"><i class="icon-gift-box"></i>注册有礼
            </router-link>
          </li>
          <!-- <li class="hover">
            <span>
              签到
              <i class="fa iconfont icon-xialajiantou"></i></span>
            <ul>
              <div class="topbar-qd" v-if="!$store.state.user_name"
                   style="width: 100px;">
                <div class="qd1"></div>
                <router-link to="/login"
                             tag="div"
                             class="qd3">请先登录~</router-link>
              </div>
              <div class="topbar-qd" v-else
                   style="">
                <div class="qd1">
                  已连续签到
                  <b id="continueSignDays">0</b>天
                </div>
                <div class="qd2"><button class="btn btn-blue btn-xs"
                          style="border-radius: 2px; display: inline-block; color: rgb(255, 255, 255); width: 60px; height: 28px;">签到</button> <a href="javascript:;"
                     class="btn btn-xs"
                     style="border-radius: 2px; display: inline-block; color: rgb(255, 255, 255); width: 60px; height: 28px; background: rgb(245, 49, 0); padding: 0px; line-height: 28px; border: none;">去抽奖</a></div>
                <div class="qd3">连续签到五次，可奖励一次抽奖机会哦！</div>
              </div>
            </ul>
          </li> -->
          <li id="customerMessageCount"
              style="display: none;">
            <a href="#"><i class="fa fa-envelope"></i> 消息(
              <span id="messageCount"></span>)
            </a>
          </li>
          <li>
            <router-link to="/orderItem">我的订单</router-link>
          </li>
          <!-- <li class="hover">
            <span>
              <router-link to="/user"
                           tag="a">我的工品</router-link>
              <i class="fa iconfont icon-xialajiantou"></i>
            </span>
            <ul style="width: 180px;">
              <div style="border-bottom: 1px solid rgb(230, 230, 230);">
                <li>
                  <router-link tag="a"
                               to="/user"
                               href="javascript:;"
                               class="pendingPayment">
                    待付款订单&nbsp;
                    <span style="color: rgb(30, 123, 230); display: none;">()</span></router-link>
                </li>
                <li>
                  <router-link tag="a"
                               to="/deliverOrder"
                               href="javascript:;"
                               class="noDeliveryOrder">
                    待发货订单&nbsp;
                    <span style="color: rgb(30, 123, 230); display: none;">()</span></router-link>
                </li>
                <li>
                  <a href="javascript:;"
                     class="returnedOrder">
                    审核通过/退货中退货单&nbsp;
                    <span style="color: rgb(30, 123, 230); display: none;">()</span></a>
                </li>
              </div>
              <div>
               <li>
                  <a href="javascript:;" class="message">
                    我的消息&nbsp;
                    <span style="color: rgb(30, 123, 230); display: none;"
                      >()</span
                    ></a
                  >
                </li> -->
                <!-- <li>
                  <a href="javascript:;" class="myCoupons">
                    我的工品券&nbsp;
                    <span style="color: rgb(30, 123, 230); display: none;"
                      >()</span
                    ></a
                  >
                </li> -->
                <!-- <li>
                  <a href="javascript:;" class="priceDraw">
                    我的抽奖机会&nbsp;
                    <span style="color: rgb(30, 123, 230); display: none;"
                      >()</span
                    ></a
                  >
                </li> 
              </div>
            </ul>
          </li> -->

          <!-- 畅购 -->
          <!-- <li><a href="javascript:;">畅购会员</a></li> -->

          <!-- 尾货清仓 -->
          <!-- <li class="hover">
            <span>
              尾货清仓中心
              <i class="fa  iconfont icon-xialajiantou"></i
            ></span>
            <ul style="width: 250px;">
              <div style="float: left; width: 140px;">
                <li>
                  <a href="javascript:;" class="liactived waitConfirmNumber"
                    >待收货订单<span
                      style="color: rgb(30, 123, 230); display: none;"
                      >&nbsp;()</span
                    ></a
                  >
                </li>
                <li><a href="javascript:;" class="liactived">我的订单</a></li>
                <li><a href="javascript:;" class="liactived">买家对账</a></li>
                <li>
                  <a
                    href="https://www.gpyh.com/article/detail?typeId=0&amp;parentId=2&amp;helpSunListId=33"
                    target="_blank"
                    >发布尾货流程(电脑端)</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.gpyh.com/article/detail?typeId=0&amp;parentId=2&amp;helpSunListId=34"
                    target="_blank"
                    >发布尾货流程(微信端)</a
                  >
                </li>
              </div>
              <div style="float: right; width: 110px;">
                <li><a href="javascript:;" class="liactived">商家入驻</a></li>
                <li><a href="javascript:;">入驻协议</a></li>
                <div style="display: none;">
                  <li class="isSupplier">
                    <a href="javascript:;">发布商品</a>
                  </li>
                  <li class="isSupplier">
                    <a href="javascript:;" class="waitDeliverNumber"
                      >待发货订单&nbsp;(<span
                        style="color: rgb(30, 123, 230);"
                      ></span
                      >)</a
                    >
                  </li>
                  <li class="isSupplier">
                    <a href="javascript:;">已卖出商品</a>
                  </li>
                  <li class="isSupplier">
                    <a href="javascript:;">保证金余额</a>
                  </li>
                  <li class="isSupplier">
                    <a href="javascript:;">卖家开票</a>
                  </li>
                </div>
              </div>
            </ul>
          </li> -->

          <li>
            <router-link to="/webhelp">帮助中心</router-link>
          </li>
          <li class="hover">
            <span>
              记住工品
              <i class="fa iconfont icon-xialajiantou"></i></span>
            <ul>
              <li><a href="javascript:;"
                   @click="collect">收藏网址</a></li>
              <li><a href="javascript:;"
                   @click="setHomePage">设为首页</a></li>
              <li>关注工品易达</li>
              <li style="height: auto">
                <img style="height: 100px;width:100px" src="../../assets/image/official.jpg" alt="二维码" />
              </li>
            </ul>
          </li>
          <li class="hover">
            <span>
              联系我们
              <i class="fa iconfont icon-xialajiantou"></i></span>
            <ul style="width: 200px; left: auto; right: -1px;">
              <li>电话：{{service}}</li>
              <li>周一至周六：9:00-17:30</li>
            </ul>
          </li>
          <li class="hover">
            <span><i class="fa iconfont icon-jurassic_mobile"
                 style="position: relative; top: -1px;"></i>
              手机工品 <i class="fa iconfont icon-xialajiantou"></i></span>
            <ul style="width: 271px;">
              <div>
                <!-- <li style="height: 152px; padding: 0px;">
                  <img src="../../assets/image/qr_code_app.e577134.png"
                       style="display: block;" />
                </li> -->
                <li style="height: 152px; padding: 0px;">
                  <img src="../../assets/image/wechat.png"
                       style="display: block; border-top: 1px solid rgb(238, 238, 238); border-bottom: 1px solid rgb(238, 238, 238);" />
                </li>
              </div>
            </ul>
          </li>
        </div>
      </div>
    </div>
    <!---->
  </div>
</template>

<script>
// 引入vue地址选择器插件
import VDistpicker from 'v-distpicker'
import makeSign from '../../api/makeSign'
import indexItem from '../../api/indexItem'
import Code from '../../api/Code'

export default {
  components: {
    VDistpicker
  },
  data () {
    return {
      service:''
    }
  },
  methods: {
    //收藏网页点击事件
    collect () {
      this.$alert('您的浏览器不支持该功能，请使用Ctrl+D收藏本页', '提示', {
        confirmButtonText: '确定',
      }).then(() => {
        this.$message({
          type: 'info',
          message: `谢谢您的支持`,
        })
      })
    },
    // 设为首页
    setHomePage () {
      this.$alert(
        '您的浏览器不支持该功能，请手动将【www.gpyh.com】设置为首页',
        '提示',
        {
          confirmButtonText: '确定',
        }
      ).then(() => {
        this.$message({
          type: 'info',
          message: `谢谢您的支持`,
        })
      })
    },
    // 地址选择器
    onSelected () {
      return
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
    this.getService()
  }
}
</script>


<style scope>
.topbar a {
  color: #333333;
  text-decoration: none;
}
a:hover {
  color: #409eff;
  text-decoration: none;
  cursor: pointer;
}
.address {
  width: 500px;
  height: 30px;
  font-size: 14px;
  line-height: 25px;
}
.address > label > select {
  height: 30px;
}
</style>
