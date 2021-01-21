<template>
  <div class="gc_content">
    <div class="u-tab">
      <ul class="hd">
        <li class="">明细</li>
        <li>转入</li>
        <li >提现</li>
        <div class="right">
          我的预付款：<span>￥0.0</span>
        </div>
        <input type="hidden" id="balanceId" value="" />
      </ul>
      <ul class="bd">
        <div class="bd-item">
          <div class="u-toolbar form">
            <label>成交时间：</label>
            <el-date-picker
              v-model="value2"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
              value-format="timestamp"
            >
            </el-date-picker>

            <label style="margin: 0 15px;">类型：</label>
            <select id="source" name="source" style="width: 145px;">
              <option value="">请选择</option>
              <option v-for="item in tradeType" :key="item.id">{{
                item.name
              }}</option>
            </select>

            <button class="btn btn-blue btn-xs" style="margin-left:20px;">
              查询
            </button>
            <div class="filter" style="float:right;margin:5px 0 0 0">
              <button class="btn btn-xs btn-blue-o">
                所有明细
              </button>
            </div>
          </div>

          <el-table
            :data="detailData"
            stripe
            style="width: 100%;margin-top:20px"
          >
            <el-table-column prop="data" label="流水号"> </el-table-column>
            <el-table-column prop="name" label="交易类型"> </el-table-column>
            <el-table-column prop="address" label="支付方式"> </el-table-column>
            <el-table-column prop="address" label="单据类型"> </el-table-column>
            <el-table-column prop="address" label="单据号"> </el-table-column>
            <el-table-column prop="address" label="支付时间"> </el-table-column>
            <el-table-column prop="address" label="交易金额"> </el-table-column>
          </el-table>

          <div class="list_box" id="balanceListPage"></div>
        </div>
        <!-- 余额明细 end -->
        <div class="bd-item ">
          <div id="cashForm" style="display: none;">
            <a
              href="javascript:;"
              @click="changeModel('#cashForm', '#cashList')"
              style="position:static;float:right;bottom:-40px;right:10px;font-size:12px;color:#3a95e7;text-decoration:underline;font-weight:400"
              >转入记录</a
            >
            <br />
            <ul class="u-charge">
              <div class="item">
                <label>转入金额：</label>
                <ul class="mod-selector amountMoney clearfix">
                  <li
                    class=""
                    v-for="(item, index) in amount"
                    :key="index"
                    @click="changeAmount(item.price)"
                  >
                    <span>{{ item.price }}</span
                    >元<i></i>
                  </li>
                  <li class="" @click="changeAmount(0)">
                    <input
                      id="otherAmount"
                      type="number"
                      placeholder="其他"
                      value=""
                      @keyup="changeRecharge()"
                    /><i></i>
                  </li>
                </ul>
              </div>
              <div class="item">
                <label>转入方式：</label>
                <ul class="mod-selector intomode clearfix">
                  <li id="pay_1" class=""><span>支付宝</span><i></i></li>
                  <li id="pay_20"><span>微信</span><i></i></li>
                  <!-- <li id="pay_2"><span>个人网银</span><i></i></li>
                <li id="pay_3"><span>企业网银</span><i></i></li> -->
                  <li id="pay_offLine" class="">
                    <span>线下支付</span><i></i>
                  </li>
                </ul>
              </div>
              <div class="item">
                <label>应付金额：</label
                ><span
                  style="margin-left:100px;position:absolute;top:12px;font-size:22px;color:#e76108"
                  ><i id="rechargeAmount">{{ amountMoney }}</i> &nbsp;元</span
                >
              </div>
            </ul>
            <button
              class="btn btn-blue"
              style="margin:30px 0 0 150px;"
              @click="into"
            >
              立即转入
            </button>
          </div>

          <div id="cashList" style="display: block;">
            <a
              href="javascript:;"
              @click="changeModel('#cashList', '#cashForm')"
              style="position:static;float:right;bottom:-40px;right:10px;font-size:12px;color:#3a95e7;text-decoration:underline;font-weight:400"
              >立即转入</a
            >
            <div class="u-toolbar form">
              <label>转入时间：</label>
              <el-date-picker
                v-model="value2"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions"
                value-format="timestamp"
              >
              </el-date-picker>
              <label>类型：</label>
              <select
                id="rechargeStatus"
                name="rechargeStatus"
                style="width: 145px;"
              >
                <option value="">请选择</option>
                <option value="0">未支付</option>
                <option value="1">已支付</option>
              </select>
              <button
                class="btn btn-blue btn-xs"
                style="margin-left:20px;"
              >
                查询
              </button>
            </div>
            <!--  -->
            <el-table
              :data="tableData"
              style="width: 100%"
            >
              <el-table-column label="创建时间" prop="time"> </el-table-column>
              <el-table-column label="转入流水号" prop="SerialNumber">
              </el-table-column>
              <el-table-column label="支付方式" prop="type"> </el-table-column>
              <el-table-column label="金额" prop="price"> </el-table-column>
              <el-table-column label="状态" >
                <template slot-scope="scope">
                  <span>{{scope.row.state == 0 ? '未支付' : '已支付'}}  </span>
                </template>    
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope" >
                  <el-button
                    size="samll"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                    v-if="scope.row.state == 0"
                    >去支付</el-button
                  >
                  <el-button
                    size="mini"
                    type="success"
                    v-else
                    >支付完成</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <!--  -->
            <div class="list_box" id="rechargeListPage"></div>
          </div>
        </div>
        <!-- 转入 end -->
        <div class="bd-item">
          <div class="form form-aligned u-tixian">
            <fieldset>
              <div class="control-group">
                <label>我的预付款：</label>
                <span style="font-size:22px;">￥0.0</span>
              </div>

              <div class="control-group">
                <label>可提现：</label>
                <span style="font-size:22px;color:#e76108">￥0.0</span>
              </div>

              <div class="control-group">
                <label>提现金额：</label>
                <input class="l" type="text" id="cashAmount" />
              </div>
              <div class="control-group">
                <label>到账时间：</label>
                <span style="color:#333">3 - 5个工作日</span>
              </div>

              <div class="control-group">
                <label>计算值：</label>
                <input class="l" type="text" id="imgCode" />
                <img
                  src="/balance/cashImgCode"
                  id="imgObj"
                  alt="验证码"
                  style="vertical-align:middle"
                />
                <a
                  href="javascript:;"
                  style="margin:0 1em;color:#3a95e7"
                  >看不清，换一张</a
                >
              </div>
              <div class="control-group">
                <label>短信验证码：</label>
                <input class="l" type="text" id="msgCode" />
                <button
                  class="btn btn-gray btn-l"
                  style="background-color:orange"
                  id="smsCodeBtn"
                >
                  获取验证码
                </button>
              </div>
              <div class="control-group">
                <label>支付密码：</label>
                <input class="l" type="password" id="payPassword" />
                <a
                  id="setPayPasswordBtn"
                  href="javascript:;"
                  style="margin:0 1em;color:#3a95e7"
                >
                  设置密码
                </a>
              </div>

              <div class="controls">
                <button
                  type="submit"
                  class="btn btn-blue btn-l"
                >
                  申请提现
                </button>
              </div>
            </fieldset>
          </div>
        </div>
        <!-- 提现 end -->
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 明细
      detailData: [],
      tradeType: [
        { id: 1, name: '充值' },
        { id: 2, name: '提现' },
        { id: 3, name: '支付订单' },
        { id: 4, name: '订单结案未发转余额' },
        { id: 5, name: '退货单收讫转余额' },
        { id: 6, name: '退货手续费/运费' },
        { id: 7, name: '支付立账单' },
        { id: 8, name: '拼团失败预付金转余额' },
        { id: 9, name: '支付拼团预付金' },
        { id: 10, name: '支付拼团尾款' },
        { id: 11, name: '月结客户支付尾款时选择月结预付金转余额' },
        { id: 12, name: '尾货订单取消转余额' },
        { id: 13, name: '尾货退货退款订单取消转余额' },
        { id: 14, name: '支付尾货订单' },
      ],
      // 时间选择器
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            },
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            },
          },
        ],
      },
      value2: '',
      // 转入
      amount: [
        { id: 1, price: 1000 },
        { id: 2, price: 3000 },
        { id: 3, price: 5000 },
      ],
      amountMoney: 0,
      tableData: [
        {
          time: '2016-05-02',
          SerialNumber: '2541551554551',
          type: '支付宝',
          price: 1000,
          state: 1,
        },
        {
          time: '2016-05-02',
          SerialNumber: '2541551554552',
          type: '支付宝',
          price: 5000,
          state: 0,
        },
        {
          time: '2016-05-02',
          SerialNumber: '2541551554553',
          type: '微信',
          price: 3000,
          state: 0,
        },
        {
          time: '2016-05-02',
          SerialNumber: '2541551554554',
          type: '线下支付',
          price: 1000,
          state: 0,
        },
        {
          time: '2016-05-02',
          SerialNumber: '2541551554551',
          type: '微信',
          price: 1000,
          state: 1,
        },
      ],
      searchItem: {},
    }
  },
  methods: {
    // 转入页面 切换按钮
    changeModel(h, b) {
      $(h).css('display', 'none')
      $(b).css('display', 'block')
    },
    // 转入页面 切换金额
    changeAmount(price) {
      if (price == 0) {
        this.changeRecharge()
      } else {
        this.amountMoney = price
      }
    },
    // 转入页面 切换金额-其他
    changeRecharge() {
      this.amountMoney = $('#otherAmount')[0].value
    },
    // 转入页面 转入按钮
    into() {
      let intoMode = $('.intomode li.active')[0].id
      if (intoMode == 'pay_1') {
        console.log('支付宝')
      } else if (intoMode == 'pay_20') {
        console.log('微信')
      } else {
        this.open()
      }
    },
    open() {
      this.$alert(
        '线下（现金或承兑）转入请联系您所在区域的客服人员咨询。',
        '提示',
        {
          confirmButtonText: '确定',
          type: 'warning',
          center: true,
        }
      )
    },
  },
  mounted() {
    this.changeModel('#cashList', '#cashForm')
    this.changeAmount(1000)
    // 默认选中
    $('.hd li')
      .eq(0)
      .addClass('active')
    $('.bd-item')
      .eq(0)
      .addClass('active')
    $('.amountMoney li')
      .eq(0)
      .addClass('active')
    $('.intomode li')
      .eq(0)
      .addClass('active')
    // （明细 转入 提现）切换
    $('.hd li').on('click', function() {
      let index = $(this).index()
      $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
      $('.bd-item')
        .eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active')
    })
    // 转入金额切换
    $('.amountMoney li').on('click', function() {
      $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
    })
    //转入方式切换
    $('.intomode li').on('click', function() {
      $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
    })
  },
}
</script>
<style scoped>
.u-tab .bd .bd-item {
  display: none;
  position: relative;
}
.u-tab .bd .bd-item.active {
  display: block;
}
.u-tab .hd {
  position: relative;
  display: block;
  width: 100%;
  height: 38px;
  line-height: 40px;
  font-weight: bold;
  font-size: 14px;
  border-bottom: 1px solid #e6e6e6;
}
.u-tab .hd li {
  display: block;
  margin-top: -3px;
  cursor: pointer;
  float: left;
  padding: 0 3em;
  border-top: 2px solid #fff;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
}
.u-tab .hd li.active {
  color: #e76108;
  background: #fff;
  border-top: 2px solid #e76108;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
}
.u-tab .hd .right {
  margin-top: -6px;
  color: #888;
}
.u-tab .hd .right span {
  color: #e76108;
  font-size: 28px;
}
.u-tab .hd .right .icon-coin {
  margin: 0 15px 15px 10px;
}
.icon-coin {
  width: 39px;
  height: 31px;
}
.u-tab .bd {
  clear: both;
  padding: 30px;
}
.u-toolbar {
  clear: both;
}
.u-charge {
  padding: 40px 50px;
}
.u-charge .item {
  clear: both;
  position: relative;
  margin-bottom: 10px;
}
.u-charge label {
  font-size: 16px;
  color: #888;
  position: absolute;
  top: 10px;
}
.u-charge .mod-selector {
  margin-left: 100px;
  display: inline-block;
}
.mod-selector {
  clear: both;
  line-height: 38px;
}
.mod-selector li {
  display: inline-block;
  font-size: 20px;
  /* float: left; */
  margin: 0 20px 20px 0;
  text-align: center;
  width: 116px;
  height: 38px;
  line-height: 38px;
  border: 2px solid #e8e8e8;
  cursor: pointer;
  position: relative;
}
.mod-selector li.active {
  border: 2px solid #2259be;
}
.mod-selector li input {
  width: 116px;
  height: 36px;
  border: none;
  font-size: 20px;
  text-align: center;
}
input[type='number'] {
  -moz-appearance: textfield;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
