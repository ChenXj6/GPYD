import http from './http'
import urlS from './urls'

let obj = {
  getBanner(obj){
    return http.post(urlS.indexBanner,obj)
  },
  // 工配类型
  getWorkWith(obj){
    return http.post(urlS.workwith,obj)
  },
  // 获取总分类
  getRestrictitem(obj){
    return http.post(urlS.classTypeItem,obj)
  },
  // 获取商品总分类
  getCategory(obj){
    return http.post(urlS.category,obj)
  },
  // 获取首页总分类
  getAllCategory(obj){
    return http.post(urlS.allCategory,obj)
  },
  getService(obj){
    return http.post(urlS.service,obj)
  },
  getGoodDetail(obj){
    return http.post(urlS.gooddetails,obj)
  },
  goodFilter(obj){
    return http.post(urlS.goodsFilter,obj)
  },
  getSimilarGoods(obj){
    return http.post(urlS.similarGoods,obj)
  }
}

export default obj