<template>
  <div class="gc_content">
    <div class="mycenter_content pure-form">
      <div class="pure-control-group">
        <label style="margin-right:30px;display:inline-block;width:100px">用户名：</label>
        <span>{{userData.user_name}}</span>
      </div>
      <div class="pure-control-group">
        <label style="margin-right:30px;display:inline-block;width:100px">真实姓名：</label>
        <span>{{userData.real_name}}</span>&nbsp;
        <a href="javascript:;"
           @click="addName">{{userData.real_name == '' ? '添加':'修改'}}</a>
      </div>
      <div class="pure-control-group">
        <label style="margin-right:30px;display:inline-block;width:100px">手机号：</label>
        <span>{{userData.mobile}}</span>&nbsp;
        <!-- <a href="javascript:;" @click="editPhone(userData.mobile)">修改</a> -->
      </div>
      <div class="pure-control-group">
        <label style="margin-right:30px;display:inline-block;width:100px">登录密码：</label>
        <input type="password"
               v-model="userData.user_pass">&nbsp;
        <a href="javascript:;"
           @click="dialogTableVisible2 = true;">修改</a>
      </div>
      <div class="pure-control-group">
        <label style="margin-right:30px;display:inline-block;width:100px">支付密码：</label>
        <input type="password"
               v-model="userData.payment_pass"
               placeholder="无"
               disabled>&nbsp;
        <a href="javascript:;"
           @click="setPayPwd">&nbsp;{{userData.payment_pass == '' ? '去设置' : '去修改'}}</a>
      </div>
      <div class="pure-control-group">
        <label style="margin-right:30px;display:inline-block;width:100px">信用额度(元)：</label>
        <input v-model="userData.lines"
               placeholder="无"
               disabled>&nbsp;
        <el-tag type="danger" v-if="userData.interest_day != 0 ">已逾期</el-tag>
        <!-- <p style="color:red;display:inline-block;margin-left:20px"  v-if="userData.interest_day != 0 ">逾期将对您的信用造成不良影响</p> -->
      </div>
      <div class="pure-control-group" v-if="userData.interest_day != 0 ">
        <label style="margin-right:30px;display:inline-block;width:100px">利息(元)：</label>
        <input v-model="userData.interest"
               placeholder="0.00"
               disabled>&nbsp;
      </div>
      <!-- last_month_money -->
      <div class="pure-control-group">
        <label style="margin-right:30px;display:inline-block;width:100px">上月应还(元)：</label>
        <input v-model="userData.last_month_money"
               placeholder="0.00"
               disabled>&nbsp;
      </div>

      <div class="pure-control-group">
        <label style="margin-right:30px;display:inline-block;width:100px">账户余额(元)：</label>
        <input v-model="$store.state.balance"
               placeholder="无"
               disabled>&nbsp;
      </div>
      <div class="pure-control-group">
        <label style="margin-right:30px;display:inline-block;width:100px">佣金金额(元)：</label>
        <input v-model="userData.commission"
               placeholder="0.00"
               disabled>&nbsp;
              <router-link tag="a" to="/commission" style="color:#3686d0" slot="reference">佣金详情</router-link>
      </div>
    </div>
    <!-- 验证手机号 -->
    <el-dialog title="验证手机号"
               :visible.sync="dialogTableVisible"
               width="30%">
      <el-form :model="phoneForm"
               :rules="rules"
               ref="phoneForm">
        <el-form-item label="验证当前手机号"
                      label-width="30%">
          <span>{{phoneForm.phone}}</span>
        </el-form-item>
        <el-form-item label="短信验证码"
                      prop="phoneCode"
                      label-width="30%">
          <el-input v-model.number="phoneForm.phoneCode"
                    style="width:35%" />
          <el-button :type="colorClass ? 'primary' : 'info'"
                     :disabled="disabled"
                     @click="saveCode"
                     size="mini"
                     style="margin-left:20px">{{phoneCodeText}}</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="primary"
                   @click="next('phoneForm')"
                   style="display:block;margin:0 auto">下一步</el-button>
      </div>
    </el-dialog>
    <!-- 编辑新手机号 -->
    <el-dialog title="编辑手机号"
               :visible.sync="dialogTableVisible1"
               width="30%">
      <el-form :model="newPhoneForm"
               ref="newPhoneForm"
               :rules="rules">
        <el-form-item label="新手机号"
                      prop="phone"
                      label-width="30%">
          <el-input v-model="newPhoneForm.phone"
                    style="width:35%" />
        </el-form-item>
        <el-form-item label="计算结果"
                      label-width="30%">
          <el-input v-model.number="newPhoneForm.result"
                    style="width:35%" />
          <img style="width:35%" />
        </el-form-item>
        <el-form-item label="短信验证码"
                      label-width="30%">
          <el-input v-model.number="newPhoneForm.phoneCode"
                    style="width:35%" />
          <el-button :type="colorClass ? 'primary' : 'info'"
                     :disabled="disabled"
                     @click="saveCode"
                     size="mini"
                     style="margin-left:20px">{{phoneCodeText}}</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="primary"
                   @click="submit('newPhoneForm')"
                   style="display:block;margin:0 auto">下一步</el-button>
      </div>
    </el-dialog>
    <!-- 修改登录密码 -->
    <el-dialog title="修改密码"
               :visible.sync="dialogTableVisible2"
               width="25%">
      <el-form :model="pwdForm"
               ref="pwdForm"
               label-position="left"
               style="margin-left:10%"
               :rules="pwdRules">
        <el-form-item label="原密码"
                      prop="pwd"
                      label-width="30%">
          <el-input v-model="pwdForm.pwd"
                    type="password"
                    clearable
                    show-password
                    style="width:70%" />
        </el-form-item>
        <el-form-item label="新密码"
                      prop="newPwd"
                      label-width="30%">
          <el-input v-model="pwdForm.newPwd"
                    type="password"
                    clearable
                    show-password
                    style="width:70%" />
        </el-form-item>
        <el-form-item label="确认新密码"
                      prop="checkNewPwd"
                      label-width="30%">
          <el-input v-model="pwdForm.checkNewPwd"
                    type="password"
                    clearable
                    show-password
                    style="width:70%" />
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="primary"
                   @click="editPwd('pwdForm')"
                   style="display:block;margin:0 auto">保存</el-button>
      </div>
    </el-dialog>
    <!-- 设置支付密码 -->
    <el-dialog title="设置支付密码"
               :visible.sync="dialogTableVisible3"
               width="25%">
      <el-form :model="payPwdForm"
               ref="payPwdForm"
               label-position="left"
               style="margin-left:10%"
               :rules="payPwdRules">
        <el-form-item label="验证当前手机号"
                      label-width="30%">
          <el-input v-model="payPwdForm.phone"
                    style="width:70%"
                    disabled />
        </el-form-item>
        <el-form-item label="登录密码"
                      prop="user_pass"
                      label-width="30%"
                      placeholder="请输入登录密码">
          <el-input v-model="payPwdForm.user_pass"
                    type="password"
                    clearable
                    show-password
                    style="width:70%" />
        </el-form-item>
        <el-form-item label="新密码"
                      prop="newPwd"
                      label-width="30%">
          <el-input v-model="payPwdForm.newPwd"
                    type="password"
                    clearable
                    show-password
                    style="width:70%" />
        </el-form-item>
        <el-form-item label="确认新密码"
                      prop="checkNewPwd"
                      label-width="30%">
          <el-input v-model="payPwdForm.checkNewPwd"
                    type="password"
                    clearable
                    show-password
                    style="width:70%" />
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="primary"
                   @click="savePayPwd('payPwdForm')"
                   style="display:block;margin:0 auto">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import user from '../../api/loginAndReg'
