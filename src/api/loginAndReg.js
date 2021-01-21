import http from './http';
import urlS from './urls';


let obj = {
  checkLogin(obj){
      return http.post(urlS.urlLogin,obj)
  },
  regist(obj){
    return http.post(urlS.urlReg,obj)
  },
  saveCode(obj){
    return http.post(urlS.saveCode,obj)
  },
  checkUser(obj){
    return http.post(urlS.urlCheckuser,obj)
  },
  resetPwd(obj){
    return http.post(urlS.urlResetPwd,obj)
  },
  editPwd(obj){
    return http.post(urlS.editPwd,obj)
  },
  getExclusiveAcc(obj){
    return http.post(urlS.exclusive,obj)
  },
  getAccountMes(obj){
    return http.post(urlS.accMes,obj)
  },
  editPhone(obj){
    return http.post(urlS.editPhone,obj)
  },
  resetNewPhone(obj){
    return http.post(urlS.resetNewPhone,obj)
  },
  resetRealName(obj){
    return http.post(urlS.resetRealName,obj)
  },
  resetPayPwd(obj){
    return http.post(urlS.resetPayPwd,obj)
  },
  getCommissionDetail(obj){
    return http.post(urlS.commissionDetail,obj)
  }
};

export default obj;