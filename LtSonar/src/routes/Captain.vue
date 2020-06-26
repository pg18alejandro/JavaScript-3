<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="captain-container" @show="print(captainPosition)">
        <div class="model" v-if="modelAct">
            <div class="startPoint">
                <form action="sample-form" @submit.prevent="login(initialPos)">
                    <label>X: <input type="number" name="X" v-model="initialPos[0]"></label><br/>
                    <label>Y: <input type="number" name="Y" v-model="initialPos[1]"></label><br/>
                    <input type="submit" value="Submit">
                </form>
            </div>
        </div>

        <div class="captain">
            <!--Left side of the the panel-->
            <div class="left-holder">
                <h1 class="title">{{ name }}</h1>

                <div class="map-container">
                    <ls-map />
                </div>

            </div>

            <!--Right side of the the panel-->
            <div class="right-holder">
                <div class="status panel-status">Sub is not sunk</div>

                <div class="notes-container" id="history">
                    <ls-notes v-bind:captain=true></ls-notes>
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
                initialPos: [0, 0],
                axisX: ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"],
                modelAct: true,
            }
            this.props = {
                user: String
            }

            this.injectActions(['setPosition']);
            this.injectGetters(['captainPosition', 'navigatorPositions']);
        }
        
        login(initialPos){ // log the initial position
            initialPos[0] *= 1;
            initialPos[1] *= 1;
            this.setPosition( initialPos );
            this.print(this.captainPosition);
            this.modelAct = false;
        }

        print(to) { // print a ship in a position
            let cId = this.axisX[to[0]]+to[1];
            let element = document.getElementById(cId);
            element.classList.add("dot");
        }

        printo(to) { // print a ship in a position
            let cId = this.axisX[to[0]]+to[1];
            let element = document.getElementById(cId);
            element.classList.add("currentnavdot");
        }

        vue_mounted(){
            if(!this.modelAct)
            {
                this.print(this.captainPosition);
                this.printo(this.navigatorPositions[this.navigatorPositions.length - 1]); // TODO call this when navigator change navposition
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

    .sample-form {
        border: 2px solid #333;
        margin: 1em;
        padding: 2em;
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

</style>
