<template>
  <div data-v-212111fa=""
       data-v-b1f20ae6=""
       class="article_detail">
    <div data-v-212111fa=""
         class="page article_content">
      <dl data-v-212111fa=""
          class="l_nav">

        <router-link tag="div"
                     :to="{path:'/helpCenter',query:{id:15}}"
                     data-v-212111fa=""
                     class="nav_center">
          <div data-v-212111fa=""
               class="nav_item">
            <div data-v-212111fa=""
                 class="item_c">帮助中心</div>
          </div>
          <div data-v-212111fa=""
               class='dd_box'
               style="display:none">
            <router-link tag="dd"
                         :to="{path:'/helpCenter',query:{id:item.id}}"
                         v-for="(item,index) in helpCenterList"
                         :key="index"
                         data-v-212111fa=""
                         class="nav_item_sun">{{item.side_title}}</router-link>
          </div>
        </router-link>

        <router-link tag="div"
                     to="/payMethod"
                     data-v-212111fa=""
                     class="nav_center">
          <dt data-v-212111fa=""
              class="nav_item ">
            <div data-v-212111fa=""
                 class="item_c ">支付方式</div>
          </dt>
        </router-link>

        <router-link tag="div"
                     to="/deliverMethod"
                     data-v-212111fa=""
                     class="nav_center">
          <dt data-v-212111fa=""
              class="nav_item">
            <div data-v-212111fa=""
                 class="item_c">配送方式</div>
          </dt>
        </router-link>

        <router-link tag="div"
                     to="/aboutUs"
                     data-v-212111fa=""
                     class="nav_center">
          <dt data-v-212111fa=""
              class="nav_item">
            <div data-v-212111fa=""
                 class="item_c">关于我们</div>
          </dt>
        </router-link>

        <router-link tag="div"
                     :to="{path:'/newsCenter',query:{id:1}}"
                     data-v-212111fa=""
                     class="nav_center">
          <dt data-v-212111fa=""
              class="nav_item ">
            <div data-v-212111fa=""
                 class="item_c">新闻中心</div>
          </dt>
          <div data-v-212111fa=""
               class='dd_box'
               style="display:none">
            <router-link tag="dd"
                         :to="{path:'/newsCenter',query:{id:1}}"
                         data-v-212111fa=""
                         class="nav_item_sun">公司新闻</router-link>
            <router-link tag="dd"
                         :to="{path:'/newsCenter',query:{id:2}}"
                         data-v-212111fa=""
                         class="nav_item_sun">行业资讯</router-link>
            <router-link tag="dd"
                         :to="{path:'/newsCenter',query:{id:3}}"
                         data-v-212111fa=""
                         class="nav_item_sun">通知</router-link>
            <router-link tag="dd"
                         :to="{path:'/newsCenter',query:{id:4}}"
                         data-v-212111fa=""
                         class="nav_item_sun">专题</router-link>
          </div>
        </router-link>
      </dl>

      <!-- 显示内容 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import makeSign from '../../api/makeSign'
import Code from '../../api/Code'
import webHelp from '../../api/webHelp'
export default {
  data () {
    return {
      helpCenterList: [],
    }
  },
  methods: {
    getHelpCenterList () {
      let timestamp = Date.parse(new Date()) / 1000;
      let sign = this.$md5(makeSign.makeSign({ timestamp }));
      webHelp.getHelpCenterList({ sign, timestamp }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.helpCenterList = data.data;
        } else {
          console.log('error')
        }
      })
    },
  },
  mounted () {
    this.getHelpCenterList();
    $('.nav_center').eq(0).find('.item_c').addClass('isActive')
    $('.nav_center').eq(0).find('.dd_box').css('display', 'block')
    $('.l_nav').on('click', '.nav_center', function () {
      $('.nav_center').find('.item_c').removeClass('isActive')
      $('.nav_center').find('.dd_box').css('display', 'none')
      $(this).find('.item_c').addClass('isActive')
      if ($(this).find('.dd_box')) {
        $(this).find('.dd_box').css('display', 'block')
      }
    })
  },
  watch: {
    '$route' (val) {
      if (val.path == '/helpCenter') {
        $('.nav_center').find('.item_c').removeClass('isActive')
        $('.nav_center').find('.dd_box').css('display', 'none')
        $('.nav_center').eq(0).find('.item_c').addClass('isActive')
        $('.nav_center').eq(0).find('.dd_box').css('display', 'block')
      } else if (val.path == '/payMethod') {
        $('.nav_center').find('.item_c').removeClass('isActive')
        $('.nav_center').eq(1).find('.item_c').addClass('isActive')
      } else if (val.path == '/deliverMethod') {
        $('.nav_center').find('.item_c').removeClass('isActive')
        $('.nav_center').eq(2).find('.item_c').addClass('isActive')
      } else if (val.path == '/aboutUs') {
        $('.nav_center').find('.item_c').removeClass('isActive')
        $('.nav_center').eq(3).find('.item_c').addClass('isActive')
      } else if(val.path == '/newsCenter'){
        $('.nav_center').find('.item_c').removeClass('isActive')
        $('.nav_center').find('.dd_box').css('display', 'none')
        $('.nav_center').eq(4).find('.item_c').addClass('isActive')
        $('.nav_center').eq(4).find('.dd_box').css('display', 'block')
      }else{
        $('.nav_center').find('.item_c').removeClass('isActive')
        $('.nav_center').find('.dd_box').css('display', 'none')
        $('.nav_center').eq(4).find('.item_c').addClass('isActive')
        $('.nav_center').eq(4).find('.dd_box').css('display', 'block')
      }
    }
  }
}
</script>

<style scope>
.article_detail .isActive {
  border-left: 3px solid #f48009 !important;
}
</style>
