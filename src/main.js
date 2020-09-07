// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'element-ui/lib/theme-chalk/index.css';
import {Avatar,Input,Icon,Loading,Card,Message} from 'element-ui'
import store from './autoVuex.js'
import hljs from './highlightCon.js'

Vue.config.productionTip = false;
Vue.prototype.$message = Message;
axios.defaults.baseURL = 'http://101.37.83.157:3000';
// axios.defaults.baseURL = 'http://192.168.1.100:3000';

Vue.use(VueAxios, axios);
Vue.use(Avatar);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Loading);
Vue.use(Card);

Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
