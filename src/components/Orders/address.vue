<template>
  <div class="gc_content">
    <div class="list_header">
      <div class="list_ul">
        <h4>收货地址</h4>
      </div>
    </div>
    <!-- 地址展示 -->
    <div class="gc_address">
      <div class="gca_wrap"
           v-for="(item,index) in addressList"
           :key="index">
        <div class="address_con">
          <label>{{item.contact_name}}<span>{{item.contact_mobile}}</span>
          </label>
          <label class="default"
                 v-show="item.is_default == 1">默认地址</label>
          <div class="address_bot">
            <address>
              {{item.province}}&nbsp;{{item.city}}&nbsp;{{item.district}},{{item.input_address}}<br></address>
          </div>
        </div>
        <span class="del"
              @click="delAddress(item.id)">
          <i class="el-icon-delete"></i>
        </span>
        <div class="gcaw_show">
          <!-- <span>{{item.put_single == 1? '放单' : '不放单'}}</span>
          <span>{{item.show_price == 1? '显示单价' : '不显示单价'}}</span> -->
        </div>
        <div class="gcaw_tools">
          <span v-show="item.is_default == 0"
                @click="setDefault(item.id)">设为默认</span>
          <span @click="openEditAddress(item.id)">编辑</span>
        </div>
      </div>
      <div class="gca_wrap gca_empty"
           id="go_empty"
           style="background-color:#fff"
           @click="openAddform">
        <span>添加地址</span>
      </div>
    </div>
    <!-- 增加收货地址 -->
    <el-dialog title="新增收货地址"
               :visible.sync="dialogFormVisible"
               width="40%">
      <hr />
      <el-form :model="form"
               style="margin-left:10%"
               ref="form"
               label-width="100px"
               label-position="left"
               :rules="rules">
        <el-form-item label="收货人:"
                      prop="contact_name">
          <el-input v-model="form.contact_name"
                    style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="手机号码"
                      prop="contact_mobile">
          <el-input v-model="form.contact_mobile"
                    style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="所在地区">
          <VDistpicker class="address"
                       style="margin-bottom:10px"
                       @selected="onSelected"
                       :province='placeholders.province'
                       :city='placeholders.city'
                       province-disabled
                       :area='placeholders.district'></VDistpicker>
          <BMap @selectAddress="getPoint"></BMap>
        </el-form-item>
        <el-form-item label="详细地址"
                      prop="address">
          <el-input v-model="form.address"
                    style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="邮箱"
                      prop="email">
          <el-input v-model="form.email"
                    style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="邮编"
                      prop="postcode">
          <el-input v-model="form.postcode"
                    style="width:80%"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="primary"
                   @click="saveMessage('form')">保存收货人信息</el-button>
      </div>
    </el-dialog>

    <!-- 编辑收货地址 -->
    <el-dialog title="编辑收货地址"
               :visible.sync="isEdit"
               width="40%">
      <hr />

      <el-form :model="editForm"
               ref="editForm"
               label-width="100px"
               label-position="left"
               style="margin-left:10%"
               :rules="rules">
        <input type="hidden"
               v-model="editForm.id" />
        <el-form-item label="收货人:"
                      prop="contact_name">
          <el-input v-model="editForm.contact_name"
                    style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="手机号码"
                      prop="contact_mobile">
          <el-input v-model="editForm.contact_mobile"
                    style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="所在街道">
          <template style="width:80%">
            <VDistpicker class="address"
                         style="margin-bottom:10px"
                         @selected="onSelected"
                         :province='placeholders.province'
                         :city='placeholders.city'
                         province-disabled
                         :area='placeholders.district'
                         ></VDistpicker>
            <BMap @selectAddress="getPoint"></BMap>
          </template>
        </el-form-item>
        <el-form-item label="详细地址"
                      prop="address">
          <el-input v-model="editForm.input_address"
                    style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="邮箱"
                      prop="email">
          <el-input v-model="editForm.email"
                    style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="邮编"
                      prop="postcode">
          <el-input v-model="editForm.postcode"
                    style="width:80%"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="primary"
                   @click="editAddress('editForm')">更新收货人信息</el-button>
      </div>
    </el-dialog>

  </div>
