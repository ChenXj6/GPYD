<template>
  <div class="gc_content">
    <h3 style="margin-bottom:20px;">可申请列表</h3>
    <div class="u-tab">
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
        <button class="btn btn-blue btn-xs" style="margin-left:20px;">
          查询
        </button>
        <div class="filter">
          <button class="btn btn-blue-o btn-xs" onclick="selectDate(0)">
            所有明细
          </button>
        </div>
        <button
          class="btn goMakeInvoice btn-green btn-xs"
          style="margin-left:20px;"
          @click="createInvoice();"
        >
          去申请开票
        </button>
        <button
          class="btn makeInvoice btn-red btn-xs"
          style="margin-left:20px;display:none"
          @click="makeInvoice();"
        >
          申请开票
        </button>
        <div style="font-weight: bold;display:none" class="totalShow">
          合计：<span id="totalAmount">0.00</span>
        </div>
      </div>

      <div class="o_common_box clearfix" style="display:none">
        <div id="invoiceTitleDiv" class="invoiceInfo">
          <span class="invoiceInfo-title">开票信息</span
          ><label
            >（开票前请您核对在工品的开票资料是否准确，若已变更，请及时修改）</label
          >
        </div>
        <ul
          id="invoicePartUl"
          class="o-selector clearfix"
          style="display: block;"
        >
          <router-link tag="a" to="/makeInvoice"
            class="addInvoicelink"
            >添加开票资料</router-link
          >
          <input type="hidden" id="invoice" value="0" />
        </ul>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="对账单号">
        </el-table-column>
        <el-table-column prop="name" label="对账日期">
        </el-table-column>
        <el-table-column prop="address" label="对账金额">
        </el-table-column>
        <el-table-column prop="address" label="对账状态">
        </el-table-column>
        <el-table-column prop="address" label="开票状态">
        </el-table-column>
        <el-table-column prop="address" label="发票号">
        </el-table-column>
        <el-table-column prop="address" label="开票日期">
        </el-table-column>
        <el-table-column prop="address" label="开票金额">
        </el-table-column>
        <el-table-column prop="address" label="快递公司">
        </el-table-column>
        <el-table-column prop="address" label="快递单号">
        </el-table-column>
        <el-table-column prop="address" label="详情">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import makeSign from '../../api/makeSign'
import Code from '../../api/Code'
import getIn from '../../api/orderList'
export default {
  data() {
    return {
      tableData:[],
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
    }
  },
  methods:{
    createInvoice(){
      $(".totalShow").toggle();
      $(".o_common_box").toggle('normal');
      $('.goMakeInvoice').toggle()
      $('.makeInvoice').toggle()
    },
    makeInvoice(){
      this.$alert('没有维护开票资料，无法申请开票，请先去维护开票资料。', 'gpyd.com提示', {
          confirmButtonText: '确定',
          type: 'warning',
          center: true
        })
    },
    getInvoice(){
      let user_id = sessionStorage.getItem('uid');
      let timestamp = Date.parse(new Date())/1000;
      let sign = this.$md5(makeSign.makeSign({user_id,timestamp}));
      getIn.getIn({user_id,timestamp,sign}).then(res=>{
        let data = res.data;
        if(data.code === Code.CODE_SUCCESS){
          // this.tableData = data.data;
          return
        }else{
          return
        }
      })
    }
  },
  mounted(){
    this.getInvoice()
  }
}
</script>
<style scoped>
.gc_content {
  min-height: 600px;
  overflow: hidden;
}
.gc_content {
  padding: 20px;
  background: #fff;
  min-height: 656px;
}
.u-tab {
  clear: both;
  position: relative;
}
.form label {
  margin: 0.5em 0 0.2em;
}
.btn-xs {
  font-size: 1.2rem;
}

.btn-blue,
.logo-link {
  color: #fff;
  background-color: #3a95e7;
  border-color: #3a95e7;
}
.u-toolbar .filter {
  /* margin-left: 100px; */
  display: inline-block;
}
a.btn-green:visited {
  color: #fff;
}
.btn-xs {
  font-size: 1.2rem;
}
.btn-green {
  color: #fff;
  background-color: #5eb95e;
  border-color: #5eb95e;
}
.u-toolbar .filter .btn {
  margin-right: 10px;
}
.btn-xs {
  font-size: 1.2rem;
}
.btn-blue-o,
a.btn-blue-o:visited {
  color: #3a95e7;
}
.btn-blue-o {
  background-color: transparent;
  border-color: #3a95e7;
}
.btn-blue-o,
.btn-gray-o,
.btn-green-o,
.btn-red-o,
.btn-yellow-o {
  background-image: none;
}
.u-toolbar .totalShow {
  display: inline-block;
  /* float: right; */
  margin-top: 5px;
}
.invoiceInfo {
  display: block;
  background-color: #deedfe;
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
  padding-left: 10px;
  margin-top: 20px;
  font-size: 12px;
}
.invoiceInfo-title {
  font-size: 14px;
  font-weight: 700;
}
#invoicePartUl {
  display: block;
  height: 35px;
  box-sizing: border-box;
  line-height: 35px;
  padding-left: 10px;
  border: 1px solid #e6e6e6;
}
.addInvoicelink {
  color: #3a95e7;
}
a {
  color: #555555;
  text-decoration: none;
}
</style>
