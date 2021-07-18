<template>
  <div class="navbar-root">
    <div class="navbar">
      <div class="logo" @click="$router.push({name: 'Home'})">
        Where in the world?
      </div>
      <button @click="toggleTheme"><i class="fas fa-moon" aria-hidden="true"></i> Dark Mode</button>
    </div>
  </div>
</template>

<script>
import theme from '../services/theme'
export default {
  setup() {
    return {
      toggleTheme() {
        theme.toggle()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-root {
  width: 100%;
  height: 50px;
  box-shadow: var(--shadowNavbar);
  background-color: var(--bgNavbar);
  .navbar {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 100%;
    .logo {
      font-weight: bold;
      font-size: 1.2em;
    }
  }
}
button {
  background: transparent;
  border: none;
  color: var(--color);
}
</style>