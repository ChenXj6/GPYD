<template>
  <div data-v-b1f20ae6=""
       class="myCart">
    <div class="wrap">
      <!-- 上部导航栏 -->
      <div class="content-header"
           style="margin:20px 0 20px">
      </div>

      <!-- 步骤条 -->
      <el-steps :active="active"
                finish-status="success">
        <el-step title="我的购物车"></el-step>
        <el-step title="填写&提交订单信息"></el-step>
        <el-step title="支付订单"></el-step>
      </el-steps>
      <!-- content -->
      <div class="navBox">

        <div class="nav-top">
          <div class="navTop-left">
            <span>订单已提交成功，请您及时付款，我们将尽快为您安排发货！</span>
          </div>
          <div class="navTop-right">
            <span>应付金额</span>
            <span class="red">{{price}}</span>
            <span>元</span>
          </div>
        </div>
        <div class="nav-content">
          <div class="nav-content-title">订单列表</div>
          <table width="50%"
                 style="margin:0 auto;"
                 align="center">
            <tr align="center"
                height="40px">
              <td style="width:33.3%">订单号</td>
              <td style="width:33.3%">订单金额</td>
              <td style="width:33.%">付款方式</td>
            </tr>
            <tr align="center"
                style="height:30px;line-height:30px">
              <td>{{orderN}}</td>
              <td>{{price}}&nbsp;元</td>
              <td>{{payType | payMethod(payType)}}</td>
            </tr>
          </table>
          <el-form ref="form" class="payForm" :rules="rules"
                   v-if="payType == 1"
                   :model="form"
                   label-width="20%">
            <el-form-item label="支付密码：">
              <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="width:300px;height:40px;margin-top:40px" @click="payOrder(payType)">去支付</el-button>
            </el-form-item>
          </el-form>
          <el-button type="primary"
                     v-else
                     class="pay"
                     @click="payOrder(payType)">去支付</el-button>
        </div>
      </div>
      <!-- end -->
    </div>
    <div id="Alipay" style="display:none"></div>
    <el-dialog :title='payType | payMethod(payType)'
               width="380px"
               :visible.sync="centerDialogVisible">
      <img :src="codeImg"
           class="codeImg"
           alt="支付二维码">
    </el-dialog>
  </div>

</template>
<script>

import Code from "../../api/Code";
import order from "../../api/orderList";
import makeSign from "../../api/makeSign";

