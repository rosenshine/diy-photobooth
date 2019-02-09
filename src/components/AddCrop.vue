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
      <img :src="storedImg" />
    </div>
    <my-upload
      field="img"
      v-model="show"
      :width="300"
      :height="300"
      :imageNum="fileNum"
      img-format="png"
      @close-upload="closeUpload"
    ></my-upload>
  </div>
</template>

<script>
import MyUpload from '@/components/upload-2.vue';

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
    }
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
}
.add-btn,
.edit-btn {
  color: white;
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 5px;
  padding-right: 10px;
}
</style>
