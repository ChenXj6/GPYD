<template>
  <div data-v-b1f20ae6=""
       class="myCart">
    <div class="wrap">

      <!-- 步骤条 -->
      <el-steps :active='active'
                finish-status="success">
        <el-step title="我的购物车"></el-step>
        <el-step title="填写&提交订单信息"></el-step>
        <el-step title="支付订单"></el-step>
      </el-steps>

    </div>

    <!-- 核对订单 -->
    <div data-v-b1f20ae6=""
         class="settlement-wrapper main">
      <div class="wrap"
           style="width: 1150px;">
        <div class="order_wrap form">
          <div class="order_box">
            <!-- deliverMethod -->
            <div class="o_common_box clearfix">
              <div id="invoiceTitleDiv"
                   class="c_common_title">
                <span>配送信息</span>
                <label>（支持自提与配送）</label>
              </div>

              <ul id="invoicePartUl"
                  class="o-selector clearfix"
                  style="margin-bottom:20px">
                <div id="offlinePayMsg"
                     class="pay-amount"
                     style="line-height:50px;height:30px;">
                  <label for="deliverMethods">
                    配送方式：
                    <select v-model="deliverMethod"
                            name="deliverMethods"
                            style="width:100px;height:30px;margin-top:px;line-height:50px">
                      <option value="1">货运</option>
                      <option value="2">自提</option>
                    </select>
                  </label>
                </div>
              </ul>
            </div>
            <!-- address -->
            <div id="o_common_box_receiver"
                 class="o_common_box"
                 v-if="deliverMethod == 1">
              <div class="c_common_title">
                <span class="c_common_title_span">收货地址</span>
                <label>（目前配送只支持福建地区）</label>
                <router-link tag="button"
                             to="/address"
                             class="address-new">新增收货地址</router-link>
              </div>

              <div class=" addressNone"
                   v-if="addressList.length != 0">
                <!-- 默认  -->
                <div class="addressItem"
                     v-if="isHidden">
                  <div class="addressItem_btn item-active">{{defaultAddress.contact_name}}</div>
                  <span class="item marginLeft15">{{defaultAddress.contact_name}}</span>
                  <span class="item marginLeft15">{{defaultAddress.contact_mobile}}</span>
                  <span class="item marginLeft15">{{defaultAddress.province}}</span>
                  <span class="item marginLeft15">{{defaultAddress.city}}</span>
                  <span class="item marginLeft15">{{defaultAddress.district}}</span>
                  <span class="item marginLeft15">{{defaultAddress.address}}</span>
                  <span class="default-addr-view">默认地址</span>
                  <div class="item-btns">
                    <span class="delete-btn"
                          @click="delAddress(defaultAddress.id)">删除</span>
                  </div>
                </div>
                <!-- 地址列表 -->
                <ul id="shipping_address"
                    class="address-list"
                    v-else>
                  <li class="addressItem "
                      v-for="(item,index) in addressList"
                      :key="index">
                    <div class="addressItem_btn"
                         :class="item.is_default == 1 ? 'item-active' : ''">{{item.contact_name}}</div>
                    <span class="item marginLeft15">{{item.contact_name}}</span>
                    <span class="item marginLeft15">{{item.contact_mobile}}</span>
                    <span class="item marginLeft15">{{item.province}}</span>
                    <span class="item marginLeft15">{{item.city}}</span>
                    <span class="item marginLeft15">{{item.district}}</span>
                    <span class="item marginLeft15">{{item.address}}</span>
                    <span class="default-addr-view"
                          :class="item.is_default == 1 ? '' : 'isHidden'">默认地址</span>
                    <div class="item-btns">
                      <span v-if="item.is_default != 1"
                            class="default-btn"
                            @click="setDefault(item.id)">设为配送地址</span>
                      <!-- <span class="modify-btn">修改</span> -->
                      <span class="delete-btn"
                            @click="delAddress(item.id)">删除</span>
                    </div>
                  </li>
                </ul>
                <!-- 无默认地址 -->
                <div class="operateItem"
                     v-if="defaultAddress.length != 0"
                     style="">
                  <div class="operateDown"
                       @click="isHidden = !isHidden">
                    <span class="more-addr">{{isHidden ? '更多地址':'收起地址'}}</span>&nbsp;
                    <i :class="isHidden ?'el-icon-arrow-down' :'el-icon-arrow-up'"></i>
                  </div>
                </div>
              </div>
              <!-- 无地址 -->
              <div class="address-wrap addressNone"
                   v-else></div>
            </div>
            <!-- payMethod -->
            <div class="o_common_box clearfix">
              <div class="c_common_title">
                <span>支付方式</span>
              </div>
              <keep-alive>
                <ul class="o-select">
                  <li id="pay_balance"
                      class=""
                      @click="mode_payment =1">
                    <i></i>
                    <b> 预付款支付</b>
                  </li>
                  <!---->
                  <li id="pay_alipay"
                      class=""
                      @click="mode_payment =2">
                    <i></i>
                    <b>支付宝</b>
                    <div id="alipayMsgPay"
                         class="pay-amount">
                      <!---->
                    </div>
                  </li>
                  <li id="pay_weixin"
                      class=""
                      @click="mode_payment =3">
                    <i></i>
                    <b>微信扫码</b>
                    <div id="weixinMsgPay"
                         class="pay-amount">
                      <!---->
                    </div>
                  </li>
                  <li id="pay_offline"
                      class=""
                      @click="changeBank()">
                    <i></i>
                    <b> 线下支付
                      <a href="javascript:;"
                         style="margin-left: 10px;">
                      </a>
                    </b>
                    <div class="des"
                         v-if="mode_payment == 4">
                      <span style="color: rgb(255, 51, 0);">可查询订单号：</span>
                      <span>{{exclusive_ordernum}}</span>
                    </div>
                    <div id="offlinePayMsg"
                         v-if="mode_payment == 4"
                         class="pay-amount"
                         style="line-height:44px">
                      <label for="discountCoupon">
                        银行卡:
                        <select name="discountCoupon"
                                id="discountCoupon"
                                class="xs"
                                v-model="bankId"
                                style="width:320px;margin-top:-5px;line-height:25px">
                          <option value="-1">请选择银行卡号</option>
                          <option v-for="(item,index) in bankList"
                                  :key="index"
                                  :value="item.id">{{item.bank_deposit}}&nbsp;(&nbsp;{{item.account_number}}&nbsp;)</option>
                        </select></label>
                    </div>
                  </li>
                </ul>
              </keep-alive>
            </div>
            <!-- makeInvoice -->
            <div class="o_common_box clearfix">
              <div id="invoiceTitleDiv"
                   class="c_common_title">
                <span>开票信息</span>
                <label>（因近期税务部门在做三证合一，请您核对在工品的开票资料是否准确，若已变更，请及时修改）</label>
              </div>

              <ul id="invoicePartUl"
                  class="o-selector clearfix"
                  style="margin-bottom:20px">
                <div style="float:right;line-height:50px">
                  <router-link tag="a"
                               to="/makeInvoice">添加开票资料</router-link>
                </div>
                <div id="offlinePayMsg"
                     class="pay-amount"
                     style="float:left;line-height:50px;height:30px;">
                  <label for="discountCoupon">
                    开票列表：
                    <select name="discountCoupon"
                            id="discountCoupon"
                            class="xs"
                            v-model="invoiceId"
                            style="width:600px;height:30px;margin-top:px;line-height:50px">
                      <option value="-1">不开发票</option>
                      <option v-for="(item,index) in invoiceList"
                              :key="index"
                              :value="item.id">发票类型:&nbsp;{{item.invoice_type | invoiceType(item.invoice_type)}}；&nbsp;发票抬头:&nbsp;{{item.open_head || item.unit_name}}&nbsp;；<span>发票地址:&nbsp;{{item.close_province}}&nbsp;{{item.close_city}}&nbsp;{{item.close_area}}&nbsp;</span></option>
                    </select></label>
                </div>
              </ul>
            </div>
            <!-- goodList -->
            <div class="o_common_box clearfix">
              <div class="c_common_title">
                <span style="color: rgb(34, 89, 190);">{{house_id | houseName(house_id)}}</span>
                <span>
                  商品清单
                  <!---->
                </span>
                <router-link tag="a"
                             to="/mycart">返回购物车修改&gt;</router-link>
              </div>
              <table class="orders-list">
                <thead>
                  <tr>
                    <td style="width: 58px;">序号</td>
                    <td style="width: 350px;">商品信息</td>
                    <td style="width: 100px;">品牌</td>
                    <td style="width: 200px;">包装信息</td>
                    <td style="width: 100px;">数量</td>
                    <td style="width: 140px;">单价（元）</td>
                    <td style="width: 200px;">总价</td>
                  </tr>
                </thead>
                <tr class="orders-title">
                  <td colspan="9">
                    现货运费：¥
                    <span>{{deliverPrice}}</span>
                  </td>
                </tr>
                <tbody id="tbodyStock">
                  <tr class="orders-item"
                      v-for="(item,index) in orderList.commodity_list"
                      :key="index">
                    <td></td>
                    <td class="td-goods">
                      <div>
                        <div class="goods-imgbox">
                          <img :src="host + item.thumimage"
                               alt="picture" />
                        </div>
                        <div class="goods-info">
                          <div style="height: auto; max-height: 50px; overflow: hidden;">
                            {{item.goods_name}}
                          </div>
                          <!---->
                          <div>
                            <label>备注：</label>
                            <input type="text"
                                   name="itemRemark"
                                   v-model="item.note"
                                   autocomplete="off" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{{item.brand_name}}</td>
                    <td class="td-pkg">
                      <div class="td-inner">
                        <p><span>{{item.package_info}}</span></p>
                      </div>
                    </td>
                    <td>{{item.goods_num}}</td>
                    <td>¥ {{mode_payment == '1' ? (item.price * (1 + floatradio)*100/100) : item.price}}&nbsp;/&nbsp;{{item.inventory_unit}}</td>
                    <td>
                      ¥
                      <span class="jineStock">{{mode_payment == '1' ? (item.total_prices * (1 + floatradio)*100/100) : item.total_prices}}</span>
                    </td>
                  </tr>
                </tbody>
                <!---->
                <!---->
              </table>
            </div>
            <!-- 订单备注 -->
            <div class="o_common_box clearfix vouchers">
              <div class="c_common_title">
                <span>订单备注</span>&nbsp;&nbsp;&nbsp;
                <textarea id="customer_remark"
                          maxlength="200"
                          autocomplete="off"
                          v-model="order_note"
                          placeholder="您可以备注关于您的采购单号、合同单号、客户订单号等单号信息，方便跟踪和查找，或者关于订单的一些特殊要求、说明!"
                          class="customer_remark"></textarea>
                <div class="limit-num">限200字符</div>
              </div>
              <ul class="vouchers-ul">
                <!-- 优惠券 -->
                <li>
                  <label for="discountCoupon">
                    优惠券：
                    <select name="discountCoupon"
                            id="discountCoupon"
                            class="xs"
                            v-model="coupons_id">
                      <option value="-1">优惠券选择</option>
                      <option v-for="(item,index) in couponList"
                              :key="index"
                              :value="item.id">{{item.coupons_money}}优惠券(有效期至{{item.end_day}})</option>
                    </select></label>
                  <span class="dcAmount">-¥{{conpon_price}}</span>
                </li>
                <!-- 代金券 -->
                <li style="display: none;">
                  <label for="cashCoupon">
                    代金券：
                    <select name="cashCoupon"
                            id="cashCoupon"
                            class="xs">
                      <option value="-1">无可用券</option>
                    </select></label>
                  <span class="ccAmount">-¥0</span>
                </li>
                <!---->
                <li>
                  <label id="couponWarning"
                         style="display: none; color: red;">本订单已使用券，结案时将不再返券</label>
                </li>
                <li id="freeShippingDiv"></li>
              </ul>
            </div>
            <!-- 金额显示 -->
            <div class="o_subinfo clearfix">
              <ul class="clearfix">
                <li>
                  <span>商品总额：</span>
                  <span id="goodsTotal"><span class="yellow">¥{{mode_payment == '1' ? (goodsPrice * (1 + floatradio)*100/100) : goodsPrice}}</span>
                    <span id="divDiscountAll"
                          style="color: rgb(166, 166, 166); display: none;">
                      (已节省：¥
                      <span id="discountAll">0</span>)
                    </span></span>
                </li>
                <li>
                  <span>运费：</span>
                  <span id="yunfei_stock"
                        class="yellow">¥{{deliverPrice}}</span>
                </li>
                <li>
                  <span>发票费用：</span>
                  <span id="yunfei_stock"
                        class="yellow">¥{{invoice_price || 0}}</span>
                </li>
                <!-- <li>
                  <span>无货运费：</span>
                  <span id="yunfei_stockout"
                        class="yellow">¥0</span>
                </li> -->
                <!-- <li id="memberOpenDiv"
                    class="ad-paidmember"
                    style="display: none;">
                  <span><i class="i-vip"></i>还在花运费？开通畅购会员享&nbsp;
                    <span class="yellow">无限次</span>&nbsp;送货上门包邮
                    <a href="https://www.gpyh.com/member/member"
                       target="_blank"
                       class="to-paidmember">立即开通&gt;&gt;</a></span>
                </li> -->
                <li><span>优惠券：</span> <span class="dcAmount">-¥{{conpon_price}}</span></li>
                <!-- <li><span>代金券：</span> <span class="ccAmount">-¥0</span></li> -->
                <!---->
                <li class="o_subprice"
                    style="margin-top: 15px;">
                  <span style="color: rgb(51, 51, 51); font-weight: 700;">实付款：</span>
                  <span><b style="font-size: 24px;">¥</b>
                    <b id="total"
                       style="font-size: 24px;">{{total_money}}</b></span>
                </li>
              </ul>
              <ul class="clearfix hasbg">
                <li>
                  <span><b>配送方式：</b></span>
                  <span id="deliveryMode">&nbsp;{{deliverMethod == 1 ? '货运':'自提'}}</span>
                </li>
                <li v-if="deliverMethod == 1">
                  <span><b>寄送至：</b></span>
                  <span id="deliveryAddress">{{defaultAddress.province}} &nbsp;{{defaultAddress.city}}&nbsp;{{defaultAddress.district}}&nbsp;{{defaultAddress.address}}</span>
                </li>
                <li v-if="deliverMethod == 1">
                  <span><b>收货人：</b></span>
                  <span id="deliveryPerson">&nbsp;{{defaultAddress.contact_name}} &nbsp;{{defaultAddress.contact_mobile}}</span>
                </li>
              </ul>
              <div>
                <el-button id="smtOrder"
                           type="primary"
                           class="btn btn-blue"
                           @click="subOrder()"
                           style="float: right; clear: both; font-size: 15px; margin: 0px 0px 0px 20px; padding: 0.5em 1em;">
                  提交订单
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
import Code from "../../api/Code";
import makeSign from "../../api/makeSign";
import Urls from "../../api/urls";
import address from '../../api/address'
import getEA from '../../api/loginAndReg'
import order from "../../api/orderList";
import getIn from '../../api/orderList'

