<template>
  <div class="gp_banner"
       style="height: 100px;">
    <div class="gb_wrap wrap">
      <router-link tag="a" to="/" class="mb-logo"
         > <img src="../../assets/image/orderLogo.png"></router-link>
      <router-link to="/"
                   tag="a"
                   class="mb-logo-mt">我的易达</router-link>
      <router-link to="/"
                   tag="a"
                   class="mb-logo-btn">去工品易达首页</router-link>

      <div class="mb-nav">
        <!-- <a href="" class=" actived ">首页</a> -->
      </div>

      <div class="bw_right"
           style="float:right;width:800px">          
        <div class="searchBox">
          <div id="nav_box">
						<span class="search_nav"  v-for="(item,index) in workwith" :class="currpage == index ? 'search_nav_active' : ''" :key="index" @click="onClick(index,item.id)">{{item.class_name}}</span>
					</div>
          <div class="inputBox">
            <input type="text" v-model="searchTerm" class="searchTxt" placeholder="请输入商品名称关键字信息">
            <input type="button" @click="searchGoods" class="searchBtn" value="搜索">
          </div>
        </div>
        <myCart class="myCart">
        </myCart>
      </div>
    </div>
  </div>
</template>

<script>
import myCart from '../../common/myCart'
import makeSign from '../../api/makeSign'
import indexItem from '../../api/indexItem'
import Code from '../../api/Code'
export default {
  components: {
    myCart,
  },
  data(){
    return{
      workwith: [],
      currpage:0,
      searchTerm:'',
      class_id:0,
    }
  },
  methods:{
    searchGoods () {
      let class_id = this.class_id;
      let search = this.searchTerm;
      if(search == ''){
        search = ''
      }
      this.$router.push({path:'/goodlist',query:{search:search,classId:class_id}})
    },
    getWorkWith () {
      let timestamp = Date.parse(new Date()) / 1000;
      let sign = this.$md5(makeSign.makeSign({ timestamp }))
      indexItem.getWorkWith({timestamp,sign}).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.workwith = data.data
          this.class_id = this.workwith[0].id
        } else {
          return
        }
      })
    },
    onClick(index,id){
      this.currpage = index;
      this.class_id = id;
    }
  },
  mounted(){
    this.getWorkWith()
  }
}
</script>

<style scoped>
.mb-nav {
  position: absolute;
  top: 43px;
  left: 290px;
  font-size: 14px;
  height: 45px;
  background-color: antiquewhite !important;
}
.wrap {
  padding-top: 20px !important;
}
.mb-logo-mt {
  position: absolute;
  top: 28px;
  left: 152px;
  font: 700 23px/1em microsoft yahei;
  color: #fff;
}
.mb-logo-btn {
  position: absolute;
  bottom: 20px;
  left: 150px;
  color: #86b1ff;
  border: 1px solid #86b1ff;
  padding: 1px 4px;
  border-radius: 6px;
}
.sheader_so {
    width: 602px;
}
.myCart {
  float: right;
  margin-top: 24px;
}
.searchBox{
  width: 602px;
  height:35px;
  float: left;
}
.search_nav {
    font-size: 12px;
    color: #ffffff;
    display: inline-block;
    width: 58px;
    text-align: center;
    height: 24px;
    line-height: 24px;
    cursor: pointer;
}
.search_nav_active {
    background-color: #e8e8e8;
    color: #555;
    font-weight: 600;
}
.searchBtn{
  width: 72px;
  height: 35px;
  border: none;
  display: block;
  background: #e8e8e8;
  float:right;
}
.searchTxt{
    width: 530px;
    padding: 0 10px;
    height: 35px;
    float: left;
    box-sizing: border-box;
}
</style>