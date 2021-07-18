<template>
  <div class="search-filter-root">
    <div class="input-container">
      <i class="fas fa-search" aria-hidden="true"></i>
      <input type="text" placeholder="Search for a country..." @input="$emit('update:filter', $event.target.value)">
    </div>
    <select @input="$emit('update:region', $event.target.value)">
      <option value="">Filter by region</option>
      <option :value="region" v-for="region of regions" :key="region" >{{region}}</option>
    </select>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import Country from '../models/Country'
export default {
  props: {
    filter: {default: '', type: String},
    region: {default: '', type: String},
  },
  setup() {
    const regions = ref([])
    onMounted(async () => {
      regions.value = await Country.allRegions()
    })
    return {
      regions
    }
  }
}
</script>

<style lang="scss" scoped>
.search-filter-root {
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
  flex-wrap: wrap;
  .input-container {
    margin-bottom: 10px;
    background-color: var(--accent);
    height: 40px;
    display: flex;
    align-items: center;
    box-shadow: var(--shadowNavbar);
    border-radius: 4px;
    i {
      margin: 0 15px;
      color: var(--accent-color);
    }
    input {
      color: var(--accent-color);
      border: none;
      background-color: transparent;
      height: 100%;
      width: 100%;
      outline: none;
    }
  }
  select {
    margin-bottom: 10px;
    border: none;
    background-color: var(--accent);
    box-shadow: var(--shadowNavbar);
    color: var(--accent-color);
    width: 150px;
    padding: 0 10px;
    height: 40px;

  }
}
</style>