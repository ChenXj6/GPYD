<template>
  <div data-v-b1f20ae6=""
       class="goods-detail">
    <div class="detail-block">
      <div class="wrap">
        <div class="detail-up">

          <!-- 图片 -->
          <div class="detail-up-l">
            <div class="imgpreviewer">
              <div class="imgpreviewer-imgbox">
                <img alt="undefined1/4-20*3/8ANSI/ASME B18.2.1六角头螺栓"
                     :src="host + IMGurl" />
              </div>
              <div class="imgpreviewer-slider">
                <button disabled="disabled"
                        @click="cutImg('prev')"
                        class="imgpreviewer-prev el-icon-arrow-left"></button>
                <!---->
                <button class="imgpreviewer-next el-icon-arrow-right"
                        @click="cutImg('next')"
                        disabled="disabled"></button>
                <!---->
                <div class="imgpreviewer-viewport">
                  <ul class="imgpreviewer-viewport-list">
                    <li class="slides-imgbox"
                        v-for="(item,index) in goodData.goods_pc_image"
                        @click="changeImg(item)"
                        :key="index"
                        style="cursor: pointer;">
                      <img :src="host + item"
                           alt="" />
                    </li>
                    <!---->
                  </ul>
                </div>
              </div>
            </div>
            <div class="goods-operate1">
              <div class="btn-collect"
                   @click="storeUp(goodData)">
                <i v-if="goodData.goods_is_collect == 2"
                   class="el-icon-star-off"
                   style="position: relative;"></i>
                <i v-else
                   class="el-icon-star-on"
                   style="position: relative;"></i>
                &nbsp;
                <span>收藏</span>
                <!---->
              </div>
              <!-- <div style="margin-left: 15px;">
                <a href="tencent://message/?uin=2851600275&amp;Site=gpyh&amp;Menu=yes"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxZjlmODY2My05MDE0LTcxNDgtYTM2OS04NWZiNWYyMmRiZjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTc4MEU2NDZCQTU3MTFFOThBMDdFRUZEN0MyNTg0QjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTc4MEU2NDVCQTU3MTFFOThBMDdFRUZEN0MyNTg0QjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk1ZTAzMGFhLWNjY2ItZmI0Ni1hMjdiLTZmMzE2NTViNjRiMiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmJiODgwMzkzLWU3MTktMTFlOC1hMDA0LWRiNzMwNThmMmUwMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqC6atEAAAD4SURBVHjaYvz//z8DDAj79vMAqSwgDgJiTajwdSBeC8TT324u/AJTy4SkSQdIXQJiQyAuA2IZKAaxjUByQDXaMPWMIBuBAsJA9kUgrgWaOp8BCwCqSQRSTUBsAFTzFmZjORCvw6UJBKBy66Fq4U4NBuJpDITBDCAOQdYoD8S3idB4E4jlkDUyA/EnoD+6cemAyn2CqkWEKhBwAXEBHtvyoWpQouMvA4kApnECEH8D4ol41E4C4h9A/BEej8QCoD/BmoFRU8ZCgqYYIBUISgAgPgsehfeBlAIQvwDivUBsCcReoFSDHqrogBFKC0LTsD5Q02WYJECAAQCPzEgdA9Gy5gAAAABJRU5ErkJggg=="
                       style="width: 12px; height: 12px;" />
                  <span>在线客服</span></a>
              </div> -->
              <!-- <div class="dpd-click custom-code">
                <el-popover placement="bottom-start"
                            width="150"
                            trigger="click">
                  <el-input class="editIn"
                            v-model="editIn"
                            placeholder="请输入自定义物料号"
                            @blur="editItemNumber">
                  </el-input>
                  <div slot="reference"
                       style="margin-left: 15px;">
                    <div class="dpd-refer1">
                      <i class="el-icon-edit"></i>&nbsp;自定义物料号
                      <span title="4555"
                            class="custom-code-txt ellipsis">&nbsp;:&nbsp;{{editNumber}}</span>
                    </div>
                 
                  </div>
                </el-popover>
              </div> -->

            </div>
          </div>

          <!-- 介绍 -->
          <div class="detail-up-r">
            <div class="goods-name1">
              <!---->
              {{goodData.goods_name}} <el-badge value="商品已下架" class="item" v-if="goodData.status_line == 0"></el-badge>
              <!---->
            </div>
            <!---->
            <div class="goods-price">
              <div class="goods-price-box">
                <div>
                  <span>会员价：
                    <b v-if="!token"><a href="javascript:void(0)"
                         style="color: rgb(245, 49, 0); font-size: 14px;">会员专属价，请登录后查看~</a></b>
                    <span v-else
                          style="color: rgb(245, 49, 0);"><b><span dir="119.71"
                              style="font-size: 18px; font-weight: 600;">￥{{goodData.goods_price}}</span>/&nbsp;{{goodData.goods_inventory_unit}}</b></span>
                  </span>
                </div>
                <!---->
              </div>
            </div>
            <div class="goods-info1">
              <div class="goods-info-l">
                <ul class="goods-info-list">
                  <li>条码：{{goodData.goods_barcode}}</li>
                  <li>
                    <div class="brand">品牌：</div>
                    <div class="brandName">{{goodData.goods_brand_name}}</div>
                    <!---->
                  </li>
                  <li class="store">仓库：{{goodData.goods_warehouse_name}}</li>
                  <li>
                    交期： <span> 现货</span>
                    <!---->
                  </li>
                  <li>
                    包装信息：
                    <span>
                      {{goodData.goods_package_info}}
                    </span>
                  </li>
                  <li>
                    库存：
                    <span>
                      {{goodData.goods_inventory + goodData.goods_inventory_unit}}
                    </span>
                    <!---->
                  </li>
                  <li>起订量：{{goodData.goods_min_quantity + goodData.goods_inventory_unit}}</li>
                </ul>
                <div class="goods-purchase">
                  <el-input-number v-model="num"
                                   step-strictly
                                   :precision="2"
                                   :style="1"
                                   :min='1'
                                   size="medium"
                                   style="width:107px;margin-right:3px"
                                   controls-position="right"></el-input-number>
                  <div class="num-selector1">
                    <!---->
                    <div>
                      <!-- <span class="num-selector-c2"><input type="text"
                               maxlength="10" /></span> -->
                      {{goodData.goods_inventory_unit}}
                    </div>
                  </div>
                  <!---->
                  <el-button type="danger" style="margin-left:20px;height:40px"  v-if="goodData.status_line == 0">
                    商品已下架
                  </el-button>
                  <button class="purchase-btn" v-if="goodData.status_line == 1"
                          @click="addShopCar(goodData)">
                    加入购物车
                  </button>
                  <div class="dpd-hover app-download">
                    <div class="dpd-refer">
                      <i class="i-qrcode-blue"></i>手机下单看货更便捷
                    </div>
                    <div class="dpd-layer"
                         style="top: 45px; left: 0px;">
                      <div class="app-qrcode">
                        <img src="../../assets/image/wechat.png"
                             alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <!---->
                <!---->
                <!---->
              </div>
              <!---->
            </div>
          </div>
        </div>

        <!--  -->
        <div class="detail-down">
          <div class="detail-down-l">
            <el-tabs>
              <div id="h"
                   v-html="goodData.goods_content">{{goodData.goods_content}}</div>
            </el-tabs>
            <!-- bottom 图片 -->
            <div class="detail-explain">
              <img src="../../assets/image/goodDetail.png"
                   alt="" />
            </div>
          </div>
          <!-- 同类商品推荐 -->
          <div class="detail-down-r">
            <div class="detail-side-box">
              <div class="side-box-head">同类产品推荐</div>
              <div class="side-box-body">
                <div class="goods-rcmd-list">
                  <router-link tag="a"
                               :to="{path:'/gooddetails',query:{gid:item.id}}"
                               class="goods-rcmd-it"
                               v-for="(item,index) in similarGoods"
                               :key="index"
                               style="cursor: pointer;">
                    <div class="goods-rcmd-imgbox">
                      <img :src="host + item.thumimage"
                           :alt="item.goods_name" />
                    </div>
                    <div class="goods-rcmd-name ellipsis">
                      {{item.goods_name}}
                    </div>
                  </router-link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import makeSign from '../../api/makeSign'
