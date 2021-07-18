<template>
  <div class="card-root" @click="$router.push({name: 'country', params: {countryName: country.name}})">
    <img :src="country.flag" alt="">
    <div class="infos">
      <h2 class="name">
        {{country.name}}
      </h2>
      <div class="info">
        <span class="label">Population: </span>  
        {{country.population.toLocaleString()}}
      </div>
      <div class="info">
        <span class="label">Region: </span>  
        {{country.region}}
      </div>
      <div class="info">
        <span class="label">Capital: </span>  
        {{country.capital}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /** @type {import('../models/Country').default} */
    country: {default: null},
  },
  setup() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.card-root {
  width: 100%;
  background-color: var(--accent);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: var(--shadowNavbar);
  transition: 300ms;
  will-change: box-shadow transform;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
    box-shadow: var(--shadowNavbarAccent);
  }
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  .infos {
    padding: 20px;
    h2 {
      font-weight: bold;
      font-size: 1.1em;
      margin: 10px 0;
    }
    .info {
      margin-bottom: 10px;
      font-size: 0.8em;
      .label {
        font-weight: bold;
      }
    }
  }
}
</style>