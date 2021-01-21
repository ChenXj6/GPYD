<template>
  <div class="block">
    <el-carousel height="335px" :interval='time'>
      <el-carousel-item v-for="item in image" :key="item.id">
        <div>
          <a
            :href="item.url"
          >
            <img
              v-lazy="host+item.path"
          /></a>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import Code from '../api/Code'
import indexItem from '../api/indexItem'
import makeSign from '../api/makeSign'
import urls from '../api/urls'
export default {
  props:{
    pageType:{
      type:Number
    }
  },
  computed:{
    host(){
      return urls.BWS
    }
  },
  data() {
    return {
      time:4000,
      image: [],
    }
  },
  methods:{
    getBanner(){
      let type=this.pageType;
      let timestamp =Date.parse(new Date()) / 1000;
      let s = this.$md5(makeSign.makeSign({type,timestamp}));
      let formData = {
        type:this.pageType,
        timestamp:Date.parse(new Date()) / 1000,
        sign:s
      }
      indexItem.getBanner(formData).then(res=>{
        let data = res.data;
        if(data.code === Code.CODE_SUCCESS ){
          this.image = data.data
        }else{
          console.log('banner-error'+data.msg)
        }
      })
    }
  },
  mounted(){
    this.getBanner();
  }
}
</script>

<style scoped></style>
