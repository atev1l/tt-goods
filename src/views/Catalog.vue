<template>
  <div>
    <img class="main-image" :src="productImageSrc" alt="Описание продукта"/>

    <ProductTable class="products-container" :products="productsData" />
  </div>
</template>

<script>
import { mapState } from "vuex";

import ProductImage from '../../public/img/catalog.png';

import ProductTable from "../components/ProductTable/ProductTable.vue";

export default {
  name: 'Catalog',
  components: {ProductTable},
  data() {
    return {
      productsData: [],
      productImageSrc: ProductImage,
    };
  },

  computed: {
    ...mapState(['products'])
  },

  methods: {
    goToProduct(productId) {
      this.$router.push({name: 'Product', params: {id: productId}});
    },
  },

  created() {
    this.$store.dispatch('fetchProducts').then(() => {
      this.productsData = this.products;
    });
  },
}
</script>

<style lang="scss" scoped>
.products-container{
  margin-top: 112px;
  margin-bottom: 112px;

  @media screen and (max-width: 1440px){
    margin-top: 80px;
    margin-bottom: 80px;
  }
  @media screen and (max-width: 768px){
    margin-top: 54px;
    margin-bottom: 54px;
  }
}
.main-image {
  max-width: 1920px;
  width: 100%;
  height: 505px;
  object-fit: cover;
  object-position: center;

  @media screen and (max-width: 1440px){
    height: 380px;
  }
  @media screen and (max-width: 768px){
    height: 250px;
  }
}
</style>

