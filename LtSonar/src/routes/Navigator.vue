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
                        <h2 class="subtitle">History</h2>
                        <div class="middle-buttons">
                            <div class="notes">
                                <div class="note"></div>
                                <div class="note"></div>
                                <div class="note"></div>
                                <div class="note"></div>
                                <div class="note"></div>
                                <div class="note"></div>
                                <div class="note"></div>
                                <div class="note"></div>
                            </div>
                            <div class="middle">
                                <ls-crossbuttons></ls-crossbuttons>
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
    import lsCrossbuttons from '@/components/CrossButtons.vue'

    class NavigatorController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Navigator Control Panel',
            }
        }
    }

    export default new NavigatorController('lsNavigator', {lsChat, lsMap, lsCrossbuttons});

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
        text-shadow: 2px 2px rgb(49, 48, 48);
        margin-top: 0.5vw;
        margin-left: 1vw;
    }

    .notes {
        margin-top:0.5vw;
        margin-left:1vw;
        margin-right:1vw;
        border: 1px solid black;
        background-color: green;
        color: black;
        height: 38vh;
        width: 15vw;
    }

    .middle-buttons {
        display: flex;
        justify-content: center;
    }

    .subtitle {
        margin-left: 1vw;
        text-shadow: 2px 2px rgb(49, 48, 48);
    }

    .note {
        width: 100%;
        height: 4.72vh;
        background: white;
        border: 1px solid black;
    }

    .middle {
        padding-top: 3.5vw;
    }
</style>
