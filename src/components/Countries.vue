<template>
  <div class="countries-root">
    <card v-for="country of countries" :key="country.name" :country="country"/>
  </div>
</template>

<script>
import { ref, watch } from '@vue/runtime-core'
import Card from './Card.vue'
import Country from '../models/Country'
export default {
  components: { Card },
  props: {
    filter: {default: '', type: String},
    region: {default: '', type: String},
  },
  setup(props) {
    /** @type {import('vue').Ref<import('../models/Country').default[]>} */
    const countries = ref([])
    const updateFilter = async () => {
      countries.value = await Country.allByName(props.filter)
      if(props.region) {
        countries.value = countries.value.filter(country =>country.region === props.region )
      }
    }
    watch(() => [props.filter, props.region], updateFilter, {deep: true})
    updateFilter()
    return {
      countries
    }
  }
}
</script>

<style lang="scss" scoped>
.countries-root {
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(4, 1fr);
}
</style>