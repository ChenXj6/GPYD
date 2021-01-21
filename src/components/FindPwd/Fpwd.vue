<template>
  <div class="pass-content">
    <div class="pass-wrapper">
      <el-steps :active="active"
                finish-status="success">
        <el-step title="输入用户名"> </el-step>
        <el-step title="验证身份"></el-step>
        <el-step title="重置密码"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>

      <div class="subContent">
        <!-- 输入用户名 -->
        <el-form :model="userNameForm"
                 ref="userNameForm"
                 :rules="rules"
                 v-if="active == 0 "
                 id="userForm">
          <el-form-item label="用户名"
                        label-width="20%"
                        prop="user_name"
                        style="display:block;margin:150px auto 50px;width:500px;">
            <el-input v-model="userNameForm.user_name"
                      style="width:80%"
                      placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-button type="primary"
                     @click="checkUserName"
                     style="display:block;margin:0 auto;width:200px;height:50px">下一步</el-button>
        </el-form>

        <!-- 验证身份 -->
        <el-form :model="checkUser"
                 v-if="active == 1 "
                 ref="userForm"
                 style="margin-left:20%"
                 :rules="rules"
                 label-position="left"
                 id="checkUser">
          <el-form-item label="用户名"
                        label-width="130px"
                        prop="user_name">
            <el-input v-model="checkUser.user_name"
                      style="width:40%"
                      placeholder="请输入用户名"
                      disabled></el-input>
          </el-form-item>
          <el-form-item label="手机号"
                        label-width="130px"
                        prop="user_name">
            <el-input v-model="checkUser.mobile"
                      style="width:40%"
                      placeholder="请输入手机号"
                      disabled></el-input>
          </el-form-item>
          <el-form-item label="短信验证码"
                        prop="verification_code"
                        label-width="130px">
            <el-input v-model.number="checkUser.verification_code"
                      placeholder="短信验证码"
                      class="inputStyle"
                      style="width:25%" />
            <el-button :type="colorClass? 'primary' : 'info'"
                       :disabled="disabled"
                       @click="saveCode"
                       size="mini"
                       style="margin-left:20px">{{phoneCodeText}}</el-button>
          </el-form-item>
          <el-button type="primary"
                     @click="checkuser"
                     style="display:block;margin:50px 160px 0 ;width:150px;height:40px">下一步</el-button>
        </el-form>

        <!-- 重置密码 -->
        <el-form :model="resetForm"
                 v-if="active == 2 "
                 ref="resetForm"
                 style="margin-left:20%"
                 label-position="left"
                 :rules="rules"
                 id="checkUser">
          <el-form-item label="用户名"
                        label-width="130px"
                        prop="user_name">
            <el-input v-model="resetForm.user_name"
                      style="width:40%"
                      placeholder="请输入用户名"
                      disabled></el-input>
          </el-form-item>
          <el-form-item label="密码"
                        prop="password"
                        label-width="130px">
            <el-input v-model="resetForm.password"
                      placeholder="6-20位长度"
                      type="password"
                      clearable
                      show-password
                      style="width:40%" />
          </el-form-item>
          <el-form-item label="确认密码"
                        prop="checkPwd"
                        label-width="130px">
            <el-input v-model="resetForm.checkPwd"
                      placeholder="确定密码"
                      type="password"
                      clearable
                      show-password
                      style="width:40%" />
          </el-form-item>
          <el-button type="primary"
                     @click="resetPwd"
                     style="display:block;margin:50px 160px 0;width:150px;height:40px">下一步</el-button>
        </el-form>

        <!-- 完成 -->
        <form id="succForm"
              v-if="active == 3">
          <div class="sub sub04">
            <div class="subTitle"
                 style="text-align: center;">
              <div style="text-align: center; padding-left: 75px;">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYTdlMTQ2YS05MGE0LTMxNDktOTNkYS00YTc3ZDZkYWM1N2MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzUwOTJCMTkwOEJDMTFFOUFCNkVGNjI5RjNCMjVCRjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzUwOTJCMTgwOEJDMTFFOUFCNkVGNjI5RjNCMjVCRjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NmM0MjFlOGEtYzQ1NC03ZTRkLWIwMWItNDYyYjhlODlmNWE3IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTA2ZjhkYzAtZWQ1ZC0xMWU4LTg0YzQtYTJkMTFkZjc4NzNiIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+P9xrZwAAAp5JREFUeNrMmT9IHEEUxmdHAoIEDQFFi1QRr0phSCAIYiFcZ5PiOIUUWthpdZCQMkWKq0KqFLnOExsLKxUr4RqLC6QISrQJYqIhRRBBCUK+F76Tvc3crbM7++eDj7m72T8/Zm523nvrqQha+KbuoJmAp+FxeAwegvt4yAV8Ch/ATXgHbnx8oP7Y3suzBHuIZhkuw/ct7/ULXoXfAfTQKSDARtBU4RLco+LpGl6DKwA9iQ0IuEXC3VVudU7ID5EAAdaLpsbpTFIy7fMAvbw1IOD60WzAkyod7cIzgPwdCsiR20oRzg9ZDI6kNhxYywBO8Z614I/asCDKKjuVyfD/FPNRsp/Aao2yugutR5B/BKs5gFNkqLZNMXeIUooQR/BjWBbkkqG/RKabEVx2sEPYwE1hCpvwFfwe3z8Hjukhk/K48X+PsLfGgTv2/fc9BhWjhr17WDMqyQSOem2AU2Sa0AyZMoHD6L1E86bLedOa8VwnydazDn9JCO5tyLnjAljo0HkFP8GFn6N9BNdThhONCeBgh85PuPBX+YBWYrgXlpBx4URD2hemB1XAxe61vlhCuoAT9ekunQPwJkMvG0hXcDc7yUWX/qfwtgWkUzhhE8CzkINuC+kaTnSqGcGomJBJwIkONPNWFRPyWQJwoqZmUq3iQMI/E4AT7QhggxtzZMiE4ISpoVmOWLU82QjpEO5fOipsni9g3Y8QE+7Bs/AP+BUjExe6Zth/6M9JVnizPKgOuLlgTlJhwpK1zsnSnnYyi6rkALCtqGSqLNQzzI1lYcyGVRbmWYZIW7u8t+oKyNrITMqQreLRZSggISXUL0Z4PkYtvxVNla2O5TdDvSZ/BcwAZH5LwAHQfBbRDaDB1xAFJl/+1xBn3D5jvYb4K8AAHioHJK0/JmcAAAAASUVORK5CYII="
                     alt="yes"
                     class="successIcon" />
                <span class="successTitle">恭喜您，密码设置成功!</span>
              </div>
              <router-link tag="a"
                           to="/"
                           href="javascript:;"><input type="button"
                       value="立即购物"
                       class="goShop" /></router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import makeSign from '../../api/makeSign';
