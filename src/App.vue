<template>
  <v-app id="app">
    <div id="nav">
      <v-toolbar class="navbar">
        <v-toolbar-title>DIY PHOTOBOOTH</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat><router-link to="/">Create</router-link></v-btn>
          <v-btn flat><router-link to="/about">About</router-link></v-btn>
        </v-toolbar-items>
      </v-toolbar>
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
  a {
    font-weight: bold;
    color: #045b8a;
    &.router-link-exact-active {
      color: white;
    }
    text-decoration: none;
  }
  .navbar {
    background-color: rgba(255, 255, 255, 0);
    color: white;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 2px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
  }
}
</style>
