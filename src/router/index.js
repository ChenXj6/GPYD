import Vue from 'vue';
import Router from 'vue-router';


// //畅购商城
// // import ShoppingMall from '../views/ShoppingMall/shoppingMall'


Vue.use(Router);
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: resolve => require(['../views/Main/main'], resolve),
      redirect: '/appMain',
      children: [
        { path: "/appMain", name: 'appMain', component: resolve => require(['../components/MainContent/app_main'], resolve), meta: { title: "工品易达—焊材配件一站式采购平台", requireAuth: false, keepAlive: true } },
        { path: "/toolBrand", name: 'toolBrand', component: resolve => require(['../components/MainContent/toolBrand'], resolve), meta: { title: "品牌馆-工品易达", requireAuth: false } },
        // {path:"/clearGoods",name:'clearGoods',component: resolve => require(['../components/MainContent/clearGoods'], resolve)ClearGoods,meta:{title:"尾货清仓螺丝紧固件-工品易达",requireAuth:false}},
        { path: "/notice", name: 'notice', component: resolve => require(['../components/Notice/notice'], resolve), meta: { title: "工品公告-工品易达", requireAuth: false, keepAlive: true } },
        // {path:"/quickOrder",name:'quickOrder',component: resolve => require(['../components/MainContent/quickOrder'], resolve),meta:{title:"快速下单-工品易达",requireAuth:true}},
        { path: "/mask", name: "mask", component: resolve => require(['../common/mask'], resolve) },
        { path: "/goodlist", name: "goodlist", component: resolve => require(['../components/GoodList/goodList'], resolve), meta: { title: "商品列表页", requireAuth: false } },
        { path: "/gooddetails", name: "gooddetails", component: resolve => require(['../components/GoodDetails/goodDetails'], resolve), meta: { title: "商品详情", requireAuth: false } },
        {
          path: "/myCart",
          name: "myCart",
          component: resolve => require(['../views/MyCart/myCart'], resolve),
          meta: { title: "我的购物车", requireAuth: true },
          children: [
            { path: "/mycart", name: "mycart", component: resolve => require(['../components/MyCart/myCart'], resolve), meta: { title: "我的购物车", requireAuth: true } },
            { path: "/payOrder", name: "payOrder", component: resolve => require(['../components/MyCart/payOrder'], resolve), meta: { title: "支付订单", requireAuth: true } },
            { path: "/subOrder", name: "subOrder", component: resolve => require(['../components/MyCart/subOrder'], resolve), meta: { title: "提交订单", requireAuth: true } },
          ]
        },
        {
          path: "/webhelp",
          name: "webhelp",
          component: resolve => require(['../components/WebHelp/webhelp'], resolve),
          meta: { title: "帮助中心", requireAuth: false, keepAlive: true },
          redirect: '/helpCenter',
          children: [
            { path: "/aboutUs", name: "aboutUs", component: resolve => require(['../components/WebHelp/aboutUs'], resolve), meta: { title: "关于我们", requireAuth: false } },
            { path: "/deliverMethod", name: "deliverMethod", component: resolve => require(['../components/WebHelp/deliverMethods'], resolve), meta: { title: "配送方式", requireAuth: false } },
            { path: "/helpCenter", name: "helpCenter", component: resolve => require(['../components/WebHelp/helpCenter'], resolve), meta: { title: "帮助中心", requireAuth: false } },
            {
              path: "/newsCenter",
              name: "newsCenter",
              component: resolve => require(['../components/WebHelp/newsCenter'], resolve),
              meta: { title: "新闻中心", requireAuth: false }
            },
            { path: "/newDetail", name: "newDetail", component: resolve => require(['../components/WebHelp/newDetail'], resolve), meta: { title: "新闻详情", requireAuth: false } },
            { path: "/payMethod", name: "payMethod", component: resolve => require(['../components/WebHelp/payMethod'], resolve), meta: { title: "支付方式", requireAuth: false } },
          ]
        }
      ]
    }, {
      path: '/login',
      name: 'login',
      component: resolve => require(['../views/Login/login'], resolve),
      meta: { title: '登录-工品易达' }
    }, {
      path: '/register',
      name: 'register',
      component: resolve => require(['../views/Register/register'], resolve),
      meta: { title: '注册-工品易达' }
    }, {
      path: '/findPwd',
      name: 'findPwd',
      component: resolve => require(['../views/FindPwd/findpwd'], resolve),
      redirect: '/FPinputUser',
      children: [
        { path: '/FPinputUser', name: 'FPinputUser', component: resolve => require(['../components/FindPwd/Fpwd'], resolve), meta: { title: '找回密码-工品易达' }, }
      ]
    },
    {
      path: '/myorder',
      name: 'myorder',
      component: resolve => require(['../views/myOrders/myOrder'], resolve),
      redirect: '/orderItem',
      requireAuth: true,
      children: [
        { path: '/user', name: 'user', component: resolve => require(['../components/Orders/user'], resolve), meta: { title: '我的工品', requireAuth: true } },
        { path: "/orderItem", name: "orderItem", component: resolve => require(['../components/Orders/orderItem'], resolve), meta: { title: "订单明细-我的工品", requireAuth: true } },
        { path: "/deliverOrder", name: "deliverOrder", component: resolve => require(['../components/Orders/deliverOrder'], resolve), meta: { title: "送货单明细-我的工品", requireAuth: true } },
        { path: "/eAccount", name: "eAccount", component: resolve => require(['../components/Orders/exclusiveAccount'], resolve), meta: { title: "专属账号-我的工品", requireAuth: true } },
        { path: "/address", name: "address", component: resolve => require(['../components/Orders/address'], resolve), meta: { title: "收货地址-我的工品", requireAuth: true } },
        { path: "/statementList", name: "statementList", component: resolve => require(['../components/Orders/statementList'], resolve), meta: { title: "对账单查询-我的工品", requireAuth: true } },
        { path: "/makeInvoice", name: "makeInvoice", component: resolve => require(['../components//Orders/makeInvoice'], resolve), meta: { title: "开票资料-我的工品", requireAuth: true } },
        { path: "/advancePay", name: "advancePay", component: resolve => require(['../components/Orders/advancePay'], resolve), meta: { title: "预付款-我的工品", requireAuth: true } },
        { path: "/invoiceAsk", name: "invoiceAsk", component: resolve => require(['../components/Orders/invoiceAsk'], resolve), meta: { title: "申请开票-我的工品", requireAuth: true } },
        { path: "/returnOrder", name: "returnOrder", component: resolve => require(['../components/Orders/returnOrder'], resolve), meta: { title: "退货单-我的工品", requireAuth: true } },
        { path: "/feedBack", name: "feedBack", component: resolve => require(['../components/Orders/feedBack'], resolve), meta: { title: "建议反馈-我的工品", requireAuth: true } },
        { path: "/payRecord", name: "payRecord", component: resolve => require(['../components/Orders/payRecord'], resolve), meta: { title: "购买记录-我的工品", requireAuth: true } },
        { path: "/myCollect", name: "myCollect", component: resolve => require(['../components/Orders/myCollect'], resolve), meta: { title: "我的收藏-我的工品", requireAuth: true } },
        { path: "/nonstandard", name: "nonstandard", component: resolve => require(['../components/Orders/nonstandard'], resolve), meta: { title: "我的非标-我的工品", requireAuth: true } },
        { path: "/customN", name: "customN", component: resolve => require(['../components/Orders/customNumber'], resolve), meta: { title: "自定义物料号-我的工品", requireAuth: true } },
        { path: "/arrivalRemind", name: "arrivalRemind", component: resolve => require(['../components/Orders/arrivalRemind'], resolve), meta: { title: "到货提醒-我的工品", requireAuth: true } },
        { path: "/accountMes", name: "accountMes", component: resolve => require(['../components/Orders/accountMessage'], resolve), meta: { title: "账号信息-我的工品", requireAuth: true } },
        { path: "/bindAccount", name: "bindAccount", component: resolve => require(['../components/Orders/bindAccount'], resolve), meta: { title: "账号绑定-我的工品", requireAuth: true } },
        { path: "/myConpon", name: "myConpon", component: resolve => require(['../components/Orders/myConpons'], resolve), meta: { title: "我的优惠券-我的工品", requireAuth: true } },
        { path: "/commission", name: "commission", component: resolve => require(['../components/Orders/commission'], resolve), meta: { title: "佣金详情-我的工品", requireAuth: true } },
      ]
    }
    , {
      path: "*",
      name: "error",
      component: resolve => require(['../components/404/404.vue'], resolve),
      meta: { title: "页面404" }
    }
  ]
})


