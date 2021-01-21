<template>
  <div class="gc_content">
    <form id="pageForm"
          action="/order/orderList?modelType=order&amp;urlType=orderList"
          method="post">
      <input type="hidden"
             name="pageNum"
             id="pageNum"
             value="1" />
      <div class="list_header">
        <div class="list_ul">
          <ul>
            <li>
              <a href="javascript:;"
                 @click="getOrderList('')"
                 class="">全部订单</a>
            </li>
            <li>
              <a href="javascript:;"
                 @click="getOrderList(0)"
                 class="">未发货</a>
            </li>
            <li>
              <a href="javascript:;"
                 @click="getOrderList(1)"
                 class="">已发货</a>
            </li>
            <li>
              <a href="javascript:;"
                 @click="getOrderList(2)"
                 class="">确认发货</a>
            </li>
          </ul>
        </div>
        <div class="list_search">
          <div class="search_rig"
               @click="openCheck">
            <span>高级</span> <i class="fa iconfont icon-xialajiantou"></i>
          </div>
        </div>
      </div>
      <div class="list_form">
        <input type="hidden"
               id="times"
               name="times"
               value="1" />
        <div class="close_time">
          <label for="">成交时间：</label>
          <el-date-picker v-model="value2"
                          align="right"
                          style="width:200px"
                          type="date"
                          placeholder="选择日期"
                          :picker-options="pickerOptions"
                          value-format="timestamp">
          </el-date-picker>
          <!-- <div class="time_right">
            <a class=""
               onclick="serch(-1,'','c')">所有订单</a>
            <a class="actived"
               @click="exportExcel()">导出EXCEL</a>
          </div> -->
        </div>
      </div>
    </form>
    <div class="navTitle"
         style="min-height:400px">
      <el-table :data="orderData"
                style="width: 100%"
                :cell-style="{'text-align':'center'}"
                stripe>
        <el-table-column prop="ordernum"
                         label="商品列表"
                         width="411px">
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
                  </router-link>
                </template>
              </el-table-column>
              <el-table-column prop="quantity"
                               label="数量(吨)"
                               width="70">
              </el-table-column>
              <el-table-column label="单价(元)" width="80">
                <template slot-scope="scope">
                  {{scope.row.mode_payment == 1 ? Number(scope.row.price)*(1 + Number(scope.row.floatradio))*100/100 : Number(scope.row.price)}}
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column prop="total_money"
                         label="总价(元)"
                         width="80px">
          <template slot-scope="scope">
            <span>{{scope.row.total_money}}</span>
            <el-popover placement="right"
                        trigger="click">
              <el-table :data="scope.row.total_price_details"
                        border
                        style="width: 100%">
                <el-table-column prop="total_price"
                                 label="商品总价(元)"
                                 width="100px">
                </el-table-column>
                <el-table-column v-if="scope.row.mode_payment == 1"
                                  prop="floatradio"
                                 label="上浮百分比%"
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
        <el-table-column label="发票类型">
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
        </el-table-column>
        <el-table-column prop="pay_status"
                         label="下单来源"
                         width="80px">
          <template slot-scope="scope">
            <span>{{scope.row.pay_status | platform(scope.row.pay_status)}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="mode_payment"
                         label="支付方式"
                         width="80px">
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
        <el-table-column prop="status"
                         label="支付状态"
                         width="80px"
                         :filters="[{ text: '未支付', value: '0' }, { text: '已支付', value: '1' }]"
                         :filter-method="filterStatus"
                         filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status == '1' ? 'primary' : 'success'"
                    disable-transitions>{{scope.row.status | pay_status(scope.row.status)}}</el-tag>
            <!--  -->
          </template>
        </el-table-column>
        <el-table-column prop="logistics_status"
                         label="订单状况"
                         width="80px"
                         :filters="[{ text: '未发货', value: '0' }, { text: '已发货', value: '1' }, { text: '确认发货', value: '2' }  ]"
                         :filter-method="filterOrderStatus"
                         filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status == '1' ? 'primary' : 'success'"
                    disable-transitions>{{scope.row.logistics_status | order_status(scope.row.logistics_status)}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作"
                         width="102px">
          <template slot-scope="scope">
            <el-button v-if="scope.row.status == 0"
                       :type="scope.row.mode_payment == 4 ? 'warning' : 'primary'"
                       @click="payOrder(scope.row.mode_payment,scope.row.ordernum,scope.row.id,scope.row.total_money,scope.row)">{{scope.row.mode_payment == 4 ? '确认付款' : '去支付'}}</el-button>
            <el-button v-else-if="scope.row.status == 3"
                       type="info">审核中</el-button>
            <el-button v-else
                       type="success">支付成功</el-button>
          </template>
        </el-table-column>
      </el-table>

    </div>
    <div v-if="pageshow">
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page.sync="page"
                     :page-sizes="[2,5]"
                     :page-size="limit"
                     layout="total, sizes, prev, pager, next"
                     :total="list_total"
                     hide-on-single-page>
      </el-pagination>
    </div>
  </div>
</template>
<script>
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
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
      orderData: [],
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一个月',
            onClick (picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', date)
            },
          },
          {
            text: '最近三个月',
            onClick (picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', date)
            },
          },
        ],
      },
      value2: '',
      limit: 5,
      page: 1,
      list_total: 0,
    }
  },
  created () {
    this.limit = this.$route.query.pageSize ? Number(this.$route.query.pageSize) : this.limit;
    this.page = this.$route.query.page ? Number(this.$route.query.page) : this.page;
  },
  mounted () {
    //获取不同状态的订单
    $('.list_ul li')
      .find('a')
      .eq(0)
      .addClass('actived')
    $('.list_ul li')
      .find('a')
      .click(function () {
        $(this)
          .addClass('actived')
          .parent()
          .siblings()
          .find('a')
          .removeClass('actived')
      })

    this.getOrderList()
  },
  methods: {
    // 高级点击事件
    openCheck () {
      $('.list_form').toggle('slow')
    },
    // 获取订单事件
    getOrderList (logisticsStatus) {
      this.orderData = [];
      this.list_total = 0;
      let timestamp = Date.parse(new Date()) / 1000;
      let user_id = sessionStorage.getItem('uid');
      let day_times = this.value2.toString().slice(0, 10);
      let logistics_status = logisticsStatus;
      let limit = this.$route.query.pageSize ? this.$route.query.pageSize : this.limit;
      let page = this.$route.query.page ? this.$route.query.page : this.page;
      let sign = this.$md5(makeSign.makeSign({ timestamp, user_id, day_times, logistics_status, limit, page }));
      order.myOrder({ sign, timestamp, user_id, day_times, logistics_status, limit, page }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.orderData = data.data.order_list;
          this.list_total = data.data.list_total;
        } else {
          return false
        }
      })
    },
    goPayCheck (data) {
      return new Promise(resolve=>{
        let order_id = data.id;
        let timestamp = Date.parse(new Date()) / 1000;
        let user_id = sessionStorage.getItem('uid');
        let sign = this.$md5(makeSign.makeSign({ order_id, user_id, timestamp }))
        order.goPayCheck({ sign, order_id, user_id, timestamp }).then(res => {
          let dataS = res.data;
          resolve(dataS)
        })
      })
    },
    // 点击去支付&确认收款
    payOrder (type, orderN, orderId, price,Data) {
      if (type == 4) {
        let user_id = sessionStorage.getItem('uid');
        let timestamp = Date.parse(new Date()) / 1000;
        let order_num = orderN;
        let sign = this.$md5(makeSign.makeSign({ user_id, timestamp, order_num }));
        order.offlinePay({ user_id, timestamp, order_num, sign }).then(res => {
          let data = res.data;
          if (data.code === Code.CODE_SUCCESS) {
            this.$message.success('线下支付待审核中')
            this.getOrderList()
          } else {
            return false
          }
        })
      } else if (type == 3) {
        this.goPayCheck(Data).then(res=>{
          if (res.code === Code.CODE_SUCCESS) {
            sessionStorage.setItem('mode_payment', type)
            sessionStorage.setItem('order_id', orderId)
            this.$router.push('/payOrder')
          } else {
            this.$message.warning(res.msg)
          }
        })
      } else {
        this.goPayCheck(Data).then(res=>{
          if (res.code === Code.CODE_SUCCESS) {
              sessionStorage.setItem('mode_payment', type)
              sessionStorage.setItem('orderN', orderN)
              sessionStorage.setItem('price', price)
              this.$router.push('/payOrder')
          } else {
            this.$message.warning(res.msg)
          }
        })
      }
    },
    // 打印
    exportExcel () {
      /* generate workbook object from table */
      let wb = XLSX.utils.table_to_book(document.querySelector('.navTitle'))
      /* get binary string as output */
      let wbout = XLSX.write(wb, {
        bookType: 'xlsx',
        bookSST: true,
        type: 'array',
      })
      try {
        FileSaver.saveAs(
          new Blob([wbout], { type: 'application/octet-stream' }),
          '订单明细.xlsx'
        )
      } catch (e) {
        if (typeof console !== 'undefined') console.log(e, wbout)
      }
      return wbout
    },
    // 标签筛选
    filterStatus (value, row) {
      return row.status == value;
    },
    filterOrderStatus (value, row) {
      return row.logistics_status == value;
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
      this.getOrderList()

    },
    // 改变当前页码
    handleCurrentChange (val) {
      this.page = val;
      this.$router.replace({
        path: this.$route.path,
        query: {
          page: val,
          pageSize: this.$route.query.pageSize ? this.$route.query.pageSize : this.limit,
        }
      });
      this.getOrderList()
      this.pageshow = false;
      this.$nextTick(() => {
        this.pageshow = true
      })
    },
  },
  filters: {
    order_status (val) {
      if (val == 0) {
        return val = "未发货"
      } else if (val == 1) {
        return val = "已发货"
      } else {
        return val = "确认收货"
      }
    },
    pay_status (val) {
      if (val == 0) {
        return val = "未支付"
      } else if (val == 1) {
        return val = "已支付"
      } else if (val == 3) {
        return val = "待审核"
      }
    },
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
    invoiceType(val){
      if (val == 1) {
        return val = "普通发票"
      } else if (val == 2) {
        return val = "专用发票"
      }
    }
  },
  watch: {
    value2 () {
      this.getOrderList()
    },
  }
}
</script>
<style scoped>
.el-pagination {
  text-align: center;
  margin: 30px 0;
}
</style>
