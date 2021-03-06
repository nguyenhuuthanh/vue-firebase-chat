import Vue from "vue";
import App from "./App.vue";
import router from './router';
import store from './store';
import firebase from "./firebase/init";
import VueChatScroll from 'vue-chat-scroll';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueChatScroll);

Vue.config.productionTip = false;

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
