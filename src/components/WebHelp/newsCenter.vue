<template>
  <div data-v-212111fa=""
       id="aboutUsDataMain"
       class="r_content detail-main">
    <div data-v-212111fa="" class="newsList" >
      <div data-v-212111fa=""
           v-for="(item,index) in newsData"
           :key="index"
           class="listItem">
        <router-link tag="span" :to="{path:'/newDetail',query:{id:item.id}}" data-v-212111fa="">{{item.title}}</router-link>
        <span data-v-212111fa="">{{item.date_issued}}</span>
      </div>
      <div data-v-212111fa=""
           class="listItem"
           style="margin-top: 10px;">
        <el-pagination @current-change="handleCurrentChange"
                       :current-page.sync="page"
                       :page-size="limit"
                       layout="prev, pager, next, jumper"
                       :total="total">
        </el-pagination>
      </div>
    </div>
    <!---->

  </div>
</template>
<script>
import makeSign from '../../api/makeSign'
import Code from '../../api/Code'
import webHelp from '../../api/webHelp'
export default {
  data () {
    return {
      newsData: '',
      id: '',
      page: 1,
      limit: 10,
      total: 0
    }
  },
  methods: {
    getData () {
      let type = this.$route.query.id;
      let timestamp = Date.parse(new Date()) / 1000;
      let page = this.page;
      let limit = this.limit;
      let sign = this.$md5(makeSign.makeSign({ timestamp, type, page, limit }));
      webHelp.getNewsList({ timestamp, page, limit, sign, type }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.newsData = data.data;
          this.total = this.newsData.length
        } else {
          console.log('error')
        }
      })
    },
    handleCurrentChange (val) {
      this.page = val;
      this.getData()
    },
  },
  mounted () {
    this.getData();
  },
  watch: {
    '$route' () {
      this.id = this.$route.query.id;
    },
    id() {
      this.getData()
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