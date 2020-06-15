/*
VUEX Data Store.
Copyright (c) 2019. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
import Vue from 'vue'
import Vuex from 'vuex'

//const baseURL = `${LOCATION.PROTOCOL}//${LOCATION.HOSTNAME}:${LOCATION.PORT}`;
//const Remote = Axios.create( { baseURL: baseURL });

// import User from '@/model/user' // import POJS model objects
import Captain from '@/model/captain'

export default {
    // PRIVATE: model state of the application, a bunch of POJS objects
    state: {
        captain: new Captain([0,0],[]),
    },

    // PUBLIC: injected into components
    // called to do things to the state via ajax and mutations
    actions: {
        setPosition({ commit }, position){
            commit('SET_POSITION', position);
        },

        addDirection({ commit }, direction ){
            commit('ADD_DIRECTION', direction);
        }
    },

    // PRIVATE: caled by actions to modify the state to prevent deadlock
    mutations: {
        SET_POSITION: ( state, position ) => { state.captain.position = position },
        ADD_DIRECTION: ( state, direction) => { state.captain.history.push(direction)}
    },

    // PUBLIC: injected into components
    // called to retrieve state data from the store
    getters: {
        playerPosition: state => state.captain.position,
        playerHistory: state => state.captain.history,
    },
}
