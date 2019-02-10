import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    img1: '',
    img2: '',
    img3: '',
    img4: '',
    filterProps: {
      blur: 0,
      brightness: 1,
      contrast: 1,
      grayscale: 0,
      hueRotate: 0,
      invert: 0,
      saturate: 1,
      sepia: 0
    }
  },
  mutations: {
    setImg(state, payload) {
      const { value, imageNum } = payload;
      state[imageNum] = value;
    },
    setFilter(state, payload) {
      state.filterProps = payload;
    }
  },
  actions: {
    updateImg({ commit }, payload) {
      commit('setImg', payload);
    },
    updateFilter({ commit }, payload) {
      commit('setFilter', payload);
    }
  }
});
