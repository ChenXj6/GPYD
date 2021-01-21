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
                 class="">佣金详情</a>
            </li>
          </ul>
        </div>
      </div>
    </form>
    <div class="navTitle"
         style="min-height:400px">
        <el-table :data="commissionDetail"
                border
                style="width: 100%">
        <el-table-column prop="create_time"
          label="下单时间"
          width="150px">
          <template slot-scope="scope">
            {{scope.row.create_time|ordertime(scope.row.create_time)}}
          </template>
        </el-table-column>
        <el-table-column prop="user_name"
                          label="下单人姓名">
        </el-table-column>
        <el-table-column prop="mobile"
                          label="下单手机">
        </el-table-column>
        <el-table-column prop="order_money"
                          label="订单金额(元)">
        </el-table-column>
        <el-table-column prop="commission"
                          label="佣金金额(元)">
        </el-table-column>
      </el-table>
    </div>
    <div v-if="pageshow">
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page.sync="page"
                     :page-sizes="[2,5,10]"
                     :page-size="limit"
                     layout="total, sizes, prev, pager, next"
                     :total="list_total"
                     hide-on-single-page>
      </el-pagination>
    </div>
  </div>
</template>
<script>
import user from '../../api/loginAndReg'
import Code from '../../api/Code'
import makeSign from '../../api/makeSign'

export default {
  data(){
    return{
      commissionDetail:[],
      limit:5,
      page:1,
      list_total:20,
      pageshow:false,
    }
  },
  methods:{
    // 获取佣金
    getCommissionD () {
      let user_id = sessionStorage.getItem('uid');
      let timestamp = Date.parse(new Date()) / 1000;
      let sign = this.$md5(makeSign.makeSign({ user_id, timestamp }))
      user.getCommissionDetail({ user_id, timestamp, sign }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          if(data.data == ''){
            this.commissionDetail = []
          }else{
            this.commissionDetail = data.data
          }
        } else {
          return
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
      this.getCommissionD()
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
      this.getCommissionD()
      this.pageshow = false;
      this.$nextTick(() => {
        this.pageshow = true
      })
    },
  },
  mounted(){
    this.getCommissionD()
  },
  filters:{
    ordertime(value){
      let date = new Date(Number(value)*1000); //转成Number格式，且php获取的时间戳要*1000  
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? ('0' + MM) : MM;
      let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      let h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      let m = date.getMinutes();
      m = m < 10 ? ('0' + m) : m;
      let s = date.getSeconds();
      s = s < 10 ? ('0' + s) : s;
      return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
    }
  }
}
</script>
<style scoped>
.el-pagination {
  text-align: center;
  margin: 30px 0;
}
</style>