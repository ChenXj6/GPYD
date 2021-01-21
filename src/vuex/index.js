import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)


const stores = new Vuex.Store({
  state: {
    car: localStorage.getItem('car') || [], //涉及到数据丢失 存在本地
    address: '',
    balance: sessionStorage.getItem('balance') || 0,
    isLogin: sessionStorage.getItem('isLogin'),
    token: sessionStorage.getItem('token'),
    user_name: sessionStorage.getItem('user_name'),
    uid: sessionStorage.getItem('uid')
  },
  getters: {
    // allMoney
    allMoney: state => {
      let allMoney = 0;
      state.car.forEach(v => {
        if (v.status_line == 1) {
          allMoney += Number(v.price) * Number(v.num)
        }
      });
      return allMoney
    },
  },
  // 改变state中的初始值 同步
  mutations: {
    login (state, data) {
      state.isLogin = true;
      state.token = data.token;
      state.user_name = data.user_name;
      state.uid = data.uid;
      // 
      sessionStorage.setItem('isLogin', true)
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('user_name', data.user_name);
      sessionStorage.setItem('uid', data.uid);
    },
    logout (state) {
      state.isLogin = false;
      state.token = '';
      state.user_name = '';
      state.uid = '';
      state.balance = '';
      state.car = []
      // 
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('uid');
      sessionStorage.removeItem('user_name');
      sessionStorage.setItem('isLogin',false);
      sessionStorage.removeItem('balance')
      localStorage.removeItem('car');
    },
    //初始化购物车
    initCar (state, data) {
      let arr = []
      for (let i in data) {
        data[i].goods_shop_cart.forEach(v => {
          let datas = {
            good_name: v.goods_name,
            img: v.thumimage,
            num: v.goods_num,
            price: v.price || v.goods_price,
            gid: v.goods_list_id || v.goods_id,
            cart_id: v.cart_id,
            status_line: v.status_line
          };
          arr.push(datas);
        })
        state.car = arr
      }
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    //添加商品
    addGoods (state, data) {
      //传入的商品属性
      let datas = {
        good_name: data.goods_name,
        img: data.thumimage,
        num: data.num || data.quantity,
        price: data.price || data.goods_price,
        selected: true,
        gid: data.goods_list_id || data.goods_id,
        cart_id: data.cart_id,
        status_line: data.status_line
      };
      let index = -1;
      // 返回元素的索引位置 如果没有返回-1
      index = state.car.findIndex(item => {
        return item.gid == data.goods_list_id
      })
      // 如果返回-1，说明购物车里没有这个物品
      if (index == -1) {
        state.car.push(datas)
      } else {
        state.car[index].num = Number(state.car[index].num) + Number(data.num)
      }
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    // 购物车数量增加与减少
    changeNum (state, data) {
      state.car.forEach(v => {
        if (v.gid == data.goods_id) {
          v.num = data.goods_num
        }
      })
    },
    delGoods (state, productId) {  // 根据购物车id删除购物车商品 
      productId = productId.toString();
      productId = productId.split('_')
      for (let i = 0; i < productId.length; i++) {
        for (let j = 0; j < state.car.length; j++) {
          if (productId[i] == state.car[j].cart_id) {
            state.car.splice(j, 1)
          }
        }
      }
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    delShopCar (state, Gid) {
      Gid = Gid.toString();
      Gid = Gid.split('_')
      for (let i = 0; i < Gid.length; i++) {
        for (let j = 0; j < state.car.length; j++) {
          if (Gid[i] == state.car[j].gid) {
            state.car.splice(j, 1)
          }
        }
      }
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    // 添加地址
    addAddress (state, data) {
      state.address = data
    },
    //预付款
    initBeforePay (state, price) {
      state.balance = price
    },
    befovePay (state, price) {
      state.balance = state.balance - price
      sessionStorage.setItem('balance', state.balance.toFixed(2))
    }
  },
  actions: {
    login ({ commit}, data ) {
      return new Promise((resolve) => {
        commit('login', data)
        resolve()
      })
    },
    logout ({ commit }) {
      return new Promise(resolve => {
        commit('logout')
        resolve()
      })
    },
    initCar ({ commit }, data) {
      return new Promise((resolve) => {
        commit('initCar', data)
        resolve()
      })
    },
    addGoods ({ commit }, data) {
      return new Promise(resolve => {
        commit('addGoods', data)
        resolve()
      })
    },
    changeNum ({ commit }, data) {
      commit('changeNum', data)
    },
    delGoods ({ commit }, id) {
      commit('delGoods', id)
    },
    delShopCar ({ commit }, id) {
      commit('delShopCar', id)
    },
    addAddress ({ commit }, data) {
      return new Promise(resolve => {
        commit('addAddress', data)
        resolve()
      })
    },
    befovePay ({ commit }, price) {
      commit('befovePay', price)
    },
    initBeforePay ({ commit }, price) {
      commit('initBeforePay', price)
    }
  }
})

export default stores