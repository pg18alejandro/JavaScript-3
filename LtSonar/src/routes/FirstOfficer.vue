<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="firstOfficer-container">
        <div class="firstOfficer">
            <h1 class="title">{{ name }}</h1>
        </div>

        <div class="contentContainer">


        <div class="mapContainer">
            <p>Map goes here</p>
        </div>

        <div class="toolsMenu">
            <div class="tools">
            <p>Tools Map</p>
            </div>

            <div class="chat">
                <p>chat</p>
            </div>
        </div>

        </div>

    </section>

</template>

<script>
    import Controller from '@/../lib/controller'

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
        display: inline-block;
        width: 100vw;
        background-color: lightgray;
    }

    .title {
        margin-top: 3%;
        margin-left: 4%;
        position: absolute;
        color: black;
    }

    p{
        color: black;
        margin: 1%;
    }

    .contentContainer {
        margin: 2vw;
        padding: 2%;
        border: 2px solid black;
        height: 70vh;
        width: 84vw;

        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: space-between;
    }

    .mapContainer {
        border: 2px solid black;
        width: 40vw;
        height: 55vh;
        margin-top: 2%;

        text-align: center;
    }

    .toolsMenu {
        margin-top: 2%;
        padding: 1%;
        border: 2px solid black;
        width: 38vw;
        height: 55vh;

        display: flex;
        flex-direction: column;
        align-items: center;

        text-align: center;
    }

    .tools {
        margin-top: 2%;
        border: 2px solid black;
        width: 30vw;
        height: 30vh;

        text-align: center;
    }

    .chat {
        margin: 2%;
        border: 2px solid black;
        width: 30vw;
        height: 20vh;


        text-align: center;
    }

</style>