</template>
<script>
import VDistpicker from 'v-distpicker'
import makeSign from '../../api/makeSign'
import Code from '../../api/Code'
import address from '../../api/address'
import BMap from '../../common/baiduMap'

export default {
  components: {
    BMap, VDistpicker
  },
  data () {
    return {
      // 添加地址表单 
      form: {
        user_id: '',
        contact_name: '',
        contact_mobile: '',
        address: '',
        email: '',
        postcode: '',
        longitude: 0,
        latitude: 0,
        province: '',
        city: '',
        district: '',
        timestamp: '',
        input_address:''
      },
      // 更新地址表单
      editForm: {
        id: '',
        user_id: '',
        contact_name: '',
        contact_mobile: '',
        address: '',
        email: '',
        postcode: '',
        longitude: 0,
        latitude: 0,
        province: '',
        city: '',
        district: '',
        timestamp: '',
        input_address:''
      },
      input_address:'',
      user_id: 0,
      addressList: [],
      addressData: '',
      placeholders: {
        province: '福建省',
        city: '市',
        district: '区'
      },
      address: '',
      defaltP:{
        lat:'',
        lng:''
      },
      // 添加 更新
      dialogFormVisible: false,
      isEdit: false,
      rules: {
        contact_name: [
          { required: true, message: '请输入收货人姓名', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        contact_mobile: [
          { required: true, message: '请填写手机号码', trigger: 'blur' },
          { pattern: /^1[3|4|5|7|8][0-9]\d{8}$/, message: '请输入正确的号码格式', trigger: 'blur' }
        ],
        email: [
          { message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ],
        postcode: [
          { pattern: /^[0-9]{6}$/, message: '请输入正确格式的邮编地址', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请填写地址', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    //添加地址
    openAddform () {
      this.dialogFormVisible = true;
    },
    saveMessage (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let user_id = this.user_id;
          this.form.user_id = user_id;
          let timestamp = Date.parse(new Date()) / 1000;
          this.form.timestamp = timestamp;
          this.form.input_address = this.form.input_address + this.form.address;
          this.form.address = this.address;
          let sign = this.$md5(makeSign.makeSign(this.form))
          let formData = {
            sign: sign,
            user_id: this.user_id,
            contact_name: this.form.contact_name,
            contact_mobile: this.form.contact_mobile,
            address: this.form.address,
            email: this.form.email,
            postcode: this.form.postcode,
            longitude: this.form.longitude,
            latitude: this.form.latitude,
            province: this.form.province,
            city: this.form.city,
            district: this.form.district,
            timestamp: timestamp,
            input_address:this.form.input_address
          };
          address.addAddress(formData).then(res => {
            let data = res.data;
            if (data.code === Code.CODE_SUCCESS) {
              this.$message({
                message: '添加地址成功',
                type: 'success'
              })
              this.addressForm = {};
              this.form = {};
              this.AddressData = '';
              this.getAddressList()
            } else {
              this.$message({
                message: '添加地址失败，请稍后重试!',
                type: 'wraning'
              })
            }
          })
          this.dialogFormVisible = false;
        } else {
          return false;
        }
      });
    },
    // 获取地址列表
    getAddressList () {
      let timestamp = Date.parse(new Date()) / 1000;
      let user_id = this.user_id;
      let sign = this.$md5(makeSign.makeSign({ timestamp, user_id }))
      let formData = { user_id, timestamp, sign };
      address.getAddressList(formData).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.addressList = data.data;
        } else {
          return
        }
      })
    },
    // 删除地址
    delAddress (id) {
      this.$confirm('确定要删除该地址吗？', '提示信息', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        let timestamp = Date.parse(new Date()) / 1000;
        let user_id = this.user_id;
        let sign = this.$md5(makeSign.makeSign({ timestamp, user_id, id }));
        address.delAddress({ timestamp, user_id, id, sign }).then(res => {
          let data = res.data;
          if (data.code === Code.CODE_SUCCESS) {
            this.$message({
              message: '删除地址成功',
              type: 'success'
            });
            this.getAddressList();
          } else {
            this.$message.error(data.msg);
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    // 设为默认地址
    setDefault (id) {
      let timestamp = Date.parse(new Date()) / 1000;
      let user_id = this.user_id;
      let sign = this.$md5(makeSign.makeSign({ timestamp, user_id, id }));
      let formData = { sign, timestamp, user_id, id }
      address.defaultAddress(formData).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.$message({
            message: '设置默认地址成功',
            type: 'success'
          });
          this.getAddressList();
        } else {
          this.$message.error(data.msg);
        }
      })
    },
    // 编辑地址
    openEditAddress (id) {
      let timestamp = Date.parse(new Date()) / 1000;
      let user_id = this.user_id;
      let sign = this.$md5(makeSign.makeSign({ timestamp, id, user_id }));
      let openEditForm = { sign, timestamp, user_id, id };
      address.getEditAddress(openEditForm).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.editForm = data.data;
          this.editForm.id = id;
          this.placeholders.province = data.data.province;
          this.placeholders.city = data.data.city;
          this.placeholders.district = data.data.district;
          setTimeout(() => {
            this.isEdit = true;
          }, 300)
        } else {
          this.$message.error(data.msg)
        }
      })
    },
    editAddress (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let user_id = this.user_id;
          this.editForm.user_id = user_id;
          let timestamp = Date.parse(new Date()) / 1000;
          this.editForm.timestamp = timestamp;
          this.editForm.address = this.address;
          this.editForm.input_address =  this.input_address + this.editForm.input_address;

          let sign = this.$md5(makeSign.makeSign(this.editForm))
          let formData = {
            sign: sign,
            user_id: this.user_id,
            contact_name: this.editForm.contact_name,
            contact_mobile: this.editForm.contact_mobile,
            address: this.editForm.address,
            email: this.editForm.email,
            postcode: this.editForm.postcode,
            longitude: this.editForm.longitude,
            latitude: this.editForm.latitude,
            province: this.editForm.province,
            city: this.editForm.city,
            district: this.editForm.district,
            timestamp: timestamp,
            id: this.editForm.id,
            input_address:this.editForm.input_address
          };
          address.editAddress(formData).then(res => {
            let data = res.data;
            if (data.code === Code.CODE_SUCCESS) {
              this.$message({
                message: '修改地址成功',
                type: 'success'
              })
              this.editForm = {}
              this.getAddressList();
              this.editForm.input_address = ''
            } else {
              this.$message({
                message: '修改地址失败，请稍后重试!',
                type: 'wraning'
              })
            }
          })
          this.isEdit = false;
        } else {
          return false;
        }
      });
    },
    onSelected (data) {
      this.AddressData = data.province.value + data.city.value + data.area.value;
      this.$store.dispatch('addAddress', this.AddressData);
    },
    // 百度地图传值
    getPoint (e) {
      this.form.province = e.province;
      this.form.city = e.city;
      this.form.district = e.district;
      this.form.latitude = e.lat;
      this.form.longitude = e.lng;
      this.editForm.province = e.province;
      this.editForm.city = e.city;
      this.editForm.district = e.district;
      this.editForm.latitude = e.lat;
      this.editForm.longitude = e.lng;
      this.address = e.address || '';
      this.input_address = e.input_address;
      this.form.input_address = e.input_address;
    }
  },
  mounted () {
    this.user_id = sessionStorage.getItem('uid');
    this.getAddressList();
  },
  watch: {
    dialogFormVisible (val) {
      if (val) {
        this.placeholders.city = "市"
        this.placeholders.district = "区"
      }
    },
    isEdit (val) {
      if (val) {
        this.AddressData = this.placeholders.province + this.placeholders.city + this.placeholders.district;
        this.$store.dispatch('addAddress', this.AddressData);
      }
    },
  }
}
</script>
<style scope>
.bm-view {
  width: 300px;
  height: 300px;
}
.gca_wrap > span {
  font-size: 30px;
  color: #e0e0e0;
  display: inline-block;
  line-height: 100px;
  margin: 20px 0 0 180px;
}
.del {
  position: absolute;
  top: -40px;
  right: 20px;
  color: #e8e8e8;
  font-size: 20px !important;
}

</style>
