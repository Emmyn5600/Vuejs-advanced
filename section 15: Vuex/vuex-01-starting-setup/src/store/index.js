import { createStore } from 'vuex';
import rootMutation from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import counterModule from './modules/counter/index.js';

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
      // isHidden: false,
    };
  },
  mutations: rootMutation,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
