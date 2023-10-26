import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
 state: {
  products: [],
  favorites: []
 },
 mutations: {
  SET_PRODUCTS(state, products) {
   state.products = products;
  },
  ADD_TO_FAVORITES(state, product) {
   if(!state.favorites.some(fav => fav.id === product.id)) {
    state.favorites.push(product);
   }
  },
  REMOVE_FROM_FAVORITES(state, productId) {
   state.favorites = state.favorites.filter(product => product.id !== productId);
  },
  toggleFavourite(state, product) {
   const foundProduct = state.products.find(p => p.id === product.id);
   if (foundProduct) {
    Vue.set(foundProduct, 'isFavourite', !foundProduct.isFavourite);
   }
  }
 },
 actions: {
  fetchProducts({ state, commit }) {
   if (state.products.length) {
    return Promise.resolve();
   }

   return axios.get('https://fakestoreapi.com/products')
    .then(response => {
     commit('SET_PRODUCTS', response.data);
    });
  },

  // toggleFavorite({ commit, state }, product) {
  //  if (state.favorites.some(fav => fav.id === product.id)) {
  //   commit('REMOVE_FROM_FAVORITES', product.id);
  //  } else {
  //   commit('ADD_TO_FAVORITES', product);
  //  }
  // },



  fetchProductById({ dispatch, getters }, id) {
   return new Promise((resolve, reject) => {
    dispatch('fetchProducts').then(() => {
     const product = getters.getProductById(id);
     if (product) {
      resolve(product);
     } else {
      reject(new Error('Product not found'));
     }
    });
   });
  }
 },
 getters: {
  favoritesList: state => state.favorites,
  favoritesCount: state => state.products.filter(product => product.isFavourite).length,
  isFavorite: state => product => state.favorites.some(fav => fav.id === product.id),
  allProducts: state => state.products,
  getProductById: state => id => state.products.find(product => product.id === +id)
 }

});

