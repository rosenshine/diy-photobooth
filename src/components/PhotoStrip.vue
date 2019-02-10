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
    <v-btn color="success" @click="exportImage" >Save</v-btn>
  </v-layout>
</template>

<script>
import AddCrop from '@/components/AddCrop.vue';

export default {
  name: 'PhotoStrip',
  components: {
    AddCrop
  },
  computed: {
    img1Url() {
      // return this.$store.state.img1;
      return document.getElementById('img1');
    },
    img2Url() {
      return this.$store.state.img2;
    },
    img3Url() {
      return this.$store.state.img3;
    },
    img4Url() {
      return this.$store.state.img4;
    }
  },
  methods: {
    exportImage() {
      // create canvases for all four images
      let img1Canvas = new Image;
      const element = this.img1Url;
      console.log(element.style.filter);
      img1Canvas.src = element.src;
      img1Canvas.style.cssText = `filter: ${element.style.filter};`;

      let img2Canvas = new Image;
      img2Canvas.src = this.img2Url;

      let img3Canvas = new Image;
      img3Canvas.src = this.img3Url;

      let img4Canvas = new Image;
      img4Canvas.src = this.img4Url;

      // create the wrapper canvas with a white background
      let merger = document.createElement('canvas');
      merger.width = 330;
      merger.height = 1275;
      let ctx = merger.getContext('2d');
      ctx.strokeStyle = '#3a3a3a';
      ctx.lineWidth = 1;
      ctx.rect(0,0,330,1275);
      ctx.fillStyle = 'white';
      ctx.fill();

      // for each image, draw the canvas leaving room for the bezels
      ctx.drawImage(img1Canvas, 15, 15);
      ctx.strokeRect(15, 15, 300, 300);
      ctx.drawImage(img2Canvas, 15, 330);
      ctx.strokeRect(15, 330, 300, 300);
      ctx.drawImage(img3Canvas, 15, 645);
      ctx.strokeRect(15, 645, 300, 300);
      ctx.drawImage(img4Canvas, 15, 960);
      ctx.strokeRect(15, 960, 300, 300);

      // export the full image as a png
      merger.toBlob((blob) => {
        let blobUrl = URL.createObjectURL(blob);
        let link = document.createElement('a');
        link.href = blobUrl;
        link.download = 'photostrip.png';
        link.click();
      })
    }
  }
};
</script>

<style scoped lang="scss">
.strip {
  display: inline-block;
}
</style>
