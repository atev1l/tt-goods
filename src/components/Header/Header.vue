<template>
  <header class="header">
    <Layout>
      <div class="container">
        <div class="logo" @click="goTo('Home')">
          <img :src="logoSrc" alt="Логотип компании" />
        </div>
        <div class="favorites-icon" @click="goTo('Favorites')">
          <div class="favorites-icon__count">{{ favoritesCount }}</div>
          <img :src="favoritesIconSrc" alt="Избранное" />
        </div>
      </div>
    </Layout>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

import Layout from "../Layout/Layout.vue";
import FavoritesIcon from '../../../public/img/favorites.svg';
import Logo from '../../../public/img/logo.svg';

export default {
  name: 'Header',

  data() {
    return {
      logoSrc: Logo,
      favoritesIconSrc: FavoritesIcon
    };
  },

  computed: {
    ...mapGetters([
      'favoritesCount'
    ])
  },

  methods:{
    goTo(pageName) {
      if (this.$route.name !== pageName) {
        this.$router.push({name: pageName});
      }
    }
  },

  components: {
    Layout
  },
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #FFFFFF;
  border-bottom: 1px solid #0A1E32;

  .container{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;

    @media screen and (max-width: 1440px){
      padding: 10px 0;
    }

    .logo{
      cursor: pointer;

      @media screen and (max-width: 1440px){
        padding-left: 10px;
      }
    }
  }


  .favorites-icon {
    position: relative;
    font-size: 24px;
    cursor: pointer;

    @media screen and (max-width: 1440px){
      margin-right: 30px;
    }

    &__count{
      position: absolute;
      right: -9px;

      height: 16px;
      width: 16px;
      border-radius: 9999px;
      background-color: #EB4C47;

      display: flex;
      justify-content: center;
      align-items: center;

      color: #FFFFFF;
      font-size: 8px;
      font-family: Ubuntu;
      font-weight: 700;
      line-height: 12px;
      word-wrap: break-word;
    }
  }
}
</style>
