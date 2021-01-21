<template>
  <div class="gc_content">
				<div class="m-navbar">
					<ul>
						<li name="showTypeLi" id="showType-all" class="active">
							<a href="javascropt:;">我的工品券</a>
							<em class="line"></em>
						</li>
						<!-- <li name="showTypeLi" id="showType-discountcoupon">
							<a href="javascript:getMyPrize('discountcoupon', null);">工品优惠券</a>
							<em class="line"></em>
						</li>
						<li name="showTypeLi" id="showType-cashcoupon">
							<a href="javascript:getMyPrize('cashcoupon', null);">工品代金券</a>
							<em class="line"></em>
						</li>
						<li name="showTypeLi" id="showType-prize">
							<a href="javascript:getMyPrize('prize', null);">奖品兑换券</a>
							<em class="line"></em>
						</li>
						<li name="showTypeLi" id="showType-free">
							<a href="javascript:getMyPrize('free', null);">包邮券</a>
							<em class="line"></em>
						</li> -->
						</ul>
				</div>
                <!-- <a href="javascript:;"  style="float:right;color:#2583d8;text-decoration:underline;margin:-10px 10px 10px 0">用券说明</a> -->

                <ul>
						<!-- 64奖品兑换券-->
							</ul>
					<ul class="vCard">
						<!-- 满减优惠券 -->
							<!-- 代金优惠券 -->
							<li v-for="(item,index) in conponList" :key="index">
										<div class="vcPrize voucher">
											<h4 style="margin: 50px 0px 8px !important;">¥&nbsp;{{item.coupons_money}}</h4>
											<p>[无限额]</p>
											<p style="margin-top: 18px;">
												从 {{item.start_day}}<br>
												至 {{item.end_day}} 23:59</p>
										</div>
										<a href="javascript:void(0);" class="vcLink" style="height: 18px !important;"></a>
										<span class="ticket-code" style="color: #B4B6BA;margin-left: 15px;">商家代金券</span>
									</li>
							</ul>
  </div>
</template>
<script>
import Code from "../../api/Code";
import order from "../../api/orderList";
import makeSign from "../../api/makeSign";
export default {
  data(){
    return{
      conponList:[]
    }
  },
  methods:{
    getConpon(){
      let user_id = sessionStorage.getItem('uid');
      let timestamp = Date.parse(new Date())/1000;
      let sign = this.$md5(makeSign.makeSign({user_id,timestamp}));
      order.getCoupons({user_id,timestamp,sign}).then(res=>{
        let data = res.data;
        if(data.code === Code.CODE_SUCCESS){
          this.conponList = data.data;
        }else{
          return
        }
      })
    }
  },
  mounted(){
    this.getConpon()
  }
}
</script>
<style scoped>
.m-navbar {
    margin-bottom: 25px;
    border-bottom: 1px solid #e6e6e6;
    height: 34px;
}
a {
    color: #555555;
    text-decoration: none;
}
.m-navbar a {
    float: right;
    position: relative;
    height: 34px;
    line-height: 34px;
    text-align: center;
}
.m-navbar ul li {
    float: left;
    position: relative;
    width: 80px;
}
.m-navbar ul li.active a {
    color: #e76108;
    border-top-color: #e76108;
    border-left-color: #e6e6e6;
    border-right-color: #e6e6e6;
}
.m-navbar a em.line {
    position: absolute;
    border-bottom: 1px solid transparent;
    bottom: -1px;
    width: 50px;
    left: 0;
}
.vCard {
    overflow: hidden;
}
.vCard li {
    background: url(https://site.gpyh.com/static/dist/img/vCardLi.png);
    width: 239px;
    height: 258px;
    float: left;
    margin-right: 7px;
    margin-bottom: 10px;
}
.vCard li .vcPrize {
    width: 232px;
    height: 175px;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.vCard li .voucher {
    background: url(https://site.gpyh.com/static/dist/img/voucher.png);
}
.vCard li .vcLink {
    display: block;
    margin: 20px 15px 0 0;
    text-align: right;
    height: 26px;
    line-height: 26px;
    font-size: 12px;
    font-family: Microsoft YaHei;
    color: #333;
}
.vCard li .vcPrize h4, .vCard li .vcPrize p {
    font-family: Microsoft YaHei;
    color: #fff;
    z-index: 2;
    position: relative;
}
.vCard li .vcPrize h4 {
    font-size: 30px;
    height: 30px;
    line-height: 30px;
    margin: 50px 0 20px;
}
.vCard li .vcPrize p {
    font-size: 12px;
    line-height: 1.4;
}
.vCard li .vcPrize h4, .vCard li .vcPrize p {
    font-family: Microsoft YaHei;
    color: #fff;
    z-index: 2;
    position: relative;
}
.vCard li .vcPrize p {
    font-size: 12px;
    line-height: 1.4;
}
.vCard li .vcPrize h4, .vCard li .vcPrize p {
    font-family: Microsoft YaHei;
    color: #fff;
    z-index: 2;
    position: relative;
}
</style>