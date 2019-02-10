<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs6>
        <FilterControls />
      </v-flex>
      <v-flex xs6>
        <PhotoStrip />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import FilterControls from '@/components/FilterControls.vue';
import PhotoStrip from '@/components/PhotoStrip.vue';

export default {
  name: 'home',
  components: {
    FilterControls,
    PhotoStrip
  }
};
</script>
