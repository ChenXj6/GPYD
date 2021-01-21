import http from './http';
import urlS from './urls';


let obj = {
  subOrderList (obj) {
    return http.post(urlS.subOrderList, obj)
  },
  getDeliverPrice (obj) {
    return http.post(urlS.getDeliverPrice, obj)
  },
  subOrder (obj) {
    return http.post(urlS.subOrder, obj)
  },
  myOrder (obj) {
    return http.post(urlS.myOrder, obj)
  },
  payHistroy (obj) {
    return http.post(urlS.payHistroy, obj)
  },
  weChatPay (obj) {
    return http.post(urlS.weChatpay, obj)
  },
  selectOrderStatus (obj) {
    return http.post(urlS.selectOrderStatus, obj)
  },
  Alipay (obj) {
    return http.post(urlS.Alipay, obj)
  },
  getCoupons (obj) {
    return http.post(urlS.getCoupons, obj)
  },
  offlinePay(obj){
    return http.post(urlS.offlinePay,obj)
  },
  get(obj){
    return http.post(urlS.getOrder,obj)
  },
  abovePay(obj){
    return http.post(urlS.abovePay,obj)
  },
  addIn(obj){
    return http.post(urlS.addIn,obj)
  },
  getIn(obj){
    return http.post(urlS.getIn,obj)
  },
  editIn(obj){
    return http.post(urlS.editIn,obj)
  },
  delIn(obj){
    return http.post(urlS.delIn,obj)
  },
  getInPrice(obj){
    return http.post(urlS.getInPrice,obj)
  },
  againSorder(obj){
    return http.post(urlS.againSubmitOrder,obj)
  },
  goPayCheck(obj){
    return http.post(urlS.goPayCheck,obj)
  }
};

export default obj;