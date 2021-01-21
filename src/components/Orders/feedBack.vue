<template>
  <div class="gc_content">
    <div class="list_header">
      <div class="list_ul">
        <h4>建议反馈</h4>
      </div>
    </div>
    <div class="sug_btn">
      <el-button type="primary"
                 icon="el-icon-edit"
                 @click="feedBack('.sug_table','.suggestion')">建议反馈</el-button>
      <el-button type="info"
                 @click="feedBack('.suggestion','.sug_table')">返回</el-button>
    </div>
    <!-- 意见反馈表单 -->
    <div class="sug_table">
      <el-table :data="tableData"
                style="width: 100%;text-align:center">
        <el-table-column label='时间'
                         width="150">
          <template slot-scope="scope">
            <span>{{scope.row.date | date}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="content"
                         label="内容"
                         width="450">
        </el-table-column>
        <el-table-column prop="phone"
                         label="联系电话"
                         width="110">
        </el-table-column>
        <el-table-column label="处理状态">
          <template slot-scope="scope">
            <span>{{scope.row.state == 0 ? '未处理' : '已处理'}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="appendix"
                         label="附件">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini"
                       type="primary"
                       plain
                       @click="seeDetails(scope.row)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 详情 -->
    <el-dialog title="查看详情"
               :visible.sync="centerDialogVisible"
               width="40%">
      <el-form :model="detailsForm"
               label-position="right">
        <el-form-item label="主题:"
                      label-width="200">
          <div>{{detailsForm.theme}}</div>
        </el-form-item>
        <el-form-item label="反馈内容:"
                      label-width="200">
          <el-input style="width:500px"
                    readonly
                    type="textarea"
                    autosize
                    v-model="detailsForm.content"></el-input>
        </el-form-item>
        <el-form-item label="附件:"
                      label-width="200">
          <div>{{detailsForm.appendix}}</div>
        </el-form-item>
        <el-form-item label="状态:"
                      label-width="200">
          <el-switch v-model="detailsForm.state"
                     active-text="已处理"
                     active-color="#13ce66"
                     inactive-color="#ff4949"
                     inactive-text="未处理"></el-switch>
        </el-form-item>
        <el-form-item label="联系电话:"
                      label-width="200">
          <div>{{detailsForm.phone}}</div>
        </el-form-item>
        <el-form-item label="反馈时间:"
                      label-width="200">
          <div>{{detailsForm.date | date}}</div>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!-- 意见反馈填写 -->
    <div class="suggestion"
         style="display:none">
      <!-- <div class="dropdown-layer bottom-right"> -->
      <el-form :model="suggestForm"
               ref="suggestForm"
               :rules="rules1">
        <i class="fa fa-close"></i>
        <div class="layer-header">工品易达-意见反馈</div>
        <div>
          <p class="l1">尊敬的用户，您好：</p>
          <p class="l2">
            为了给您提供更好的服务，我们希望收集您使用工品易达时的看法或建议。对您的配合和支持表示衷心感谢！
          </p>
          <p class="l3 field-name">
            <i class="el-icon-edit"></i> &nbsp;<span>您对工品易达有什么想法，请大声说出来吧！<span class="red">*</span></span>
          </p>
          <p class="l4 field-content">
            <el-input type="textarea"
                      :rows="5"
                      v-model="suggestForm.content"
                      placeholder="请输入您的反馈意见，如哪里功能不好用、商品信息错误、哪里不会用等">
            </el-input>
          </p>
          <p class="l5 field-name">
            <i class="el-icon-upload2"></i> &nbsp;<span>上传相关截图或文件（若无可不上传）</span>
          </p>
          <p class="l6 field-content">
            <el-upload class="upload-demo"
                       action="#"
                       :auto-upload='autoupload'
                       :on-change="handlePreview"
                       :before-remove="beforeRemove"
                       :before-upload="beforeUpload"
                       multiple>
              <input type="hidden" v-model="suggestForm.appendix"
                     />
              <el-button size="small"
                         type="primary">点击上传</el-button>
              <div slot="tip"
                   class="el-upload__tip">(支持上传图片、word、PDF、excel，5M以内)</div>
            </el-upload>
          </p>
          <p class="l7 field-name">
            <i class="el-icon-phone"></i> &nbsp;<span>请留下您的联系方式，以便我们及时对您提出的意见给出反馈</span>
          </p>
          <el-form-item class="l8 field-content"
                        prop="phone">
            <el-input v-model="suggestForm.phone"
                      placeholder="请输入您的手机号码"></el-input>
          </el-form-item>
          <p class="l9"
             style="margin-left:20px">
            如有疑问，您还可以联系我们的专属客服：<span class="darkblue customerServicePhone">0512-6670 8052</span>
          </p>
          <p class="l10">
            <el-button style='width:200px;height:36px;display:block;margin:30px auto 0'
                       type="success"
                       @click="submitForm('suggestForm')">提交</el-button>
          </p>
        </div>
      </el-form>
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      autoupload: false,
      tableData: [
        { date: '1593567418', content: '还是大幅度深V好几十发哈', phone: 14725836924, state: 0, appendix: '' },
        { date: '1593456148', content: 'fsdfsdfdsfdsf', phone: 15472565412, state: 0, appendix: '' },
        { date: '1593357840', content: '范德萨发生纠纷', phone: 14535512512, state: 1, appendix: '' },
        { date: '1592451601', content: '副驾驶的红包飞过了就开始打包发你', phone: 12542551544, state: 0, appendix: '' }
      ],
      centerDialogVisible: false,
      // 点击详情表单
      detailsForm: {
        theme: '无',
        date: 0,
        content: '',
        phone: '',
        state: 0,
        appendix: ''
      },
      // 意见反馈提交表单
      suggestForm: {
        date: 0,
        content: '',
        phone: '',
        appendix: ''
      },
      rules1: {
        phone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { pattern: /^1[3|4|5|7|8][0-9]\d{8}$/, message: '请输入正确的手机号码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击详情事件
    seeDetails (res) {
      this.centerDialogVisible = true;
      this.detailsForm.date = res.date;
      this.detailsForm.content = res.content;
      this.detailsForm.state = Boolean(res.state);
      this.detailsForm.phone = res.phone;
      this.detailsForm.appendix = res.appendix;
    },
    feedBack (h, b) {
      $(h).toggle();
      $(b).toggle()
    },
    // 上传文件
    handlePreview (file) {
      this.suggestForm.appendix = file.name
    },
    beforeRemove (file) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    beforeUpload (file) {
      const fileSize = file.size / 1024 / 1024 > 5;
      if (fileSize) {
        this.$message.error('上传文件大小不能超过 5MB!');
      }
    },
    // 意见反馈提交
    submitForm (formName) {
      let date = new Date()
      this.suggestForm.date = date.getTime()
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$alert('您可以在我的工品-售后服务-意见反馈中跟踪意见反馈动态，谢谢！', '您的意见我们已经收到', {
            confirmButtonText: '确定',
            type: 'success',
            center: true
          })
          this.feedBack ('.suggestion', '.sug_table')
        } else {
          this.$message({
            message: '意见反馈表单提交失败',
            type: 'warning'
          });
        }

      })
    }
  },
  //过滤器 让原来数据按特定的格式返回
  filters: {
    //时间戳转化为（年-月-日 时:分:秒）
    date: function (val, format = 'yyyy-MM-dd hh:mm:ss') {
      var date = new Date(val * 1000);
      if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
      };
      for (let k in o) {
        if (new RegExp(`(${k})`).test(format)) {
          let str = o[k] + '';
          format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length));
        }
      }
      return format;
    }
  },
}
</script>

<style scoped>
.suggestion {
  width: 600px;
}
.suggestion {
  margin-top: 10px;
}
.suggestion .fa-close {
  display: none;
}
.suggestion .fa {
  margin-left: 6px;
  font-size: 14px;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.suggestion .layer-header {
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
}
.suggestion form p {
  line-height: 1.5;
  margin-bottom: 7px;
}
.suggestion form p {
  line-height: 1.5;
  margin-bottom: 7px;
}
.suggestion .field-content {
  padding: 0 20px;
}
</style>
