<template>
  <div class="global-container">
    <h1>Choisissez votre mode de jeu</h1>
    <router-link to="/un-contre-un">Jouer 1 contre 1</router-link>
    <router-link to="/vs-computer">Jouer contre l'ordinateur</router-link
    >button>
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

<style></style>
