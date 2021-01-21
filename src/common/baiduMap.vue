<template>
  <div id="map">
    <el-input v-model="addressKeyWord"
              placeholder="请输入所在街道"
              @input="getAddressList()"
              style="width:80%"></el-input>
    <baidu-map style="width:80%;height:200px;"
               :center="map.center"
               :zoom="map.zoom"
               @ready="handler"
               @click="mapLocation">

    </baidu-map>
    <ul id="addressList"
        style="boder:1px solid #c0c0c0;margin-top:200px;"
        v-if="addressList.length != 0">
      <li v-for="(item,index) in addressList"
          :key="index"
          @click="select(item)">
        <i class="el-icon-search"></i>&nbsp;&nbsp;<span>&nbsp;{{item.address}}</span>
        &nbsp;{{item.title}}&nbsp;
      </li>
    </ul>
  </div>
</template>

<script>



export default {
  data () {
    return {
      map: {
        center: { lng: 118.14621, lat: 24.51253 },
        zoom: 15,
        show: true,
        dragging: true
      },
      BMap: '',
      addressKeyWord: '',
      addressList: [],
      selectP: {},
      add: this.address
    }
  },
  methods: {
    //初始化地图组件
    handler ({ BMap, map }) {
      this.BMap = BMap;
      this.map = map;
    },
    mapLocation(e){
      this.addressList=[];
      this.getAdd(e.point).then((res)=>{
        this.addressKeyWord = res.surroundingPois[0].address + res.surroundingPois[0].title
        this.setPlace(this.addressKeyWord).then(res=>{
          this.addressList = res;
        })
      })
    },
    // 根据输入内容匹配相应的地址数据
    setPlace (value) {
      return new Promise(resolve => {
      if(this.$store.state.address == ''){
        this.$message({
          showClose: true,
          message: '请选择所在市区',
          type: 'warning'
        });
        this.addressKeyWord = ''
        resolve([])
      }
      if(!value){
        this.addressList = []
        resolve([])
      }
      value = this.$store.state.address + value;
        function myFun () {
          var pp = local.getResults().Hr;
          resolve(pp)
        }
        var local = new this.BMap.LocalSearch(this.map, {
          onSearchComplete: myFun
        })
        local.search(value)
      })
    },
    // 获取地址描述信息
    getAdd (point) {
      return new Promise(resolve => {
        let geo = new this.BMap.Geocoder();
        geo.getLocation(point, function (res) {
          resolve(res)
        })
      })
    },
    // 点击确认某个地址
    select(item) {
      this.addressKeyWord = item.address + ' ' + item.title
      this.selectP = item.point
      this.addressList = [];
      this.map.centerAndZoom(this.selectP,30)  // 地图是否自动定位到pp对应的地点
      var marker = new this.BMap.Marker(this.selectP)
      this.map.addOverlay(marker)
      this.getAdd(this.selectP).then(res => {
        this.$emit('selectAddress', {
          lng: this.selectP.lng,
          lat: this.selectP.lat,
          province: res.addressComponents.province,
          address: item.address,
          city: res.addressComponents.city,
          district: res.addressComponents.district,
          input_address:item.title
        })
      })

    },
    getAddressList () {
      if (this.addressKeyWord == '') {
        this.addressList = []
      } else {
        this.setPlace(this.addressKeyWord).then(res => {
          this.addressList = res;
        })
      }
    },

  },
  created () {
    this.selectP = {};
  },
  watch: {
    addressKeyWord (val) {
      if (val == '') {
        this.addressList = []
      }
    },
    
  }
}
</script>

<style scoped>
#map {
  position: relative;
}
#addressList {
  position: absolute;
  top: 32px;
  z-index: 999;
  background-color: #f5f5f5;
  color: #333;
  padding-left: 20px;
  width: 80%;
  height: 200px;
  overflow: auto;
}
.BMap_cpyCtrl {
    display: none;
}
.anchorBL{display:none ！!important;}
</style>