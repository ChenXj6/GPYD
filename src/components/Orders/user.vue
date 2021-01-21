<template>
  <div class="gc_content">
    <div class="u-info-box">
      <div class="u-info">
        <ul class="col1">
          <div class="mill-headimg" style="border-color:#fff">
            <img src="https://site.gpyh.com/static/img/avtr.png" />
          </div>
          <div class="name">
            <div class="username">
              <span>C18757815753</span>
            </div>
            <div class="clear"></div>
            <li>
              <a href="/account/index?modelType=set&amp;urlType=index"
                >账户安全：
                <span id="customer_safety">很安全</span>
              </a>
            </li>
            <li>
              <i></i
              ><a href="/account/index?modelType=set&amp;urlType=index">
                <i class="fa fa-check-circle" aria-hidden="true"></i>已绑定手机
              </a>
            </li>
          </div>
        </ul>
        <ul class="col2">
          <li>预付金额<span>￥ 0</span></li>
          <li>
            我的工品券<a
              href="/prizedraw/myPrizeRecord?modelType=finance&amp;urlType=myPrizeRecord&amp;isTake=0&amp;showType=all&amp;status=usable"
              >4</a
            >
          </li>
          <li>
            抽奖机会<a href="https://www.gpyh.com/prizedraw/prizeDrawPage">0</a>
          </li>
        </ul>
        <ul class="col3"></ul>
      </div>
    </div>

    <div class="list_header">
      <div class="list_ul">
        <form >
          <ul>
            <li><a href="javascript:;" class="">最近订单</a></li>
            <li><a href="javascript:;" class="">未发货</a></li>
            <li><a href="javascript:;" class="">已发货</a></li>
            <input
              type="hidden"
              id="deliveryStatus"
              name="deliveryStatus"
              value=""
            />
          </ul>
        </form>
      </div>
      <a href="javascript:;" style="float: right;">查看所有订单</a>
    </div>
    <div class="navTitle">
      <el-table :data="orderData" style="width: 100%" stripe>
        <el-table-column prop="date" label="商品信息" width="240">
        </el-table-column>
        <el-table-column prop="name" label="规格"> </el-table-column>
        <el-table-column prop="address" label="条码"> </el-table-column>
        <el-table-column prop="address" label="品牌"> </el-table-column>
        <el-table-column prop="address" label="数量"> </el-table-column>
        <el-table-column prop="address" label="券后单价"> </el-table-column>
        <el-table-column prop="address" label="状态"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>


    <div class="modal_box" style="width:50%; height:auto; display: none;">
      <h4 class="modal_title">
        查看交货状态<span class="modal_close"
          ><img src="/static/dist/img/address_dele.png"
        /></span>
      </h4>
      <div class="modal_content" style="height:auto; padding: 8px 12px;">
        <table class="check_status">
          <tbody>
            <tr>
              <th>送货单号</th>
              <th>物流公司</th>
              <th>物流单号</th>
              <th>送货时间</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="modal_control" style="margin: 5px 0px;">
        <a href="javascript:;" class="modal_btn" style="width:70px;">确定</a>
      </div>
    </div>
    <div
      id="deliveryInfo"
      class="modal_control"
      style="height:auto; padding: 8px 12px;display: none;"
    >
      <table class="check_status">
        <tbody id="deliveryInfoList"></tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderData: {},
    }
  },
  methods: {},
  mounted(){

  }
}
$(function(){
      //获取不同状态的订单
    $(".list_ul li").find('a').eq(0).addClass('actived')
    $(".list_ul li").find('a').click(function(){
      $(this).addClass('actived').parent().siblings().find('a').removeClass('actived')
    })
})
</script>
<style scoped></style>
