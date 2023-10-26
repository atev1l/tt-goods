<template>
  <div class="product">
    <Layout>
      <Breadcrumbs :crumbs="[
        { text: 'Главная', path: '/' },
        { text: product.title, path: '/product' }
      ]"
      />

      <div class="product-page">
        <div class="product-page__content">
          <img class="product-page__content-image" :src="product.image" alt="Product Image">
          <div class="product-page__content-details">
            <h2 class="product-page__content-details-title">{{ product.title }}</h2>
            <p class="product-page__content-details-description">{{ product.description }}</p>
            <div class="product-page__content-details-price">{{ product.price }} $</div>
            <button
                class="product-page__content-details-favourite-btn"
                :class="{ 'is-favorite': product.isFavourite }"
                :disabled="product.isFavourite"
                @click="toggleFavorite(product)"
            >
                <img v-if="product.isFavourite" :src="favoritesIconDisableSrc" class="product-page__content-details-favourite-btn__icon" alt="favoritesIconDisable" />
                <img v-if="!product.isFavourite" :src="favoritesIconSrc" class="hover-icon product-page__content-details-favourite-btn__icon" alt="favoritesIcon" />
                <img v-if="!product.isFavourite" :src="favoritesIconEmptySrc" class="default-icon product-page__content-details-favourite-btn__icon product-page__content-details-favourite-btn__icon_empty" alt="favoritesIconEmpty" />
              <div class="product-page__content-details-favourite-btn_sp" />
              Избранное
            </button>
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script>
import FavoritesIconEmpty from '../../public/img/favoritesEmpty.svg';
import favoritesIconDisable from '../../public/img/favoritesIconDisable.svg';
import FavoritesIcon from "../../public/img/favorites.svg";

import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs.vue";
import Layout from "../components/Layout/Layout.vue";

export default {
  name: 'Product',

  data() {
    return {
      product: {},
      favoritesIconSrc: FavoritesIcon,
      favoritesIconEmptySrc: FavoritesIconEmpty,
      favoritesIconDisableSrc: favoritesIconDisable
    };
  },
  computed: {
    productId() {
      return this.$route.params.id;
    }
  },
  created() {
    this.fetchProduct();
  },

  methods: {
    toggleFavorite(product) {
      this.$store.commit('toggleFavourite', product);
    },

    fetchProduct() {
      this.$store.dispatch('fetchProductById', this.productId)
          .then(product => {
            this.product = product;
          })
          .catch(error => {
            console.error('Error fetching product:', error.message);
          });
    }
  },

  components: {
    Layout,
    Breadcrumbs,
  }
}
</script>
<style lang="scss" scoped>
.product {
  margin-top: 32px;

  &-page {
    margin-top: 32px;
    display: flex;

    &__content {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      height: 100%;

      @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
      }

      &-image {
        flex: 1;
        max-height: 500px;
        object-fit: contain;
        max-width: 680px;
        width: 100%;
      }

      &-details {
        flex: 1;
        display: flex;
        flex-direction: column;
        max-width: 552px;
        align-items: flex-start;

        &-price {
          color: #0A1E32;
          font-size: 32px;
          font-family: Ubuntu;
          font-weight: 700;
          line-height: 40px;
          word-wrap: break-word;
          margin-bottom: 24px;
        }

        &-title {
          color: #0A1E32;
          font-size: 40px;
          font-family: Ubuntu;
          font-weight: 500;
          line-height: 48px;
          word-wrap: break-word;
          margin-bottom: 24px;
        }

        &-description {

          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .is-favorite{
          border: 1px solid #1010104D;

          cursor: not-allowed;
        }

        &-favourite-btn {
          width: 100%;
          max-width: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #FFFFFF;
          border-radius: 4px;
          padding: 10px 20px;
          cursor: pointer;
          transition: background-color 0.3s;
          border: 1px solid #0A1E32;
          font-size: 16px;
          font-family: Ubuntu;
          font-weight: 700;
          text-transform: uppercase;
          line-height: 32px;
          word-wrap: break-word;
          position: relative;



          .hover-icon{
            display: none;
          }

          &:hover .default-icon{
            display: none;
          }

          &:hover .hover-icon{
            display: inline-block;
          }

          &__icon{
            margin-right: 8px;
            width: 20px;
            height: 18px;

          }

        }
      }
    }
  }
}

</style>
