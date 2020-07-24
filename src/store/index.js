import Vue from "vue";
import Vuex from "vuex";
import { arrayJugadores } from "@/constants/jugadores.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showAlert: false,
    typeAlert: "info",
    messageAlert: "",
    existError: false,
    players: [],
  },
  mutations: {
    SET_ADD_PLAYER: (state, payload) => state.players.push(payload),
    SET_SHOW_ALERT(state, payload) {
      state.showAlert = true;
      state.messageAlert = payload;
      setTimeout(() => {
        state.showAlert = false;
      }, 2000);
    },
  },
  actions: {
    loadPlayers({ state }) {
      state.players = arrayJugadores;
    },
    savePlayer({ state, commit }, player) {
      let maxID = 1;
      if (player.id <= 0) {
        maxID =
          Math.max.apply(
            null,
            state.players.map((item) => item.id)
          ) + 1;
        player.id = maxID;
      }
      // Save Player
      commit("SET_ADD_PLAYER", player);
      state.existError = false;
    },
  },
  modules: {},
});
