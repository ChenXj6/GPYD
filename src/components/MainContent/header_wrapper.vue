<template>
  <div>
    <div data-v-18047ef4="" data-v-29774714="" class="bgfff header-wrapper">
      <div data-v-18047ef4="" class="header-common">
        <div data-v-18047ef4="" class="wrap">
          <!-- LOGO -->
          <div data-v-18047ef4="" class="td header-logo">
            <router-link tag="a" to="/" data-v-18047ef4="" 
              ><img
                data-v-18047ef4=""
                src="../../assets/image/index.png"
                alt=""
              />
            </router-link>
          </div>
          <!--  -->

          <!-- 搜索框 -->
          <div data-v-18047ef4="" class="td header-search" >
            <searchGoods style="margin-top:17px"></searchGoods>
            <!--  -->
            <!-- 推荐 -->
            <!-- <div data-v-18047ef4="" class="header-search-hot">
              热销推荐：
              <a
                data-v-18047ef4=""
                href="https://www.gpyh.com/quickbuy/detail?barcode=482807&amp;goodsStandardName=%E5%8F%A3%E7%BD%A9&amp;goodsStandardId=9706"
                >口罩</a
              >
            </div> -->
          </div>
          <!--  -->

          <!-- myShopcar & myGoods -->
          <div data-v-18047ef4="" class="td header-myGoods-box">
            <router-link tag="a" to="/payRecord">
            <div data-v-18047ef4="" class="header-myGoods">
              <img
                data-v-18047ef4=""
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAMAAAAhxq8pAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAnFBMVEX1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQD1MQAAAADBrbPMAAAAMnRSTlMASebRiKCy0/WT9tSzf/wKzMWATTpyUBluBsr4nMkRmO+XC0w7bPHzrfAiIOsod5kn8qY3ZJsAAAABYktHRDM31XxeAAAAB3RJTUUH5AMDCTYwtAC8XAAAAKZJREFUGNNdkNkSgjAQBIcgaEQ55BbEeIOKQv7/49wgKjIPu53JQ1ctNCZHYRqYPhlFZ2AGRjEYzKmCGVeTz9W0FljaDoHrqafn0nDsFXwZEIUyAiIZEgbSRywTonSd5Xm2SQkTGaM3FVshdkXvAUzrX04ekGk/7JQHOMjjsFQe9KZvTsoDnPmw5JduldX1193uZbdrUfFHn2cl6vdvU7afs7VlQ8ULA3cQ9UAg0lQAAAAASUVORK5CYII="
                alt=""
                style="vertical-align: middle; position: relative; top: -1px; left: -3px;"
              />
              我的商品
            </div>
            </router-link>
            <!-- <div
              data-v-18047ef4=""
              class="goods-rompt-box"
              v-show="tip">
              <div data-v-18047ef4="">
                <span data-v-18047ef4="" class="rompt-box-header"
                  >我的商品来啦</span
                >
                <img
                  data-v-18047ef4=""
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NjEwRUExRjY1OTUxMUU5OENBMEQ4QjI2MTZDNDgwQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NjEwRUEyMDY1OTUxMUU5OENBMEQ4QjI2MTZDNDgwQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU2MTBFQTFENjU5NTExRTk4Q0EwRDhCMjYxNkM0ODBCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU2MTBFQTFFNjU5NTExRTk4Q0EwRDhCMjYxNkM0ODBCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+IsXHuwAAAVBJREFUeNqkk0FLAlEUhZ+TJEKTK90nCJVQa5dTLYz8GUIRLfKPFEFBgf0MoYXoss3sUqGN0LZZqUVgZJ0b58btIW688MFw3j3nvbnzJhXHsfNqG9TBIdigNgQPoAkGtjkwz6vgGjyBBtgEGbJFTdZuQVZNaWNugQO3uGTDY1DiCad6gktj/gaTOeYJ16T2wIUmlpmqZjlqBSTGnFA7NyEn4k1zYCsUx6AN+iACXeoRNe3J0VOXgKrZKUdTZEIcn+WkHfZoVSWg6L1r3gtxxlzweouBW65+v8LQExOze5n0OflXr/cl4A3TGnnmLrEhI9PfloB78EVhnfdBzXkzE9H22ePoacoQe+AOnIIUL9UbCL3BPoI19jh6ejrEBr+/Y0M4Z2ChMXfo+fuZpuAI3IDZgqnPuHONnn9/owhnYAdcgWfwCd45QNF2eYU/1PQjwABs2lFzK8wUeAAAAABJRU5ErkJggg=="
                  alt=""
                  class="goods_close_btn"
                  @click="closeTip"
                />
              </div>
              <div data-v-18047ef4="" style="margin-top: 8px;">
                <p data-v-18047ef4="" class="rompt-box-content">
                  点击 "我的商品" 可查看 "购买记录" "我的收藏"。
                </p>
              </div>
              <div data-v-18047ef4="" class="rompt-box-btnb">
                <div data-v-18047ef4="" class="rompt-box-btn rompt-box-btnl" @click="closeTip">
                  跳过
                </div>
                <router-link tag="a" to="/payRecord">
                <div data-v-18047ef4="" class="rompt-box-btn rompt-box-btnr">
                  
                  去看看
                </div>
                </router-link>
              </div>
            </div>-->
          </div> 
          <keep-alive>
          <myCart></myCart>
          </keep-alive>
        </div>
      </div>
      <!--  -->

      <!-- navbar -->
      <div data-v-18047ef4="" class="navbar borderBottom0">
        <div data-v-18047ef4="" class="wrap">
          <!-- 所有商品分类 -->
          <div data-v-18047ef4="" class="td">
            <typeGoods></typeGoods>
          </div>

          <!-- 首页 《-----》 快速下单 -->
          <div data-v-18047ef4="" class="td">
            <ul data-v-18047ef4="" class="menu">
              <li data-v-18047ef4="">
                <a
                  data-v-18047ef4=""
                  href="javascript:;"
                  title="首页-工品一号"
                  target=""
                  class="active"
                >
                  <router-link :to="{ path: '/appMain' }">首页</router-link>
                  <!----></a
                >
                <!---->
              </li>
              <!-- <li data-v-18047ef4="">
                <a
                  data-v-18047ef4=""
                  href="javascript:;"
                  title="工具品牌馆-工品一号"
                  target=""
                  class=""
                >
                  <router-link :to="{ path: '/toolBrand' }"
                    >工具品牌馆</router-link
                  ></a
                >
              </li> -->
              <!-- <li data-v-18047ef4="">
                <a
                  data-v-18047ef4=""
                  href="javascript:;"
                  title="尾货清仓-工品一号"
                  target=""
                  class=""
                >
                  <router-link tag="a" target="_blank" :to="{path:'/clearGoods'}">尾货清仓</router-link>
                  <span data-v-18047ef4=""
                    ><i data-v-18047ef4="" class="i-dzp-discount"></i></span
                ></a>
              </li> -->
              <!-- <li data-v-18047ef4="">
                <a
                  data-v-18047ef4=""
                  href="javascript:;"
                  title="畅购商城-工品一号"
                  class=""
                >
                  <router-link tag="a" target="_blank" :to="{path:'/shoppingMall'}">畅购商城</router-link>
                  </a
                >
              </li> -->
              <li data-v-18047ef4="">
                <!---->
                <!---->
                <!---->
                <a
                  data-v-18047ef4=""
                  href="javascript:;"
                  title="工品公告-工品一号"
                  target=""
                  class=""
                >
                  <router-link :to="{ path: '/notice' }">工品公告</router-link>
                  <!----></a
                >
              </li>
              <!-- <li data-v-18047ef4="">
                <a
                  data-v-18047ef4=""
                  href="javascript:;"
                  title="快速下单-工品一号"
                  target=""
                  class=""
                >
                  <router-link :to="{path:'/quickOrder'}">快速下单</router-link>
                  <span data-v-18047ef4=""
                    ><i data-v-18047ef4="" class="quickTool"></i></span
                ></a>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myCart from '../../common/myCart'
import searchGoods from '../../common/searchGoods'
import typeGoods from '../../common/typeGood'
export default {
  components: {
    searchGoods,
    typeGoods,
    myCart
  },
  data() {
    return {
      // 我的商品提示
      goodsType: '',
      isLogin:false,
      activeName:"first"
    }
  },
  methods: {
    searchGoods() {
      console.log(this.goodsType)
    },
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
.el-tabs__header{
  margin: 0 !important;
}
.el-tabs__nav-scroll{
  width: 600px;
}
.header-common .header-myGoods-box[data-v-18047ef4] {
    top: 30px;
}
.header-common .header-cart[data-v-18047ef4] {
    top: 30px;
}
</style>
