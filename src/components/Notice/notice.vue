<template>
  <section data-v-b1f20ae6=""
           data-v-29774714=""
           class="app-main">
    <div data-v-663e90f9=""
         data-v-b1f20ae6=""
         class="article_box">
      <div data-v-663e90f9=""
           class="l_news">
        <!-- 轮播图 -->
        <div data-v-663e90f9=""
             class="my-swipe">
          <banner :pageType=1></banner>
        </div>
        <!-- tab栏 -->
        <div data-v-663e90f9=""
             class="news_tabs">
          <div data-v-663e90f9="" 
               class="" @click="typeId = 1">公司新闻</div>
          <div data-v-663e90f9=""
               class="" @click="typeId = 2">行业资讯</div>
          <div data-v-663e90f9=""
               class="" @click="typeId = 4">专题</div>
        </div>
        <div data-v-663e90f9=""
             class="news_content">
          <div data-v-663e90f9="">
            <div data-v-663e90f9="">
              <router-link tag="div"  data-v-663e90f9=""
                   class="news-item" v-for="(item,index) in newsCenter" :key="index" :to="{path:'/newDetail',query:{id:item.id}}">
                <h2 data-v-663e90f9=""
                    class="news-title">{{item.title}}</h2>
                <p data-v-663e90f9=""
                   class="news-txt">2019年11月15日，工品一号在苏州隆重召开了首届供应商答谢及招商大会，工品一号创始人&amp;CEO陈华根先生携公司中高层领导与全国各地500余家供应商欢聚一堂，共谋“共享·共进·共赢”的合作愿景。</p>
                <p data-v-663e90f9=""
                   class="news-time">{{item.date_issued}}</p>
              </router-link>
            </div>
          </div>
          <router-link tag="div" :to="{path:'/newsCenter',query:{id:typeId}}" data-v-663e90f9="" class="news-more">查看更多</router-link>
        </div>
        
      </div>
      <!-- 快讯 -->
      <div data-v-663e90f9=""
           class="r_news">
        <div data-v-663e90f9=""
             class="r_title">快讯</div>
        <div data-v-663e90f9="" class="r_content">
          <div data-v-663e90f9=""
               class="item_box">
            <router-link tag="div"
                         data-v-663e90f9=""
                         class="news_item"
                         v-for="(item,index) in newsFlash"
                         :key="index"
                         :to="{path:'/newDetail',query:{id:item.id}}">
              <h2 data-v-663e90f9=""
                  class="news-title ellipsis"
                  style="margin-left:15px">
                <!---->
                [通知]{{item.title}}
              </h2>
              <p data-v-663e90f9=""
                 class="news-txt ellipsis">
                64焊材节一“促”即发，三重惊喜嗨翻全场。
              </p>
              <p data-v-663e90f9=""
                 class="news-time">
                <span data-v-663e90f9="">{{item.date_issued}}</span>
                <span data-v-663e90f9="">浏览：{{item.page_view}}次</span>
              </p>
            </router-link>
          </div>
          <router-link tag="div"
                       to="/newsCenter?id=3"
                       data-v-663e90f9=""
                       class="news-more">查看更多</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import tabs from '../../common/tabs'
import banner from '../../common/banner'
import makeSign from '../../api/makeSign'
import Code from '../../api/Code'
import webHelp from '../../api/webHelp'
export default {
  components: { banner },
  data () {
    return {
      payMethods: '',
      newsFlash: [],
      newsCenter:'',
      typeId:1
    }
  },
  methods: {
    getNewsFlash () {
      let type = 3;
      let timestamp = Date.parse(new Date()) / 1000;
      let page = 1;
      let limit = 5;
      let sign = this.$md5(makeSign.makeSign({ timestamp, type, page, limit }));
      webHelp.getNewsList({ timestamp, page, limit, sign, type }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.newsFlash = data.data;
        } else {
          console.log('error')
        }
      })
    },
    getNewsCenter(){
      let type = this.typeId || 1;
      let timestamp = Date.parse(new Date())/1000;
      let page = 1;
      let limit = 5;
      let sign = this.$md5(makeSign.makeSign({ timestamp, type, page, limit }));
      webHelp.getNewsList({ timestamp, page, limit, sign, type }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.newsCenter = data.data;
        } else {
          console.log('error')
        }
      })
    }
  },
  mounted () {
    this.getNewsFlash();
    this.getNewsCenter()
    $('.news_tabs div').eq(0).addClass('active')
    $('.news_tabs').on('click','div',function(){
      $(this).addClass('active').siblings().removeClass('active');
    })
  },
  watch:{
    typeId:function(){
      this.getNewsCenter()
    }
  }
}
</script>

<style scope>
</style>
