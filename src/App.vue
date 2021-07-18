<template>
  <div>
    <navbar/>
    <div class="router-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar },
  setup() {
    
  },
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
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: NunitoSans;
  background-color: var(--bg);
  color: var(--color);
}
h1  {font-size: 2em;}
h2  {font-size: 1.9em;}
h3  {font-size: 1.8em;}
h4  {font-size: 1.7em;}
h5  {font-size: 1.6em;}

.router-container {
  width: 90%;
  margin: auto;
}
</style>
