import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hue: 0,
    vibrance: 0,
    contrast: 30,
    sepia: 0
  },
  mutations: {
    setHue(state, payload) {
      state.hue = payload;
    },
    setVibrance(state, payload) {
      state.vibrance = payload;
    },
    setContrast(state, payload) {
      state.contrast = payload;
    },
    setSepia(state, payload) {
      state.sepia = payload;
    }
  },
  actions: {
    updateHue({ commit }, { value }) {
      commit('setHue', value);
    },
    updateVibrance({ commit }, { value }) {
      commit('setVibrance', value);
    },
    updateContrast({ commit }, { value }) {
      commit('setContrast', value);
    },
    updateSepia({ commit }, { value }) {
      commit('setSepia', value);
    }
  }
});
