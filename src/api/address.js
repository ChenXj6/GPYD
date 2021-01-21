import http from './http'
import urlS from './urls'

let obj = {
  addAddress(obj){
    return http.post(urlS.addAddress,obj)
  },
  editAddress(obj){
    return http.post(urlS.editAddress,obj)
  },
  getEditAddress(obj){
    return http.post(urlS.getEditAddress,obj)
  },
  getAddressList(obj){
    return http.post(urlS.addressList,obj)
  },
  delAddress(obj){
    return http.post(urlS.delAddress,obj)
  },
  defaultAddress(obj){
    return http.post(urlS.defaultAddress,obj)
  }
}

export default obj