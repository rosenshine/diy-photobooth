<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="strip">
        <add-crop fileNum="img1" />
        <add-crop fileNum="img2" />
        <add-crop fileNum="img3" />
        <add-crop fileNum="img4" />
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
// @ is an alias to /src
import AddCrop from '@/components/AddCrop.vue';

export default {
  name: 'PhotoStrip',
  components: {
    AddCrop
  }
};
</script>

<style scoped lang="scss">
.strip {
  display: inline-block;
}
</style>
