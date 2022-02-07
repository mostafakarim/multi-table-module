import mcDonaldsService from '@/services/mcDonaldsService.js';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: {},
  },
  mutations: {
    UPDATE_MENU(state, menu) {
      state.menu.error = false;
      state.menu = menu;
    },
    UPDATE_MENU_KO(state) {
      state.menu.error = true;
    },
  },
  actions: {
    getMenu({ commit }) {
      return mcDonaldsService
        .getMenu()
        .then((response) => {
          return commit('UPDATE_MENU', response);
        })
        .catch((reason) => {
          return commit('UPDATE_MENU_KO', reason.message);
        });
    },
    updateMenu({ commit }, menu) {
      let totalProducts = 0;
      menu.categories.forEach((category) => {
        category.products.forEach((product) => {
          totalProducts += product.selected
            ? product.price * product.quantity
            : 0;
        });
      });
      menu.total = totalProducts;
      commit('UPDATE_MENU', menu);
    },
  },
  modules: {},
});
