<template>
  <div data-v-b1f20ae6=""
       class="myCart"
       v-loading="loading"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading">
    <div class="wrap">
      <!-- 上部导航栏 -->
      <div class="content-header"
           style="margin:20px 0 20px">
      </div>

      <!-- 步骤条 -->
      <el-steps :active="active"
                finish-status="success">
        <el-step title="我的购物车"></el-step>
        <el-step title="填写&提交订单信息"></el-step>
        <el-step title="支付订单"></el-step>
      </el-steps>
      <!---->

      <div class="shopbox"
           style=""
           v-if="$store.state.car.length">
        <div>
          <div style="margin-top: 10px; height: 40px;">
            <table class="cart-table cart-table-head">
              <tbody>
                <tr class="s_g1 s_tdcolor1 t-head">
                  <td style="width: 355px;">商品信息</td>
                  <td style="width: 90px;">起订量</td>
                  <td style="width: 90px;">品牌</td>
                  <td style="width: 130px;">库存</td>
                  <td style="width: 180px;">单价(元)</td>
                  <td style="width: 160px;">数量</td>
                  <td>小计(元)</td>
                  <td style="width: 50px;">操作</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!---->
          <table class="cart-table">

            <tbody class="centerBox"
                   v-for="(item,index) in shopCarList"
                   :key="index">
              <tr class="s_g1 pure-table-odd subcart-head">
                <td colspan="9"
                    style="color: rgb(119, 119, 119); border-bottom: 1px solid rgb(18, 76, 142); padding-bottom: 4px; text-align:left">
                  <span class="s_tr_td_meta">{{item.Warehouse | houseName(item.Warehouse)}}</span>
                  <div class="order-tip red">17:00以前下单当日发货，17:00以后次日发货！</div>
                </td>
              </tr>
              <tr style="box-sizing: border-box; height: 10px; border: none;"></tr>
              <!---->
              <!---->
              <tr class="s_g2"
                  v-for="(good,i) in item.goods_shop_cart"
                  :key="i">

                <td class="s_dcheck"
                    style="width: 30px;">
                  <span class="checkbox">
                    <input type="checkbox"
                           v-model="good.ischecked"
                           @click="selectGood(item,i)"
                           class="checkbox">
                    <i class="checkbox"></i>
                  </span>
                </td>

                <td style="width: 325px;">
                  <div class="cartgoods-imgbox"><img :src="host+good.thumimage">
                    <!---->
                  </div>
                  <a class="cartgoods-txtbox">
                    <div style="height: auto; max-height: 54px; overflow: hidden;">
                      {{good.goods_name}}

                    </div>
                    <!-- <li>
                      <label style="width: auto;">条码：</label> <span>{{good.barcode}}</span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <label style="width: auto;">品牌：</label> <span>快螺</span> 
                    </li> -->
                    <!---->
                  </a>
                </td>
                <td style="width: 90px;">{{good.min_quantity}}&nbsp;{{good.inventory_unit}}</td>
                <td style="width: 90px;">{{good.brand_name}}</td>
                <td style="width: 130px;">
                  <li><span>
                      {{good.inventory}}&nbsp;{{good.inventory_unit}}
                    </span>
                  </li>
                </td>
                <td style="width: 150px;">
                  ￥<span>{{good.price}}
                  </span>/{{good.inventory_unit}}
                </td>
                <td style="width: 160px;">
                  <div class="cart-qty">
                    <input type="text"
                           class="cart-qty-u"
                           v-model="good.goods_num"
                           @change="inputNum(good)">
                    <input type="button"
                           value="+"
                           class="cart-qty-btn plus"
                           @click="changeNum('+',good)">
                    <input type="button"
                           value="-"
                           class="cart-qty-btn minus"
                           @click="changeNum('-',good)">
                    <span class="cart-qty-meta">{{good.inventory_unit}}</span>
                    <!-- <input type="text" class="cart-qty-k currentAmount">
                    <span class="cart-qty-meta">千支</span> -->
                  </div>
                  <!-- <span></span> -->
                  <!---->
                </td>
                <td>
                  <span class="sg_total totalprice1">
                    <span class="totalPriceSpanForRefresh">
                      ￥ {{good.goods_num * good.price}}
                    </span>
                  </span>
                </td>
                <td style="width: 70px; text-align: right; padding-right: 10px;">
                  <a @click="delGood('0',good.cart_id)"
                     class="cart-del">删除</a>
                </td>
              </tr>
              <!---->
              <tr style="height: auto;">
                <td class="s_scheck"><span class="checkbox"
                        style="top: 0px;"><input type="checkbox"
                           @click="chooseAll(item)"
                           v-model="item.isAllchecked"
                           class="checkbox"> <i class="checkbox"></i></span></td>
                <td colspan="8"
                    style="padding-top: 0px; padding-bottom: 0px;">
                  <div class="table">
                    <span class="td">
                      <a @click="delGood('1',item.goods_shop_cart)"
                         style="margin-top: 0px;">删除选中的商品
                      </a>
                      <!-- <a href="javascript:void(0)" style="margin-top: 0px; margin-left: 30px;">清除已下架商品</a> -->
                      <span>
                        <!-- <a id="ifdiframe"
                           class="export"
                           style="margin-top: 0px; margin-left: 26px; padding: 5px 6px; background: rgb(30, 123, 230); border-radius: 2px; color: rgb(255, 255, 255);"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4OWI5Y2EyYy1jZGFkLTE0NDgtYWZlMy00Njg4YTExOTNmMmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkNCOTFFMDk2OTUyMTFFOTkzODVBODE2MTgwNTM4NzgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkNCOTFFMDg2OTUyMTFFOTkzODVBODE2MTgwNTM4NzgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE0YzViMGY1LTBiZDMtNGM0Yi04MDYxLWExY2QyZGNjN2NmOSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmM3OWQ2MDQyLWE3N2ItYmI0Mi04NTZlLTI4NGE2YzRjZGJhNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgGgn2gAAABuSURBVHjaYvr//z8DFLv8Jw6A1TMxQAAPEE8DYi8gZsSD4QCkURmItwDxTiDezkAkAGm8A8T7gTifgQTACHY0mjPwALhaJgYyAakaGcnVSJaN/6GYMhtZiLQJg09TGxnRbGZE1vifmChABgABBgBrC0NyGYm56QAAAABJRU5ErkJggg=="
                               alt=""
                               style="position: relative; margin-right: 5px; top: 3px; left: 1px;">导出商品信息&nbsp;&nbsp;(Excel)
                        </a> -->
                      </span>
                    </span>

                    <span class="td"
                          style="text-align: right; padding-right: 15px;">
                      已选<span style="color: rgb(255, 51, 0); margin: 0px 0.25em;">{{total_num(item.goods_shop_cart)}}</span>件商品
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      合计（不含运费）
                      <div style="display: inline-block;">
                        ￥<span style="font-size: 20px; color: rgb(255, 51, 0);">
                          {{total_price(item.goods_shop_cart)}}
                        </span></div>
                      <div class="sub-info">
                        <!---->
                        <!---->
                      </div>
                    </span> <span class="td"
                          style="width: 130px;"><a class="btn xl"
                         @click="goPay(item.goods_shop_cart,item)"
                         style="background: rgb(18, 76, 142); float: right; color: rgb(255, 255, 255); border-radius: 0px; font-weight: bold; margin-left: 10px; width: 128px; height: 48px; line-height: 50px; font-size: 16px; padding: 0px; text-align: center;">去结算</a></span></div>
                </td>
              </tr>
            </tbody>

          </table>
          <div class="delline">
            <el-button type="primary"
                       style="width:300px;height:40px;margin:40px 0"
                       @click="delGood('2',shopCarList)">清空购物车</el-button>
          </div>
        </div>
      </div>
      <div class="shopbox"
           v-else
           style="">
        <div>
          <div class="cart-empty"><img src="../../assets/image/noGood.png"
                 alt="">
            <p>您的购物车空空的哦~<br>去看看心仪的商品吧~</p>
            <router-link tag="a"
                         to="/">立即去购物</router-link>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//生成Excel表格
