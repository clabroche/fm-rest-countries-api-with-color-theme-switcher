<template>
  <div class="country-root" v-if="country" :key="$route.params.routerName">
    <button @click="$router.push({name: 'Home'})">
      <i class="fas fa-chevron-left" aria-hidden="true"></i> Back
    </button>
    <div class="container">
      <img :src="country.flag" alt="">
      <div class="infos">
        <h2>{{country.name}}</h2>
        <div class="left-right">
          <div class="left">
            <span class="info"><div class="label">Native Name:</div> {{country.nativeName}}</span>
            <span class="info"><div class="label">Population:</div> {{country.population}}</span>
            <span class="info"><div class="label">Region:</div> {{country.region}}</span>
            <span class="info"><div class="label">Sub Region:</div> {{country.subregion}}</span>
            <span class="info"><div class="label">Capital:</div> {{country.capital}}</span>
          </div>
          <div class="right">
            <span class="info"><div class="label">Top Level Domain:</div> {{country.topLevelDomain.join(', ')}}</span>
            <span class="info"><div class="label">Currencies:</div> {{country.currencies.map(c => c.name).join(', ')}}</span>
            <span class="info"><div class="label">Languages:</div> {{country.languages.map(l => l.name).join(', ')}}</span>
          </div>
        </div>
        <span class="info borders">
          <div class="label">Borders:</div>
          <div class="badges">
            <div class="badge" v-for="border of borders" :key="border" @click="$router.push({name: 'country', params: {countryName: border}})">
              {{border}}
            </div>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted, watch } from '@vue/runtime-core'
import Country from '../models/Country'
import router from '../router'
export default {
  setup() {
    const country = ref()
    const borders = ref([])
    onMounted(async() => {
      reload()
    })
    watch(() => router.currentRoute.value, () => reload())
    const reload = async () => {
      country.value = await Country.get(router.currentRoute.value.params.countryName)
      const countries = await Country.all()
      borders.value = country.value.borders.map(border => 
        countries.filter(c => c.alpha3Code === border).pop()?.name
      )
    }
    return {
      country,
      borders
    }
  }
}
</script>

<style lang="scss" scoped>
.country-root {
  margin-top: 40px;
  .container {
    margin-top: 40px;
    display: flex;
    img {
      width: 30%;
      height: max-content;
      margin-right: 30px;
    }

  .infos {
    padding: 0 20px;
    overflow: auto;
    h2 {
      font-weight: bold;
      font-size: 1.1em;
      margin: 0;
      margin-bottom: 40px;
    }
    .info {
      margin-bottom: 10px;
      font-size: 0.8em;
      display: flex;
      align-items: center;
      .label {
        font-weight: bold;
        width: 100px;
        flex-shrink: 0;
      }
    }
    .left-right {
      display: flex;
      .left {
        margin-right: 100px;
      }
    }
    .borders {
      .badges {
        display: flex;
        overflow: auto;
        padding: 10px 0;
        .badge {
          flex-shrink: 0;
        }
      }
    }
  }
  }
}
button, .badge {
  border: 1px solid var(--bgNavbar);
  background-color: var(--accent);
  color: var(--accent-color);
  padding: 10px 30px;
  margin: 0 5px;
  border-radius: 4px;
  cursor: pointer;
  transition: 300ms;
  box-shadow: var(--shadowNavbar);
  &:hover {
    transform: scale(1.05);
  }
  &.badge {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 50px;
  }
  &:hover {
  }
}
@media screen and (max-width: 800px) {
  .country-root {
    .container {
      flex-direction: column;
      img {
        width: 100%;
      }
      .infos {
        h2 {
          margin-top: 40px;
        }
        .left-right {
          flex-direction: column;
          .left,.right {
            margin-bottom: 20px;
          }
        }
        .borders {
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          .badges {
            margin-top: 10px;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>