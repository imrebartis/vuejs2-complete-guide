import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import * as actions from './actions';
import * as mutations from './modules/mutations';
import * as getters from './modules/getters';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 0
    },
    getters,
    mutations,
    actions,
    modules: {
        counter
    }
});