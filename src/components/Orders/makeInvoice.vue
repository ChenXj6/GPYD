<template>
  <div class="gc_content">
    <!-- 开发票 -->
    <div class="add_subaccount"
         v-if="isShow">
      <div style="clear: both; margin-top: 2em;"></div>
      <input type="hidden"
             id="id"
             name="id"
             value="" />
      <input type="hidden"
             id="customerInfoId"
             name="customerInfoId"
             value="" />
      <div class="input_check"
           @click="checkType">
        <b>选择开票类型</b>
        <el-button type="primary"
                   @click="isShow = false"
                   style="float:right;clear:both">返回发票列表</el-button>
        <div style="clear:both"></div>
        <label style="margin-left: 8em;">
          <input type="radio"
                 name="invoiceType"
                 id="addInvoiceType"
                 class="cftype"
                 value="2" />
          增值税专用发票</label>
        <label>
          <input type="radio"
                 name="invoiceType"
                 id="invoiceType"
                 class="cftype"
                 value="1" />
          普通发票</label>
      </div>
      <div style="clear: both; margin-top: 2em;"></div>

      <!-- 普通发票 -->
      <el-form label-width="150px"
               v-if="invoice_type == 1"
               :model="invoiceForm"
               ref="invoiceForm"
               label-position="left"
               style="margin-left:30px"
               :rules="rules1">
        <div class="g">
          <div class="u-2-5">
            <b>填写开票信息</b>
            <!-- <span id="ticketTip"
                  class="red">（除纳税人识别号外所有信息均为必填）</span> -->
            <div style="clear: both; margin-top: 1em;"></div>
            <el-form-item label="纳税人识别号"
                          prop="taxCode">
              <el-input v-model="invoiceForm.taxCode"></el-input>
            </el-form-item>
            <el-form-item label="发票抬头"
                          prop="open_head">
              <el-input v-model="invoiceForm.open_head"></el-input>
            </el-form-item>
            <el-form-item label="开票地址"
                          prop="registerAddress">
              <el-input v-model="invoiceForm.registerAddress"></el-input>
            </el-form-item>
            <el-form-item label="开票电话"
                          >
              <el-input v-model="invoiceForm.registerPhone"></el-input>
            </el-form-item>

            <div style="clear: both; margin-top: 2em;"></div>
            <b>填写收票地址</b><span class="red">（所有信息均为必填）</span>
            <div style="clear: both; margin-top: 1em;"></div>
            <el-form-item label="姓名"
                          prop="consignee">
              <el-input v-model="invoiceForm.consignee"></el-input>
            </el-form-item>
            <el-form-item label="手机号"
                          prop="mobile">
              <el-input v-model="invoiceForm.mobile"></el-input>
            </el-form-item>
            <VDistpicker :placeholders="placeholders"
                         style="width:400px;margin:0 0  10px 150px"
                         @selected="onSelect"></VDistpicker>
            <el-form-item label="地址"
                          prop="detailAddress">
              <el-input v-model="invoiceForm.detailAddress"></el-input>
            </el-form-item>
            <div style="float: left; margin-left: 10em; margin-top: 1em;">
              <label><input type="checkbox"
                       id="confimInfo"
                       v-model="invoiceForm.Status" />我确认以上信息准确无误！</label>
              <br />
              <br />
              <a href="javascript:;"
                 id="ticketSaveSub"
                 class="btn btn-s btn-blue"
                 @click="saveMessage('invoiceForm')">保存</a>
            </div>
          </div>
        </div>
      </el-form>
      <!-- 增值税发票 -->
      <el-form label-width="150px"
               v-if="invoice_type == 2"
               :model="sinvoiceForm"
               ref="sinvoiceForm"
               label-position="left"
               style="margin-left:30px"
               :rules="rules1">
        <div class="g">
          <div class="u-2-5">
            <b>填写开票信息</b><span id="ticketTip"
                  class="red">（所有信息均为必填）</span>
            <div style="clear: both; margin-top: 1em;"></div>
            <el-form-item label="单位名称"
                          prop="title">
              <el-input v-model="sinvoiceForm.title"></el-input>
            </el-form-item>
            <el-form-item label="纳税人识别号"
                          prop="taxCode">
              <el-input v-model="sinvoiceForm.taxCode"></el-input>
            </el-form-item>
            <el-form-item label="开票地址"
                          prop="registerAddress">
              <el-input v-model="sinvoiceForm.registerAddress"></el-input>
            </el-form-item>
            <el-form-item label="开票电话"
                          >
              <el-input v-model="sinvoiceForm.registerPhone"></el-input>
            </el-form-item>
            <el-form-item label="开户银行"
                          prop="bankName">
              <el-input v-model="sinvoiceForm.bankName"></el-input>
            </el-form-item>
            <el-form-item label="银行账户"
                          prop="bankAccount">
              <el-input v-model="sinvoiceForm.bankAccount"></el-input>
            </el-form-item>

            <div style="clear: both; margin-top: 2em;"></div>
            <b>填写收票地址</b><span class="red">（所有信息均为必填）</span>
            <div style="clear: both; margin-top: 1em;"></div>
            <el-form-item label="姓名"
                          prop="consignee">
              <el-input v-model="sinvoiceForm.consignee"></el-input>
            </el-form-item>
            <el-form-item label="手机号"
                          prop="mobile">
              <el-input v-model="sinvoiceForm.mobile"></el-input>
            </el-form-item>
            <VDistpicker :placeholders="placeholders"
                         style="width:400px;margin:0 0  10px 150px"
                         @selected="onSelect"></VDistpicker>
            <el-form-item label="地址"
                          prop="detailAddress">

              <el-input v-model="sinvoiceForm.detailAddress"></el-input>
            </el-form-item>
            <div style="float: left; margin-left: 10em; margin-top: 1em;">
              <label><input type="checkbox"
                       id="confimInfo"
                       v-model="sinvoiceForm.Status" />我确认以上信息准确无误！</label>
              <br />
              <br />
              <a href="javascript:;"
                 id="ticketSaveSub"
                 class="btn btn-s btn-blue"
                 @click="saveMessage('sinvoiceForm')">保存</a>
            </div>
          </div>
          <!-- <div class="u-2-5">
            <div class="input_wrap s_add"
                   id="taxRegBox"
                   style="display: block;margin:20px 0 0 30px">
                <el-form-item label="上传三证合一：">
                  <el-upload class="upload-demo"
                             drag
                             :auto-upload="false"
                             accept=".jpg, .jpeg, .png, .gif"
                             action="#"
                             multiple
                             :on-change="imgBroadcastChange">
                    <img :src="imageUrl"
                         v-if="sinvoiceForm.taxRegFile"
                         style="width:360px;height:180px" />
                    <div v-else>
                      <i class="el-icon-upload"></i>
                      <div class="el-upload__text">
                        将文件拖到此处，或<em>点击上传</em>
                      </div>
                    </div>
                  </el-upload>
                </el-form-item>
              </div>
          </div> -->
        </div>
      </el-form>
    </div>
    <!-- 发票列表 -->
    <div v-else>
      <form class="el-form"
            id="pageForm">
        <div class="list_header">
          <div class="left-title">发票信息</div>
          <div class="list_search">
            <!-- <div class="so_form"> -->
            <el-button type="primary"
                       style="float:right"
                       @click="isShow = true">添加发票</el-button>
            <!-- </div> -->
          </div>
        </div>
        <div id="list_nav"
             style="min-height: 400px;">
          <div style="margin-top: 10px; height: 40px;">
            <el-table :data="invoiceList"
                      style="width: 100%">
              <el-table-column prop="date"
                               label="发票类型"
                               width="110">
                <template slot-scope="scope">
                  {{scope.row.invoice_type | invoice_type(scope.row.invoice_type)}}
                </template>
              </el-table-column>
              <el-table-column label="开票信息">
                <el-table-column prop="open_head"
                                 label="开票抬头&单位名称"
                                 width="130">
                  <template slot-scope="scope">
                    {{scope.row.open_head || scope.row.unit_name}}
                  </template>
                </el-table-column>
                <el-table-column label="开票地址"
                                 prop="open_address">
                </el-table-column>
                <el-table-column label="开票电话"
                                 prop="open_mobile">
                </el-table-column>
              </el-table-column>
              <el-table-column label="收票信息">
                <el-table-column prop="close_name"
                                 label="收货人姓名"
                                 width="90">
                </el-table-column>
                <el-table-column label="收票地址">
                  <template slot-scope="scope">
                    {{scope.row.close_province}}{{scope.row.close_city}}{{scope.row.close_area}}{{scope.row.close_addrrss}}
                  </template>
                </el-table-column>
                <el-table-column label="收票电话"
                                 prop="close_mobile">
                </el-table-column>
              </el-table-column>
              <el-table-column label="操作"
                               width="150">
                <template slot-scope="scope">
                  <el-button type="primary"
                             size="mini"
                             @click="openEditIn(scope.row)">编辑</el-button>
                  <el-button type="danger"
                             size="mini"
                             @click="delInvoice(scope.row.id)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </form>
    </div>
    <!-- 编辑发票 -->
    <el-dialog title="编辑发票信息"
               :visible.sync="editShow"
               width="40%"
               >
      <!-- 普通发票 -->
      <el-form label-width="20%"
               v-if="editInvoiceType == 1"
               :model="editInvoiceForm"
               ref="editInvoiceForm"
               label-position="left"
               style="margin:0 20px;height:550px"
               :rules="rules1">
               <b>填写开票信息</b><span id="ticketTip"
                  class="red">（所有信息均为必填）</span>
            <el-form-item label="纳税人识别号"
                          prop="taxCode">
              <el-input v-model="editInvoiceForm.taxCode"></el-input>
            </el-form-item>
            <el-form-item label="发票抬头"
                          prop="open_head">
              <el-input v-model="editInvoiceForm.open_head"></el-input>
            </el-form-item>
            <el-form-item label="开票地址"
                          prop="registerAddress">
              <el-input v-model="editInvoiceForm.registerAddress"></el-input>
            </el-form-item>
            <el-form-item label="开票电话"
                          >
              <el-input v-model="editInvoiceForm.registerPhone"></el-input>
            </el-form-item>

            <div style="clear: both; margin-top: 2em;"></div>
            <b>填写收票地址</b><span class="red">（所有信息均为必填）</span>
            <div style="clear: both; margin-top: 1em;"></div>
            <el-form-item label="姓名"
                          prop="consignee">
              <el-input v-model="editInvoiceForm.consignee"></el-input>
            </el-form-item>
            <el-form-item label="手机号"
                          prop="mobile">
              <el-input v-model="editInvoiceForm.mobile"></el-input>
            </el-form-item>
            <VDistpicker :placeholders="placeholders"
                         style="width:400px;margin:0 0  10px 135px"
                         @selected="onSelect"></VDistpicker>
            <el-form-item label="地址"
                          prop="detailAddress">
              <el-input v-model="editInvoiceForm.detailAddress"></el-input>
            </el-form-item>
            <div style="float: left; margin-left: 10em; margin-top: 1em;">
              <label><input type="checkbox"
                       id="confimInfo"
                       v-model="editInvoiceForm.Status" />我确认以上信息准确无误！</label>
              <br />
              <br />
              <a href="javascript:;"
                 id="ticketSaveSub"
                 class="btn btn-s btn-blue"
                 @click="editIn('editInvoiceForm')">保存</a>
            </div>
      </el-form>
      <!-- 增值税发票 -->
      <el-form label-width="20%"
               v-if="editInvoiceType == 2"
               :model="editSinvoiceForm"
               ref="editSinvoiceForm"
               label-position="left"
               style="margin:0 20px;height:650px"
               :rules="rules1">
            <b>填写开票信息</b><span id="ticketTip"
                  class="red">（所有信息均为必填）</span>
            <div style="clear: both; margin-top: 1em;"></div>
            <el-form-item label="单位名称"
                          prop="title">
              <el-input v-model="editSinvoiceForm.title"></el-input>
            </el-form-item>
            <el-form-item label="纳税人识别号"
                          prop="taxCode">
              <el-input v-model="editSinvoiceForm.taxCode"></el-input>
            </el-form-item>
            <el-form-item label="开票地址"
                          >
              <el-input v-model="editSinvoiceForm.registerAddress"></el-input>
            </el-form-item>
            <el-form-item label="开票电话"
                          prop="registerPhone">
              <el-input v-model="editSinvoiceForm.registerPhone"></el-input>
            </el-form-item>
            <el-form-item label="开户银行"
                          prop="bankName">
              <el-input v-model="editSinvoiceForm.bankName"></el-input>
            </el-form-item>
            <el-form-item label="银行账户"
                          prop="bankAccount">
              <el-input v-model="editSinvoiceForm.bankAccount"></el-input>
            </el-form-item>

            <div style="clear: both; margin-top: 2em;"></div>
            <b>填写收票地址</b><span class="red">（所有信息均为必填）</span>
            <div style="clear: both; margin-top: 1em;"></div>
            <el-form-item label="姓名"
                          prop="consignee">
              <el-input v-model="editSinvoiceForm.consignee"></el-input>
            </el-form-item>
            <el-form-item label="手机号"
                          prop="mobile">
              <el-input v-model="editSinvoiceForm.mobile"></el-input>
            </el-form-item>
            <VDistpicker :placeholders="placeholders"
                         style="width:400px;margin:0 0  10px 135px"
                         @selected="onSelect"></VDistpicker>
            <el-form-item label="地址"
                          prop="detailAddress">

              <el-input v-model="editSinvoiceForm.detailAddress"></el-input>
            </el-form-item>
            <div style="float: left; margin-left: 10em; margin-top: 1em;">
              <label><input type="checkbox"
                       id="confimInfo"
                       v-model="editSinvoiceForm.Status" />我确认以上信息准确无误！</label>
              <br />
              <br />
              <a href="javascript:;"
                 id="ticketSaveSub"
                 class="btn btn-s btn-blue"
                 @click="editIn('editSinvoiceForm')">保存</a>
            </div>
      </el-form>
    </el-dialog>

  </div>
