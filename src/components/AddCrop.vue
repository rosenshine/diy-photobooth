<template>
  <div>
    <div
      @click="toggleShow"
      class="cell"
      @mouseover="toggleMouseOver"
      @mouseleave="toggleMouseLeave"
    >
      <div id="app">
        <a class="add-btn" v-if="hasNotUploaded && showAdd">
          <i class="fas fa-plus"></i>
        </a>
        <a class="edit-btn" v-if="!hasNotUploaded && showEdit">
          <i class="far fa-edit"></i>
        </a>
      </div>
      <img :src="storedImg" :style="filters" :id="fileNum" />
    </div>
    <my-upload
      field="img"
      v-model="show"
      :width="300"
      :height="300"
      :noRotate="false"
      :imageNum="fileNum"
      img-format="png"
      @close-upload="closeUpload"
    ></my-upload>
  </div>
</template>

<script>
import MyUpload from '@/components/MyUpload.vue';

export default {
  name: 'AddCrop',
  data() {
    return {
      show: false,
      showAdd: true,
      showEdit: false
    };
  },
  components: {
    MyUpload
  },
  props: {
    fileNum: String
  },
  computed: {
    storedImg() {
      return this.$store.state[this.fileNum];
    },
    hasNotUploaded() {
      return this.$store.state[this.fileNum] === '';
    },
    filterBlur() {
      return `${Math.floor(this.$store.state.filterProps.blur)}px`;
    },
    filterBrightness() {
      return this.$store.state.filterProps.brightness;
    },
    filterContrast() {
      return this.$store.state.filterProps.contrast;
    },
    filterGrayscale() {
      return this.$store.state.filterProps.grayscale;
    },
    filterHueRotate() {
      return `${this.$store.state.filterProps.hueRotate}deg`;
    },
    filterInvert() {
      return this.$store.state.filterProps.invert === 0 ? 0 : 1;
    },
    filterSaturate() {
      return this.$store.state.filterProps.saturate;
    },
    filterSepia() {
      return this.$store.state.filterProps.sepia;
    },
    filters() {
      const toDash = str =>
        str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      const filters = {
        saturate: this.filterSaturate,
        blur: this.filterBlur,
        brightness: this.filterBrightness,
        contrast: this.filterContrast,
        grayscale: this.filterGrayscale,
        'hue-rotate': this.filterHueRotate,
        invert: this.filterInvert,
        sepia: this.filterSepia
      };
      return {
        filter: Object.entries(filters)
          .filter(item => typeof item[1] !== 'object')
          .map(item => `${toDash(item[0])}(${item[1]})`)
          .join(' ')
      };
    }
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    toggleMouseOver() {
      if (this.hasNotUploaded) this.showAdd = true;
      else this.showEdit = true;
    },
    toggleMouseLeave() {
      if (!this.hasNotUploaded) this.showEdit = false;
    },
    closeUpload() {
      this.show = false;
    },
    toDash: str => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  }
};
</script>

<style scoped lang="scss">
.cell {
  cursor: pointer;
  width: 15vw;
  height: 15vw;
  background-color: rgb(230, 224, 224);
  margin: 15px 15px 15px 15px;
  position: relative;
}
img {
  max-width: 100%;
  filter: sepia('filterSepia');
  border: 1px solid #c4c4c4;
}
.add-btn,
.edit-btn {
  color: white;
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 5px;
  padding-right: 10px;
  z-index: 1;
}
</style>
