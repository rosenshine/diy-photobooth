<template>
  <v-app id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #045b8a;
  background: #1c92d2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #f2fcfe,
    #1c92d2
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #f2fcfe,
    #1c92d2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #045b8a;
    &.router-link-exact-active {
      color: white;
    }
  }
}
</style>
