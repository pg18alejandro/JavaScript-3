<!--
Copyright (c) 2020. Alejandro Lopez. All Rights Reserved.
-->
<template>

    <section class="navigator-container">
        <div class="navigator">
            <h1 class="title">{{ name }}</h1>
            <div class="nav-screen">
                <div class="map">Map</div>
                <div class="history">History
                    <div class="notes">Notes </div>
                    <div class="buttons">Buttons 
                        <div class="button north"> North
                        </div>
                        <div class="middle-buttons">
                            <div class="button west"> West
                            </div>
                            <div class="button east"> East
                            </div>
                        </div>
                        <div class="button south"> South
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'

    class NavigatorController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Navigator Control Panel',
            }
        }
    }

    export default new NavigatorController('lsNavigator');

</script>
<style scoped>
/* Local styles for this template */
    .about-container {
        display: inline-block;
        width: 100%;
    }

    .navigator {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .nav-screen {
        display: flex;
    }

    .map {
        margin:1vw;
        margin-left: 1vw;
        border: 1px solid black;
        background-color: gray;
        color: black;
        height: 70vh;
        width: 45vw;
    }

    .history {
        margin:1vw;
        border: 1px solid black;
        background-color: gray;
        color: black;
        height: 45vh;
        width: 40vw;
        display: flex;
    }

    .title {
        text-shadow: 2px 2px #777;
        margin-top: 0.5vw;
        margin-left: 1vw;
    }

    .notes {
        margin:1vw;
        border: 1px solid black;
        background-color: green;
        color: black;
        height: 42vh;
        width: 18vw;
    }

    .buttons {
        margin:1vw;
        margin-left: 4vw;
        border: 1px solid black;
        background-color: green;
        color: black;
        height: 20vh;
        width: 12vw;
    }


    .button {
        margin:0.5vw;
        border: 1px solid black;
        background-color: grey;
        color: black;
        height: 4vh;
        width: 5vw;
    }

    .middle-buttons {
        display: flex;
    }

    .north {
        margin-left: 3.5vw;
    }

    .south {
        margin-left: 3.5vw;
    }
</style>
