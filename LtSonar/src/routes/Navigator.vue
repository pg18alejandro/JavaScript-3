<!--
Copyright (c) 2020. Alejandro Lopez. All Rights Reserved.
-->
<template>

    <section class="navigator-container">
        <div class="model" v-if="modelA">
            <div class="startPoint"> <!-- Model asking for the first position of the ship -->
                <form action="sample-form" @submit.prevent="login(initialPos)">
                    <label>X: <input type="number" name="X" v-model="initialPos[0]"></label><br/>
                    <label>Y: <input type="number" name="Y" v-model="initialPos[1]"></label><br/>
                    <input type="submit" value="Submit">
                </form>
            </div>
        </div>
        <div class="navigator">
            <h1 class="title">{{ name }}</h1>
            <div class="nav-screen">
                <div class="map-panel">
                    <ls-map />
                </div>
                <div>
                    <div class="history">
                        <h2 class="subtitle">History</h2>
                        <div class="middle-buttons">
                            <ls-notes v-bind:captain=false></ls-notes>
                            <div>      
                                <button class="undo-button" v-on:click='undo()'>UNDO</button> <!-- Undo button -->                     
                                <ls-crossbuttons v-bind:movement=true></ls-crossbuttons> <!-- Buttons to move the ship -->
                                <ls-crossbuttons v-bind:movement=false></ls-crossbuttons> <!-- Buttons to move the path -->
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
    import Controller       from '@/../lib/controller'
    import lsChat           from '@/components/Chat.vue'
    import lsMap            from '@/components/Map.vue'
    import lsCrossbuttons   from '@/components/CrossButtons.vue'
    import lsNotes          from '@/components/Notes.vue'

    class NavigatorController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Navigator Control Panel',
                initialPos: [0, 0],
                axisX: ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"],
                modelA: true,
            }
            this.props = {
                user: String
            }

            this.injectActions(['setName', 'setRole', 'addNavPosition', 'setNavPosition', 'setNavHistory']);
            this.injectGetters(['playerName', 'playerRole', 'navigatorPositions', 'navigatorHistory']);
        }

        login(initialPos){ // log the initial position
            initialPos[0] *= 1;
            initialPos[1] *= 1;
            this.addNavPosition( initialPos );
            this.printCurrent(this.navigatorPositions[0]);
            this.modelA = false;
        }

        printCurrent(to) { // print a ship
            let cId = this.axisX[to[0]]+to[1];
            let element = document.getElementById(cId);
            element.classList.add("currentnavdot");
        }

        printPath(to) // print path dot
        {
            let cId = this.axisX[to[0]]+to[1];
            let element = document.getElementById(cId);
            element.classList.add("navdot");
        }

        undo() // undo function
        {
            let ref = this.navigatorPositions;
            let hist = this.navigatorHistory;
            let newArray = [];
            let newHistory = [];

            let to = ref[ref.length - 1];

            let cId = this.axisX[to[0]]+to[1];
            let element = document.getElementById(cId);
            element.classList.remove("currentnavdot");

            if(ref.length > 1)
            {
                for(let i = 0; i < ref.length - 1; i++)
                {
                    newArray[i] = ref[i];
                    
                }

                for(let i = 0; i < hist.length - 1; i++)
                {
                    newHistory[i] = hist[i]; 
                }

                to = newArray[newArray.length - 1];

                cId = this.axisX[to[0]]+to[1];
                element = document.getElementById(cId);
                element.classList.add("currentnavdot");
                element.classList.remove("navdot");
            }

            else
                this.modelA = true;

            this.setNavPosition(newArray);
            this.setNavHistory(newHistory);
        }

        vue_mounted(){ // every time you go into a screen
            if(!this.modelA)
            {
                this.printCurrent(this.navigatorPositions[this.navigatorPositions.length - 1]);

                for(let i = 0; i < this.navigatorPositions.length - 1; i++)
                {
                    this.printPath(this.navigatorPositions[i]);
                }
            }
        }
    }

    export default new NavigatorController('lsNavigator', {lsChat, lsMap, lsCrossbuttons, lsNotes});

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
        height: 50vh;
        width: 40vw;
    }

    .chat-panel {
        margin:1vw;
        border: 1px solid black;
        background-color: gray;
        color: black;
        height: 18vh;
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

    .model{
        position: absolute;;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items:center;
        background-color: rgba(87, 87, 85, 0.623);
    }

    .startPoint{
        width: 300px;
        height: 100px;
        background: rgb(255, 255, 255);
        padding: 5px;
        padding-left: 25px;
    }

    .undo-button{
        margin:0.5vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 4vh;
        width: 5vw;
    }
</style>
