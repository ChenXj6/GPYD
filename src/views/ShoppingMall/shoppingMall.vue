<template>
  <div data-v-8b31698c="" class="layout-common">
    <div data-v-8b31698c="" class="top_box">
      <!---->
      <div class="topbar">
        <div class="wrap">
          <div class="link_w left">
            <div id="summary-stock" class="clearfix">
              <a
                href="javascript:;"
                id="toHomePage"
                style="float: left; margin-right: 10px;"
                ><i class="fa fa-home" style="font-size: 14px;"></i>
                <span><router-link to="/">首页</router-link></span></a
              >
              <div id="store-selector">
                <div class="site-addr">
                  <div class="left">送至：</div>
                  <span id="area_province_name" class="text">山西省</span>
                  <span id="area_city_name" class="text">太原市</span>
                  <i class="fa fa-angle-down"></i>
                </div>
                <div id="JD-stock" class="m JD-stock">
                  <ul class="tab">
                    <li id="t_province" class="on">请选择</li>
                    <li id="t_city" class="">请选择</li>
                  </ul>
                  <ul
                    id="stock_province"
                    class="area-list"
                    style="display: block;"
                  >
                    <li>北京市</li>
                    <li>天津市</li>
                    <li>河北省</li>
                    <li>山西省</li>
                    <li>内蒙古</li>
                    <li>辽宁省</li>
                    <li>吉林省</li>
                    <li>黑龙江省</li>
                    <li>上海市</li>
                    <li>江苏省</li>
                    <li>浙江省</li>
                    <li>安徽省</li>
                    <li>福建省</li>
                    <li>江西省</li>
                    <li>山东省</li>
                    <li>河南省</li>
                    <li>湖北省</li>
                    <li>湖南省</li>
                    <li>广东省</li>
                    <li>广西</li>
                    <li>海南省</li>
                    <li>重庆市</li>
                    <li>四川省</li>
                    <li>贵州省</li>
                    <li>云南省</li>
                    <li>西藏</li>
                    <li>陕西省</li>
                    <li>甘肃省</li>
                    <li>青海省</li>
                    <li>宁夏</li>
                    <li>新疆</li>
                    <li>台湾省</li>
                    <li>香港</li>
                    <li>澳门</li>
                  </ul>
                  <ul
                    id="stock_city"
                    class="area-list"
                    style="display: none;"
                  ></ul>
                </div>
                <div id="store-mask"></div>
              </div>
            </div>
          </div>
          <div class="link_w right">
            <li class="sd-mark" id="firstOrder" style="display: none;">
              <a href="javascript:;">首单有礼</a>
            </li>
            <li id="myGrowth" class="over">
              <a href="javascript:;">C18757815753</a>
              <a href="https://www.gpyh.com/member/member" target="_blank"
                ><span class="topbar-icon-cg">畅购</span>
                <i class="fa fa-angle-down"></i
              ></a>
              <ul id="growthOpen">
                <div
                  class="topbar-qd"
                  style="color: rgb(136, 136, 136); width: 255px;"
                >
                  <div
                    class="topbar-header-img"
                    style="border-color: rgb(255, 255, 255);"
                  >
                    <img
                      src="data:image/png;base64,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"
                      alt="avtr"
                    />
                  </div>
                  <span id="levelDes" style="color: rgb(51, 51, 51);"
                    ><span>您是铜牌会员</span></span
                  >
                  <i id="levelImg" class="topbar-level level5"></i>
                  <a href="javascript:;" style="float: right;">退出</a>
                  <br />当前成长值：
                  <a
                    href="https://www.gpyh.com/personalCenter/growthValue"
                    id="currentGrow"
                    style="color: rgb(232, 162, 61); padding: 0px 0.5em;"
                    >0</a
                  >
                  <br />
                  <span
                    id="needSpan"
                    style="display: inline-block; width: 160px;"
                  >
                    距离升级还有
                    <a
                      href="https://www.gpyh.com/personalCenter/growthValue"
                      id="needGrow"
                      style="color: rgb(232, 162, 61); padding: 0px 0.5em;"
                      >6000</a
                    >成长值
                  </span>
                  <div class="topbar-paidmember-info">
                    <div class="d1">
                      <a href="/member/member" target="_blank"></a>
                    </div>
                    <div id="top_member_notice" class="d2">
                      <!---->
                      <a
                        href="https://www.gpyh.com/member/member"
                        target="_blank"
                        class="to-paidmember"
                        >开通畅购会员，享全年无限次包邮 &gt;</a
                      >
                    </div>
                    <a href="/member/goodsList" target="_blank" class="d3"></a>
                  </div>
                </div>
              </ul>
            </li>
            <li class="hover">
              <span>
                签到
                <i class="fa fa-angle-down"></i
              ></span>
              <ul>
                <div class="topbar-qd" style="">
                  <div class="qd1">
                    已连续签到
                    <b id="continueSignDays">0</b>天
                  </div>
                  <div class="qd2">
                    <button
                      class="btn btn-blue btn-xs"
                      style="border-radius: 2px; display: inline-block; color: rgb(255, 255, 255); width: 60px; height: 28px;"
                    >
                      签到
                    </button>
                    <a
                      href="javascript:;"
                      class="btn btn-xs"
                      style="border-radius: 2px; display: inline-block; color: rgb(255, 255, 255); width: 60px; height: 28px; background: rgb(245, 49, 0); padding: 0px; line-height: 28px; border: none;"
                      >去抽奖</a
                    >
                  </div>
                  <div class="qd3">连续签到五次，可奖励一次抽奖机会哦！</div>
                </div>
              </ul>
            </li>
            <li id="customerMessageCount" style="display: none;">
              <a href="#"
                ><i class="fa fa-envelope"></i> 消息(
                <span id="messageCount"></span>)
              </a>
            </li>
            <li><a href="javascript:;">我的订单</a></li>
            <li class="hover">
              <span
                ><a href="javascript:;">我的工品</a>
                <i class="fa fa-angle-down"></i
              ></span>
              <ul style="width: 180px;">
                <div style="border-bottom: 1px solid rgb(230, 230, 230);">
                  <li>
                    <a href="javascript:;" class="pendingPayment">
                      待付款订单&nbsp;
                      <span style="color: rgb(30, 123, 230);">(0)</span></a
                    >
                  </li>
                  <li>
                    <a href="javascript:;" class="noDeliveryOrder">
                      待发货订单&nbsp;
                      <span style="color: rgb(30, 123, 230);">(0)</span></a
                    >
                  </li>
                  <li>
                    <a href="javascript:;" class="returnedOrder">
                      审核通过/退货中退货单&nbsp;
                      <span style="color: rgb(30, 123, 230);">(0)</span></a
                    >
                  </li>
                </div>
                <div>
                  <li>
                    <a href="javascript:;" class="message">
                      我的消息&nbsp;
                      <span style="color: rgb(30, 123, 230);">(0)</span></a
                    >
                  </li>
                  <li>
                    <a href="javascript:;" class="myCoupons">
                      我的工品券&nbsp;
                      <span style="color: rgb(30, 123, 230);">(4)</span></a
                    >
                  </li>
                  <li>
                    <a href="javascript:;" class="priceDraw">
                      我的抽奖机会&nbsp;
                      <span style="color: rgb(30, 123, 230);">(0)</span></a
                    >
                  </li>
                </div>
              </ul>
            </li>
            <li><a href="javascript:;">畅购会员</a></li>
            <li class="hover">
              <span>
                尾货清仓中心
                <i class="fa fa-angle-down"></i
              ></span>
              <ul style="width: 250px;">
                <div style="float: left; width: 140px;">
                  <li>
                    <a href="javascript:;" class="liactived waitConfirmNumber"
                      >待收货订单<span style="color: rgb(30, 123, 230);"
                        >&nbsp;(0)</span
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
            </li>
            <li>
              <a
                href="https://www.gpyh.com/article/detail?typeId=0&amp;parentId=2"
                >帮助中心</a
              >
            </li>
            <li class="hover">
              <span>
                记住工品
                <i class="fa fa-angle-down"></i
              ></span>
              <ul>
                <li><a href="javascript:;">收藏网址</a></li>
                <li><a href="javascript:;">设为首页</a></li>
                <li>
                  <a href="//a.gpyh.com/GPYH.url" target="_self">保存到桌面</a>
                </li>
                <li>关注工品一号</li>
                <li style="height: auto;">
                  <img
                    src="//a.gpyh.com/style/img/qcode-gpyh.jpg"
                    alt="二维码"
                  />
                </li>
              </ul>
            </li>
            <li class="hover">
              <span>
                联系我们
                <i class="fa fa-angle-down"></i
              ></span>
              <ul style="width: 160px; left: auto; right: -1px;">
                <li>电话：0512-6670 8052</li>
                <li>传真：0512-6670 4882</li>
                <li>周一至周六：9:00-17:30</li>
              </ul>
            </li>
            <li class="hover">
              <span
                ><i
                  class="fa fa-mobile-phone fa-lg"
                  style="position: relative; top: -1px;"
                ></i>
                手机工品 <i class="fa fa-angle-down"></i
              ></span>
              <ul style="width: 271px;">
                <div>
                  <li style="height: 152px; padding: 0px;">
                    <img
                      src="/static/img/qr_code_app.e577134.png"
                      style="display: block;"
                    />
                  </li>
                  <li style="height: 152px; padding: 0px;">
                    <img
                      src="/static/img/qr_code_wx.595eb16.png"
                      style="display: block; border-top: 1px solid rgb(238, 238, 238); border-bottom: 1px solid rgb(238, 238, 238);"
                    />
                  </li>
                </div>
              </ul>
            </li>
          </div>
        </div>
      </div>
      <!---->
    </div>
    <section data-v-b1f20ae6="" data-v-8b31698c="" class="app-main">
      <div data-v-b1f20ae6="" class="goodsList goodsList-wrapper">
        <div class="paidmember-header">
          <div class="wrap">
            <div class="paidmember-header-left">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAuCAYAAABeUotNAAAFg0lEQVRYhdXZe4xdVRUG8N/cTikTSk1p6U151EaSkpBIU6vYIAwRECsKCQYMJFxUBFTAB4nSgOEhQUBilEYeitCQjiZEQMJDiBaL3qgQSQOWZ0uRV6lMqRIq0FCmLX+sffCcM/feOXemM9UvOZmZvfbjm73XXvvba/e8uvxwY0ANc3A8Po2DMSvZNmI1foe78RK2lzuoN5qVBuodA8F9cS7OxtQWdfZL37H4Aa7HtXhFC8JVBuwW03A6Hsb5bUiWMTXVfTi1ndbtoN0Q7RPLez9+gX1K9texBo+mb20qy2Of1Pb+1Fdf1cF7KvjoZOF738DJmFKy/xt/xu34E15O5XPQjxNxOKaX2r2DW/FTrK43mu+OhegcnIavCn/LYxtWpYFuSwO3wu74As7BRw1fxfX4OZbXG82XuiU6VczE2fhYC/s6DOA6/Ktd5yXMEKvSwIda2B8RG+72eqP5ZhWiB+NSHGd4VNiEO1KHqysSLGO+mN3PJ/J5DOEuXFpvNJ9oR7RH+NT1OKhFByvEDK7EllGSzNCHo0R4OxqTSvanxGo2643mDor+shC3tCC5Bl8XvvrbnUBS6uNenJoIrS3ZD0pcFmYFGdGZYrbm5ipvxtX4FG4Sy76zsaneaN6Yxvgx/pOzzcW1gwP9MzKiu+ErOCRXaVAE6Av9N9yMG9JuX5LG3JgzfRynDw70T64Jh/5OzvgmloqQsW28SWaoN5pD9UbzZ7gmcchwPmbUxLTPzBlW4sqJIlhGvdG8MnHIMBPH1IRoyPAa7plIYm1wr+KeOLaGBbmC9XhwQim1xkrFvbGgpigu3sBzE0qpBeqN5nOJS4bZvWLXZygLg0nirB7S/izP0ItFuCK1+Z5YnaFOjQYH+qekcbZkwb0FlykjCeeF+KDw3VWKca6M3cTJtiCR/iQeUtzBZewphMp0PC/kYUuMRHSpUPKbcDl+06FurzhRMiG9QHG1WmExLkhEXxb/6KiILko/9xcqqhPRLUJVZVir82xKfWabeW6niiMp/AfT4NvxESGA2/1zsxUjyDzDbwFlkh9Ov/8DfxgL0S/j2/gjjhEi+QzDRfQscYIcnytbLI7FWaW6++OL4mxfLHz/vFTWFiMt/Yvp6xM6db6QgZ/AMjwm5OEZQmOW8TXhe9eleouECjspjb0Vy+qN5t0j8Kh8XX4WT4ul7xHy7Ej8Svjmkg5tLxIhajrOVBTLz+KZKgSqEl2Hx3FYIkr433crtN0dP2xjW2O4Fm2Jqtflt8TVY3PF+lWwTSj5V6tU7uZe/3fF8DNWbMBj9Uaz48mVoRuiL4pl2lEq31HxK2Od8NFKyHZedoJM7lD3nyLZdQT2FsH8XRFje8SG2Vpq0yN8lJiUyenvbXhA+Gg75Cdxe69Ygnmp4AM4QHsFdWv6xhWDA/2zFfNTG2uKQmA/ISZ2NY4QGiPD6hruyxXsLRIPuxonKB6/v6+JxEJe9h8pFM0uweBA/zdFUiLDW7inV+SOfoSrkmEqviWydDeZoJvo4ED/JHHiLcFeOdM12FATO/Vm/C1nrIvkwxVCRIw3yTkiK71UccmfxA31RnNrFgI2CVHxQq7SNKGIVgjRkb9S7yzMHBzoPyuNsUREnQzrRSppA8VYtQpfEsdaHgfiBizHZ3WRJe6APnwOvxRqbF7J/ozI3vylVZJsh8gYn4I7FS9lvfiMSFz9REi+0WK+WOJbRHo8n8kbSmOfghX1RvP9R4n/60RuHv/zqfE8xvrYcJLQseP62JBHXxr4Yhzawv66SBm+nf7eQ5x0ZYLwV1wmMsqVEsPdvNxtEc+FD4ml/L5izJvehlQeG3AJfq1LET6al7vN4mK3SBwKI93dpTpXpzbLjOKmMNq30O3CFy8QMXbUj7ZV8R4Y135bcHYjwAAAAABJRU5ErkJggg=="
                alt=""
                class="paidmember-logo"
              />
              <span class="paidmember-title">畅购会员</span>
            </div>
            <div class="paidmember-header-right">
              <a href="javascript:;" class="paidmember-tab"
                ><i class="paidmember-home"></i>畅购会员首页
              </a>
              <a href="javascript:;" class="paidmember-tab active"
                ><i class="paidmember-mall"></i>畅购商城
              </a>
            </div>
          </div>
        </div>
        <div class="mall-title-wrap"></div>
        <div class="mall-title t2" style="display: none;">
          <p class="p1">
            <span class="s1">畅购商品</span>
            <span class="s2">专属特价优惠</span>
          </p>
          <p class="p2">
            开通畅购会员后，已成功购买0个商品，为您节省&nbsp;
            <span class="save">¥0.00</span>
          </p>
          <p class="p2" style="color: rgb(228, 203, 135); display: none;">
            ***
          </p>
        </div>
        <div class="mall-title t2" style="">
          <p class="p1">
            <span class="s1">畅购商品</span>
            <span class="s2">专属特价优惠</span>
            <span class="s3" style="margin-left: 100px;"
              ><button class="pay-for-member">开通立享</button></span
            >
          </p>
          <!---->
          <p class="p2" style="color: rgb(228, 203, 135); display: none;">
            ***
          </p>
        </div>
        <div class="mall-title t1" style="display: none;">
          <span class="s1">畅购商品</span> <span class="s2">专属特价优惠</span>
          <span class="s3"
            ><button class="pay-for-member">开通立享</button></span
          >
        </div>
        <div class="mall-preview">
          <div class="goods-list">
            <div class="goods-item">
              <div class="goods-img">
                <img
                  src="//p5.gpyh.com/webnew/img/goods/37/53/2d2fab9c-d6bd-4e3c-a6be-8090d07c1fef.jpg"
                  alt="imgUrl"
                />
                <div class="promotion-wrapper" style="display: none;">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAYAAAC5tzfZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphZGExYWQ3Yy04N2RhLTlmNGEtYTU3Ni1jM2IyNjMyNTcwYTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjRFODUwRTJCOUMwMTFFOUJCNDFCRjEyRTMxQUJCM0IiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjRFODUwRTFCOUMwMTFFOUJCNDFCRjEyRTMxQUJCM0IiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmRlMDJlNjRhLWM0ODctOGU0MS04NTIxLTI1NWMyYTIyYWM3YiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjhkMTcwMmQzLWUxNzgtMTFlOC1hNTg4LTliMzMxMGNmYjQ4MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhR85uAAAAETSURBVHjabNK/SwJhHMfxO8GhQDfBCCKQcJFsipbGpoYiNyFoSxCc3HIJnB3C1aAlnAKHoH+hqTahwRt1CxsEoXp6f/Xz5EP0hRd33x/PPQ93FzvnIqKNBt4wQBrbSPCJU+zgBq2IRR23jD0kuh/jHhPlifoWnRQrz/CEE1h+gA30kFceq29zFdupii89JWvHRUF5QXlGuc1VIxXn6OrelDBDPqh1Nbc4TlnbP0SrmGENW0FtoLlySm8qrbfkY4Q+nnGt2vvvLNut67y3wVG8S/UauMK3zftmU83cPwvNkfrNxXcNGn184PjPgn0M8ehrYfPcrWKKF119FP1srN9oE6+4wBA1fdgx7lDHLg5t+EeAAQBTOVPBx0I9WwAAAABJRU5ErkJggg=="
                    alt="prom_icon"
                    class="promImg"
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAMCAYAAAAOCs/+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphZGExYWQ3Yy04N2RhLTlmNGEtYTU3Ni1jM2IyNjMyNTcwYTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzMxQUNGQTVCQTRGMTFFOUJGMENEQkRGOEI0QzRGMUUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzMxQUNGQTRCQTRGMTFFOUJGMENEQkRGOEI0QzRGMUUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmRlMDJlNjRhLWM0ODctOGU0MS04NTIxLTI1NWMyYTIyYWM3YiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjhkMTcwMmQzLWUxNzgtMTFlOC1hNTg4LTliMzMxMGNmYjQ4MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmyQlaUAAAI9SURBVHjapNRBSBRRHMfxsbSMRIog8ZAZaVBhRJGnwugkCR6KTl062MGlqKBUqEMRxUIIVjcvIWGZIR0SkraLFWayhnSwQ10SI6LYMExtpbbvP34Df8fRw/aHD2/nvTczb9/7z78gl8sFRAP6sRkTeITtuBMsjMcYRzNKXf8kRvESRzEYLB81eIt7OB43oRB7UeVuKEEd1iMZmT+hhbVhA7JYjTd4or5qbHT3PAzyidzieGG7KNuQwiwuokj9H5FAEufwSn1xYfM7kXGmNNaNnshYqd2zQutLRNo1uKLtth3ZjWuYd//JjrJV47XYpJTYih244eau1QkM4RmG3diY+uY0pyA8Sov9kfa1jnUaX3BV/UkdWzQm9fCnuKRcy8TMSygdwhwLXLr064/9i3DH9kTa72ptUUeUc8dQvkRG2MtOYwAtGFF/NsgzwoXdirTXLf1wQnM6lnlGeLwz2hFLg26sxGxkru1KGj26rtd12p3WgoU1udZyph0pHMQU3mn8l7u3THkx4/rsRXdVMlYF/xGWY52o0PV7NOqhZ3AfD9z8ObUHNF6sUnNY/R9wW7vtF2Y5W6Qd/eZybMDVsTal0nxYLkyDPt8qDOEyuvAb1Til8V2av0Wfdkr9za7EhG7ia0y/qXHlIm580cIqVEfO67oPOzGOaZSgEp8whmLVKKtz5TiENEaRxWC+Cyt0CWxf4h/8UJLuw0ms0xG3qnzYcT7HBf0+i158Vs7al/gTfap9cZFRCo0slWN/BRgAWGXy0T19bdYAAAAASUVORK5CYII="
                    alt="prom_ing"
                    class="promImg"
                    style="margin-left: 8px;"
                  />
                  <span
                    style="display: none; margin-left: 6px; color: rgb(255, 255, 255); font-style: italic; font-size: 12px;"
                    >(~)</span
                  >
                </div>
              </div>
              <div class="goods-info">
                <a
                  title="1022(碳钢) GB845 ST4.8*13 蓝白锌 十字盘头自攻钉 三价 盐雾24H "
                  class="goods-name"
                  ><span>1022(碳钢)&nbsp;</span> <span>GB845&nbsp;</span>
                  <span>ST4.8*13&nbsp;</span> <span>&nbsp;</span>
                  <span>蓝白锌&nbsp;</span> <span>十字盘头自攻钉&nbsp;</span>
                  <span>三价 盐雾24H&nbsp;</span></a
                >
                <!---->
                <div>
                  <div class="goods-price-paidmember">
                    <span>￥28.83</span>/千支 <i class="icon-cg">畅购</i>
                  </div>
                  <div class="goods-price-member">
                    <span>会员价：￥29.41/千支</span>
                    <span class="goods-merchant">工品华东仓</span>
                  </div>
                </div>
                <div>
                  <span class="s1">品牌：威工</span>
                  <span class="s2">
                    库存：
                    <span
                      ><span><span>仅剩 183.7 千支</span></span></span
                    ></span
                  >
                </div>
              </div>
            </div>
        </div>

          <!--  -->
        </div>
        <div class="wrap mafoot">
          <div class="gp-pagination-w">
            <div onselectstart="return false" class="pagination pagination">
              <ul>
                <li class="disabled">&lt;&lt;</li>
                <li class="disabled">&lt;</li>
                <li class="selected">1</li>
                <li class="disabled">&gt;</li>
                <li class="disabled">&gt;&gt;</li>
              </ul>
              <span class="total">共1页</span>
              <span>到第<input type="text" />页</span>
              <span><button>确定</button></span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div data-v-8b31698c="" class="fixed-toolbar" style="z-index: 100;">
      <!---->
      <a href="javascript:;" class="dpd-hover award"
        ><img
          src="data:image/png;base64,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"
          alt=""
          class="dpd-refer"
        />
        <div class="dpd-layer left-bottom">
          天天抽奖&nbsp;&nbsp;天天惊喜!!
        </div></a
      >
      <div class="tool-box">
        <div class="tool-list">
          <a href="javascript:;" class="dpd-hover zindex"
            ><i class="dpd-refer tool-i-person"></i>
            <div class="dpd-layer left-bottom">我的工品</div></a
          >
          <a href="javascript:;" class="dpd-hover zindex"
            ><i class="dpd-refer tool-i-cart"><i class="i-warn"></i></i>
            <div class="dpd-layer left-bottom">
              购物车(<span id="rightCartNum">0</span>)
            </div></a
          >
          <a href="javascript:;" class="dpd-hover zindex"
            ><i class="dpd-refer tool-i-star"></i>
            <div class="dpd-layer left-bottom">我的收藏</div></a
          >
          <a href="javascript:;" class="dpd-hover zindex"
            ><i class="dpd-refer tool-i-edit"></i>
            <div class="dpd-layer left-bottom">意见反馈</div></a
          >
        </div>
        <div class="tool-list">
          <a
            href="tencent://message/?uin=229036796&amp;Site=gpyh&amp;Menu=yes"
            id="service"
            class="dpd-hover zindex"
            ><i class="dpd-refer tool-i-mic"></i>
            <div id="customerService" class="dpd-layer left-bottom">
              在线客服
            </div></a
          >
          <a href="javascript:;" class="dpd-hover zindex"
            ><i class="dpd-refer tool-i-phone"></i>
            <div class="dpd-layer left-bottom">
              <span id="gpyhPhone" style="text-decoration: underline;"
                >0512-6670 8052</span
              >
            </div></a
          >
          <a href="javascript:;" class="dpd-hover zindex"
            ><i class="dpd-refer tool-i-qrcode"></i>
            <div class="dpd-layer left-bottom">
              <div class="tool-qrcode-detail">
                <img
                  src="/static/img/qr_code_app.e577134.png"
                  alt="qr_code_app"
                />
                <div
                  style="border-bottom: 1px solid rgb(204, 204, 204); margin: 0px 18px;"
                ></div>
                <img
                  src="/static/img/qr_code_wx.595eb16.png"
                  alt="qr_code_wx"
                />
              </div></div
          ></a>
          <a
            href="javascript:;"
            id="abc"
            class="dpd-hover zindex"
            style="display: none;"
            ><i class="dpd-refer tool-i-top"></i>
            <div class="dpd-layer left-bottom">返回顶部</div></a
          >
        </div>
      </div>
    </div>
    <div data-v-8b31698c="" class="footH">
      <ul class="fbox1 lazyload">
        <div class="wrap">
          <li>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAMAAAAocOYLAAAB1FBMVEUVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsWdcsXdcsad8wbd8wbeMwceM0eec0fes0ge80he84ifM4jfM4kfc4lfc4mfs8of88pgM8qgdArgdAug9ExhNE0h9I2iNI3iNM4idM6itM7itM9jNQ+jdQ/jdRAjtVCj9VDj9VHkdZHktZJk9dLlNdMlddQl9hVmtlXm9pYnNpZnNpandpbndpdn9thodxjotxmpN1qp95rp95vqd91reB2ruF3ruF6sOF8seJ/s+KAtOOBtOOCteODteOFt+SHuOSLuuWOvOaPvOaSvueTv+eUv+eVwOeVwOiYwuiaw+mbxOmcxOmexemhx+qlyuumyuuny+upzOyqzOyrzeyv0O2w0O231O+92PDC2vHI3vPL4PPM4PTN4fTN4vTO4vTQ4/XS5PXV5vbW5vbX5/bY6Pba6ffe6/jg7Pjh7fji7vjj7vnj7/nk7/nl8Pno8frq8vrr8/vt9Pvu9fvv9vzw9vzy9/zz+Pz0+P31+f32+v33+v35+/76/P7+/v/////SzM/OAAAAHHRSTlMAASYnKFBRVFVWV2V1drGywMHGyMnb8PHy8/z9Xf/3tgAAAeNJREFUGBltwYdDEmEYB+D34K4whgxPOPghWaJIw6aW0aAsK9pWWknL9jTLLC1HkmihZAJW98927ycxpOehMtnmUBvRqNbbZKohKR6UeRSJqpicqOY0UwWLhvU0C5VYA6gVsFLRRj/+x19HgsmHom19C7knXSEU+UxkkJwAQs3Rzu6+b5mnt9PLj44d2NkagsEpEZECQ/LByOLU7It9QHhwZnLp/b3dYAoRuWHQp4cu7WqBEIr03r/c2gSDm0gGy19HlfjDJJhMNrDCTVQIDun6HJidHGD550DncayJja4M/+gHc5AKtvJlK/qX7oRgOLSwerYrcwZMJS9Ybi6M7cN/3kbRdCE9cxCxbALMSxByqTCwZbDwruNW4dNe4Eg2AYG8YPlUGEDw5Pfsz2QbgMPZBJiPVLDfs81gPa+ugsWXz4Gp5AAbn29Hpcd6L5iD7GCn9Buo0PJ5ageYnWSwzR8WYygb0M9DkIk8YCdWRyP4pzs/GQVzE5EC4a7+sg1r9kynj0JQiEhygUVH9Df7wS6m5uMQXBIZTBpY5MrXzLPTPdcmfo3HIWhmEur8YMGOgbGPYxOv4+0Q/JuoyBpArYCVSiwa1tMsVMHkQjWXmapISgPKGjZIVEO216s++NR6u0wlfwGPOofQ40wPOgAAAABJRU5ErkJggg=="
              width="31"
              height="31"
              alt="13%增税"
              class="lazy"
            />13%增税
          </li>
          <li>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAMAAAAocOYLAAABdFBMVEUVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsbeMwceM0dec0fes0he84jfM4kfc4mfs8of88rgdAtgtAug9ExhdEzhtI1h9I3iNM6itM8i9Q/jdRBjtVGkdZIk9ZKlNdMlddOlthVmtleoNtfoNxjotxlo91ppt5qp95uqd9wqt90rOB0reCDteOEtuSFt+SHuOSIuOSMu+aNu+aQveaUv+eVwOiXweiZwuiaw+mhx+qiyOqkyeulyuumyuuoy+yqzOyrzeytzu2uz+2v0O210+620++31O+41e+61vDA2fHC2/LE3PLI3vPJ3/PL4PPO4vTS5PXT5fXV5vbW5vba6ffb6vfe6/jj7/no8frq8vrr8/vs9Pvt9Pvu9fvy9/z0+P32+v33+v34+/36/P77/f7+/v////+VDuRLAAAAHHRSTlMAASYnKFBRVFVWV2V1drGywMHGyMnb8PHy8/z9Xf/3tgAAAY9JREFUKM+Nk+dXAjEQxAOCilIEPT1x7aIoir13xd57xd7FAgqW+ee9HHe04NP5svfye7mdbCaMJWSy2qVSKpUcVhMTZDAXU1LFZkM6NhZRuopyUnF+OWWqPD+JCytIVEWhjvPclE1ui9ZbpuySjapz3doSUjXKTfJTmDXse/uc7NAVwA1fMyvcpfFWhJO/HsIFLy5lavpSP95rEnwkzsnErPGFnhPgqlrgNmbnpWE2irvxRhK4nUm8hPA45j17rRe4xMp4wUMz+YEpgZcxtWCLqA1YEDhp+7f2Q8/AsMDleH/stPf2dHZQlv6qf+xmjD7p36byPeo6DO74lU/v/PHRBA0nzq/OD5uNEUS5gZYwvoGRwcT8GM8dNuYxU3eG++Ugnnx9X9EALrX5q/cXWzvHHC2qF3tLVR+fgdipfn8GJ5GndgCR6RjWPd1vWDnAdZOHz9KpptjIw1m5qmzd9hJNvQDXnnhEtQxbfslfwT/z+2f+FQ/ODOzMyXx/JSm0JNcgPlGTzSHJJEsOW8r7/QGDTYfd8ksXYwAAAABJRU5ErkJggg=="
              width="31"
              height="31"
              alt="量大包邮"
              class="lazy"
            />量大包邮
          </li>
          <li>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAMAAAAocOYLAAABxVBMVEUVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsWdcsYdswZdswbd8wbeMwceM0dec0fes0ge80ifM4jfM4kfc4mfs8qgdAsgtAug9Evg9EwhNExhNE0h9I1h9I2iNI6itM9jNQ/jdRBjtVCj9VEkNVFkNZJk9dMlddNlddPlthRl9hUmtlVmtlWm9lXm9pZnNpandpdn9tgodxko91lo91mpN1opd1qp95sqN5uqd9xq990rOB0reB4r+F5r+F8seJ9suJ+suKCteOHuOSIuOSJueWKueWKuuWLuuWMu+aNu+aTv+eVwOeaw+mcxOmhx+qmyuurzeytzu2w0O2x0e6y0e6z0u600u610+631O+71/C81/C92PDC2vHD3PLE3PLG3fLJ3/PK3/PN4vTO4vTP4/TR5PXS5PXU5fXV5vbX5/bY6Pba6ffc6vfd6/ff7Pjg7Pji7vjj7vnk7/no8frq8vrr8/vu9fvv9vzw9vzx9/zz+Pz0+P32+v34+/35/P76/P7+/v////9dvstSAAAAHHRSTlMAASYnKFBRVFVWV2V1drGywMHGyMnb8PHy8/z9Xf/3tgAAAd9JREFUKM+Nk1dbE2EQhWdDoiDpsBDCi4pgNLFgj6KCghWDCkFsKHZQFCsawRrFAgISzfxeL3bXLMmFnruZ9/meOc83Z0T+yusPmg00mCG/Vypk+Oooqc5nrMSeMCsVrnLj6ibK1VRdwrXNVKq51sGr43brwLiqfjjZYlXxGnt2zKrTD1WfHLq+qO9PrQMg5hERMSxr+yZUJw8C264s6tu+VoCwISI+gPS46qPD9pgtF5f0dWYj4BORKDCqOtHp8pYcVs1th6iIF2Ba9Wm723y//ji9HvCKH2BKH08t3UjZsKXv3cJIEoCABC2e4USucC0FsPOjjqVo6T8OBMW0+NU3t/ff1Hwvu24VXh4FNulnwJRGi5+/MF88tudOIbe83AtAojgDNAoWHyD1TMfo0rsduDjO+0HgSA9bdRg3jznzB63uDr20gpuO/4Fy3l6cAYISsP4nW85TmgcC1v+N6sJgm5tvHpmfHgK8InUA6Vmd6ynxMz8/nW0Dos7+SA590Qcb6NDL0PXi171WsPdnROydTepsZrdmE89/399rtSKGiIjHCWfnK/2m+e9fu52I2hmucfKXyM5p4dxau4qv+c/8/jP/Ip5IGY5Uld9fvYvWrzIqT9QbCJkxYmYo4LrfP54kmclkBj5lAAAAAElFTkSuQmCC"
              width="31"
              height="31"
              alt="库存充足"
              class="lazy"
            />库存充足
          </li>
          <li style="margin-right: 0px;">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAMAAAAocOYLAAABuVBMVEUVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsVdMsWdcsYdswad8weec0jfM4kfc4lfc4mfs8of88pgM8rgdAsgtAtgtAwhNExhNE1h9I3iNM4idM7itM8i9Q+jdRDj9VEkNVFkNZGkdZHkdZHktZIk9ZJk9dLlNdPlthRl9hXm9pYnNpZnNpbndpcnttfoNxtqN9vqd9xq990reB2ruF4r+F5r+F7seJ/s+OEtuSGt+SHuOSKueWLuuWMu+aNu+aOvOaPvOaRvueVwOeWweiXweiYwuiaw+mbxOmfxuqiyOquz+2v0O2x0e6z0u610+6/2fHC2vHD3PLF3fLJ3/PL4PPM4PTN4fTN4vTO4vTQ4/XT5fXU5fXW5vbY6PbZ6ffb6vfc6vfe6/jg7Pji7vjj7vnj7/nk7/nl8Pnm8Pnn8fro8frp8vrr8/vs9Pvt9Pvu9fvv9vzw9vzx9/zy9/z0+P31+f33+v34+/35+/75/P76/P78/f79/v/+/v////+Z6OLbAAAAHHRSTlMAASYnKFBRVFVWV2V1drGywMHGyMnb8PHy8/z9Xf/3tgAAAepJREFUGBltwQlDElEYBdBvYKYwBEEdZblmVJZZppVmavu+mEm077ZhZZaWSYkmIWAYJfcX9wYZFfEcWafXes0mNJl1tbpU0YwGrGswNKng8KGSzykbuILYLOiSNe4wqoXdUrY9hK2EaqTEEcDWAg5RNB+UlstLs6nUXJ75+YXUbO4mLD5NRAxYurl8ui3ylGMc3dN2MsMhWAwRqYeyO06OomPp/b5E/ggukZkOKPUiOixXOfK1ePwDz6GHc7vGeSM7dQCKLrVQev69xIWVXOERgOecWHmFO7wHxSNeAJE3vDZwZoUci4/FF0hm4h/JYQBeMQGMMjf5PfGb6UQymZxeYGE6mfj0eRKAKc0Aur787AX6iy9aoDzmWQDt+6E0CyynmO5D63zxIIDIn+W9wAhnWqFIM5SdMS524xavADjP+y2IMTMAJSAmSm7zGQYLr4HIBNsRY7ofFlO8WBXlE/zId+EQxxHlYj9KvOJBWYwPrvMiHv4dHGL2BFZ5RIctygTf4l36LnN9KNNFGmD7RqaGSWZ7UVYvIgZsnQla0j2wGSKi+WHrnCH56xhsfk0URxC2w1PZmaOwBZ1SUhPCVkI7pMwdRrWwW9a4gtgs6JINHH5U8julgmY0Yl3jNk2q6J46M4CAWefRZc1/BGOfK3pAxXUAAAAASUVORK5CYII="
              width="31"
              height="31"
              alt="正品保证"
              class="lazy"
            />正品保证
          </li>
        </div>
      </ul>
      <div class="fbox2 wrap">
        <ul style="text-indent: 25%;">
          <b>购物指南</b>
          <li>
            <a
              href="https://www.gpyh.com/article/detail?typeId=0&amp;parentId=2"
              target="_blank"
              >购物流程</a
            >
          </li>
          <li>
            <a
              href="https://www.gpyh.com/article/detail?typeId=0&amp;parentId=2&amp;helpSunListId=7"
              target="_blank"
              >发票问题</a
            >
          </li>
          <li>
            <a
              rel="nofollow"
              href="https://www.gpyh.com/article/detail?typeId=0&amp;parentId=2&amp;helpSunListId=10"
              target="_blank"
              >联系客服</a
            >
          </li>
        </ul>
        <ul>
          <b>配送方式</b>
          <li>
            <a
              rel="nofollow"
              href="https://www.gpyh.com/article/detail?typeId=0&amp;parentId=2&amp;helpSunListId=16"
              target="_blank"
              >上门自提</a
            >
          </li>
          <li>
            <a
              href="https://www.gpyh.com/article/detail?typeId=0&amp;parentId=2&amp;helpSunListId=5"
              target="_blank"
              >配送费收取标准</a
            >
          </li>
        </ul>
        <ul>
          <b>支付方式</b>
          <li>
            <a
              rel="nofollow"
              href="https://www.gpyh.com/article/detail?typeId=1&amp;parentId=11"
              target="_blank"
              >网银支付</a
            >
          </li>
          <li>
            <a
              rel="nofollow"
              href="https://www.gpyh.com/article/detail?typeId=1&amp;parentId=11"
              target="_blank"
              >快捷支付</a
            >
          </li>
        </ul>
        <ul>
          <b>售后服务</b>
          <li>
            <a
              href="https://www.gpyh.com/article/detail?typeId=0&amp;parentId=2&amp;helpSunListId=8"
              target="_blank"
              >退换货流程</a
            >
          </li>
          <li>
            <a
              href="https://www.gpyh.com/article/detail?typeId=0&amp;parentId=2&amp;helpSunListId=9"
              target="_blank"
              >退款说明</a
            >
          </li>
        </ul>
        <ul>
          <b>联系我们</b>
          <li>电话：0512-6670 8052</li>
          <li>传真：0512-6670 4882</li>
          <li>周一至周六：9:00-17:30</li>
        </ul>
        <ul class="qrCode-ul">
          <li class="qr">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAYAAADHl1ErAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphZGExYWQ3Yy04N2RhLTlmNGEtYTU3Ni1jM2IyNjMyNTcwYTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDhFN0Q4QURCMUREMTFFOUJGOEI4M0I3QTM3NUY0MUEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDhFN0Q4QUNCMUREMTFFOUJGOEI4M0I3QTM3NUY0MUEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmNmYWZhYWQyLTY3MDQtNjQ0NS05NmZiLTAzZWQ4NmQ2M2M0MyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmRmMTM5NDcwLTIyYTQtMTFlOS1hMDc5LWUxNWVhN2RkNjc0OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv+JNCIAABkESURBVHja7Jx5vFXj98efW5FKksqYMoQypcxUhkSGhB8l81gZXigyRooiJF6mVIhrSIjyTShTypSiSSUqGmie061u+7fe67b299n77H3uOeH7V+v12vecs/ez936GNXzW8NyCIAjmOucqu62UC60qkAkLts5D7lRGjpVbpyFnWllm6xzkz2ER2lIJTbpv06ZN/7OBJL2fc/+0ximXdPKhhx5y3333nVu9enXWQZcpU8Ztv/327vjjj3e33nqre/HFF93QoUNdQUGBnn/llVfc9OnT3XXXXee22247V758eXfPPfe4I444IvKcd955xz3zzDPuwQcfdMcdd1zk2ujRo919993nKlSo4LbZZhv39NNPu5o1ayb25/7773cTJkzQ7wcccICOg75Ajz32mD5rzZo1OY3pmGOOcXfccUfiyqwIYnT44YezLDkfMki975JLLomch0aNGhU5N3DgQD0vndYDkoHqtWeffTY8Z21kgiL3f/755+G9/jOgunXrhu1kUiNjatSoUV5jkkUNEmhFog6rWrWqfn711Vdu/vz5IWv7x7x589yXX36p7XbccUf93HbbbSPPYTUbN26s7Tt27Kjndtppp3Ala9Wqpd+7dOmibT788EM9b7Tnnnu6H3/8Ua/dfPPNeu7EE0/UNv7RvXt3vQYHG8FhPu2www76SZ/TxsT5r7/+OjKmnESyuLhYP48++mjt0J9//qmszWE6Yffdd3c1atSI6KoDDzzQ1a9fX79XqVJF269bt86tXLnS7brrrnqNe3gGn7vssou2Xbt2rYo/orDzzju7H374Qe9jUaZOneoWLlyo16Fq1aq5cuXKRfQU9/GJONMX7lm6dKmKJ++hr9bHo446Shf2jz/+iCwOtNtuu2k//TnISSRPPvnkUKRk1hNZVjqk4sD3M844I0gjRJA2V1xxRWob0RXa5vXXXw8240I9ZEAZ7508eXJQGsmgw/Y33HCDnjv99NP1t0xEsGTJksQxMVZ7P3OQJJLlSrMKpjRzsVAYClb33HPPDUXgoIMOcpdeeqlr2bKl/v7oo4/c7NmzVYlXr17dyWS7pk2b6oofcsgh2ub2229X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"
              alt="二维码"
              width="64"
              class="qrCode"
            />
            <b class="qrTitle">关注工品一号</b>
          </li>
          <li class="qr">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAYAAADHl1ErAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphZGExYWQ3Yy04N2RhLTlmNGEtYTU3Ni1jM2IyNjMyNTcwYTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDFDN0ZFRUFCMUREMTFFOTk5OUU5RTA3ODIyRDUzNjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDFDN0ZFRTlCMUREMTFFOTk5OUU5RTA3ODIyRDUzNjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmNmYWZhYWQyLTY3MDQtNjQ0NS05NmZiLTAzZWQ4NmQ2M2M0MyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmRmMTM5NDcwLTIyYTQtMTFlOS1hMDc5LWUxNWVh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"
              alt="二维码"
              width="64"
              class="qrCode"
            />
            <b class="qrTitle">下载工品APP</b>
          </li>
        </ul>
      </div>
      <div class="cp">
        <p class="cp1">
          <a href="https://www.gpyh.com">回到首页</a>
          <a
            rel="nofollow"
            href="https://www.gpyh.com/article/detail?typeId=3&amp;parentId=6"
            target="_blank"
            >关于我们</a
          >
          <a
            href="https://www.gpyh.com/article/detail?newsType=news&amp;typeId=4"
            target="_blank"
            >新闻公告</a
          >
          <a
            href="https://www.gpyh.com/article/detail?typeId=0&amp;parentId=2"
            target="_blank"
            >帮助中心</a
          >
          <a
            rel="nofollow"
            href="https://www.gpyh.com/providerApply/index"
            target="_blank"
            >成为紧固件供应商</a
          >
          <a href="https://www.gpyh.com/map/mapPage" target="_blank"
            >网站地图</a
          >
          <a href="https://www.gpyh.com/keyWord/list" target="_blank"
            >热搜词库</a
          >
        </p>
        <p class="cp2">
          Copyright © 2015-2025 www.gpyh.com All Rights Reserved
          苏州工品一号网络科技有限公司 版权所有
          <br />
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32059002002946"
            target="_blank"
            style="border-right: none; padding-right: 0px;"
            ><img
              src="https://www.gpyh.com/static/img/police.d0289dc.png"
              alt="police"
              style="position: relative; height: 15px; width: 15px; top: 3px;"
            />
            苏公网安备 32059002002946号</a
          >
          <a href="http://beian.miit.gov.cn" target="_blank"
            >苏ICP备15009923号</a
          >
          经营许可证编号：苏B2-20170374
        </p>
        <div
          class="cp3"
          style="font-size: 12px; color: rgb(166, 166, 166); text-align: left; margin-left: 292px; margin-right: 292px; line-height: 28px; display: none;"
        >
          <span
            style="display: inline-block; width: 85px; height: 28px; vertical-align: top;"
            >友情链接：</span
          >
          <div style="display: inline-block; width: 100%;">
            <span style="display: inline-block;"
              ><span
                ><a
                  href="http://www.lxhdz.com"
                  target="_blank"
                  style="margin-right: 20px; color: rgb(166, 166, 166);"
                  >线束加工</a
                ></span
              ></span
            ><span style="display: inline-block;"
              ><span
                ><a
                  href="http://www.jlduigun.com"
                  target="_blank"
                  style="margin-right: 20px; color: rgb(166, 166, 166);"
                  >双齿辊破碎机</a
                ></span
              ></span
            ><span style="display: inline-block;"
              ><span
                ><a
                  href="http://www.gdshjx.cn"
                  target="_blank"
                  style="margin-right: 20px; color: rgb(166, 166, 166);"
                  >食品机械</a
                ></span
              ></span
            ><span style="display: inline-block;"
              ><span
                ><a
                  href="http://www.pipercn.com"
                  target="_blank"
                  style="margin-right: 20px; color: rgb(166, 166, 166);"
                  >液压扳手</a
                ></span
              ></span
            ><span style="display: inline-block;"
              ><span
                ><a
                  href="https://www.lubanjianye.com"
                  target="_blank"
                  style="margin-right: 20px; color: rgb(166, 166, 166);"
                  >建筑网</a
                ></span
              ></span
            ><span style="display: inline-block;"
              ><span
                ><a
                  href="http://www.lingyingqz.com"
                  target="_blank"
                  style="margin-right: 20px; color: rgb(166, 166, 166);"
                  >电动葫芦</a
                ></span
              ></span
            ><span style="display: inline-block;"
              ><span
                ><a
                  href="http://www.qdf0605.com"
                  target="_blank"
                  style="margin-right: 20px; color: rgb(166, 166, 166);"
                  >环保设备</a
                ></span
              ></span
            ><span style="display: inline-block;"
              ><span
                ><a
                  href="http://www.cnzheji.com"
                  target="_blank"
                  style="margin-right: 20px; color: rgb(166, 166, 166);"
                  >风机控制柜</a
                ></span
              ></span
            ><span style="display: inline-block;"
              ><span
                ><a
                  href="http://www.yxc.hk"
                  target="_blank"
                  style="margin-right: 20px; color: rgb(166, 166, 166);"
                  >晶体振荡器</a
                ></span
              ></span
            ><span style="display: inline-block;"
              ><span
                ><a
                  href="http://www.zgdqsy.com"
                  target="_blank"
                  style="margin-right: 20px; color: rgb(166, 166, 166);"
                  >pvc管</a
                ></span
              ></span
            ><span style="display: inline-block;"
              ><span
                ><a
                  href="http://www.gongxingbanjia.com"
                  target="_blank"
                  style="margin-right: 20px; color: rgb(166, 166, 166);"
                  >公兴搬家</a
                ></span
              ></span
            ><span style="display: inline-block;"
              ><span
                ><a
                  href="http://www.zjffu.com"
                  target="_blank"
                  style="margin-right: 20px; color: rgb(166, 166, 166);"
                  >FFU</a
                ></span
              ></span
            ><span style="display: inline-block;"
              ><span
                ><a
                  href="http://www.jsbdalloy.com"
                  target="_blank"
                  style="margin-right: 20px; color: rgb(166, 166, 166);"
                  >螺丝</a
                ></span
              ></span
            ><span style="display: inline-block;"
              ><span
                ><a
                  href="http://www.51e-online.com"
                  target="_blank"
                  style="margin-right: 20px; color: rgb(166, 166, 166);"
                  >B2B电子商务平台</a
                ></span
              ></span
            ><span style="display: inline-block;"
              ><span
                ><a
                  href="http://www.luosi.com/"
                  target="_blank"
                  style="margin-right: 20px; color: rgb(166, 166, 166);"
                  >华人螺丝网</a
                ></span
              ></span
            ><span style="display: inline-block;"
              ><span
                ><a
                  href="http://www.qxhaoyuan.com"
                  target="_blank"
                  style="margin-right: 20px; color: rgb(166, 166, 166);"
                  >钣金加工</a
                ></span
              ></span
            ><span style="display: inline-block;"
              ><span
                ><a
                  href="http://www.guangzedu.com"
                  target="_blank"
                  style="margin-right: 20px; color: rgb(166, 166, 166);"
                  >光泽度仪</a
                ></span
              ></span
            ><span style="display: inline-block;"
              ><span
                ><a
                  href="http://www.vondomss.com"
                  target="_blank"
                  style="margin-right: 20px; color: rgb(166, 166, 166);"
                  >玻璃钢雕塑</a
                ></span
              ></span
            ><span style="display: inline-block;"
              ><span
                ><a
                  href="http://www.emost.cn"
                  target="_blank"
                  style="margin-right: 20px; color: rgb(166, 166, 166);"
                  >湖北之窗</a
                ></span
              ></span
            ><span style="display: inline-block;"
              ><span
                ><a
                  href="http://www.dgyipin.com"
                  target="_blank"
                  style="margin-right: 20px; color: rgb(166, 166, 166);"
                  >高低温试验箱</a
                ></span
              ></span
            ><span style="display: inline-block;"
              ><span
                ><a
                  href="https://www.wfhjcd.cn"
                  target="_blank"
                  style="margin-right: 20px; color: rgb(166, 166, 166);"
                  >除铁器</a
                ></span
              ></span
            ><span style="display: inline-block;"
              ><span
                ><a
                  href="http://www.dghdjd.com"
                  target="_blank"
                  style="margin-right: 20px; color: rgb(166, 166, 166);"
                  >换向器</a
                ></span
              ></span
            ><span style="display: inline-block;"
              ><span
                ><a
                  href="http://www.mejbz.com"
                  target="_blank"
                  style="margin-right: 20px; color: rgb(166, 166, 166);"
                  >混凝土搅拌机</a
                ></span
              ></span
            ><span style="display: inline-block;"
              ><span
                ><a
                  href="http://www.bjsgyq.com/"
                  target="_blank"
                  style="margin-right: 20px; color: rgb(166, 166, 166);"
                  >金相显微镜</a
                ></span
              ></span
            >
          </div>
        </div>
      </div>
      <!---->
    </div>
  </div>
</template>


<script>
export default {
  
}
</script>
 
<style scope>
  
</style>