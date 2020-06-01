<!--
Copyright (c) 2020. Alejandro Lopez. All Rights Reserved.
-->
<template>

    <section class="navigator-container">
        <div class="navigator">
            <h1 class="title">{{ name }}</h1>
            <div class="nav-screen">
                <div class="map-panel">
                    <ls-map></ls-map>
                </div>
                <div>
                    <div class="history">
                        <h2>History</h2>
                        <div class="middle-buttons">
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
                    <div class="chat-panel">
                        <ls-chat v-bind:user="user" team="Team A">Ronaldinho Soccer 64</ls-chat>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'
    import lsChat from '@/components/Chat.vue'
    import lsMap from '@/components/Map.vue'

    class NavigatorController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Navigator Control Panel',
            }
        }
    }

    export default new NavigatorController('lsNavigator', {lsChat, lsMap});

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

    .map-panel {
        margin:1vw;
    }

    .history {
        margin:1vw;
        border: 1px solid black;
        background-color: gray;
        color: black;
        height: 45vh;
        width: 40vw;
    }

    .chat-panel {
        margin:1vw;
        border: 1px solid black;
        background-color: gray;
        color: black;
        height: 23vh;
        width: 40vw;
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
        height: 38vh;
        width: 15vw;
    }

    .buttons {
        margin:1vw;
        border: 1px solid black;
        background-color: green;
        color: black;
        height: 20vh;
        width: 12vw;
        align-self: center;
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
        justify-content: center;
    }

    .north {
        margin-left: 3.5vw;
    }

    .south {
        margin-left: 3.5vw;
    }
</style>
