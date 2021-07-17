<template>
<div class="app">
</div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  setup() {
    return {
    }
  }
}
</script>

<style lang="scss">
@import './assets/css/reset.css';
@import './assets/css/colors.scss';
@import './assets/fonts/NunitoSans/index.css';
@import '~@fortawesome/fontawesome-free/css/all.min.css';
body {
  font-family: NunitoSans;
}
body, #app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items:center;
  overflow: hidden;
  color: white;
  font-family: BarlowSemiCondensed;
}
h1  {font-size: 2em;}
h2  {font-size: 1.9em;}
h3  {font-size: 1.8em;}
h4  {font-size: 1.7em;}
h5  {font-size: 1.6em;}

</style>
