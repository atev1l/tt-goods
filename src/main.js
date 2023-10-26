import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Product from './views/Product.vue';
import Favorites from './views/Favorites.vue';
import Catalog from "./views/Catalog.vue";
import store from './store/store.js';

Vue.use(VueRouter);

const routes = [
 {
  path: '/',
  name: 'Home',
  component: Catalog
 },
 {
  path: '/product/:id',
  name: 'Product',
  component: Product
 },
 {
  path: '/favorites',
  name: 'Favorites',
  component: Favorites
 }
];

const router = new VueRouter({
 mode: 'history',
 routes
});

new Vue({
 store,
 render: h => h(App),
 router
}).$mount('#app');
