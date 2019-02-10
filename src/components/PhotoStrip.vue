<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm10 offset-sm1>
        <v-card class="strip">
          <add-crop fileNum="img1" />
          <add-crop fileNum="img2" />
          <add-crop fileNum="img3" />
          <add-crop fileNum="img4" />
        </v-card>
      </v-flex>
    </v-layout>
    <v-btn color="success" @click="exportImage">Download</v-btn>
  </v-container>
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
      return this.$store.state.img1;
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
      // get filter from element
      const filter = document.getElementById('img1').style.filter;

      // create canvases for all four images
      let img1Canvas = new Image();
      img1Canvas.src = this.img1Url;

      let img2Canvas = new Image();
      img2Canvas.src = this.img2Url;

      let img3Canvas = new Image();
      img3Canvas.src = this.img3Url;

      let img4Canvas = new Image();
      img4Canvas.src = this.img4Url;

      // create the wrapper canvas with a white background
      let merger = document.createElement('canvas');
      merger.width = 560;
      merger.height = 2150;
      let ctx = merger.getContext('2d');
      ctx.strokeStyle = '#d1d1d1';
      ctx.lineWidth = 1;
      ctx.rect(0, 0, 560, 2150);
      ctx.fillStyle = 'white';
      ctx.fill();

      // for each image, draw the canvas leaving room for the bezels
      ctx.filter = filter;
      ctx.drawImage(img1Canvas, 30, 30);
      ctx.strokeRect(30, 30, 500, 500);
      ctx.drawImage(img2Canvas, 30, 560);
      ctx.strokeRect(30, 560, 500, 500);
      ctx.drawImage(img3Canvas, 30, 1090);
      ctx.strokeRect(30, 1090, 500, 500);
      ctx.drawImage(img4Canvas, 30, 1620);
      ctx.strokeRect(30, 1620, 500, 500);

      // export the full image as a png
      merger.toBlob(blob => {
        let blobUrl = URL.createObjectURL(blob);
        let link = document.createElement('a');
        link.href = blobUrl;
        link.download = 'photostrip.png';
        link.click();
      });
    }
  }
};
</script>

<style scoped lang="scss">
.strip {
  display: inline-block;
}
</style>
