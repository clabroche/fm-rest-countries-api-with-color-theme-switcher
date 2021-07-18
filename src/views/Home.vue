<template>
  <div class="home">
    <search-filter v-model:filter="filter" v-model:region="region"/>
    <countries :filter="filter" :region="region"/>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Countries from '../components/Countries.vue'
import SearchFilter from '../components/SearchFilter.vue'
export default {
  name: 'Home',
  components: {
    SearchFilter,
    Countries
  },
  setup() {
    return {
      filter: ref(''),
      region: ref(''),
    }
  }
}
</script>
<style lang="scss" scoped>

</style>