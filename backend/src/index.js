import dotenv from 'dotenv';
import Vue from 'vue';
import App from './components/App.vue';

dotenv.config();

new Vue({
  el: '#app',
  render: h => h(App),
})