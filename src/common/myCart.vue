<template>
  <div data-v-18047ef4=""
       class="td header-cart">
    <dl data-v-18047ef4=""
        class="dpd-hover easy-cart">
      <dt data-v-18047ef4=""
          class="dpd-refer">

        <el-badge v-if="$store.state.token"
                  :value="$store.state.car.length || ''"
                  :max="10"
                  class="item">
          <i data-v-18047ef4=""
             class="i-cart"></i>
          <router-link tag="a"
                       to="/myCart"
                       data-v-18047ef4="">我的购物车</router-link>
        </el-badge>
        <el-badge v-else
                  :value="''"
                  :max="10"
                  class="item">
          <i data-v-18047ef4=""
             class="i-cart"></i>
          <router-link tag="a"
                       to="/myCart"
                       data-v-18047ef4="">我的购物车</router-link>
        </el-badge>
      </dt>
      <!-- 是否登录 -->
      <dd data-v-18047ef4=""
          class="dpd-layer bottom-right nav-cart-layer"
          v-if="!$store.state.token">
        <div data-v-18047ef4=""
             class="loading">
          <span data-v-18047ef4="">
            <router-link tag="a"
                         to="/myCart"
                         data-v-18047ef4=""
                         style="color: rgb(18, 76, 142);">请登录后查看~</router-link>
          </span>
        </div>
      </dd>

      <!--  -->
      <dd data-v-18047ef4=""
          class="dpd-layer bottom-right"
          v-else>
        <div data-v-18047ef4=""
             class="easy-cart-layer">
          <div data-v-18047ef4=""
               class="easy-cart-tabs table">
            <el-tabs v-model="activeName">
              <el-tab-pane label='普通商品'
                           name="first">
                <!-- 无商品 -->
                <div data-v-18047ef4=""
                     class="easy-cart-empty-tips"
                     style="margin:20px 0"
                     v-if="shopCarListNull">
                  <div data-v-18047ef4="">您的购物车空空的哦~</div>
                  <div data-v-18047ef4="">去看看心仪的商品吧~</div>
                </div>
                <!-- 有商品 -->
                <div v-else>
                  <div data-v-18047ef4=""
                       class="table easy-cart-item"
                       v-for="(item,index) in shopCarList"
                       :key="index">
                    <div data-v-18047ef4=""
                         class="td easy-cart-item-left">
                      <div data-v-18047ef4=""
                           class="easy-cart-item-imgbox">
                        <img data-v-18047ef4=""
                             :src="host + item.img"
                             alt="" />
                      </div>
                    </div>
                    <div data-v-18047ef4=""
                         class="td easy-cart-item-center">
                      <router-link tag="a"
                                   :to="{path:'/gooddetails',query:{gid:item.gid}}"
                                   data-v-18047ef4=""
                                   class="easy-cart-item-name">{{item.good_name}}
                      </router-link>
                    </div>
                    <div data-v-18047ef4=""
                         class="td easy-cart-item-right">
                      <div data-v-18047ef4="">￥{{item.price}}*{{item.num}}</div>
                      <div data-v-18047ef4="">
                        <a data-v-18047ef4=""
                           class="easy-cart-item-del"
                           @click="delGood(item.cart_id)">删除</a>
                      </div>
                    </div>
                  </div>
                  <div data-v-18047ef4=""
                       class="table easy-cart-foot">
                    <div data-v-18047ef4=""
                         class="td easy-cart-total">
                      共{{$store.state.car.length || 0}}件商品，共计￥{{$store.getters.allMoney || 0}}元
                    </div>
                    <div data-v-18047ef4=""
                         class="td">
                      <router-link data-v-18047ef4=""
                                   tag="a"
                                   to="/mycart"
                                   class="btn-to-cart">去购物车</router-link>
                    </div>
                  </div>
                </div>
              </el-tab-pane>

              <el-tab-pane label='下架商品'
                           name="second">
                <!-- 无商品 -->
                <div data-v-18047ef4=""
                     class="easy-cart-empty-tips"
                     style="margin:20px 0"
                     v-if="offLoadGoodNull">
                  <div>当前购物车没有下架商品</div>
                </div>
                <!-- 有商品 -->
                <div v-else>
                  <div data-v-18047ef4=""
                       class="table easy-cart-item"
                       v-for="(item,index) in offLoadGood"
                       :key="index">
                    <div data-v-18047ef4=""
                         class="td easy-cart-item-left">
                      <div data-v-18047ef4=""
                           class="easy-cart-item-imgbox">
                        <img data-v-18047ef4=""
                             :src="host + item.img"
                             alt="" />
                      </div>
                    </div>
                    <div data-v-18047ef4=""
                         class="td easy-cart-item-center">
                      <a href="javascript:;"
                         @click="tips"
                         data-v-18047ef4=""
                         class="easy-cart-item-name">{{item.good_name}}</a>
                      <!---->
                    </div>
                    <div data-v-18047ef4=""
                         class="td easy-cart-item-right">
                      <!-- <div data-v-18047ef4="">￥{{item.price}}*{{item.num}}</div> -->
                      <div data-v-18047ef4="">
                        <a data-v-18047ef4=""
                           class="easy-cart-item-del">商品已下架</a>
                      </div>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </dd>

    </dl>
  </div>
