<template>
  <section data-v-b1f20ae6="" data-v-29774714="" class="app-main">
    <div data-v-b1f20ae6="" class="main brand">
      <div class="wrap">
        <div class="my-swipe">
          <banner :pageType='2'></banner>
        </div>


        <!--  -->
        <div class="brand-block">
          <div class="brand-block-title">热门推荐</div>
          <div class="item-imgs imgslider brandslider">
            <div class="imgs-left" style="display: none;">
              <i class="fa fa-angle-left"></i>
            </div>
            <div class="imgs-wrap">
              <div class="imgs-list">
                <a href="/brandPavilion/toolsSecondGradePage?brandId=132&amp;t=1591953391498" class="img-wrap" >
                <img
                    src="//p3.gpyh.com/webnew/img/pinpai/3/92171898-9ba3-4572-a7a0-7b30503fa299.png"
                    alt="威汉"/></a>
              </div>
            </div>
            <div class="imgs-right" style="display: none;">
              <i class="fa fa-angle-right"></i>
            </div>
          </div>
        </div>



        <!--  -->
        <div class="brand-block">
          <div class="brand-block-title">全部品牌</div>
          <div class="brand-list">
            <a
              href="/brandPavilion/toolsSecondGradePage?brandId=38&amp;t=1591953391498"
              class="brand-item"
              ><div class="d1">
                <img
                  src="//p4.gpyh.com/webnew/img/pinpai/4/9da797a2-238e-42c4-8e34-9749472fd3f8.png"
                  alt="工品一号"
                />
              </div>
              <div class="d2">工品一号</div></a
            ><a
              href="/brandPavilion/toolsSecondGradePage?brandId=132&amp;t=1591953391498"
              class="brand-item"
              ><div class="d1">
                <img
                  src="//p3.gpyh.com/webnew/img/pinpai/3/92171898-9ba3-4572-a7a0-7b30503fa299.png"
                  alt="威汉"
                />
              </div>
              <div class="d2">威汉</div></a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import banner from '../../common/banner'
export default {
  components:{
    banner
  }
}
</script>

<style scope></style>
