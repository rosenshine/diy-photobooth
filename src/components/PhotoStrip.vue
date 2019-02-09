<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="strip">
        <add-crop />
        <add-crop />
        <add-crop />
        <add-crop />
      </v-card>
    </v-flex>
    <div id="app">
	<a class="btn" @click="toggleShow">upload/edit image</a>
	<my-upload field="img"
        @crop-success="cropSuccess"
        @crop-upload-success="cropUploadSuccess"
        @crop-upload-fail="cropUploadFail"
        v-model="show"
    noCircle=true
		:width="300"
		:height="300"
		url="/upload"
		:params="params"
		:headers="headers"
		img-format="png"></my-upload>
	<img :src="imgDataUrl">
</div>
  </v-layout>
</template>

<script>
// @ is an alias to /src
import AddCrop from '@/components/AddCrop.vue';
import MyUpload from '@/components/upload-2.vue';

export default {
  name: 'PhotoStrip',
  data() {
    return {
      show: false
    }
  },
  components: {
    AddCrop,
    MyUpload
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
  }
};
</script>

<style scoped lang="scss">
.strip {
  display: inline-block;
}
</style>
