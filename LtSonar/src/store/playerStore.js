/*
VUEX Data Store.
Copyright (c) 2019. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

//const baseURL = `${LOCATION.PROTOCOL}//${LOCATION.HOSTNAME}:${LOCATION.PORT}`;
//const Remote = Axios.create( { baseURL: baseURL });

// import User from '@/model/user' // import POJS model objects
import Player from '@/model/player'

export default {
    // PRIVATE: model state of the application, a bunch of POJS objects
    state: {
        player: new Player(),
    },

    // PUBLIC: injected into components
    // called to do things to the state via ajax and mutations
    actions: {

        setPlayer({ commit }, playerInfo){
            Axios.post("http://localhost:4000/api/player/login", playerInfo) // set 4000 as the port of the server
                .then(response => response.data)
                .then(data => (data.error ? error => {throw(error)} : data.payload))
                .then(responseData => {
                    commit('SET_PLAYER', playerInfo);
                })
                .catch(error => {
                    //commit()
                });
        }
    },

    // PRIVATE: caled by actions to modify the state to prevent deadlock
    mutations: {
        SET_PLAYER: ( state, playerInfo ) => { state.player.name = playerInfo.name, state.player.name = playerInfo.role} // Now playerInfo is a js Object with the name and role in it
    },

    // PUBLIC: injected into components
    // called to retrieve state data from the store
    getters: {
        playerName: state => state.player.name,
        playerRole: state => state.player.role,
    },
}