import Code from '../../api/Code'
import makeSign from '../../api/makeSign'


export default {
  data () {
    // 验证确认密码是否输入正确
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.pwdForm.newPwd) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    // 验证确认支付密码是否输入正确
    var validatePass1 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.payPwdForm.newPwd) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      userData: [],
      commissionDetail:[],
      dialogTableVisible: false, //验证手机号
      dialogTableVisible1: false, //编辑新手机号
      dialogTableVisible2: false,   //修改登录密码
      dialogTableVisible3: false,   //设置支付密码
      phoneForm: {
        phone: 0,
        phoneCode: '',
      },
      newPhoneForm: {
        phone: '',
        phoneCode: '',
      },
      pwdForm: {
        pwd: '',
        newPwd: '',
        checkNewPwd: ''
      },
      payPwdForm: {
        newPwd: '',
        checkNewPwd: '',
        user_pass: ''
      },
      // 编辑手机号验证
      rules: {
        phone: [
          { required: true, message: '请输入新手机号码', trigger: 'blur' },
          { pattern: /^1[3|4|5|7|8][0-9]\d{8}$/, message: '请输入正确手机格式', trigger: 'blur' }
        ],
        phoneCode: [
          { required: true, message: '请输入短信验证码', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '请输入正确格式', trigger: 'blur' }
        ],
      },
      // 登录密码验证
      pwdRules: {
        pwd: [
          { required: true, message: '请输入原始密码', trigger: 'blur' },
          { pattern: /^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i, message: '密码必须由字母和数字组成', trigger: 'blur' }
        ],
        newPwd: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { pattern: /^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i, message: '密码必须由字母和数字组成', trigger: 'blur' }
        ],
        checkNewPwd: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
        ],
      },
      // 支付密码验证
      payPwdRules: {
        newPwd: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { pattern: /^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i, message: '密码必须由字母和数字组成', trigger: 'blur' },
          { min: 6, message: '支付密码最少由6位字符组成', trigger: 'blur' }
        ],
        checkNewPwd: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { validator: validatePass1, trigger: 'blur' }
        ],
        user_pass: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { pattern: /^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i, message: '密码必须由字母和数字组成', trigger: 'blur' }
        ],
      },
      disabled: false, //发送验证码按钮是否可以点击
      phoneCodeText: '获取验证码',
      outTime: 60, // 设置发送验证码倒计时时间
      colorClass: true,
      timer: null
    }
  },
  methods: {
    //获取数据
    getAccountMes () {
      let user_id = sessionStorage.getItem('uid');
      let timestamp = Date.parse(new Date()) / 1000;
      let sign = this.$md5(makeSign.makeSign({ user_id, timestamp }))
      user.getAccountMes({ user_id, timestamp, sign }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.userData = data.data;
        } else {
          console.log(data.msg)
        }
      })
    },
    // 添加真实姓名
    addName () {
      this.$prompt('请输入您的真实姓名', '提示', {
        confirmButtonText: '确定',
        inputPattern: /^[\u4e00-\u9fa5]+$/,
        inputErrorMessage: '请输入真实姓名'
      }).then(({ value }) => {
        let real_name = value;
        let user_id = sessionStorage.getItem('uid');
        let timestamp = Date.parse(new Date()) / 1000;
        let sign = this.$md5(makeSign.makeSign({ user_id, timestamp, real_name }))
        user.resetRealName({ sign, real_name, timestamp, user_id }).then(res => {
          let data = res.data;
          if (data.code === Code.CODE_SUCCESS) {
            this.$message({
              type: 'success',
              message: '修改成功'
            });
            this.getAccountMes()
          } else {
            return
          }
        })

      })
    },
    // 修改手机号
    editPhone (data) {
      this.dialogTableVisible = true;
      this.phoneForm.phone = data
    },
    // 获取验证码
    saveCode () {
      let mobile = this.verification_code_Form.mobile;
      let timestamp = Date.parse(new Date()) / 1000;
      let send_type = 3;
      let sign = this.$md5(makeSign.makeSign({ mobile, timestamp, send_type }))
      user.saveCode({ mobile, send_type, timestamp, sign }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.disabled = true;
          this.colorClass = false;
          if (!this.timer) {
            this.timer = setInterval(() => {
              this.phoneCodeText = this.outTime + 's后重新发送';
              this.outTime = this.outTime - 1;
              if (this.outTime < 0) {
                clearInterval(this.timer);
                this.phoneCodeText = '获取验证码';
                this.outTime = 60;
                this.timer = null;
                this.disabled = false;
                this.colorClass = true
              }
            }, 1000);
          }
        } else {
          this.$message.error(data.msg)
        }
      })
    },
    // 修改手机号-下一步
    next (formName) {
      this.$refs[formName].validate((vaild) => {
        if (vaild) {
          console.log(this.$refs[formName].model)
          this.dialogTableVisible = false
          this.dialogTableVisible1 = true;
        } else {
          console.log(2)
        }
      })
    },
    // 提交手机号
    submit (formName) {
      this.$refs[formName].validate((vaild) => {
        if (vaild) {
          this.$message({
            message: '手机号码修改成功',
            type: 'success'
          });
          this.dialogTableVisible1 = false;
          this.userData.phone = this.$refs[formName].model.phone
        } else {
          console.log(2)
        }
      })
    },
    // 修改登录密码
    editPwd (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let user_id = sessionStorage.getItem('uid');
          let timestamp = Date.parse(new Date()) / 1000;
          let old_password = this.$refs[formName].model.pwd;
          let password = this.$refs[formName].model.checkNewPwd;
          let platform = 1;
          let sign = this.$md5(makeSign.makeSign({ platform, password, old_password, user_id, timestamp }))
          user.editPwd({ sign, platform, password, old_password, user_id, timestamp }).then(res => {
            let data = res.data;
            if (data.code === Code.CODE_SUCCESS) {
              this.$message({
                message: '登录密码修改成功',
                type: 'success'
              });
              this.dialogTableVisible2 = false;
              this.getAccountMes();
              this.pwdForm = {}
            } else {
              this.$message.error(data.msg)
            }
          })
        } else {
          console.log('error')
        }
      })
    },
    // 设置支付密码
    setPayPwd () {
      this.dialogTableVisible3 = true;
      this.payPwdForm.phone = this.userData.mobile;
    },
    savePayPwd (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let user_id = sessionStorage.getItem('uid');
          let timestamp = Date.parse(new Date()) / 1000;
          let user_pass = this.$refs[formName].model.user_pass;
          let payment_pass = this.$refs[formName].model.newPwd;
          let confirm_pass = this.$refs[formName].model.checkNewPwd;
          let sign = this.$md5(makeSign.makeSign({ payment_pass, confirm_pass, user_pass, user_id, timestamp }))
          user.resetPayPwd({ sign, payment_pass, confirm_pass, user_pass, user_id, timestamp }).then(res => {
            let data = res.data;
            if (data.code === Code.CODE_SUCCESS) {
              this.$message({
                message: '支付密码修改成功',
                type: 'success'
              });
              this.dialogTableVisible3 = false;
              this.getAccountMes();
              this.payPwdForm = {};
            } else {
              this.$message.error(data.msg);
            }
          })
        } else {
          console.log('error')
        }
      })
    },
    // 获取佣金
    getCommissionD () {
      let user_id = sessionStorage.getItem('uid');
      let timestamp = Date.parse(new Date()) / 1000;
      let sign = this.$md5(makeSign.makeSign({ user_id, timestamp }))
      user.getCommissionDetail({ user_id, timestamp, sign }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          if(data.data == ''){
            this.commissionDetail = []
          }else{
            this.commissionDetail = data.data
          }
        } else {
          return
        }
      })
    }
  },
  mounted () {
    this.getAccountMes();
    this.getCommissionD();
  },
}
</script>
<style scoped>
.pure-control-group > a {
  color: #3686d0;
}
.gc_content .pure-control-group {
    height: auto;
    width: auto;
}
</style>