// import FileSaver from 'file-saver'
// import XLSX from 'xlsx'
//
import Code from "../../api/Code";
import makeSign from "../../api/makeSign";
import Urls from "../../api/urls";
import shopCar from "../../api/shopCar";


export default {
  computed: {
    host () {
      return Urls.BWS;
    },
    // 在计算属性中使用了闭包函数
    total_num () {
      return function (a) {
        return this.goodNum(a)
      }
    },
    total_price () {
      return function (a) {
        return this.goodPrice(a)
      }
    },
  },
  data () {
    return {
      loading: false,
      active: 1,
      shopCarList: true,
      checkedCode: [],  // 用于保存被选中的数据
      addressList: [],
      // 支付方式
      mode_payment: 2,
      // 提交订单页面
      goods_id_arr: '',
      orderList: [],
      stateCar: []
    };
  },
  methods: {
    // computed中的回调函数
    goodNum (data) {
      let count = 0
      data.forEach(v => {
        if (v.ischecked) {
          count++
        }
      })
      return count
    },
    goodPrice (data) {
      let price = 0
      data.forEach(v => {
        if (v.ischecked) {
          price += v.goods_num * v.price
        }
      })
      return price
    },
    // 获取商品列表
    getShopCarList () {
      let user_id = sessionStorage.getItem("uid");
      if (!user_id) {
        this.$router.push({ path: '/login', query: { redirect: '/goodlist?gid=' + this.$route.query.gid } })
        return;
      }
      let timestamp = Date.parse(new Date()) / 1000;
      let sign = this.$md5(makeSign.makeSign({ user_id, timestamp }));
      shopCar.getShopCarList({ user_id, timestamp, sign }).then((res) => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          let key = Object.keys(data.data)
          let val = Object.values(data.data)
          val.forEach((v, i) => {
            v.isAllchecked = true;
            v.Warehouse = key[i]
            v.goods_shop_cart.forEach((p, i) => {
              if (p.status_line == 0) {
                v.goods_shop_cart.splice(i, 1)
              }
            })
            v.goods_shop_cart.forEach(v => {
              v.ischecked = true
            })
          })
          this.shopCarList = val;
          this.loading = false;
        } else if (data.code == 2) {
          this.shopCarList = false;
          this.loading = false;
        }
      });
    },
    delGood (type, data) {
      this.$confirm('是否删除该商品?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let cart_id_arr = ''
        let sign
        let timestamp = Date.parse(new Date()) / 1000;
        let user_id = sessionStorage.getItem('uid')
        if (type == '0') {
          cart_id_arr = data;
        } else if (type == '1') {
          data.forEach(v => {
            if (v.ischecked) {
              cart_id_arr += v.cart_id + '_'
            }
          })
        } else if (type == '2') {
          data.forEach(v => {
            let arr = [];
            arr.push(v)
            arr[0].goods_shop_cart.forEach(val => {
              cart_id_arr += val.cart_id + '_'
            })
          })
        }
        if (cart_id_arr.length > 0) {
          cart_id_arr = cart_id_arr.substr(0, cart_id_arr.length - 1);
        }


        sign = this.$md5(makeSign.makeSign({ cart_id_arr, timestamp, user_id }));
        shopCar.delShopCar({ cart_id_arr, timestamp, user_id, sign }).then(res => {
          let data = res.data;
          if (data.code === Code.CODE_SUCCESS) {
            this.$message.success('商品删除成功');
            this.getShopCarList();
            this.$store.dispatch('delGoods', cart_id_arr)
          } else {
            this.$message.error(data.msg)
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });

    },
    //添加 减少数量
    changeGoodNum (data, num) {
      let goods_num = num;
      let goods_id = data.goods_id;
      let user_id = sessionStorage.getItem('uid');
      let timestamp = Date.parse(new Date()) / 1000;
      let sign = this.$md5(makeSign.makeSign({ user_id, goods_id, goods_num, timestamp }));
      shopCar.changeNum({ goods_num, goods_id, user_id, timestamp, sign }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.$store.dispatch('changeNum', { goods_id, goods_num })
        } else {
          return
        }
      })
    },
    inputNum (good) {
      let num = 0;
      num = Math.round(good.goods_num)
      if (num < 1 || num == 0) {
        num = 1;
      }
      good.goods_num = num;
      this.changeGoodNum(good, good.goods_num)
    },
    changeNum (type, data) {
      if (type == '+') {
        data.goods_num++;
      } else {
        data.goods_num--;
      }
      if (data.goods_num < 1 || data.goods_num == 0) {
        data.goods_num = 1;
      }
      this.changeGoodNum(data, data.goods_num)
    },
    // 用户单选
    selectGood (Data, index) {
      let data = Data.goods_shop_cart[index];
      data.ischecked = !data.ischecked;
      let count = 0;
      Data.goods_shop_cart.forEach(v => {
        if (v.ischecked) {
          count++;
        }
      })
      let len = Data.goods_shop_cart.length;
      if (count == len) {
        Data.isAllchecked = true;
      } else {
        Data.isAllchecked = false;
      }
      this.totalData(Data)
    },
    // 用户全选
    chooseAll (data) {
      let check = !data.isAllchecked;
      data.isAllchecked = check;
      data.goods_shop_cart.forEach(v => {
        v.ischecked = check
      })
      this.totalData(data)
    },
    // 把选中的数据push进一个新的数组
    totalData (data) {
      this.checkedCode = [];  //初始化这个数组，防止数据重复
      data.goods_shop_cart.filter(v => {
        if (v.ischecked) {
          this.checkedCode.push(v)
        }
      })
    },
    // 去结算 点击
    goPay (data, Data) {
      this.goods_id_arr = ''
      data.forEach(v => {
        if (v.ischecked) {
          this.goods_id_arr += v.goods_id + '_'
        }
        if (v.status_line == 0) {
          this.$message.warning('购物车存在已下架商品')
          return
        }
      })
      if (this.goods_id_arr.length > 0) {
        this.goods_id_arr = this.goods_id_arr.substr(0, this.goods_id_arr.length - 1);
      }
      if (this.goods_id_arr == '') {
        this.$message.info('请至少选择一件商品去结算')
        return
      }
      this.$store.state.goods_id_arr = this.goods_id_arr;
      this.$router.push({ path: '/subOrder', query: { goods_id_arr: this.goods_id_arr, house: Data.Warehouse } })
    },

    // 打印成Excel文件
    // exportExcel(index) {
    //   let box = $('.centerBox').eq(index).find('.s_g2').has('input:checked');
    //   if(box.length == 0){
    //     this.$message.warning('请选择商品')
    //     return;
    //   }
    //   console.log(box)
    //   let wb = XLSX.utils.table_to_book(box)
    //   console.log(wb)
    //     let wbout = XLSX.write(wb, {
    //       bookType: 'xlsx',
    //       bookSST: true,
    //       type: 'array',
    //     })
    //     try {
    //       FileSaver.saveAs(
    //         new Blob([wbout], { type: 'application/octet-stream' }),
    //         '购物车商品信息.xlsx'
    //       )
    //     } catch (e) {
    //       if (typeof console !== 'undefined') console.log(e, wbout)
    //     }
    //     return wbout
    // },
  },
  mounted () {
    this.loading = true
    this.getShopCarList();
    $('.o-select li').eq(1).addClass('active')
    $('.o-select li').on('click', function () {
      $(this).addClass('active').siblings().removeClass('active')
    })
    this.stateCar = this.$store.state.car
  },
  filters: {
    houseName (val) {
      if (val == 1) {
        return val = '厦门仓库'
      } else if (val == 3) {
        return val = '龙岩仓库'
      } else if (val == 4) {
        return val = '漳州仓库'
      } else if (val == 5) {
        return val = '漳平仓库'
      }
    }
  },
  watch: {
    stateCar () {
      this.getShopCarList()
    }
  }
};
</script>

<style scoped>
.changeNum {
  float: left;
}
.address-wrap {
  background-image: none !important;
}
.cart-empty>img{
  display: inline-block;
  width: 200px;
  height: 200px;
}
</style>
