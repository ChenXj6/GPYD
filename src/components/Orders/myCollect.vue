<template>
  <div class="gc_content">
    <el-form id="pageForm">
      <div class="list_header">
        <div class="left-title">我的收藏</div>
        <div class="list_search">
          <div class="so_form">
            <el-input v-model="searchItem"
                      placeholder="请输入商品信息，关键字用空格隔开"
                      class="input-with-select">
              <el-button slot="append"
                         @click="search"
                         icon="el-icon-search">搜索</el-button>
            </el-input>
          </div>
        </div>
      </div>
      <!-- <div class="category_search">     -->
      <div class="list_nav">
        <el-table :data="collectList"
                  :header-cell-style="{'text-align':'center'}"
                  :cell-style="{'text-align':'center'}"
                  style="width: 100%">
          <el-table-column prop="name"
                           label="商品信息"
                           width="320px">
            <template slot-scope="scope">
              <div class="goods-info"><a class="goods-imgbox"
                   style="cursor: pointer;">
                  <img :src="host + scope.row.thumimage"> <i class=""></i></a>
                <div class="goods-txtbox">
                  <p class="goods-txt-name"
                     style="height: auto; max-height: 50px;">
                    <router-link tag="a" :to="{path:'/gooddetails',query:{gid:scope.row.id}}"
                                 :title="scope.row.goods_name"
                                 style="cursor: pointer;">
                      {{scope.row.goods_name}}
                      <el-tag type="danger" v-if="scope.row.status_line == 0">商品已下架</el-tag>
                    </router-link>
                  </p>
                </div>
              </div>
            </template>
          </el-table-column>
                    <!-- <el-table-column prop="barcode"
                    width="80px"
                           label="条码"> </el-table-column> -->
          <el-table-column prop="house_name" width="80px"
                           label="仓库"> </el-table-column>
          <el-table-column prop="brand_name" width="80px"
                            label="品牌"> </el-table-column>
          <el-table-column prop="package_info"
                           label="库存"
                           width="90px">
            <template slot-scope="scope">
              {{scope.row.package_info}}&nbsp;{{scope.row.inventory_unit}}
            </template>
          </el-table-column>

          <el-table-column prop="inventory" width="80px"
                           label="起订量">
            <template slot-scope="scope">
              {{scope.row.inventory}}&nbsp;{{scope.row.inventory_unit}}
            </template>
          </el-table-column>
          <el-table-column prop="price"
                           label="价格"
                           width="120px">
            <template slot-scope="scope">
              {{scope.row.price}}元/&nbsp;{{scope.row.inventory_unit}}
            </template>
          </el-table-column>

          <el-table-column label="操作" >
            <template slot-scope="scope">
              <el-button type="warning" @click="changeStatus(scope.row.id)">取消收藏</el-button>
              <el-button type="primary" @click="details(scope.row.id)">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-form>
  </div>
</template>
<script>
import Code from "../../api/Code";
import shopCar from "../../api/shopCar";
import makeSign from "../../api/makeSign";
import url from "../../api/urls";

export default {
  computed:{
    host(){
      return url.BWS
    }
  },
  data () {
    return {
      collectList: [],
      searchItem: ""
    };
  },
  methods: {
    search () {
      let data = this.searchItem;
      if (data != "") {
        console.log(1);
      }
    },
    getCollect () {
      this.collectList = []
      let user_id = sessionStorage.getItem('uid');
      let timestamp = Date.parse(new Date()) / 1000;
      let sign = this.$md5(makeSign.makeSign({ timestamp, user_id }))
      shopCar.getCollectionList({ timestamp, user_id, sign }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.collectList = data.data;
        } else {
          // this.$message.info('暂无收藏')
          return false
        }
      })
    },
    changeStatus(id){
      let goods_id = id;
      let user_id = sessionStorage.getItem('uid');
      let timestamp = Date.parse(new Date()) / 1000;
      let status = 2;
      let sign = this.$md5(makeSign.makeSign({ timestamp, user_id ,goods_id,status}))
      shopCar.collection({ timestamp, user_id, sign ,status,goods_id}).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.getCollect()
          this.$message.success('商品取消收藏成功')
        } else {
          this.$message.error(data.msg)
        }
      })
    },
    details (id) {
      this.$router.push('/gooddetails?gid=' + id)
    },
  },
  mounted () {
    this.getCollect()
  }
};
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
.goods-imgbox{
  width: 60px;
  height: 60px;
  display: block;
  float: left;
}
.goods-imgbox>img{
  width: 60px;
}
</style>
