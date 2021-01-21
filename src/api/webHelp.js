import http from './http';
import urlS from './urls';


let obj = {
  getNewsList (obj) {
    return http.post(urlS.newsList, obj)
  },
  getNewsDetail (obj) {
    return http.post(urlS.newsDetail, obj)
  },
  getAboutUs (obj) {
    return http.post(urlS.aboutUs, obj)
  },
  getDeliverM (obj) {
    return http.post(urlS.deliverMethod, obj)
  },
  getHelpCenterList(obj){
    return http.post(urlS.helpCenterList, obj)
  },
  getHelpCenter (obj) {
    return http.post(urlS.helpCenter, obj)
  },
  getPayMethod (obj) {
    return http.post(urlS.payMethod, obj)
  },
}
export default obj;