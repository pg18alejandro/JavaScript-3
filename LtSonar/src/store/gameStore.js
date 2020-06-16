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
import Navigator from '@/model/navigator'

export default {
    // PRIVATE: model state of the application, a bunch of POJS objects
    state: {
        captain: new Captain([8,8], []),
        navigator: new Navigator([[0,0]], []),
    },

    // PUBLIC: injected into components
    // called to do things to the state via ajax and mutations
    actions: {
        setPosition({ commit }, position){
            commit('SET_POSITION', position);
        },

        addDirection({ commit }, direction ){
            commit('ADD_DIRECTION', direction);
        },

        addNavPosition({ commit }, navPosition){
            commit('ADD_NAVPOSITION', navPosition);
        },

        addNavHistory({ commit }, navDirection){
            commit('ADD_NAVDIRECTION', navDirection);
        }
    },

    // PRIVATE: caled by actions to modify the state to prevent deadlock
    mutations: {
        SET_POSITION: ( state, position ) => { state.captain.position = position },
        ADD_DIRECTION: ( state, direction) => { state.captain.history.push(direction) },
        ADD_NAVPOSITION: ( state, navPosition) => { state.navigator.positions.push(navPosition) },
        ADD_NAVDIRECTION: ( state, navDirection) => { state.navigator.history.push(navDirection)},
    },

    // PUBLIC: injected into components
    // called to retrieve state data from the store
    getters: {
        captainPosition: state => state.captain.position,
        captainHistory: state => state.captain.history,
        navigatorPositions: state => state.navigator.positions,
        navigatorHistory: state => state.navigator.history,
    },
}
