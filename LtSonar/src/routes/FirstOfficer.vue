<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>
    <!-- Main Container -->
    <section class="firstOfficer-container">
        <div class="firstOfficer">
            <!-- Title -->
            <h1 class="title">{{ name }}</h1>
        </div>

<!--  CHAT / DAMAGE / CHARGE -->
            <div class="topContainer">
                <div class="damage">
                    <p>Damage</p>
                </div>
                <div class="charge">
                    <p>charge</p>
                </div>
                <!-- ChatBox -->
                <div class="chat">
                    <p>Chat</p>
                </div>
            </div>


<!-- ACTIONS  -->
        <div class="actions">
         <!-- BOX 1 -->
            <div class="attack">
                <div class="box">
                    <!-- mines -->
                    <p>mines</p>
                </div>
                <div class="box">
                    <!-- torpedo -->
                    <p>torpedo</p>
                </div>
            </div>

        <!-- BOX 2 -->
            <div class="recon">
                <div class="box">
                    <!-- drones -->
                    <p>drones</p>
                </div>
                <div class="box">
                    <!-- sonar -->
                    <p>sonar</p>
                </div>
            </div>

        <!-- BOX 3 -->
            <div class="deffense">
                <div class="box">
                    <!-- silent -->
                    <p>silent</p>
                </div>
                <div class="box">
                    <!-- scenario -->
                    <p>scenario</p>
                </div>
            </div>
    
        </div>

    </section>

</template>

<script>
    import Controller from '@/../lib/controller'
    import lsChat from '@/components/Chat.vue'

    class FirstOfficerController extends Controller {
        
        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'First Officer Control Panel',
            }
        }
    }

    export default new FirstOfficerController('lsFirstOfficer');

</script>

<style scoped>
/* Local styles for First officer View */
    .firstOfficer-container {
        color: black;
        text-align: center;

        display: inline-block;
        width: 90vw;

        display: grid;
        grid-template-rows: .5fr 1fr 2fr 2fr;
        position: relative;

        top: 0;
        bottom: 0;
    }

    .title{
        margin-top: 2%;
    }

    p{
        color: black;
    }

/* TOP CONTAINER */
    .topContainer {
        border: 1px solid black;
        margin-left: 1%;
        margin-right: 3%;
        margin-bottom: 3%;
        display: grid;
        grid-template-columns: 2fr 2fr 2fr;

    }

/* ACTIONS CONTAINER */
    .actions {
        border: 1px solid black;
        margin-right: 3%;
        margin-left: 1%;

        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .box{
        border: 1px solid black;
        width: 510px;
        height: 210px;

        display: flex;
        align-items: center;
        flex-direction: column;
    }

    /* .mines {
        background-image: url("/LtSonar/src/assets/mine.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: chocolate;
    } */

</style>
