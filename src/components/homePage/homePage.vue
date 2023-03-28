<template>
  <div class="home-container">
    <h1>Le <span>MORPION</span></h1>
    <h2>Choisis ton mode de jeu :</h2>
    <router-link to="/game">1 VS 1</router-link>
    <router-link to="/contre-ordinateur"
      >Contre l'intelligence artificielle</router-link
    >
  </div>
</template>

<script>
export default {
  name: 'homePage',
};
</script>

<style lang="scss">
@import './style.scss';
</style>
