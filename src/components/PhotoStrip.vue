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
    <v-btn color="success">Save</v-btn>
  </v-layout>
</template>

<script>
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
