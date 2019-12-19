import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let _sandBox = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/marcel/logs",
  timeout: 3000
});
let _api = axios.create({
  baseURL: "https://trackapi.nutritionix.com/v2/natural/nutrients",
  timeout: 3000,
  headers: {
    "x-app-key": "bd200afc2cd3733c9d4d6c9544ebb393",
    "x-app-id": "965f4e5e"
  }
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logs: [],
    activeLog: {},
    food: [],
    searchResults: {}
  },
  mutations: {
    setAllLogs(state, data) {
      state.logs = data;
    },
    addLog(state, data) {
      state.logs.unshift(data);
    },
    setActiveLog(state, data) {
      state.activeLog = data;
    },
    setActiveSearchResults(state, data) {
      state.searchResults = data;
      console.log("search results", data);
    }
  },
  actions: {
    async getAllLogs({ commit, dispatch }) {
      let res = await _sandBox.get("");
      commit("setAllLogs", res.data.data);
    },
    async createLog({ commit, dispatch }, data) {
      let res = await _sandBox.post("", data);
      commit("addLog", res.data.data);
    },
    async getActiveLog({ commit, dispatch }, id) {
      let res = await _sandBox.get("" + id);
      commit("setActiveLog", res.data.data);
    },

    async getSearchResults({ commit, dispatch }, query) {
      let res = await _api.post("", query);
      commit("setActiveSearchResults", res.data.foods);
    }
  },
  modules: {}
});
