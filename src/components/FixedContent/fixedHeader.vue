<template>
  <div data-v-18047ef4="" class="fixed-header ">
    <div data-v-18047ef4="" class="wrap" style="padding-top:20px">
      <div data-v-18047ef4="" class="td fixed-header-l">
        <typeGoods></typeGoods>
      </div>

      <!-- 搜索 -->
      <div data-v-18047ef4="" class="td fixed-header-c" >
          <searchGoods style="margin-bottom:25px"></searchGoods>
      </div>

      <div data-v-18047ef4="" class="td fixed-header-r">
        <myCart class="mycart"></myCart>
      </div>
    </div>
  </div>
</template>

<script>
import searchGoods from '../../common/searchGoods'
import typeGoods from '../../common/typeGood'
import myCart from '../../common/myCart'
export default {
  components:{
    searchGoods,
    typeGoods,
    myCart
  },
  methods:{

  },
  mounted(){
  }
};
</script>

<style scop>
a {
    color: #333333;
    text-decoration: none;
}

a:hover 
{
     color:#333333; 
     text-decoration:none; 
     cursor:pointer;  
}
.fixed-header{
  top: 0px !important;
}
.mycart{
  margin-top: 25px  !important;
}
</style>