</template>
<script>
import VDistpicker from 'v-distpicker'
import makeSign from '../../api/makeSign'
import Code from '../../api/Code'
import Invoice from '../../api/orderList'
export default {
  components: {
    VDistpicker,
  },
  data () {
    return {
      //
      editShow:false,
      invoiceList: [],
      isShow: false,
      invoice_type: 1,
      // 普通发票
      invoiceForm: {
        taxCode: '',
        open_head: '',
        registerAddress: '',
        registerPhone: '',
        consignee: '',
        mobile: '',
        detailAddress: '',
        Status: 0,
      },
      // 增值税发票
      sinvoiceForm: {
        title: '',
        taxCode: '',
        registerAddress: '',
        registerPhone: '',
        bankName: '',
        bankAccount: '',
        consignee: '',
        mobile: '',
        Status: '',
        detailAddress: '',
        // taxRegFile: '',
      },
      // 编辑普通发票表单
      editInvoiceForm: {
        id:0,
        taxCode: '',
        open_head: '',
        registerAddress: '',
        registerPhone: '',
        consignee: '',
        mobile: '',
        detailAddress: '',
        Status: 0,
      },
      // 编辑增值税发票表单
      editSinvoiceForm: {
        id:0,
        title: '',
        taxCode: '',
        registerAddress: '',
        registerPhone: '',
        bankName: '',
        bankAccount: '',
        consignee: '',
        mobile: '',
        Status: '',
        detailAddress: '',
        // taxRegFile: '',
      },
      //
      editInvoiceType:1,
      // 发票验证
      rules1: {
        title: [
          {
            required: true,
            message: '请输入发票抬头',
            trigger: 'blur',
          },
        ],
        open_head: [
          {
            required: true,
            message: '请输入单位名称',
            trigger: 'blur',
          },
        ],
        taxCode: [
          { required: true, message: '请输入纳税人识别号', trigger: 'blur' },
        ],
        registerAddress: [
          { required: true, message: '请输入开票地址', trigger: 'blur' },
        ],
        registerPhone: [
          { required: true, message: '请输入开票电话', trigger: 'blur' },
          {
            pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
            message: '请输入正确的电话号码',
            trigger: 'blur',
          },
        ],
        consignee: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        mobile: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          {
            pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
            message: '请输入正确的手机号码',
            trigger: 'blur',
          },
        ],
        detailAddress: [
          { required: true, message: '请输入收票地址', trigger: 'submite' },
        ],
        bankName: [
          { required: true, message: '请输入开户银行名称', trigger: 'blur' },
          {
            pattern: '[\u4e00-\u9fa5]',
            message: '请输入正确的开户银行',
            trigger: 'blur',
          },
        ],
        bankAccount: [
          { required: true, message: '请输入银行账户', trigger: 'blur' },
          {
            pattern: /^([1-9]{1})(\d{14}|\d{18})$/,
            message: '请输入正确的银行账户',
            trigger: 'blur',
          },
        ],
        province: [
          { required: true, message: '请选择省份', trigger: 'blur' },
        ],
      },
      imageUrl: '',
      // 地址选择器默认显示
      placeholders: {
        province: '请选择省',
        city: '请选择市',
        area: '请选择区',
      },
      AddressData: {
        province: '',
        city: '',
        area: ''
      }
    }
  },
  methods: {
    // 选择普通&增值税发票
    checkType (e) {
      if (e.path[0].value == 2) {
        this.invoice_type = 2
      } else {
        this.invoice_type = 1
      }
    },
    // 地址选择器确定事件
    onSelect (data) {
      this.AddressData = {}
      this.AddressData.province = data.province.value
      this.AddressData.city = data.city.value
      this.AddressData.area = data.area.value
    },
    // 图片上传
    imgBroadcastChange (file) {
      this.sinvoiceForm.taxRegFile = file.name
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    // 提交表单事件
    saveMessage (formName) {
      this.invoiceForm.Status = Number(this.invoiceForm.Status)
      this.sinvoiceForm.Status = Number(this.sinvoiceForm.Status)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // let flag = false
          // if (this.$refs[formName].model.taxRegFile !== undefined) {
          //   flag = true
          // }
          // if (flag) {
          //   if (this.$refs[formName].model.taxRegFile == '') {
          //     flag = false
          //     this.$message({
          //       showClose: true,
          //       message: '请上传三证合一图片',
          //       type: 'warning',
          //     })
          //     return false
          //   }
          // }
          if (this.AddressData.province == '' || this.AddressData.city == '' || this.AddressData.area == '') {
            this.$message.warning('请选择地址');
            return
          }
          if (this.$refs[formName].model.Status) {
            let user_id = sessionStorage.getItem('uid');
            let invoice_type = this.invoice_type;
            let identify_num = this.$refs[formName].model.taxCode;
            let open_address = this.$refs[formName].model.registerAddress;
            let open_mobile = this.$refs[formName].model.registerPhone;
            let close_name = this.$refs[formName].model.consignee;
            let close_mobile = this.$refs[formName].model.mobile;
            let close_province = this.AddressData.province;
            let close_city = this.AddressData.city;
            let close_area = this.AddressData.area;
            let close_addrrss = this.$refs[formName].model.detailAddress;
            let is_confirm = this.$refs[formName].model.Status;
            let timestamp = Date.parse(new Date()) / 1000;

            if (invoice_type == 1) {
              let open_head = this.$refs[formName].model.open_head;
              let sign = this.$md5(makeSign.makeSign({ open_head, user_id, invoice_type, identify_num, open_address, open_mobile, close_name, close_mobile, close_province, close_city, close_area, close_addrrss, is_confirm, timestamp }))
              Invoice.addIn({ sign, open_head, user_id, invoice_type, identify_num, open_address, open_mobile, close_name, close_mobile, close_province, close_city, close_area, close_addrrss, is_confirm, timestamp }).then(res => {
                let data = res.data;
                if (data.code === Code.CODE_SUCCESS) {
                  this.$message.success(data.msg)
                  this.invoiceForm = {}
                } else {
                  this.$message.warning(data.msg)
                }
              })
            } else {
              let unit_name = this.$refs[formName].model.title;
              let account_bank = this.$refs[formName].model.bankName;
              let bank_num = this.$refs[formName].model.bankAccount;
              let sign = this.$md5(makeSign.makeSign({ account_bank, bank_num, unit_name, user_id, invoice_type, identify_num, open_address, open_mobile, close_name, close_mobile, close_province, close_city, close_area, close_addrrss, is_confirm, timestamp }))
              Invoice.addIn({ account_bank, bank_num, sign, unit_name, user_id, invoice_type, identify_num, open_address, open_mobile, close_name, close_mobile, close_province, close_city, close_area, close_addrrss, is_confirm, timestamp }).then(res => {
                let data = res.data;
                if (data.code === Code.CODE_SUCCESS) {
                  this.$message.success(data.msg)
                  this.sinvoiceForm = {}
                } else {
                  this.$message.warning(data.msg)
                }
              })
            }


          } else {
            this.$message({
              showClose: true,
              message: '请确认以上信息准确无误',
              type: 'warning',
            })
          }
        } else {
          return false
        }
      })
    },
    // 发票列表
    getInvoice () {
      let user_id = sessionStorage.getItem('uid');
      let timestamp = Date.parse(new Date()) / 1000;
      let sign = this.$md5(makeSign.makeSign({ user_id, timestamp }));
      Invoice.getIn({ user_id, timestamp, sign }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.invoiceList = data.data;
        } else {
          return
        }
      })
    },
    // 编辑发票
    openEditIn(data){
      this.editShow = true;
      if(data.invoice_type == 1){
        this.editInvoiceType = 1
        this.editInvoiceForm.taxCode = data.identify_num;
        this.editInvoiceForm.id = data.id;
        this.editInvoiceForm.open_head = data.open_head;
        this.editInvoiceForm.registerAddress = data.open_address;
        this.editInvoiceForm.registerPhone = data.open_mobile;
        this.editInvoiceForm.consignee = data.close_name;
        this.editInvoiceForm.mobile = data.close_mobile;
        this.editInvoiceForm.detailAddress = data.close_addrrss;
      }else{
        this.editInvoiceType = 2
        this.editSinvoiceForm.taxCode = data.identify_num;
        this.editSinvoiceForm.title = data.unit_name;
        this.editSinvoiceForm.id = data.id;
        this.editSinvoiceForm.registerAddress = data.open_address;
        this.editSinvoiceForm.registerPhone = data.open_mobile;
        this.editSinvoiceForm.consignee = data.close_name;
        this.editSinvoiceForm.mobile = data.close_mobile;
        this.editSinvoiceForm.detailAddress = data.close_addrrss;
        this.editSinvoiceForm.bankName = data.account_bank;
        this.editSinvoiceForm.bankAccount = data.bank_num;

      }
    },
    editIn(formName){
      this.editInvoiceForm.Status = Number(this.editInvoiceForm.Status)
      this.editSinvoiceForm.Status = Number(this.editSinvoiceForm.Status)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.AddressData.province == '' || this.AddressData.city == '' || this.AddressData.area == '') {
            this.$message.warning('请选择地址');
            return
          }
          if (this.$refs[formName].model.Status) {
            let user_id = sessionStorage.getItem('uid');
            let invoice_id = this.$refs[formName].model.id
            let invoice_type = this.editInvoiceType;
            let identify_num = this.$refs[formName].model.taxCode;
            let open_address = this.$refs[formName].model.registerAddress;
            let open_mobile = this.$refs[formName].model.registerPhone;
            let close_name = this.$refs[formName].model.consignee;
            let close_mobile = this.$refs[formName].model.mobile;
            let close_province = this.AddressData.province;
            let close_city = this.AddressData.city;
            let close_area = this.AddressData.area;
            let close_addrrss = this.$refs[formName].model.detailAddress;
            let is_confirm = this.$refs[formName].model.Status;
            let timestamp = Date.parse(new Date()) / 1000;
            if (invoice_type == 1) {
              let open_head = this.$refs[formName].model.open_head;
              let sign = this.$md5(makeSign.makeSign({ invoice_id,open_head, user_id, invoice_type, identify_num, open_address, open_mobile, close_name, close_mobile, close_province, close_city, close_area, close_addrrss, is_confirm, timestamp }))
              Invoice.editIn({ sign,invoice_id, open_head, user_id, invoice_type, identify_num, open_address, open_mobile, close_name, close_mobile, close_province, close_city, close_area, close_addrrss, is_confirm, timestamp }).then(res => {
                let data = res.data;
                if (data.code === Code.CODE_SUCCESS) {
                  this.$message.success(data.msg)
                  this.editShow = false;
                  this.editInvoiceForm = {}
                  this.getInvoice()
                } else {
                  this.$message.warning(data.msg)
                }
              })
            } else {
              let unit_name = this.$refs[formName].model.title;
              let account_bank = this.$refs[formName].model.bankName;
              let bank_num = this.$refs[formName].model.bankAccount;
              let sign = this.$md5(makeSign.makeSign({ invoice_id,account_bank, bank_num, unit_name, user_id, invoice_type, identify_num, open_address, open_mobile, close_name, close_mobile, close_province, close_city, close_area, close_addrrss, is_confirm, timestamp }))
              Invoice.editIn({ invoice_id,account_bank, bank_num, sign, unit_name, user_id, invoice_type, identify_num, open_address, open_mobile, close_name, close_mobile, close_province, close_city, close_area, close_addrrss, is_confirm, timestamp }).then(res => {
                let data = res.data;
                if (data.code === Code.CODE_SUCCESS) {
                  this.$message.success(data.msg)
                  this.editSinvoiceForm = {}
                  this.editShow = false;
                  this.getInvoice()
                } else {
                  this.$message.warning(data.msg)
                }
              })
            }


          } else {
            this.$message({
              showClose: true,
              message: '请确认以上信息准确无误',
              type: 'warning',
            })
          }
        } else {
          return false
        }
      })
    },
    // 删除发票
    delInvoice (id) {
      let invoice_id = id;
      let user_id = sessionStorage.getItem('uid');
      let timestamp = Date.parse(new Date()) / 1000;
      let sign = this.$md5(makeSign.makeSign({ timestamp, user_id, invoice_id }));
      Invoice.delIn({ sign, timestamp, user_id, invoice_id }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.$message.success(data.msg)
          this.getInvoice()
        } else {
          return
        }
      })
    }
  },
  mounted () {
    // 默认选中普通发票并显示对应的表单
    $(':radio')
      .eq(1)
      .prop('checked', true)
    this.getInvoice()
  },
  filters: {
    invoice_type (val) {
      if (val == 1) {
        return val = '普通发票'
      } else {
        return val = '增值税专用发票'
      }
    }
  }
}
</script>
<style scoped></style>
