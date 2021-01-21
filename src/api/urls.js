// const url = 'http://cp.xmgpzx.com'
const url = 'https://cp.gpyd.cn'

const BWS = url + '/upload/';

// 用户
const urlLogin = 'user/login'; //登录
const urlReg = 'user/registapi'; // 注册
const urlCheckuser = 'user/checkuser'; //验证身份 
const urlResetPwd = 'user/resetpwd' //重置密码 
const editPwd = 'user/uploginpwd' //修改密码
const saveCode = 'user/sendsms' //获取短信验证码
const exclusive = 'exclusive/exclusive' //专属账号
const accMes = 'user/accountinfo'  // 账户信息
const editPhone = 'user/editphone' // 修改手机号
const resetNewPhone = 'user/newphone' //设置新手机号
const resetRealName = 'user/setrealname' // 设置真实姓名
const resetPayPwd = 'user/setpaymentpass' // 设置支付密码
const commissionDetail = 'user/commissionDetail' // 设置支付密码


//首页
const indexBanner = 'index/banner'; //轮播图
const workwith = 'index/workwith' //工配类型
const category = 'index/category' //商品总分类
const allCategory = 'index/allcategories' //首页总分类
const classTypeItem = 'index/classttypeitem' //首页所有商品类型
const goodsFilter = 'index/goodsfiltrate' //筛选分类商品
const gooddetails = 'index/commoditydetails' //商品详情
const service = 'index/service' //客服电话
const similarGoods = 'index/similarGoods' //商品详情页 同类商品

//地址
const addAddress = 'user/addshippingadd'
const getEditAddress = 'user/editshippingpage'
const editAddress = 'user/editshippingadd'
const addressList = 'user/shippingaddress'
const delAddress = 'user/deleteaddress'
const defaultAddress = 'user/setdefault'


//购物车
const addShopCar = 'usercenter/joinshopcart'
const shopCarList = 'usercenter/shopcartlist'
const delShopCar = 'usercenter/deleteshopcart'
const weChatCode = 'usercenter/deleteshopcart' //微信支付二维码
const collection = 'usercenter/collection'
const collectionList = 'usercenter/collectionList'

// 帮助中心
const newsList = 'notice/newscenter' //新闻分类
const newsDetail = 'notice/newsdetails' //新闻详情
const aboutUs = 'notice/aboutus' // 关于我们
const deliverMethod = 'notice/distribution' // 配送方式
const helpCenter = 'notice/helpcontent' // 帮助中心
const helpCenterList = 'notice/helpcenter' //帮助中心列表
const payMethod = 'notice/payment' //支付方式

//订单管理
const subOrderList = 'orderlist/submitorderpage' //提交订单页面
const getDeliverPrice = 'orderlist/getShippingGee' //获取配送费
const subOrder = 'orderlist/submitorder' //提交订单
const myOrder = 'orderlist/orderlist' //我的订单
const payHistroy = 'orderlist/purchasehistory' //购买记录
const weChatpay = 'wxpay/wxQrCodePay' //微信字符生成二维码
const selectOrderStatus = 'usercenter/selectOrderStatus' //微信二维码轮询
const Alipay = 'alipay/aliCodePay' //支付宝生成二维码
const changeNum = 'usercenter/upshowcart' //购物车改变商品数量
const getCoupons = 'orderlist/getCoupons' // 获取优惠券
const offlinePay = 'orderlist/confirmpayment' //线下支付
const getOrder = 'orderlist/goPay'   // 微信支付（支付页面）
const abovePay = 'payment/advancepayment' // 预支付
const goPayCheck = 'orderlist/goPayCheck' // 下架商品Check

const addIn = 'usercenter/addInvoice' //添加发票
const getIn = 'usercenter/getInvoice' //获取发票
const editIn = 'usercenter/editInvoice' //添加发票
const getInPrice = 'orderlist/invoicePrice' //获取发票价格
const delIn = 'usercenter/deleteInvoice' //删除发票
const againSubmitOrder = 'usercenter/againJoinShopCart' //再来一单

export default { commissionDetail, goPayCheck, againSubmitOrder, delIn, getIn, getInPrice, editIn, addIn, url, abovePay, getOrder, offlinePay, allCategory, selectOrderStatus, Alipay, getCoupons, changeNum, weChatpay, payHistroy, myOrder, subOrder, getDeliverPrice, subOrderList, helpCenterList, payMethod, helpCenter, deliverMethod, aboutUs, newsDetail, newsList, resetPayPwd, resetRealName, resetNewPhone, editPhone, accMes, exclusive, similarGoods, collectionList, collection, weChatCode, delShopCar, shopCarList, addShopCar, saveCode, getEditAddress, defaultAddress, delAddress, addressList, editAddress, addAddress, service, editPwd, gooddetails, goodsFilter, classTypeItem, urlLogin, urlReg, urlCheckuser, urlResetPwd, BWS, indexBanner, workwith, category };