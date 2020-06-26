/*
VUE App's MAIN Component.
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
'use strict';

import Vue from 'vue'
import Router from 'vue-router';
Vue.use( Router );

import Home from '@/routes/Home.vue'
import About from '@/routes/About.vue'
import lsNavigator from '@/routes/Navigator.vue'
import lsFirstOfficer from '@/routes/FirstOfficer.vue'
import lsCaptain from '@/routes/Captain.vue'
import lsEngineer from '@/routes/Engineer.vue'


export default new Router({
    routes: [
        { path:"/",             name:"Lobby", component: Home, props: { name: "LtSonar"} }, 
        { path:"/navigator",    name:"Navigator", component: lsNavigator }, 
        { path:"/captain",      name:"Captain", component: lsCaptain, props: {user: "Pedro"}}, 
        { path:"/firstofficer", name:"FirstOfficer", component: lsFirstOfficer }, 
        { path:"/engineer",     name:"Engineer", component: lsEngineer, props: {user: "Alex"} }, 
    ]
});