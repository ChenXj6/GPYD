<template>
  <div class="layout-common">
    <topB></topB>
    <fixedH id="fixedH"
            style="visibility:hidden"></fixedH>
    <headerW></headerW>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <fixedToolbar></fixedToolbar>
    <bottomFooter></bottomFooter>
  </div>
</template>

<script>
import fixedH from "../../components/FixedContent/fixedHeader"
import topB from "../../components/HeaderFooter/topBar";
import headerW from '../../components/MainContent/header_wrapper';
import fixedToolbar from '../../components/FixedContent/fixed_toolBar';
import bottomFooter from '../../components/HeaderFooter/_footer'

export default {
  data () {
    return {
      title: '',
      service: {},
    }
  },
  components: {
    topB,
    fixedH,
    headerW,
    fixedToolbar,
    bottomFooter
  },
  methods: {

  },
  mounted () {
    // // 隐藏导航栏显示与隐藏
    $(window).scroll(function () {
      if ($(window).scrollTop() > 500) {
        $("#fixedH").css('visibility', 'visible');//元素显示
      } else {
        $("#fixedH").css('visibility', 'hidden');//元素隐藏
      }
    });
  }
}
</script>

<style scope>
</style>