import indexItem from '../../api/indexItem'
import Code from '../../api/Code'
import shopCar from '../../api/shopCar'
import urls from '../../api/urls'
import photo from '../../api/photo'


export default {
  computed: {
    host () {
      return urls.BWS
    }
  },
  data () {
    return {
      // 大详情图
      IMGurl: '',
      token: '',
      goodData: [],
      timestamp: Date.parse(new Date()) / 1000,
      goods_list_id: this.$route.query.gid,
      editIn: '',
      editNumber: '',
      num: 1,
      similarGoods: []
    }
  },
  methods: {
    // 获取商品同类商品
    getSimilarGoods () {
      let goods_list_id = this.goods_list_id;
      let timestamp = Date.parse(new Date()) / 1000;
      let sign = this.$md5(makeSign.makeSign({ goods_list_id, timestamp }))
      indexItem.getSimilarGoods({ sign, timestamp, goods_list_id }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.similarGoods = data.data;
        } else {
          console.log('error')
        }
      })
    },
    // 获取商品详情
    getDetails () {
      let timestamp = Date.parse(new Date()) / 1000;
      let goods_list_id = this.goods_list_id;
      let user_id = sessionStorage.getItem('uid') || ''
      let sign = this.$md5(makeSign.makeSign({ timestamp, goods_list_id, user_id }))
      indexItem.getGoodDetail({ timestamp, sign, goods_list_id, user_id }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          let da = photo.changePhoto(data.data.goods_content);
          data.data.goods_content = da;
          this.goodData = data.data;
          this.IMGurl = this.goodData.goods_pc_image[0];
        } else {
          console.log('error')
        }
      })
    },
    // 自定义物料号
    editItemNumber () {
      this.editNumber = this.editIn;
      this.$message({
        showClose: true,
        message: '自定义物料号修改成功',
        type: 'success'
      });
    },
    //加入购物车
    addShopCar (Data) {
      let goods_id = Data.goods_id;
      let goods_num = this.num
      let timestamp = Date.parse(new Date()) / 1000;
      let user_id = sessionStorage.getItem('uid');
      if (!user_id) {
        this.$router.push({ path: '/login', query: { redirect: '/goodlist?gid=' + this.$route.query.gid } })
        return;
      }
      Data.num = goods_num;
      let sign = this.$md5(makeSign.makeSign({ goods_id, goods_num, timestamp, user_id }));
      shopCar.addShopCar({ goods_num, goods_id, timestamp, sign, user_id }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.$message.success('商品已成功加入购物车');
          Data.cart_id = data.data.cart_id;
          this.$store.dispatch('addGoods', Data)
        } else {
          return
        }
      })
    },
    // 收藏
    storeUp (data) {
      let status = ''
      if (data.goods_is_collect == 2) {
        status = 1;
      } else {
        status = 2;
      }
      let timestamp = Date.parse(new Date()) / 1000;
      let user_id = sessionStorage.getItem('uid');
      if (!user_id) {
        this.$message.error('请先登录');
        return;
      }
      let goods_id = data.goods_id;
      let sign = this.$md5(makeSign.makeSign({ status, timestamp, user_id, goods_id }));
      shopCar.collection({ timestamp, user_id, goods_id, sign, status }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.getDetails();
        } else {
          this.$message.warning('收藏失败，请稍后重试！')
        }
      })
    },
    // 切换图片
    changeImg (url) {
      this.IMGurl = url;
    },
  },
  mounted () {
    this.getDetails();
    this.getSimilarGoods();
    this.token = sessionStorage.getItem('token');
  },
  // 监听url参数 刷新数据
  watch: {
    '$route': function () {
      this.goods_list_id = this.$route.query.gid
    },
    goods_list_id () {
      this.getDetails();
      this.getSimilarGoods();
    }
  }
}
</script>

<style scope>
.side-box-body .goods-rcmd-list {
  padding: 20px;
}
.goods-rcmd-list .goods-rcmd-it {
  width: 250px !important;
}
.goods-rcmd-it .goods-rcmd-imgbox {
  width: 250px;
  height: 250px;
}
.goods-rcmd-it .goods-rcmd-imgbox > img {
  width: 250px;
  height: 250px !important;
  max-height: 250px;
  max-width: 250px;
}
</style>