import Code from '../../api/Code';
import findPwd from '../../api/loginAndReg';


export default {
  data () {
    //验证确认密码是否输入正确
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.resetForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    //验证确认用户名是否输入正确
    var userRule = (rule, value, callback) => {
      let r2 = /^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i
      let r3 = /^[a-zA-Z]{4,20}$/i
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        if (!r2.test(value)) {
          if (!r3.test(value)) {
            callback(new Error('用户名只能是字母或字母和数字组合，不支持特殊符号'));
          } else {
            callback()
          }
        } else {
          callback()
        }
      }
    }
    return {
      active: 0,
      disabled: false, //发送验证码按钮是否可以点击
      phoneCodeText: '获取验证码',
      outTime: 60, // 设置发送验证码倒计时时间
      colorClass: true,
      userNameForm: {
        user_name: ''
      },
      checkUser: {
        user_name: '',
        mobile: '',
        verification_code: ''
      },
      resetForm: {
        user_name: '',
        password: '',
        checkPwd: ''
      },
      rules: {
        user_name: [
          { required: true, message: '请输入用户名或手机号', trigger: 'blur' },
          { validator: userRule, trigger: 'blur' }
        ],
        verification_code: [
          { required: true, message: '请输入短信验证码', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '请输入正确格式', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { pattern: /^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i, message: '密码必须由字母和数字组成', trigger: 'blur' }
        ],
        checkPwd: [
          { validator: validatePass, trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    // 获取验证码
    saveCode () {
      let mobile = this.checkUser.mobile;
      let timestamp = Date.parse(new Date()) / 1000;
      let send_type = 2;
      let sign = this.$md5(makeSign.makeSign({ mobile, timestamp, send_type }))
      findPwd.saveCode({ mobile, send_type, timestamp, sign }).then(res => {
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
    //验证用户名
    checkUserName () {
      this.$refs['userNameForm'].validate((valid) => {
        if (valid) {
          let user_name = this.userNameForm.user_name;
          let timestamp = Date.parse(new Date()) / 1000;
          let sign = this.$md5(makeSign.makeSign({ user_name, timestamp }));
          findPwd.checkUser({ user_name, timestamp, sign }).then(res => {
            let data = res.data;
            if (data.code === Code.CODE_SUCCESS) {
              this.active = 1;
              this.checkUser.user_name = data.data.user_name;
              this.checkUser.mobile = data.data.mobile;

            } else {
              this.$message.error('用户名不存在')
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
    //验证身份
    checkuser () {
      this.$refs['userForm'].validate((valid) => {
        if (valid) {
          let user_name = this.checkUser.user_name;
          let mobile = this.checkUser.mobile;
          let timestamp = Date.parse(new Date()) / 1000;
          let verification_code = this.checkUser.verification_code;
          let sign = this.$md5(makeSign.makeSign({ user_name, timestamp, mobile, verification_code }));
          findPwd.checkUser({ user_name, timestamp, sign, verification_code, mobile }).then(res => {
            let data = res.data;
            if (data.code === Code.CODE_SUCCESS) {
              this.active = 2;
              this.resetForm.user_name = data.data.user_name;
            } else {
              this.$message.error(data.msg)
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
    //重置密码
    resetPwd () {
      this.$refs['resetForm'].validate((valid) => {
        if (valid) {
          let user_name = this.resetForm.user_name;
          let mobile = this.checkUser.mobile;
          let password = this.resetForm.password;
          let timestamp = Date.parse(new Date()) / 1000;
          let sign = this.$md5(makeSign.makeSign({ user_name, timestamp, mobile, password }));
          findPwd.resetPwd({ user_name, timestamp, sign, password, mobile }).then(res => {
            let data = res.data;
            if (data.code === Code.CODE_SUCCESS) {
              this.active = 3;
            } else {
              this.$message.error(data.msg)
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    }
  },
}
</script>

<style scope>
#userForm {
  width: 100%;
  height: auto;
}
#checkUser {
  width: 100%;
  height: auto;
  margin: 100px 0;
}
</style>
