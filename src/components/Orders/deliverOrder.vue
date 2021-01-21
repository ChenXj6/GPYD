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
          <h4>送货单明细</h4>
        </div>
        <div class="list_search">
          <div id="searchForm" class="so_form">
            <input
              class="so_txt"
              id="str"
              name="str"
              type="text"
              placeholder="送货单号/订单号"
              value=""
            />
            <input class="so_btn" type="button" value="搜索" />
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
            <a class="" onclick="serch(-1,'','c')">所有订单</a>
            <a class="actived" @click="exportExcel()">导出EXCEL</a>
          </div>
        </div>
      </div>
    </form>
    <div class="navTitle">
      <el-table :data="orderData" style="width: 100%" stripe>
        <el-table-column prop="address" label="订单号" width="240">
        </el-table-column>
        <el-table-column prop="date" label="商品信息" width="240">
        </el-table-column>
        <el-table-column prop="name" label="规格"> </el-table-column>
        <el-table-column prop="address" label="条码"> </el-table-column>
        <el-table-column prop="address" label="品牌"> </el-table-column>
        <el-table-column prop="address" label="发货量"> </el-table-column>
        <el-table-column prop="address" label="券后小计"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
  data() {
    return {
      orderData: {},
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
      value1: '',
      value2: '',
    }
  },
  methods: {
    openCheck() {
      $('.list_form').toggle('fast')
    },
    exportExcel() {
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
  },
}
</script>
<style scoped></style>
