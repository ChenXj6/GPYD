<template>
  <div class="gc_content">
                    <div class="gc-content-title">您的专属汇款账号
                      <!-- <a href="javascript:;" class="account-doc">下载《专属汇款账号说明》</a> -->
                      </div>
                    <!--  -->
                    <div class="bankcard" v-for="(item,index) in exclusiveAcc" :key="index">
                      <div class="bankcard-head " :class="item.backcolor == 1 ? 'bgBlue' : 'bgRed'">
                            <img class="bankcard-logo" :src="host + item.bank_logo">
                            <span class="bankcard-bank">{{item.bank_deposit}}</span>
                        </div>
                        <div class="bankcard-body" :class="item.backcolor == 1 ? 'bgBlue' : 'bgRed'">
                            <div class="bankcard-number">{{item.account_number}}</div>
                            <div class="bankcard-company">{{item.account_title}}</div>
                        </div>
                    </div>

                </div>
</template>
<script>
import makeSign from '../../api/makeSign'
import getEA from '../../api/loginAndReg'
import Code from '../../api/Code'
import urlS from '../../api/urls'


export default {
  computed:{
    host(){
      return urlS.BWS
    }
  },
  data(){
    return {
      exclusiveAcc:[]
    }
  },
  methods:{
    getExclusiveAcc(){
      let user_id = sessionStorage.getItem('uid')
      let timestamp = Date.parse(new Date())/1000;
      let sign = this.$md5(makeSign.makeSign({user_id,timestamp}));
      getEA.getExclusiveAcc({sign,timestamp,user_id}).then(res=>{
        let data = res.data;
        if(data.code === Code.CODE_SUCCESS){
          this.exclusiveAcc = data.data.exclusive;
        }else{
          console.log(data.msg)
        }
      })
    }
  },
  mounted(){
    this.getExclusiveAcc()
  }
  
}
</script>
<style scope>
  .gc-content-title{
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 20px;
  }
  .account-doc {
    font-weight: normal;
    color: #ff2a2a!important;
    font-size: 12px;
    text-decoration: underline;
    margin-left: 20px;
}
.bgRed{
  background-color: #d90012;
}
.bgBlue{
  background-color: #003473;
}
.bankcard {
    width: 380px;
    height: 230px;
    border-radius: 15px;
    background: #eee;
    overflow: hidden;
    margin-left: 20px;
    display: inline-block;
}
.bankcard-head {
    padding: 10px 20px;
    border-bottom: 1px solid #fff;
    position: relative;
    height: 60px;
    box-sizing: border-box;
}
.bankcard-bank {
    position: absolute;
    right: 20px;
    bottom: 10px;
    font-size: 14px;
    color: #fff;
}
.bankcard-body {
    padding: 0 20px;
    height: 170px;
    position: relative;
    padding-top: 65px;
    box-sizing: border-box;
}
.bankcard-number {
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
}
.bankcard-company {
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    position: absolute;
    right: 20px;
    bottom: 20px;
}
.bankcard-logo{
  display: block;
  width: 180px;
  margin: -15px 0 0 -10px;
}
</style>