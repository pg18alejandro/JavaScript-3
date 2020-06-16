<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="captain-container">
        <div class="captain">
            <!--Left side of the the panel-->
            <div class="left-holder">
                <h1 class="title">{{ name }}</h1>

                <div class="map-container">
                    <ls-map />

                    <!-- <table class="captain-map">
                        <tr v-for="(row, i) in mapData" :key="i" class="row">
                            <td v-for="(col, j) in row" :key="j" class="cell"></td>
                        </tr>
                    </table> -->
                </div>

            </div>

            <!--Right side of the the panel-->
            <div class="right-holder">
                <div class="status panel-status">Sub is not sunk</div>

                <div class="notes-container">
                    <ls-notes></ls-notes>
                </div>
                
                <div class="button-container">
                    <ls-button></ls-button>
                </div>
                
                <div class="bottom-left">
                    <ls-chat v-bind:user="user" team="Team A"></ls-chat>
                </div>
            </div>

        </div>
    </section>

</template>
<script>
    import Controller   from '@/../lib/controller'
    import lsChat       from '@/components/Chat.vue'
    import lsButton     from '@/components/Buttons.vue'
    import lsMap        from '@/components/Map.vue'
    import lsNotes      from '@/components/Notes.vue'

    class CaptainController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Captain Control Panel',
                mapData: [
                    ["water",   "water",  "island",   "island",   "water",  "water"],
                    ["island",  "island", "water",    "water",    "water",  "water"],
                    ["water",   "water",  "water",    "water",    "water"],
                    ["water",   "water",  "island",   "island",   "water",  "water"],
                    ["water",   "water",  "water",    "island",   "water",  "water"],
                    ["water",   "water",  "island",   "island",   "water",  "water"]
                ],
                row:["A", "B", "C", "D", "E", "F"]
            }
            this.props = {
                user: String
            }
        }
    }

    export default new CaptainController('lsCaptain', { lsChat, lsButton, lsMap, lsNotes });

</script>

<style scoped>
/* Local styles for this template */
    .captain{
        display: flex;
        flex-direction: row;
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .col{

    }

    .panel-left{
        min-width: 20vw;
    }

    .left-holder{
        display: flex;
        flex-direction: column;
        background-color: rgb(212, 77, 104);
        min-width: 40vw;
    }

    .right-holder{
        display: flex;
        flex-direction: column;
        background-color:rgb(96, 117, 185);
    }

    .map-container{
        display: flex;
        justify-content: center;
    }

    .notes-container{
        display: flexbox;
        min-height: 42vh;
    }

    .button-container{
        display: flexbox;
        padding-left: 4vw;
        padding-top: 1.5vw;
        justify-items: center;
        align-items: center;
    }

    .about {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .title {
        text-shadow: 2px 2px #777;
        font-size: 2vw;
        font-weight: bolder;
        padding-left: 10px;
    }

    .status{
        font-size: 2vw;
        color: black;
        padding-left: 15vh;
        text-shadow: 2px 2px #777;
        font-size: 2vw;
        font-weight: bolder;
        padding-left: 10px;
    }

    .bottom-left{
        display: flex;
    }
</style>