</template>

<script>

import Code from '../api/Code'
import shopCar from '../api/shopCar'
import makeSign from '../api/makeSign'
import urls from '../api/urls'
// import {mapState,mapMutations,mapActions} from 'vuex'


export default {
  data () {
    return {
      activeName: 'first',
      shopCarListNull: true,
      offLoadGoodNull: true,
      shopCarList: [],
      offLoadGood: []

    }
  },
  computed: {
    host () {
      return urls.BWS;
    }
  },
  methods: {
    tips () {
      this.$message.warning('该商品已下架')
    },
    // 获取购物车数据
    getShopCar () {
      let user_id = sessionStorage.getItem('uid');
      let timestamp = Date.parse(new Date()) / 1000;
      let sign = this.$md5(makeSign.makeSign({ user_id, timestamp }));
      return new Promise((resolve) => {
        shopCar.getShopCarList({ user_id, timestamp, sign }).then(res => {
          let data = res.data;
          if (data.code === Code.CODE_SUCCESS) {
            if (data.data != []) {
              resolve(data.data)
            }
          } else {
            return
          }
        })
      })
    },
    delGood (id) {
      let timestamp = Date.parse(new Date()) / 1000;
      let cart_id_arr = id;
      let user_id = sessionStorage.getItem('uid');
      let sign = this.$md5(makeSign.makeSign({ timestamp, cart_id_arr, user_id }));
      shopCar.delShopCar({ sign, timestamp, user_id, cart_id_arr }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.$message({
            type: 'success',
            message: '删除商品成功'
          })
          this.$store.dispatch('delGoods', id)
        } else {
          this.$message.error(data.msg)
        }
      })
    }
  },
  mounted () {
    // 0 下架商品 1 上架商品 
    this.getShopCar().then(res => {
      this.$store.dispatch('initCar', res).then(() => {
        let arr = []
        let brr = []
        this.$store.state.car.forEach(v => {
          if (v.status_line == 1) {
            arr.push(v)
          } else if (v.status_line == 0) {
            brr.push(v)
          }
        });
        if (arr.length == 0) {
          this.shopCarListNull = true
        } else {
          this.shopCarList = arr;
        }
        if (brr.length == 0) {
          this.offLoadGoodNull = true
        } else {
          this.offLoadGood = brr;
        }
      })
    })
  },
  watch: {
    '$store.state.car' (val) {
      let arr = []
      let brr = []
      val.forEach(v => {
        if (v.status_line == 1) {
          arr.push(v)
        } else if (v.status_line == 0) {
          brr.push(v)
        }
      });
      this.shopCarList = arr;
      this.offLoadGood = brr;
    },
    shopCarList (val) {
      if (val.length != 0) {
        this.shopCarListNull = false;
      } else {
        this.shopCarListNull = true;
      }
    },
    offLoadGood (val) {
      if (val.length != 0) {
        this.offLoadGoodNull = false;
      } else {
        this.offLoadGoodNull = true;
      }
    }
  }
}

</script>

<style scope>
.easy-cart-item:first-child {
  margin-top: 15px !important;
}
</style>
