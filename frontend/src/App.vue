<template>
  <div class="wrapper">
    <app-header />
    <main class="main">
      <app-side-bar />
      <div class="main-content">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import API from "./helpers/API";

import AppSideBar from "./components/AppSideBar.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: { AppSideBar, AppHeader },

  beforeCreate() {
    API.getProducts().then((data) => this.$store.commit("setProducts", data));
    API.getOrders().then((data) => this.$store.commit("setOrders", data));
  },
};
</script>

<style lang="scss">
@import "@/scss/variables.scss";

.main {
  display: grid;
  grid-template-columns: 12.5rem calc(100% - 12.5rem);
  width: 100%;
  height: 100%;

  &-content {
    background: $bg_color;
    padding: 6.25rem 3.125rem 3.125rem 6.25rem;
    width: 100%;
  }
}

.wrapper {
  height: 100%;
}

nav {
  padding: 1.875rem;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
