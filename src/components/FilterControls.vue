<template>
  <v-container fluid grid-list-ls>
    <v-layout>
      <v-flex xs3><p>Hue</p></v-flex>
      <v-flex xs8
        ><v-slider thumb-label value="currentHue" v-on:change="updateHue"
      /></v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs3><p>Vibrance</p></v-flex>
      <v-flex xs8
        ><v-slider thumb-label v-on:change="updateVibrance" value="vibrance"
      /></v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs3><p>Contrast</p></v-flex>
      <v-flex xs8
        ><v-slider thumb-label v-on:change="updateContrast" value="contrast"
      /></v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs3><p>Sepia</p></v-flex>
      <v-flex xs8
        ><v-slider thumb-label v-on:change="updateSepia" value="sepia"
      /></v-flex>
    </v-layout>
    <v-layout>
      <v-btn xs3>B/W</v-btn>
      <v-btn xs3>Deco</v-btn>
      <v-btn xs3>Modern</v-btn>
      <v-btn xs3>Gothic</v-btn>
    </v-layout>
    <v-layout>
      <h3>Current hue: {{ hue }}</h3>
      <h3>Current vibrance: {{ vibrance }}</h3>
      <h3>Current contrast: {{ contrast }}</h3>
      <h3>Current sepia: {{ sepia }}</h3>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'FilterControls',
  data() {
    return {};
  },
  computed: {
    hue() {
      return this.$store.state.hue;
    },
    vibrance() {
      return this.$store.state.vibrance;
    },
    contrast() {
      return this.$store.state.contrast;
    },
    sepia() {
      return this.$store.state.sepia;
    }
  },
  methods: {
    updateHue(event) {
      this.$store.dispatch('updateHue', { value: event });
    },
    updateVibrance(event) {
      this.$store.dispatch('updateVibrance', { value: event });
    },
    updateContrast(event) {
      this.$store.dispatch('updateContrast', { value: event });
    },
    updateSepia(event) {
      this.$store.dispatch('updateSepia', { value: event });
    }
  }
};
</script>

<style scoped lang="scss"></style>
