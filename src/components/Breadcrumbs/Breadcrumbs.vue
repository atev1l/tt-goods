<template>
  <div class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li class="breadcrumbs__item" v-for="(crumb, index) in crumbs" :key="index">
        <div v-if="index !== crumbs.length - 1" @click="goTo('Home')" class="breadcrumbs__link">
          {{ crumb.text }}
        </div>
        <span v-else class="breadcrumbs__text">{{ crumb.text }}</span>
        <span v-if="index < crumbs.length - 1" class="breadcrumbs__separator">
          <svg width="4" height="7" viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.26 6.244L0.48 5.824L1.812 3.592L0.48 1.36L1.26 0.94L3.132 3.592L1.26 6.244Z" fill="#464C58"/>
          </svg>
        </span>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'Breadcrumbs',
  props: {
    crumbs: {
      type: Array,
      required: true,
      default: () => []
    }
  },

  methods:{
    goTo(pageName) {
      if (this.$route.name !== pageName) {
        this.$router.push({name: pageName});
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumbs {
  height: 18px;
  &__list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }

  &__item {
    margin-right: 5px;
    display: flex;

  }

  &__link {
    cursor: pointer;
    padding-right: 5px;
    color: #464C58;
    font-size: 12px;
    font-family: Ubuntu;
    font-weight: 400;
    text-decoration: underline;
    line-height: 18px;
    word-wrap: break-word;

    &:hover {
      color: #464C58;
    }
  }

  &__text, &__separator {
    color: #464C58;

  }
}

.breadcrumbs__text{
  color: #464C58;
  font-size: 12px;
  font-family: Ubuntu;
  font-weight: 400;
  line-height: 18px;
}

</style>
