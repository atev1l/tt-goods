<template>
  <div class="products__grid">
    <div
        class="product"
        v-for="product in products"
        :key="product.id"
        @click="goToProduct(product.id)"
    >
      <div class="product__favourite-icon" @click.stop="toggleFavourite(product)">
        <img class="favorite-icon" v-if="product.isFavourite" :src="favoritesIconSrc">
        <img class="empty" v-else :src="favoritesIconEmptySrc" />
      </div>
      <img class="product__image" :src=product.image />
      <div class="product__info">
        <div class="product__info__title">{{ product.title }}</div>
        <div class="product__info__price">{{ product.price }} $</div>
      </div>
    </div>
  </div>
</template>

<script>
import FavoritesIconEmpty from '../../../public/img/favoritesEmpty.svg';
import FavoritesIcon from "../../../public/img/favorites.svg";

export default {
  name: 'ProductTable',

  data() {
    return {
      favoritesIconSrc: FavoritesIcon,
      favoritesIconEmptySrc: FavoritesIconEmpty
    };
  },

  props: {
    products: {
      type: Array,
      required: true
    }
  },

  methods: {
    goToProduct(productId) {
      this.$router.push({name: 'Product', params: {id: productId}});
    },

    toggleFavourite(product) {
      this.$store.commit('toggleFavourite', product);
      console.log(product.isFavourite)
    }
  }
}
</script>

<style lang="scss" scoped>
.favorite-icon{
  height: 22px;
  width: 24px;
}
.products__grid {
  display: grid;

  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  gap: 40px;
  height: 100%;

  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 1440px){
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1280px;
    gap: 30px;
  }
  @media screen and (max-width: 1280px){
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.product {
  position: relative;
  cursor: pointer;
  text-align: center;

  @media screen and (max-width: 1280px){
    margin: 0 40px;
  }

  &:hover{
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.08), 0 0 20px rgba(0, 0, 0, 0.08);
    transition: box-shadow 0.3s ease-in-out;
  }
  &__favourite-icon{
    position: absolute;
    right: 10px;
    top: 10px;
  }

  &__image {
    max-width: 320px;
    width: 100%;
    height: 100vh;
    max-height: 336px;
    object-fit: contain;

    @media screen and (max-width: 1280px){
      max-width: 266px;
      max-height: 288px;

    }
  }

  &__info {
    padding-top: 16px;
    padding-bottom: 16px;

    &__price {
      color: #464C58;
      font-size: 16px;
      font-family: Ubuntu;
      font-weight: 700;
      line-height: 24px;
      word-wrap: break-word;

      @media screen and (max-width: 1440px){
        font-size: 18px;
      }

      @media screen and (max-width: 768px){
        font-size: 20px;
      }
    }

    &__title {
      margin-bottom: 8px;
      color: #0A1E32;
      font-size: 12px;
      font-family: Ubuntu;
      font-weight: 400;
      line-height: 18px;
      word-wrap: break-word;

      @media screen and (max-width: 1440px){
        font-size: 14px;
      }

      @media screen and (max-width: 768px){
        font-size: 16px;
      }
    }
  }
}
</style>
