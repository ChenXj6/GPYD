<template>
  <div>
    <topB></topB>
    <headerOrder></headerOrder>
    <div class="gp_mycontainer">
      <div class="gp_cup">
        <div class="my_gpleft">
          <ul>
            <li>
              <a href="#none">订单汇总</a>
              <ul>
                <li>
                  <router-link to="/orderItem">订单明细</router-link>
                </li>
                <!-- <li>
                  <router-link to="/deliverOrder" class=""
                    >送货单明细</router-link
                  >
                </li> -->
              </ul>
            </li>
            <li>
              <a
                href="javascript:;"
                style=""
                >财务中心</a
              >
              <ul>
                <li>
                  <router-link to="/eAccount" class=""
                    >专属账号查询 <span class="red"></span
                  ></router-link>
                </li>
                <!-- <li>
                  <router-link to="/statementList" tag="a"
                    >对账单查询<span class="red"></span
                  ></router-link>
                </li> -->

                <li>
                  <router-link tag="a" to="/myConpon"
                    class=""
                    >我的工品券</router-link
                  >
                </li>
                <!-- <li>
                  <router-link to="/advancePay" tag="a"
                    class=""
                    >预付款管理</router-link
                  >
                </li> -->
                <!-- <li>
                  <router-link to="/invoiceAsk" tag="a" 
                    class=""
                    >申请开票</router-link
                  >
                </li> -->
              </ul>
            </li>
            <!-- <li>
              <a href="#none">售后服务</a>
              <ul>
                 <li>
                  <router-link tag="a" to="/returnOrder"
                    class=""
                    >退货单明细</router-link
                  >
                </li> 
                <li>
                  <router-link tag="a" to="/feedBack"
                    class=""
                    >建议反馈</router-link
                  >
                </li> 
              </ul>
            </li> -->
            <li>
              <a href="#none">我的商品</a>
              <ul>
                <li>
                  <router-link to="/payRecord" tag="a"
                    class=""
                    >购买记录</router-link
                  >
                </li>
                <li>
                  <router-link to="/myCollect" tag="a"
                    class=""
                    >我的收藏</router-link
                  >
                </li>
                <!-- <li>
                  <router-link to="/nonstandard" tag="a"
                    class=""
                    >我的非标</router-link
                  >
                </li>
                <li>
                  <router-link to="/customN" tag="a"
                    class=""
                    >自定义物料号</router-link
                  >
                </li>
                <li>
                  <router-link tag="a" to="/arrivalRemind"
                    class=""
                    >我的到货提醒</router-link
                  >
                </li> -->
              </ul>
            </li>
            <li>
              <a href="#none">账户管理</a>
              <ul>
                <li>
                  <router-link to="/address" tag="a" class=""
                    >收货地址</router-link
                  >
                </li>
                <li>
                  <router-link tag="a" to="/accountMes"
                    class=""
                    >账号信息</router-link
                  >
                </li>
                <li>
                  <router-link to="/makeInvoice" tag="a"
                    >发票信息<span class="red"></span
                  ></router-link>
                </li>
                <!-- <li>
                  <router-link tag="a" to="/bindAccount"
                    class=""
                    >绑定账号设置</router-link
                  > -->
                <!-- </li> -->
                <!-- <li><a href="https://www.gpyh.com/member/member">畅购会员</a></li> -->
                <!-- <li>
                  <a
                    href="/enterprise/enterpriseIndex?modelType=set&amp;urlType=enterpriseIndex"
                    class=""
                    >企业设置</a
                  >
                </li>
                <li>
                  <a
                    href="/printTags/printTagsPage?modelType=set&amp;urlType=printTags"
                    class=""
                    >标签打印</a
                  >
                </li> -->
              </ul>
            </li>

            <!--供应商为成为供应商时隐藏了部分菜单功能-->
            <!-- <li class="supplier" style=""><a href="#none">尾货清仓</a>
            <ul>
                <li><a href="/dzpOrderMain/myOrder?modelType=set&amp;urlType=myOrder" class="">我的订单</a></li>
                <li><a href="/dzpCustomerFinance/queryDzpCustomerStatement?modelType=set&amp;urlType=customerCheck" class="">买家对账</a></li>
				<li><a href="/dzpSupplier/regist?modelType=set&amp;urlType=registerDzp" class="">商家入驻</a></li>
				<li><a href="/dzpSupplier/dzpProtocol?modelType=set&amp;urlType=dzpProtocol" class="">入驻协议</a></li>
				<li><a href="/dzpCollect/dzpMyCollection?modelType=set&amp;urlType=dzpMyCollection&amp;type=1" class="">尾货收藏</a></li>
            </ul>
        </li> -->
            <!--供应商菜单功能-->
            <!-- <li class="isSupplier" style="display: none"><a href="#none">尾货清仓</a>
            <ul>
                <li><a href="/dzpOrderMain/myOrder?modelType=set&amp;urlType=myOrder" class="">我的订单</a></li>
                <li><a href="/dzpCustomerFinance/queryDzpCustomerStatement?modelType=set&amp;urlType=customerCheck" class="">买家对账</a></li>

				<li><a href="/dzpSupplier/regist?modelType=set&amp;urlType=registerDzp" class="">商家入驻</a></li>
				<li><a href="/dzpSupplier/dzpProtocol?modelType=set&amp;urlType=dzpProtocol" class="">入驻协议</a></li>
                <li class="supplier"><a href="/dzpSupplierSellers/myProductList?modelType=set&amp;urlType=myProduct" class="">发布商品</a>
                </li>
                <li>
                    <a href="/dzpOrderMain/soldProductList?modelType=set&amp;urlType=soldProductList&amp;orderType=0" class="">已卖出商品</a></li>
                <li><a href="/dzpDeposit/recharge?modelType=set&amp;urlType=depositIndex" class="">保证金余额</a>
                </li>
                <li><a href="/dzpSupplierCheck/queryDzpPStatement?modelType=set&amp;urlType=supplierCheck" class="">卖家开票</a></li>

				<li><a href="/dzpCollect/dzpMyCollection?modelType=set&amp;urlType=dzpMyCollection&amp;type=1" class="">尾货收藏</a></li>


            </ul>
        </li> -->
          </ul>
        </div>
        <div class="gp_core">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <footH></footH>
  </div>
</template>

<script>
import headerOrder from '../../components/Orders/headerOrder'
import footH from '../../components/HeaderFooter/_footer'
import topB from '../../components/HeaderFooter/topBar'
export default {
  components: {
    headerOrder,
    footH,
    topB,
  },
}
</script>

<style scoped></style>
