import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './vuex/index'
import $ from 'jquery';
import VueJsonp from 'vue-jsonp'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyLoad from 'vue-lazyload'
import Axios from 'axios';
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;

Vue.use(elementUI, { size: 'small' });
Vue.use(VueJsonp)
Vue.use(VueLazyLoad)

// video
import Video from 'video.js'
import 'video.js/dist/video-js.css'

Vue.prototype.$video = Video

//引入阿里矢量图标库
import "@/assets/iconfont/iconfont.css";
import "./assets/css/app.8f770671.css";
import "./assets/css/chunk-0761.4a28fc66.css";
import "./assets/css/chunk-elementUI.53e296ea.css";
import "./assets/css/chunk-libs.17680f1f.css";
import "./assets/css/app.9975dde9.css"
import './assets/css/css.css';


import BMap from 'vue-baidu-map'
Vue.use(BMap, {
  ak: 'YqyoVaqEMP4bHWMuEcoeoo1Indwgws4k'  //百度地图秘钥
})

router.beforeEach((to, from, next) => {
  if (to.matched.length < 0) {
    next('noD')
  }
  document.title = to.meta.title;
  if (to.meta.requireAuth) {
    if (!sessionStorage.getItem('token')) {
      next({
        path: '/login',
        query: {
          redirect: to.path
        }
      })
    } else {
      next();
    }
  } else {
    next();
  }
});




Vue.config.productionTip = false;

new Vue({
  router,
  store,
  Axios,
  $,
  render: h => h(App),
}).$mount('#app')
