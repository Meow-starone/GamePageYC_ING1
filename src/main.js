// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false;

window.eventHub = new Vue();


//检测屏幕宽指定rem基准值
(function () {
  var newRem = function () {
    var html = document.documentElement;
    html.style.fontSize = html.getBoundingClientRect().width / 10 + 'px';
  };
  window.addEventListener('resize', newRem, false);
  newRem();
})();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
