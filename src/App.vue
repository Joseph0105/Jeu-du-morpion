<template>
  <div id="app">
    <un-contre-un></un-contre-un>
  </div>
</template>

<script>
import unContreUn from './components/unContreUn/unContreUn.vue';

export default {
  name: 'App',
  components: {
    unContreUn,
  },
};
</script>

<style>
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Roboto, Helvetica, sans-serif;
  background: linear-gradient(to right, #283048, #859398);
  color: #f1f1f1;
  padding: clamp(20px, 5vw, 50px) 10px 10px;
}
</style>
