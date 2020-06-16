/*
VUEX Data Store.
Copyright (c) 2019. Pedro Avelino All Rights Reserved.
*/
import Vue from 'vue'
import Vuex from 'vuex'

//const baseURL = `${LOCATION.PROTOCOL}//${LOCATION.HOSTNAME}:${LOCATION.PORT}`;
//const Remote = Axios.create( { baseURL: baseURL });

// import User from '@/model/user' // import POJS model objects
import Chat from '@/model/chat'

export default {
    // PRIVATE: model state of the application, a bunch of POJS objects
    state: {
        stream: new Chat(),
    },

    // PUBLIC: injected into components
    // called to do things to the state via ajax and mutations
    actions: {

        sendMsg( { commit }, msg ){
            commit('ADD_MSG', msg);
        }

    },

    // PRIVATE: caled by actions to modify the state to prevent deadlock
    mutations: {
        ADD_MSG: ( state, msg ) => { state.stream.log += msg},
    },

    // PUBLIC: injected into components
    // called to retrieve state data from the store
    getters: {
        chatLog: state => state.stream.log,
    },
}
