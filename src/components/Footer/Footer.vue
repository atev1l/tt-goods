<template>
  <footer class="footer">
    <Layout>
      <div class="footer__container">
        <div class="footer__container__text">{{ favorites }}</div>
        <div class="footer__container__text_24">{{ phone }}</div>
      </div>
    </Layout>
  </footer>
</template>

<script>
import Layout from "../Layout/Layout.vue";

export default {
  name: 'Footer',

  data() {
    return {
      favorites: 'Избранное',
      phone: '8 800 888 00 88',
      products: []
    };
  },

  components: {
    Layout
  },
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #0A1E32;
  height: 96px;
  position: absolute;
  bottom: 0;
  width: 100%;

  .footer__container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    height: 76px;

    @media screen and (max-width: 1440px){
      padding: 10px 15px;
    }

    &__text {
      color: #FFFFFF;
      font-size: 18px;
      font-family: Ubuntu;
      font-weight: 500;
      line-height: 32px;
      word-wrap: break-word;

      @media screen and (max-width: 768px){
        font-size: 14px;
      }

      &_24{
        color: #FFFFFF;
        font-size: 24px;
        font-family: Ubuntu;
        font-weight: 500;
        line-height: 32px;
        word-wrap: break-word;

        @media screen and (max-width: 768px){
          font-size: 18px;
        }
      }
    }
  }
}
</style>
