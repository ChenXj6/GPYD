<template>
  <div class="gc_content">
    <el-form id="pageForm">
      <div class="list_header">
        <div class="left-title">购买记录</div>
        <div class="list_search">
          <!-- <div class="so_form">
             <el-input v-model='goods_name'
                      placeholder="请输入商品信息，关键字用空格隔开"
                      class="input-with-select">
              <el-button slot="append"
                         icon="el-icon-search">搜索</el-button>
            </el-input> 
          </div>-->
        </div>
      </div>
      <!-- <div class="category_search">     -->
      <div id="list_nav"
           style="min-height:320px">
        <!-- <div style="margin-top: 10px; height: 40px;"> -->

        <el-table :data="tableData"
                  style="width: 100%"
                  :cell-style="{'text-align':'left'}"
                  stripe>
          <el-table-column label="购买时间"
                           prop="pay_time"
                           width="150px">
          </el-table-column>
          <el-table-column prop="ordernum"
                           label="商品列表"
                           width="441px">
            <template slot-scope="scope">
              <el-table :data="scope.row.order_list_detail"
                        border
                        style="width:100%">
                <el-table-column prop=""
                                 label="商品缩略图"
                                 width="90px">
                  <template slot-scope="scope">
                    <router-link tag="a"
                                 :to="{path:'/gooddetails',query:{gid:scope.row.goods_id}}">
                      <img :src="host + scope.row.thumimage"
                           style="width:60px;height:60px">
                    </router-link>

                  </template>
                </el-table-column>
                <el-table-column prop="goods_name"
                                 label="名称"
                                 width="150">
                  <template slot-scope="scope">
                    <router-link tag="a"
                                 :to="{path:'/gooddetails',query:{gid:scope.row.goods_id}}">
                      {{scope.row.goods_name}}
                      <el-tag type="danger"
                              v-if="scope.row.status_line == 0">已下架</el-tag>
                    </router-link>
                  </template>
                </el-table-column>
                <el-table-column prop="quantity"
                                 label="购买数量(吨)"
                                 width="90px">
                </el-table-column>
                <el-table-column label="商品单价(元)"
                                 width="90px">
                  <template slot-scope="scope">
                    {{scope.row.mode_payment == 1 ? Number(scope.row.price)*(1 + Number(scope.row.floatradio))*100/100 : Number(scope.row.price)}}
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-table-column>
          <el-table-column prop="total_money"
                           label="总价(元)"
                           width="100px">
            <template slot-scope="scope">
              <span>{{scope.row.total_money}}</span>
              <el-popover placement="right"
                          trigger="click">
                <el-table :data="scope.row.total_price_details"
                          border 
                          style="width:100%">
                  <el-table-column prop="total_price"
                                   label="商品总价(元)"
                                   width="100px">
                  </el-table-column>
                  <el-table-column prop="freight"
                                   label="运费(元)"
                                   width="100px">
                  </el-table-column>
                  <!-- invoice_price -->
                  <el-table-column prop="invoice_price"
                                   label="发票价格(元)"
                                   width="100px">
                  </el-table-column>
                  <el-table-column prop="discounts"
                                   label="优惠券"
                                   width="80px">
                  </el-table-column>
                </el-table>
                <el-button type="text"
                           slot="reference"
                           style="width:50px">账单详情</el-button>
              </el-popover>
            </template>
          </el-table-column>
          <!-- <el-table-column label="发票类型" width="80px">
          <template slot-scope="scope">
            <span v-if="scope.row.invoice_info == undefined">无发票</span>
            <span v-else>{{scope.row.invoice_info[0].invoice_type | invoiceType()}}</span>
            <el-popover placement="right"
                        trigger="click">
              <el-table :data="scope.row.invoice_info"
                        border
                        style="width: 100%">
                  <el-table-column label="公司名称&开票抬头">
                  <template slot-scope="scope">
                    {{scope.row.invoice_type == 2 ? scope.row.unit_name : scope.row.open_head}}
                  </template>
                </el-table-column>
              </el-table>
              <el-button slot="reference" type="text" v-if="scope.row.invoice_info != undefined" style="width:50px">发票信息</el-button>
            </el-popover>
          </template>
        </el-table-column> -->
          <el-table-column prop="pay_status"
                           label="下单来源"
                           width="90px">
            <template slot-scope="scope">
              <span>{{scope.row.pay_status | platform(scope.row.pay_status)}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="mode_payment"
                           label="支付方式"
                           width="90px">
            <template slot-scope="scope">
              <span>{{scope.row.mode_payment | pay_method(scope.row.mode_payment)}}</span>
              <el-popover placement="top"
                          v-if="scope.row.mode_payment == 4"
                          trigger="click">
                <el-table :data="scope.row.bank"
                          border>
                  <el-table-column prop="bank_name"
                                   label="办卡行"
                                   width="180">
                  </el-table-column>
                  <el-table-column prop="account_number"
                                   label="银行账号"
                                   width="180">
                  </el-table-column>
                  <el-table-column prop="account_title"
                                   label="收款方"
                                   width="200">
                  </el-table-column>
                </el-table>
                <div style="padding:10px 10px;height:30px;border:1px solid #f5f5f5;">
                  <span>可查询订单号：</span>
                  <input :value="scope.row.exclusive_ordernum"
                         disabled
                         style="font-size:14px;line-height:30px;width:80%;height:100%;background-color:#f5f5f5" />
                </div>
                <el-button type="text"
                           slot="reference">账户详情</el-button>
              </el-popover>

            </template>
          </el-table-column>
          <!-- <el-table-column prop="status"
                         label="支付状态"
                         width="80px"
                         :filters="[{ text: '未支付', value: '0' }, { text: '已支付', value: '1' }]"
                         :filter-method="filterStatus"
                         filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status == '1' ? 'primary' : 'success'"
                    disable-transitions>{{scope.row.status | pay_status(scope.row.status)}}</el-tag>
          </template>
        </el-table-column> -->
          <!-- <el-table-column prop="logistics_status"
                         label="订单状况"
                         width="80px"
                         :filters="[{ text: '未发货', value: '0' }, { text: '已发货', value: '1' }, ]"
                         :filter-method="filterOrderStatus"
                         filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status == '1' ? 'primary' : 'success'"
                    disable-transitions>{{scope.row.logistics_status | order_status(scope.row.logistics_status)}}</el-tag>
          </template>
        </el-table-column> -->
          <el-table-column label="操作"
                           width="120px">
            <template slot-scope="scope">
              <el-button type="success"
                         @click="details(scope.row)">再来一单</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- </div> -->
      </div>
    </el-form>
    <div v-if="pageshow">
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="page"
                     :page-sizes="[2,5]"
                     :page-size="limit"
                     :total="total"
                     layout="total, sizes, prev, pager, next"
                     hide-on-single-page>
      </el-pagination>
    </div>
  </div>
</template>
<script>

import Code from "../../api/Code";
import order from "../../api/orderList";
import makeSign from "../../api/makeSign";
import url from "../../api/urls";

export default {
  computed: {
    host () {
      return url.BWS
    }
  },
  data () {
    return {
      pageshow: true,
      tableData: [],
      dateData: [
        { label: '全部购买记录', value: 3 },
        { label: '近一个月购买记录', value: 1 },
        { label: '近三个月购买记录', value: 2 },
      ],
      day_id: '',
      goods_name: '',
      limit: 5,
      page: 1,
      total: 0,
    }
  },
  methods: {
    getPayRecord () {
      let day_id = this.day_id;
      let timestamp = Date.parse(new Date()) / 1000;
      let user_id = sessionStorage.getItem('uid');
      let limit = this.$route.query.pageSize ? this.$route.query.pageSize : this.limit;
      let page = this.$route.query.page ? this.$route.query.page : this.page;
      let goods_name = this.goods_name;
      let sign = this.$md5(makeSign.makeSign({ day_id, timestamp, user_id, goods_name, limit, page }));
      order.payHistroy({ sign, day_id, timestamp, user_id, goods_name, limit, page }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.tableData = data.data.list_dadteil;
          this.total = data.data.list_total;
        } else {
          return false
        }
      })
    },
    // goPayCheck (data) {
    //   let order_id = data.id;
    //   let timestamp = Date.parse(new Date()) / 1000;
    //   let user_id = sessionStorage.getItem('uid');
    //   let sign = this.$md5(makeSign.makeSign({ order_id, user_id, timestamp }))
    //   order.goPayCheck({ sign, order_id, user_id, timestamp }).then(res => {
    //     let dataS = res.data;
    //     if (dataS.code === Code.CODE_SUCCESS) {
    //       this.details(data)
    //     } else {
    //       this.$message.warning(dataS.msg)
    //     }
    //   })
    // },
    details (data) {
      let id = ''
      data.order_list_detail.forEach(v => {
        let good = ''
        good = v.goods_id + '#' + v.quantity
        id += good + '_'
      });

      let goods_id_arr = '';
      data.order_list_detail.forEach(v => {
        goods_id_arr += v.goods_id + '_'
      });

      if (id.length > 0) {
        id = id.substr(0, id.length - 1);
      }
      if (goods_id_arr.length > 0) {
        goods_id_arr = goods_id_arr.substr(0, goods_id_arr.length - 1);
      }
      let goods_info = id;
      let user_id = sessionStorage.getItem('uid');
      let timestamp = Date.parse(new Date()) / 1000;
      let sign = this.$md5(makeSign.makeSign({ timestamp, user_id, goods_info }))
      order.againSorder({ sign, timestamp, user_id, goods_info }).then((res) => {
        let dataS = res.data;
        if (dataS.code === Code.CODE_SUCCESS) {
          let i = 0;
          for (let j = 0; j < dataS.data.cart_id.length; j++) {
            data.order_list_detail[i].cart_id = dataS.data.cart_id[j]
            i++;
          }
          let num = 0
          data.order_list_detail.forEach(v => {
            this.$store.dispatch('addGoods', v)
            num++
          })
          if (num == data.order_list_detail.length) {
            this.$router.push({ path: '/subOrder', query: { goods_id_arr: goods_id_arr, house: data.house_id } })
          }
        } else if(dataS.code == 2){
          this.$message.warning(dataS.msg)
        }else{
          return false
        }
      })
    },
    // 分页器配置  改变每页的条数
    handleSizeChange (val) {
      this.limit = val
      this.page = 1
      this.$router.replace({
        path: this.$route.path,
        query: {
          page: 1,
          pageSize: val,
        }
      });
      this.getPayRecord()
    },
    // 改变当前页码
    handleCurrentChange (val) {
      this.page = val
      this.$router.replace({
        path: this.$route.path,
        query: {
          page: val,
          pageSize: this.$route.query.pageSize ? this.$route.query.pageSize : this.limit,
        }
      });
      this.getPayRecord();
      this.pageshow = false;
      this.$nextTick(() => {
        this.pageshow = true;
      })
    },
  },
  mounted () {
    this.getPayRecord();
    this.day_id = 3;

  },
  created () {
    this.limit = this.$route.query.pageSize ? Number(this.$route.query.pageSize) : this.limit;
    this.page = this.$route.query.page ? Number(this.$route.query.page) : this.page;
  },
  watch: {
    goods_name () {
      this.getPayRecord()
    },
    day_id () {
      this.getPayRecord()
    }
  },
  filters: {
    pay_method (val) {
      if (val == 1) {
        return val = "预付款支付"
      } else if (val == 2) {
        return val = "支付宝支付"
      }
      else if (val == 3) {
        return val = "微信支付"
      } else if (val == 4) {
        return val = '线下支付'
      }
    },
    platform (val) {
      if (val == 1) {
        return val = "PC端"
      } else if (val == 2) {
        return val = "移动端"
      }
    },
    invoiceType (val) {
      if (val == 1) {
        return val = "普通发票"
      } else if (val == 2) {
        return val = "专用发票"
      }
    }
  }
}