export default {
  computed: {
    host () {
      return Urls.BWS;
    },
    total_money () {
      if (this.mode_payment == 1) {
        let a = ((this.goodsPrice * (1 + Number(this.floatradio)) * 100) + this.invoice_price * 100 + this.deliverPrice * 100 - this.conpon_price * 100) / 100;
        return a;
      } else {
        let a = ((this.goodsPrice * 100) + this.invoice_price * 100 + this.deliverPrice * 100 - this.conpon_price * 100) / 100;
        return a;
      }
    }
  },
  data () {
    return {
      isHidden: true,
      active: 2,
      house_id: 1,
      addressList: [],
      addressId: 0,
      // 支付方式
      mode_payment: 2,
      // 提交订单页面
      couponList: [],
      goodsPrice: 0, // 用来接收参数
      goods_arr: '',
      quantity_arr: '',
      note_arr: '',
      orderList: [],
      deliverPrice: 0,
      order_note: '',
      coupons_id: 0,
      conpon_price: 0,
      defaultAddress: [],
      bankList: [],
      bankId: 1,
      invoiceList: [],
      invoiceId: 0,
      invoice_price: 0,
      //线下付款订单号
      exclusive_ordernum: '',
      deliverMethod: 2,
      floatradio: 0,
    };
  },
  methods: {
    // 获取地址列表
    getAddressList () {
      return new Promise((resolve) => {
        this.defaultAddress = [];
        let timestamp = Date.parse(new Date()) / 1000;
        let user_id = sessionStorage.getItem('uid');
        let sign = this.$md5(makeSign.makeSign({ timestamp, user_id }))
        let formData = { user_id, timestamp, sign };
        address.getAddressList(formData).then(res => {
          let data = res.data;
          if (data.code === Code.CODE_SUCCESS) {
            if (data.data.length != 0) {
              this.addressList = data.data;
              resolve(this.addressList)
            } else {
              return
            }
          } else if (data.code === 2) {
            this.$message.warning('暂无地址！请点击新增收货地址')
          } else {
            this.$message.error('获取地址失败！')
          }
        })
      })

    },
    // 删除地址
    delAddress (id) {
      this.$confirm('确定要删除该地址吗？', '提示信息', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        let timestamp = Date.parse(new Date()) / 1000;
        let user_id = sessionStorage.getItem('uid');
        let sign = this.$md5(makeSign.makeSign({ timestamp, user_id, id }));
        address.delAddress({ timestamp, user_id, id, sign }).then(res => {
          let data = res.data;
          if (data.code === Code.CODE_SUCCESS) {
            this.$message({
              message: '删除地址成功',
              type: 'success'
            });
            this.getAddressList();
          } else {
            this.$message.error(data.msg);
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    // 设为默认地址
    setDefault (id) {
      let timestamp = Date.parse(new Date()) / 1000;
      let user_id = sessionStorage.getItem('uid');
      let sign = this.$md5(makeSign.makeSign({ timestamp, user_id, id }));
      let formData = { sign, timestamp, user_id, id }
      address.defaultAddress(formData).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.getAddressList().then(res => {
            if (res.find(e => e.is_default == 1)) {
              res.forEach(v => {
                if (v.is_default == 1) {
                  this.addressId = v.id
                  let arr = []
                  arr.push(v)
                  this.defaultAddress = arr[0]
                  this.getDeliverPrice(this.orderList.commodity_list)
                }
                this.isHidden = true
              })
            } else {
              this.isHidden = false
            }
          });
          this.addressId = id;

        } else {
          return false;
        }
      })
    },
    // 订单页面 获取订单
    getOrderList () {
      return new Promise((resolve) => {
        let timestamp = Date.parse(new Date()) / 1000;
        let user_id = sessionStorage.getItem('uid');
        let goods_id_arr = this.goods_arr;
        let sign = this.$md5(makeSign.makeSign({ timestamp, user_id, goods_id_arr }));
        order.subOrderList({ timestamp, user_id, goods_id_arr, sign }).then(res => {
          let data = res.data;
          if (data.code === Code.CODE_SUCCESS) {
            this.orderList = data.data;
            this.floatradio = data.data.floatradio
            this.orderList.commodity_list.forEach(v => {
              v.note = '';
              this.goodsPrice += v.goods_num * v.price
            })

            resolve(this.orderList)
          } else {
            return
          }
        })
      })
    },
    //获取配送费
    getDeliverPrice (data) {
      let timestamp = Date.parse(new Date()) / 1000;
      let user_id = sessionStorage.getItem('uid');
      let house_id = this.house_id;
      let address_id = this.addressId;
      let total_price = 0;
      let weight = 0;
      data.forEach(v => {
        total_price += Number(v.total_prices)
        weight += Number(v.weight)
      })
      this.goodsPrice = total_price;
      let sign = this.$md5(makeSign.makeSign({ user_id, house_id, address_id, total_price, weight, timestamp }))
      order.getDeliverPrice({ user_id, house_id, address_id, total_price, weight, timestamp, sign }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.deliverPrice = data.data.freight;
        } else {
          this.$message.warning(data.msg)
          this.deliverPrice = 0;
          this.addressId = 0;
        }
      })
    },
    //获取优惠券
    getCoupons () {
      let timestamp = Date.parse(new Date()) / 1000;
      let user_id = sessionStorage.getItem('uid');
      let sign = this.$md5(makeSign.makeSign({ timestamp, user_id }));
      order.getCoupons({ timestamp, user_id, sign }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.couponList = data.data;
        } else {
          this.couponList = [];
        }
      })
    },
    // 发票列表 & 发票金额
    getInvoice () {
      let user_id = sessionStorage.getItem('uid');
      let timestamp = Date.parse(new Date()) / 1000;
      let sign = this.$md5(makeSign.makeSign({ user_id, timestamp }));
      getIn.getIn({ user_id, timestamp, sign }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.invoiceList = data.data
        } else {
          return
        }
      })
    },
    getInvoicePrice (data) {
      let total_price = 0;
      if (this.mode_payment == 1) {
        data.forEach(v => {
          total_price += (Number(v.total_prices) * (1 + this.floatradio) * 100 / 100)
        })
      } else {
        data.forEach(v => {
          total_price += Number(v.total_prices)
        })
      }
      if (this.invoiceId == -1 || this.invoiceId == 0) {
        this.invoiceId = -1;
        this.invoice_price = 0;
      } else {
        let user_id = sessionStorage.getItem('uid');
        let invoice_id = this.invoiceId;
        let timestamp = Date.parse(new Date()) / 1000;
        let sign = this.$md5(makeSign.makeSign({ total_price, user_id, timestamp, invoice_id }))
        order.getInPrice({ sign, total_price, user_id, timestamp, invoice_id }).then(res => {
          let data = res.data;
          if (data.code === Code.CODE_SUCCESS) {
            this.invoice_price = data.data.invoice_price
          } else {
            this.$message.warning(data.msg)
          }
        })
      }
    },
    subOrder () {
      let timestamp = Date.parse(new Date()) / 1000;
      let user_id = sessionStorage.getItem('uid');
      let address_id = this.addressId;
      let delivery_method = this.deliverMethod;
      if (delivery_method == 1) {
        if (address_id == 0) {
          this.$message.warning('请选择有效的配送地址')
          return;
        }
      }
      let total_money = this.total_money;
      let mode_payment = this.mode_payment;
      let total_price
      if (mode_payment == 1) {
        total_price = (this.goodsPrice * (1 + Number(this.floatradio)) * 100) / 100;
      } else {
        total_price = this.goodsPrice;
      }
      let invoice_price = this.invoice_price;
      let invoice_id = this.invoiceId;
      if (invoice_id == -1) {
        invoice_id = 0
      }
      let freight = this.deliverPrice;
      let exclusive_id = this.bankId;
      if (exclusive_id == -1) {
        exclusive_id = ''
      }
      let order_note = this.order_note;
      let coupons_id = this.coupons_id;
      if (coupons_id == -1) {
        coupons_id = ''
      }
      let goods_id_arr = ''
      let note_arr = ''
      this.orderList.commodity_list.forEach(v => {
        if (v.note) {
          let notes = ''
          notes = v.goods_id + '#^#' + v.note
          this.note_arr += notes + '_'
        } else {
          this.note_arr = ''
        }
      })
      this.orderList.commodity_list.forEach(v => {
        let nums = ''
        nums = v.goods_id + '#' + v.goods_num
        goods_id_arr += nums + '_'
      });
      if (this.note_arr.length > 0) {
        this.note_arr = this.note_arr.substr(0, this.note_arr.length - 1);
      }
      note_arr = this.note_arr;
      if (goods_id_arr.length > 0) {
        goods_id_arr = goods_id_arr.substr(0, goods_id_arr.length - 1);
      }
      let pay_status = 1;
      if (mode_payment == 4) {
        if (exclusive_id == '') {
          this.$message.warning('请选择您要选择的银行卡号');
          note_arr = '';
          goods_id_arr = '';
          return
        }
        let exclusive_ordernum = this.exclusive_ordernum;
        let params = "note_arr=" + note_arr + "&timestamp=" + timestamp + "&user_id=" + user_id + "&address_id=" + address_id + "&goods_id_arr=" + goods_id_arr + "&mode_payment=" + mode_payment + "&total_money=" + total_money + "&order_note=" + order_note + "&coupons_id=" + coupons_id + "&pay_status=" + pay_status + "&total_price=" + total_price + "&freight=" + freight + "&exclusive_id=" + exclusive_id + "&invoice_id=" + invoice_id + "&invoice_price=" + invoice_price + "&exclusive_ordernum=" + exclusive_ordernum + "&delivery_method=" + delivery_method;
        let urlStr = params.split("&").sort().join("&");
        let sign = this.$md5(urlStr);
        // let sign = this.$md5(makeSign.makeSign({ delivery_method, exclusive_ordernum, invoice_price, invoice_id, total_price, freight, exclusive_id, pay_status, timestamp, user_id, address_id, goods_id_arr, mode_payment, total_money, order_note, note_arr, coupons_id }))
        // console.log(sign)
        order.subOrder({ delivery_method, exclusive_ordernum, invoice_price, invoice_id, total_price, freight, exclusive_id, pay_status, sign, timestamp, user_id, address_id, goods_id_arr, mode_payment, total_money, order_note, note_arr, coupons_id }).then(res => {
          let data = res.data;
          if (data.code === Code.CODE_SUCCESS) {
            this.$message.success(data.msg)
            this.$store.dispatch('delShopCar', this.goods_arr)
            this.$router.push({ path: '/orderItem' })
          } else {
            this.$message.error(data.msg)
          }
        })
      } else {
        let params = "note_arr=" + note_arr + "&timestamp=" + timestamp + "&user_id=" + user_id + "&address_id=" + address_id + "&goods_id_arr=" + goods_id_arr + "&mode_payment=" + mode_payment + "&total_money=" + total_money + "&order_note=" + order_note + "&coupons_id=" + coupons_id + "&pay_status=" + pay_status + "&total_price=" + total_price + "&freight=" + freight + "&exclusive_id=" + exclusive_id + "&invoice_id=" + invoice_id + "&invoice_price=" + invoice_price + "&delivery_method=" + delivery_method;
        let urlStr = params.split("&").sort().join("&");
        let sign = this.$md5(urlStr);
        // let sign1 = this.$md5(makeSign.makeSign({ delivery_method, invoice_price, invoice_id, total_price, freight, exclusive_id, pay_status, timestamp, user_id, address_id, goods_id_arr, mode_payment, total_money, order_note, note_arr, coupons_id }))
        order.subOrder({ delivery_method, invoice_price, invoice_id, total_price, freight, exclusive_id, pay_status, sign, timestamp, user_id, address_id, goods_id_arr, mode_payment, total_money, order_note, note_arr, coupons_id }).then(res => {
          let data = res.data;
          if (data.code === Code.CODE_SUCCESS) {
            this.$message.success(data.msg)
            sessionStorage.setItem('mode_payment', this.mode_payment)
            sessionStorage.setItem('orderN', data.data.order_num)
            sessionStorage.setItem('price', data.data.total_price)
            sessionStorage.setItem('order_id', data.data.order_id)
            this.$router.push('/payOrder')
            this.$store.dispatch('delShopCar', this.goods_arr)
          } else {
            this.$message.error(data.msg)
          }
        })
      }
    },
    //线下支付  选择汇款卡号
    getBank () {
      let user_id = sessionStorage.getItem('uid')
      let timestamp = Date.parse(new Date()) / 1000;
      let sign = this.$md5(makeSign.makeSign({ user_id, timestamp }));
      getEA.getExclusiveAcc({ sign, timestamp, user_id }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.bankList = data.data.exclusive;
          this.exclusive_ordernum = data.data.exclusive_ordernum
        } else {
          return false
        }
      })
    },
    changeBank () {
      this.mode_payment = 4;
      this.getBank()
    }
  },
  mounted () {
    this.goods_arr = this.$route.query.goods_id_arr;
    this.house_id = this.$route.query.house;
    this.coupons_id = -1;
    this.bankId = -1;
    this.invoiceId = -1;
    this.deliverMethod = 2;
    this.deliverPrice = 0;
    $('.o-select li').eq(1).addClass('active')
    $('.o-select li').on('click', function () {
      $(this).addClass('active').siblings().removeClass('active')
    });
    this.getOrderList().then(() => {
      if (this.deliverMethod == 1) {
        this.getAddressList().then(res => {
          if (res.find(e => e.is_default == 1)) {
            res.forEach(v => {
              if (v.is_default == 1) {
                this.addressId = v.id
                let arr = []
                arr.push(v)
                this.defaultAddress = arr[0]
                if (this.deliverMethod == 1) {
                  this.getDeliverPrice(this.orderList.commodity_list)
                }
              }
              this.isHidden = true
            })
          } else {
            this.isHidden = false
          }
        });
      }

    });

    this.getCoupons();
    this.getInvoice();
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
    },
    invoiceType (val) {
      if (val == 1) {
        return val = '普通发票'
      } else if (val == 2) {
        return val = '专用发票'
      }
    }
  },
  watch: {
    mode_payment () {
      this.getInvoicePrice(this.orderList.commodity_list);
    },
    deliverMethod (val) {
      if (val == 2) {
        this.addressId = 0;
        this.deliverPrice = 0;
      } else {
        this.getAddressList().then(res => {
          if (res.find(e => e.is_default == 1)) {
            res.forEach(v => {
              if (v.is_default == 1) {
                this.addressId = v.id
                let arr = []
                arr.push(v)
                this.defaultAddress = arr[0]
                this.getDeliverPrice(this.orderList.commodity_list)
              }
              this.isHidden = true
            })
          } else {
            this.isHidden = false
          }
        });
      }
    },
    coupons_id (val) {
      if (val == -1) {
        this.conpon_price = 0
      } else {
        this.coupons_id = val;
        this.couponList.forEach(v => {
          if (v.id == val) {
            this.conpon_price = v.coupons_money
          }
        })
      }
    },
    invoiceId (val) {
      if (val == -1 || val == 0) {
        this.invoice_price = 0;
        this.invoiceId = -1
      } else {
        this.invoiceId = val;
        this.getInvoicePrice(this.orderList.commodity_list)
      }
    }
  },
}
</script>
<style scoped>
.settlement-wrapper .noAddress {
  background-image: none;
}
.addressItem {
  height: 40px;
  margin-bottom: 20px;
}
.addressItem .addressItem_btn {
  cursor: pointer;
  display: inline-block;
  width: 100px;
  border: 1px solid #ccc;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  height: 40px;
  line-height: 37px;
  font-size: 12px;
  background: #fff !important;
}
.addressItem .item-extra {
  height: 40px;
  display: inline-block;
  font-size: 12px;
  color: #525252;
  border-radius: 2px;
  position: relative;
}
.item-extra span {
  display: inline-block;
  height: 20px;
  font-size: 12px;
  background: #ccc;
  line-height: 20px;
  padding: 0 3px;
}
.marginLeft15 {
  margin-left: 15px;
}
.item-active {
  border: 2px solid #124c8e !important;
}
.item-btns {
  float: right;
  font-size: 12px;
  color: #124c8e;
  line-height: 40px;
  display: none;
}
.item-btns span {
  margin-left: 20px;
}
.addressItem:hover {
  background-color: #e8f1fb;
}
.addressItem:hover .item-btns {
  display: block;
}
.default-addr-view {
  display: inline-block;
  height: 20px;
  font-size: 12px;
  background: #ccc;
  line-height: 20px;
  padding: 0 3px;
  margin-left: 15px;
}
.isHidden {
  display: none !important;
}
.settlement-wrapper .o-select li b {
  width: 25%;
}
#deliveryAddress {
  text-align: right !important;
}
</style>