<template>
  <div data-v-18047ef4=""
       class="header-search-bar">
      <div data-v-33971074=""
           class="headerSearchTabs-wrapper">
           <span data-v-33971074="" class="headerSearchTabs"  v-for="(item,index) in workwith" :class="currpage == index ? 'active' : ''" :key="index" @click="changeClass(index,item.id)">{{item.class_name || ''}}</span>
      </div>
      <input data-v-33971074=""
             type="text"
             autocomplete="on"
             min="2"
             placeholder="请输入商品名称关键字信息"
             v-model="searchTerm">
      <input data-v-33971074=""
             type="button"
             @click="searchGoods"
             value="搜索">
  </div>

</template>


<script>
import makeSign from '../api/makeSign'
import indexItem from '../api/indexItem'
import Code from '../api/Code'
export default {
  data () {
    return {
      workwith: [],
      searchTerm: '',
      class_id: 0,
      currpage:0
    }
  },
  methods: {
    searchGoods () {
      let class_id = this.class_id;
      let search = this.searchTerm;
      if(search == ''){
        this.$message.warning('请输入搜索内容')
        return
      }
      this.$router.push({path:'/goodlist',query:{search:search,classId:class_id}})
    },
    getWorkWith () {
      var timestamp = Date.parse(new Date()) / 1000;
      let s = this.$md5(makeSign.makeSign({ timestamp }))
      let formData = {
        timestamp: timestamp,
        sign: s
      }
      indexItem.getWorkWith(formData).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.workwith = data.data
          this.class_id = this.workwith[0].id
        } else {
          console.log('分类获取失败--' + data.msg)
        }
      })
    },
    changeClass (index,id) {
      this.currpage = index;
      this.class_id = id;
    }
  },
  mounted () {
    this.getWorkWith();
  }
}


</script>


<style scope>
.el-tabs__nav-wrap {
  max-width: 600px;
}
.header-search-bar input[type=text][data-v-33971074] {
    line-height: 31px;
    border-right: none;
    padding: 0 10px;
    width: 510px;
}

.header-search-bar input[data-v-33971074] {
    height: 35px;
    border: 2px solid #124c8e;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    vertical-align: middle;
}
.header-search-bar input[type=button][data-v-33971074] {
    width: 90px;
    background-color: #124c8e;
    color: #fff;
    font-size: 14px;
}

.header-search-bar input[data-v-33971074] {
    height: 35px;
    border: 2px solid #124c8e;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    vertical-align: middle;
}
.header-search-bar .headerSearchTabs-wrapper[data-v-33971074] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 24px;
}
.header-search-bar .headerSearchTabs-wrapper .headerSearchTabs[data-v-33971074] {
    font-size: 12px;
    color: #525252;
    height: 24px;
    line-height: 24px;
    width: 58px;
    display: inline-block;
    margin-right: 3px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
}
.header-search-bar .headerSearchTabs-wrapper .active[data-v-33971074] {
    color: #fff;
    background: #124c8e;
    font-weight: 700;
}
</style>