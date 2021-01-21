<template>
    <el-tabs v-model="activeName" type="border-card" >
    <el-tab-pane label="公司新闻" name="first" @click="getNewList(1)">
          <div data-v-663e90f9="">
            <div data-v-663e90f9="">
              <router-link to="/webhelp">
              <div data-v-663e90f9="" class="news-item">
                <h2 data-v-663e90f9="" class="news-title">
                  工品一号首届供应商答谢及招商大会圆满落幕！
                </h2>
                <p data-v-663e90f9="" class="news-txt">
                  2019年11月15日，工品一号在苏州隆重召开了首届供应商答谢及招商大会，工品一号创始人&amp;CEO陈华根先生携公司中高层领导与全国各地500余家供应商欢聚一堂，共谋“共享·共进·共赢”的合作愿景。
                </p>
                <p data-v-663e90f9="" class="news-time">2019-11-19 10:13:41</p>
              </div>
              </router-link>
            </div>
          </div>
    </el-tab-pane>
    <el-tab-pane label="行业资讯" name="second" @click="getNewList(2)">
      
    </el-tab-pane>
    <el-tab-pane label="专题" name="third" @click="getNewList(4)">
      
    </el-tab-pane>
  </el-tabs>
</template>

<script>
// import makeSign from '../../api/makeSign'
// import Code from '../../api/Code'
// import webHelp from '../../api/webHelp'
export default {
  data() {
    return {
      activeName: 'first',
      newsList:'',
    };
  },
  methods: {
    getNewList(typeId){
      console.log(typeId)
    }
  },
  mounted(){

  }
}
</script>

<style scope>
  
</style>