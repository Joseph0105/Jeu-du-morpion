<template>
  <div id="app">
    <router-link class="acceuil" v-if="$route.name !== 'homePage'" to="/"
      >Accueil</router-link
    >
    <component v-if="$route.name === 'homePage'" :is="'homePage'"></component>
    <component
      v-if="$route.name === 'unContreUn'"
      :is="'unContreUn'"
    ></component>
    <router-view :name="$route.name"></router-view>
  </div>
</template>

<script>
import homePage from './components/homePage/homePage.vue';
import unContreUn from './components/unContreUn/unContreUn.vue';
export default {
  name: 'App',
  components: {
    homePage,
    unContreUn,
  },
};
</script>

<style lang="scss">
@import '../src/components/scss/variables.scss';
body {
  padding: 0;
}
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: $font-family;
  background: $gradient-color;
  padding: clamp(10px, 5vw, 10px) 10px 10px;
  .acceuil {
    background-color: $secondary-color;
    border: 1px solid $white-color;
    color: $white-color;

    padding: 1rem;
  }
}
</style>
