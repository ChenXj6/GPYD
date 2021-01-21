import http from './http';
import urlS from './urls';


let obj = {
  addShopCar(obj){
      return http.post(urlS.addShopCar,obj)
  },
  getShopCarList(obj){
    return http.post(urlS.shopCarList,obj)
},
delShopCar(obj){
    return http.post(urlS.delShopCar,obj)
},
getweChatCode(obj){
    return http.post(urlS.weChatCode,obj)
},
collection(obj){
    return http.post(urlS.collection,obj)
},
getCollectionList(obj){
    return http.post(urlS.collectionList,obj)
},
changeNum(obj){
  return http.post(urlS.changeNum,obj)
}
};

export default obj;