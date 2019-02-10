<template>
  <v-container fluid grid-list-ls>
    <v-layout>
      <v-flex xs3><p>Blur</p></v-flex>
      <v-flex xs8
        ><v-slider
          max="20"
          min="0"
          step="0"
          v-on:change="updateFilter"
          v-model="blur"
      /></v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs3><p>Brightness</p></v-flex>
      <v-flex xs8
        ><v-slider
          max="3"
          min="0"
          step="0"
          v-on:change="updateFilter"
          v-model="brightness"
      /></v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs3><p>Contrast</p></v-flex>
      <v-flex xs8
        ><v-slider
          max="5"
          min="0"
          step="0"
          v-on:change="updateFilter"
          v-model="contrast"
      /></v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs3><p>Grayscale</p></v-flex>
      <v-flex xs8
        ><v-slider
          max="1"
          min="0"
          step="0"
          v-on:change="updateFilter"
          v-model="grayscale"
      /></v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs3><p>Hue-Rotate</p></v-flex>
      <v-flex xs8
        ><v-slider
          max="360"
          min="0"
          step="0"
          v-on:change="updateFilter"
          v-model="hueRotate"
      /></v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs3><p>Saturation</p></v-flex>
      <v-flex xs8
        ><v-slider
          max="5"
          min="0"
          step="0"
          v-on:change="updateFilter"
          v-model="saturate"
      /></v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs3><p>Sepia</p></v-flex>
      <v-flex xs8
        ><v-slider
          max="1"
          min="0"
          step="0"
          v-on:change="updateFilter"
          v-model="sepia"
      /></v-flex>
    </v-layout>

    <v-layout>
      <v-btn xs3 color="error" @click="setProps('defaultProps')">Reset</v-btn>
      <v-btn xs3 color="info" @click="setProps('cleaverProps')">Cleaver</v-btn>
      <v-btn xs3 color="info" @click="setProps('bradyProps')">Brady</v-btn>
      <v-btn xs3 color="info" @click="setProps('wonkaProps')">Wonka</v-btn>
      <v-btn xs3 color="info" @click="setProps('woodstockProps')"
        >Woodstock</v-btn
      >
      <v-btn xs3 color="info" @click="setProps('addamsProps')">Addams</v-btn>
      <v-btn xs3 color="info" @click="setProps('frontierProps')"
        >Frontier</v-btn
      >
      <v-btn xs3 color="info" @click="setProps('invertProps')">Invert</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'FilterControls',
  data() {
    return {
      blur: 0,
      brightness: 1,
      contrast: 1,
      grayscale: 0,
      hueRotate: 0,
      invert: 0,
      saturate: 1,
      sepia: 0
    };
  },
  methods: {
    updateFilter() {
      const filter = {
        blur: this.blur,
        brightness: this.brightness,
        contrast: this.contrast,
        grayscale: this.grayscale,
        hueRotate: this.hueRotate,
        invert: this.invert,
        saturate: this.saturate,
        sepia: this.sepia
      };
      this.$store.dispatch('updateFilter', filter);
    },

    setProps(filterName) {
      const filters = {
        defaultProps: {
          blur: 0,
          brightness: 1,
          contrast: 1,
          grayscale: 0,
          hueRotate: 0,
          invert: 0,
          saturate: 1,
          sepia: 0
        },
        addamsProps: {
          blur: 0,
          brightness: 1,
          contrast: 2.3,
          grayscale: 0,
          hueRotate: 0,
          invert: 0,
          saturate: 0.45,
          sepia: 0.46
        },
        wonkaProps: {
          blur: 0,
          brightness: 1,
          contrast: 1.7,
          grayscale: 0,
          hueRotate: 249,
          invert: 0,
          saturate: 1.04,
          sepia: 0
        },
        woodstockProps: {
          blur: 0,
          brightness: 1,
          contrast: 1,
          grayscale: 0.4,
          hueRotate: 14.5,
          invert: 0,
          saturate: 0.8,
          sepia: 0
        },
        bradyProps: {
          blur: 0,
          brightness: 1.5,
          contrast: 1,
          grayscale: 0.4,
          hueRotate: 14.5,
          invert: 0,
          saturate: 1.2,
          sepia: 0
        },
        cleaverProps: {
          blur: 0,
          brightness: 1,
          contrast: 1.45,
          grayscale: 0,
          hueRotate: 0,
          invert: 0,
          saturate: 0,
          sepia: 0
        },
        frontierProps: {
          blur: 0,
          brightness: 0.87,
          contrast: 2.3,
          grayscale: 0.13,
          hueRotate: 0,
          invert: 0,
          saturate: 1.4,
          sepia: 0.94
        },
        invertProps: {
          blur: 0,
          brightness: 1,
          contrast: 1,
          grayscale: 0,
          hueRotate: 0,
          invert: 1,
          saturate: 1,
          sepia: 0
        }
      };
      this.blur = filters[filterName].blur;
      this.brightness = filters[filterName].brightness;
      this.contrast = filters[filterName].contrast;
      this.grayscale = filters[filterName].grayscale;
      this.hueRotate = filters[filterName].hueRotate;
      this.invert = filters[filterName].invert;
      this.saturate = filters[filterName].saturate;
      this.sepia = filters[filterName].sepia;
      this.updateFilter();
    }
  }
};
</script>

<style scoped lang="scss"></style>