export default {
  data () {
    return {
      active: 3,
      payType: 2,
      codeImg: '',
      price: 0,
      orderN: '',
      centerDialogVisible: false,
      timer: '',
      order_id: '',
      form: {
        password:''
      },
      rules: {
        password: [
          { required: true, message: '请输入支付密码', trigger: 'blur' },
        ],
      }
    }
  },
  methods: {
    payOrder (type) {
      let price = this.price;
      let ordernum = this.orderN;
      if (type == 2) {
        order.Alipay({ price, ordernum }).then(res => {
          if (res.status == 200) {
            $('#Alipay').html(res.data)
            sessionStorage.setItem('orderN','')
            sessionStorage.setItem('price','')
          } else {
            this.$message.error('提交失败')
          }
        })
      } else if (type == 3) {
        order.weChatPay({ price, ordernum }).then(res => {
          let data = res.data;
          if (data.code === Code.CODE_SUCCESS) {
            this.centerDialogVisible = true;
            this.codeImg = data.data.img_url;
            //支付轮询
            this.timer = setInterval(() => {
              this.selectOrderStatus();
            }, 3000)
          } else {
            this.$message.error(data.msg)
          }
        })
      }else if( type == 1){
        let timestamp = Date.parse(new Date())/1000;
        let user_id = sessionStorage.getItem('uid');
        let payment_pass = this.form.password;
        if(payment_pass == ''){
          this.$message.warning('请输入支付密码支付');
          return;
        }
        let order_num = this.orderN;
        let total_price = this.price;
        let sign = this.$md5(makeSign.makeSign({timestamp,user_id,payment_pass,order_num,total_price}));
        order.abovePay({sign,timestamp,user_id,payment_pass,order_num,total_price}).then(res=>{
          let data = res.data;
          if (data.code === Code.CODE_SUCCESS) {
          this.$message.success('订单支付成功，2秒后将自动跳转到订单管理页面')
          this.$store.dispatch('befovePay',total_price);
          sessionStorage.setItem('orderN','')
          sessionStorage.setItem('price','')
          setTimeout(() => {
            this.$router.push({
              path: '/orderItem'
            })
          }, 2000)
          } else {
            this.$message.error(data.msg)
          }
        })
      }
    },
    // 支付轮询函数
    selectOrderStatus () {
      let ordernum = this.orderN,timestamp = Date.parse(new Date()) / 1000,sign = this.$md5(makeSign.makeSign({ ordernum, timestamp }))
      order.selectOrderStatus({ ordernum, timestamp, sign }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          clearInterval(this.timer);
          this.timer = null;
          this.$message.success('支付成功，2秒后将自动跳转到订单管理页面')
          sessionStorage.setItem('orderN','')
          sessionStorage.setItem('price','')
          setTimeout(() => {
            this.$router.push({
              path: '/orderItem'
            })
          }, 2000)
        } else {
          return false
        }
      })
    },
    // 关闭弹窗清除轮询
    closeWXpay () {
      clearInterval(this.timer)
      this.timer = null
    },
    getOrder () {
      return new Promise(resolve=>{
        let timestamp = Date.parse(new Date()) / 1000;
        let user_id = sessionStorage.getItem('uid');
        let order_id = this.order_id;
        let sign = this.$md5(makeSign.makeSign({ timestamp, user_id, order_id }));
        order.get({ sign, timestamp, user_id, order_id }).then(res => {
          let data = res.data;
          if (data.code === Code.CODE_SUCCESS) {
            this.orderN = data.data.ordernum
            this.price = data.data.total_money
            this.payType = data.data.mode_payment
            resolve()
          } else {
            return
          }
        })
      })
    }
  },
  mounted () {
    this.payType = sessionStorage.getItem('mode_payment')
    if (this.payType == 3) {
      this.order_id = sessionStorage.getItem('order_id')
      if (this.order_id != '') {
        this.getOrder()
      }
    } else {
      this.orderN = sessionStorage.getItem('orderN')
      this.price = sessionStorage.getItem('price')
    }
  },

  filters: {
    payMethod (val) {
      if (val == 1) {
        return val = '预付款方式'
      } else if (val == 2) {
        return val = '支付宝付款二维码'
      } else if (val == 3) {
        return val = '微信支付二维码'
      } else if (val == 4) {
        return val = '线下支付'
      }
    }
  },
  watch: {
    centerDialogVisible (val) {
      if (!val) {
        clearInterval(this.timer)
        this.timer = null
      }
    },
  }
}
</script>
<style scoped>
.navBox {
  width: 1000px;
  margin: 30px auto 50px;
}
.nav-top {
  padding: 0 30px;
  height: 90px;
  margin: 0 0 20px;
}
.navTop-left {
  float: left;
  width: 60%;
  height: 100%;
  padding-top: 17px;
  box-sizing: border-box;
}
.navTop-left span {
  font-size: 18px;
  color: #525252;
  font-weight: 700;
}
.navTop-right {
  float: right;
  width: auto;
  height: 100%;
  padding-top: 17px;
  font-size: 16px;
  color: #525252;
}
.navTop-right .red {
  font-size: 20px;
  color: #f53100;
  display: inline-block;
  margin: 0 5px;
  font-weight: 700;
}
.nav-content {
  width: 100%;
  margin: 20px;
  height: 300px;
  font-size: 16px;
  color: #333;
}
.nav-content-title {
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
}
table,
tr,
th,
td {
  border: 1px solid #333;
}
.pay {
  width: 300px;
  display: block;
  margin: 30px auto;
}
.codeImg {
  width: 300px;
  height: 300px;
  display: block;
  margin: 20px auto;
}
.payForm{
  width:50%;
  margin: 40px auto;
}
</style>