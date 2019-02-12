<template>
  <v-container fluid grid-list-ls>
    <v-layout>
      <v-flex xs4>
        <img src="../assets/ducks_in_a_col.png" />
      </v-flex>
      <v-flex xs7>
        <p class="body">
          When we were getting ready for our wedding, we made our own photobooth
          with a Raspberry Pi. People took a bunch of great photos, but after
          the wedding we couldn't find an easy tool to stitch them together into
          a strip like a real photobooth. This tool lets you skip the command
          line editing and add some filters to boot.
        </p>
        <p>
          View the
          <a href="https://github.com/rosenshine/diy-photobooth"
            >source code here</a
          >. Thanks to
          <a href="https://github.com/dai-siki/vue-image-crop-upload"
            >dai-siki</a
          >
          for the vue-image-crop-upload package.
        </p>
      </v-flex>
      <v-flex xs1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.body {
  margin-top: 7vw;
}
p {
  font-size: 18px;
  text-align: left;
  color: white;
}
img {
  width: 15vw;
  margin-top: 20px;
}
</style>