</script>


 <style scope>
.list_header {
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px;
}

.left-title {
  font-size: 14px;
  font-weight: 600;
  float: left;
  color: #525252;
}

.list_search {
  width: 307px;
}

.list_search {
  float: right;
  width: 400px;
}

.list_search .so_form {
  width: 305px;
}

.list_search .so_form {
  border: 1px solid #ccc;
  width: 355px;
  float: left;
}

.list_search .so_txt {
  width: 230px;
  height: 28px;
}

.list_search .so_txt {
  width: 280px;
  height: 19px;
  padding: 4.5px 0 4.5px 6px;
  border: none;
  float: left;
}

.list_search .so_btn {
  border-left: 1px solid #ccc;
  width: 69px;
  height: 37px;
  display: inline-block;
}

.list_search .so_btn {
  width: 69px;
  height: 28px;
  border: none;
  display: block;
  background: #f5f5f5;
}

.category_search {
  overflow: hidden;
}

.category_search div,
.condition_search div {
  float: left;
}

.s_title {
  margin-right: 15px;
  line-height: 26px;
  font-size: 12px;
  color: #737373;
}

.category_search .s_content_h {
  height: 26px;
}

.category_search .s_content {
  width: 900px;
}

.category_search div,
.condition_search div {
  float: left;
}

.category_search div,
.condition_search div {
  float: left;
}

.s_item_selected {
  background: #2583d8;
  color: #fff !important;
}

.s_item {
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  color: #737373;
}
#list_nav .el-table .hidden-columns {
  visibility: block !important;
}
.thead {
  width: 100%;
  background-color: #f5f5f5;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.thead > tr > td {
  vertical-align: middle !important;
}
.cart-table {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.centerBox {
  margin: 20px 0;
}
.s_g2 {
  height: 80px;
  border: 1px solid #cdcdcd;
  box-sizing: border-box;
}
.cartgoods-imgbox {
  width: 68px;
  height: 68px;
  border: 1px solid #e9e9e9;
  overflow: hidden;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
}
.cartgoods-imgbox img {
  width: 100%;
  height: 100%;
}
.cartgoods-txtbox {
  width: 70%;
  display: inline-block;
  vertical-align: middle;
  margin-left: 4px;
}
.el-pagination {
  text-align: center;
  margin: 30px 0 0;
}
</style>
