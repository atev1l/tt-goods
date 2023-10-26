<template>
  <Layout>
    <Breadcrumbs class="breadcrumbs-container" :crumbs="[
      { text: textHome, path: '/' },
      { text: textFavorites, path: '/product' }
    ]"
    />
    <div class="favorites-title"> {{ textFavorites }}</div>
    <ProductTable
        class="products-container"
        :products="favorites"
        v-if="favorites.length"
    />
    <div v-else class="favorites-title__empty">{{ textEmptyFavorites }}</div>
  </Layout>
</template>

<script>
import { mapState } from "vuex";

import ProductImage from '../../public/img/catalog.png';

import ProductTable from "../components/ProductTable/ProductTable.vue";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs.vue";
import Layout from "../components/Layout/Layout.vue";

export default {
  name: 'Favorites',

  data() {
    return {
      productsData: [],
      productImageSrc: ProductImage,
      textHome: 'Главная',
      textFavorites: 'Избранное',
      textEmptyFavorites: 'Список избранного пуст'
    };
  },

  computed: {
    ...mapState(['products']),

    favorites() {
      return this.products.filter(product => product.isFavourite);
    }
  },

  methods: {
    goToProduct(productId) {
      this.$router.push({name: 'Product', params: {id: productId}});
    }
  },

  created() {
    this.$store.dispatch('fetchProducts').then(() => {
      this.productsData = this.products;
      console.log(this.productsData)
    });
  },

  components: {
    Layout,
    Breadcrumbs,
    ProductTable
  }
}
</script>

<style lang="scss" scoped>
.favorites-title{
  margin-top: 16px;
  color: #0A1E32;
  font-size: 40px;
  font-family: Ubuntu;
  font-weight: 500;
  line-height: 48px;
  word-wrap: break-word;

  &__empty{
    display: flex;
    justify-content: center;

    margin-top: 132px;
    color: #464C58;
    font-size: 32px;
    font-family: Ubuntu;
    font-weight: 500;
    line-height: 40px;
    word-wrap: break-word
  }
}
.products-container{
  margin-top: 32px;
  margin-bottom: 112px;

  @media screen and (max-width: 1440px){
    margin-top: 24px;
    margin-bottom: 80px;
  }
  @media screen and (max-width: 768px){
    margin-top: 16px;
    margin-bottom: 54px;
  }
}
.breadcrumbs-container{
  margin-top: 32px;
}
.main-image {
  max-width: 1920px;
  width: 100%;
  height: 505px;
  object-fit: cover;
  object-position: center;
}
</style>

