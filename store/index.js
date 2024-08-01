import Vue from "vue";
import Vuex from "vuex";
import servicesCategory from "./modules/servicesCategory";

Vue.use(Vuex);
export default () => new Vuex.Store({
  state: {
  stats: [],
 
},
getters: {

},
actions: {
},
mutations: {
},
modules: {
  servicesCategory
  
},
});