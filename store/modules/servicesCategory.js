import axios from "axios";
import { private_url } from "@/plugins/axios";

const state = {
    category: []
};
const getters = {
    getCategory: (state) => {
    return state.category
}
};
const mutations = {
    CATEGORY:(state,payload) => {
        console.log("payload",payload)
        state.category=payload
    }
};
const actions = {
  
};


export default {
  state,
  getters,
  mutations,
  actions,
};
