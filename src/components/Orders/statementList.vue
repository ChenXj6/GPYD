<template>
  <div class="gc_content">
    <form
      id="pageForm"
      action="/statement/statementList?modelType=finance&amp;urlType=statementList"
      method="post"
    >
      <div class="list_header">
        <div class="list_ul">
          <h4>对账单查询</h4>
        </div>
        <div class="list_search">
          <div id="searchForm" class="so_form">
            <input
              class="so_txt"
              id="statementCode"
              name="statementCode"
              type="text"
              value=""
              placeholder="对账单号"
            />
            <input
              class="so_btn"
              onclick="serch('','s')"
              type="button"
              value="搜索"
            />
          </div>
          <div class="search_rig" @click="openCheck">
            <span>高级</span> <i class="fa iconfont icon-xialajiantou"></i>
          </div>
        </div>
      </div>
      <ul class="state-tabs" id="ulStatus">
        <li value="8" class="">
          <a>全部对账单</a>
        </li>
        <li value="0"><a>待支付（0）</a></li>
        <li value="2"><a>待确认立账（0）</a></li>
      </ul>
      <div class="list_form send_form">
        <div class="close_time">
          <div class="time_left">
            <label for="">成交时间：</label>
            <el-date-picker
              v-model="value2"
              type="daterange"
              :picker-options="pickerOptions"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </div>
          <input
            style="display:inline-block;margin:2px 0 0 30px"
            type="button"
            class="list_submit btn btn-blue"
            value="搜索"
          />
          <div class="time_right">
            <a class="" onclick="serch(-1,'','c')">所有历史对账单</a>
          </div>
        </div>
      </div>
      <input type="hidden" name="pageNum" id="pageNum" value="1" />
    </form>

    <div style="margin:10px 0;">
      <div style="float:left;">
        <input type="checkbox" id="checkboxAll" style="margin-left:11px;" />
        全选
      </div>
      <div style="text-align:right;color:#999;">
        总价：<span style="color:#e76209;font-size:18px;"
          >￥<span id="totalAmount">0</span></span
        >
        <button
          id="gotoPayBtn"
          style="margin-left:15px;width:67px;height:24px;text-align:center;line-height:24px;color:#fff;background:#e68828;border:none;display:inline-block;"
        >
          去支付
        </button>
      </div>
    </div>
    无符合查询条件的记录。
  </div>
</template>
<script>
export default {
  data() {
    return {
      //时间选择器设置
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            },
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            },
          },
        ],
      },
      value2: '',
    }
  },
  mounted() {
    $('.state-tabs li')
      .eq(0)
      .addClass('active')
    $('.state-tabs li').on('click', function() {
      $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
    })
  },
  methods: {
    // 高级
    openCheck() {
      $('.list_form').toggle('fast')
    },
  },
}
</script>

<style scoped>
.list_header {
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px;
}
.state-tabs {
  border-bottom: 1px solid #ccc;
  margin: 20px 0;
  height: 25px;
  color: #3a3a3a;
}
.state-tabs > li {
  display: inline-block;
  height: 22px;
  border-bottom: 4px solid transparent;
  padding: 0 20px;
  font-size: 14px;
  cursor: pointer;
}
.state-tabs > li.active {
  border-bottom-color: #3a95e7;
  font-weight: bold;
}
.send_form {
  padding-top: 10px;
}
.list_form {
  width: 100%;
  height: 70px;
  overflow: hidden;
}
.close_time {
  margin-top: 10px;
  height: 28px;
  width: 800px;
}
.close_time .time_left {
  float: left;
}
.close_time .time_right {
  float: right;
  height: 28px;
}
.state-tabs > li.active {
  border-bottom-color: #3a95e7;
  font-weight: bold;
}
</style>
