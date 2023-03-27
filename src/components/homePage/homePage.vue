<template>
  <div class="home-container">
    <h1>Le <span>MORPION</span></h1>
    <h2>Choisis ton mode de jeu :</h2>
    <router-link to="/game">1 VS 1</router-link>
    <router-link to="/vs-computer"
      >Contre l'intelligence artificielle</router-link
    >
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  name: 'homePage',
  setup() {
    const router = useRouter();
    const startGame = (gameMode) => {
      router.push({
        name: 'game',
        params: {
          mode: gameMode,
        },
      });
    };
    return {
      startGame,
    };
  },
};
</script>

<style lang="scss">
@import './style.scss';
</style>
