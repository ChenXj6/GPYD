<template>
  <div class="gc_content">
    <form
      id="pageForm"
      action="/order/orderList?modelType=order&amp;urlType=orderList"
      method="post"
    >
      <input type="hidden" name="pageNum" id="pageNum" value="1" />
      <div class="list_header">
        <div class="list_ul">
          <ul>
            <li>
              <a href="javascript:void(0)" class="">全部退货单</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="">审核通过/退货中</a>
            </li>
            <input
              type="hidden"
              id="deliveryStatus"
              name="deliveryStatus"
              value=""
            />
          </ul>
        </div>
        <div class="list_search">
          <div id="searchForm" class="so_form">
            <input
              class="so_txt"
              id="str"
              name="str"
              type="text"
              placeholder="输入订单号/品名/材质/条码/自定义物料号/订单备注"
              value=""
            />
            <input class="so_btn" type="button" value="搜索订单" />
          </div>
          <div class="search_rig" @click="openCheck">
            <span>高级</span> <i class="fa iconfont icon-xialajiantou"></i>
          </div>
        </div>
      </div>
      <div class="list_form">
        <input type="hidden" id="times" name="times" value="1" />
        <div class="close_time">
          <div class="time_left">
            <label for="">成交时间：</label>
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
          </div>
          <input
            style="display:inline-block;margin:2px 0 0 30px"
            type="button"
            class="list_submit btn btn-blue"
            value="查询"
          />
          <div class="time_right">
            <a class="" onclick="serch(-1,'','c')">所有退货单</a>
          </div>
        </div>
      </div>
    </form>
    <div class="navTitle">
      <el-table :data="orderData" style="width: 100%" stripe>
        <el-table-column prop="data" label="订单号" width="180">
        </el-table-column>
        <el-table-column prop="data" label="商品信息" width="180">
        </el-table-column>
        <el-table-column prop="name" label="规格"> </el-table-column>
        <el-table-column prop="address" label="条码"> </el-table-column>
        <el-table-column prop="address" label="品牌"> </el-table-column>
        <el-table-column prop="address" label="退货数量"> </el-table-column>
        <el-table-column prop="address" label="退货单价"> </el-table-column>
        <el-table-column prop="address" label="状态"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orderData:[],
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
    }
  },
  mounted() {
  //获取不同状态的订单
  $('.list_ul li')
    .find('a')
    .eq(0)
    .addClass('actived')
  $('.list_ul li')
    .find('a')
    .click(function() {
      $(this)
        .addClass('actived')
        .parent()
        .siblings()
        .find('a')
        .removeClass('actived')
    })
  },
  methods:{
    openCheck() {
      $('.list_form').toggle('fast')
    },
  }
}
</script>
<style scoped>

</style>