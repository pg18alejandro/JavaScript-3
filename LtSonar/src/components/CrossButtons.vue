<!--
Copyright (c) 2020. Alejandro Lopez. All Rights Reserved.
-->
<template>

    <section class="component-style">  <!-- Just one main element per template -->
        <div class="buttons">
            <div v-if="movement">
                <div class="gamepad">
                    <button class="dir-button centered" v-on:click='move("NORTH")'>NORTH</button>
                    <div class="middle-buttons">
                        <button class="dir-button" v-on:click='move("WEST")'>WEST</button>
                        <button class="dir-button" v-on:click='move("EAST")'>EAST</button>
                    </div>
                    <button class="dir-button centered" v-on:click='move("SOUTH")'>SOUTH</button>
                </div>
            </div>

            <div v-else>
                <div class="gamepad">
                    <button class="dir-button centered" v-on:click='displacement("NORTH")'>UP</button>
                    <div class="middle-buttons">
                        <button class="dir-button" v-on:click='displacement("WEST")'>LEFT</button>
                        <button class="dir-button" v-on:click='displacement("EAST")'>RIGHT</button>
                    </div>
                    <button class="dir-button centered" v-on:click='displacement("SOUTH")'>DOWN</button>
                </div>
            </div>

        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'

    // import other components you use here...

    class CrossButtonController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                direction: "",
                axisX: ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"],
            }
            this.props = { // props are passed in when using this component
                movement: Boolean
            }

            //this.printDot([0,0], [8,8]);
            this.injectActions(['addNavPosition', 'addNavHistory', 'setNavPosition']);
            this.injectGetters(['navigatorPositions']);
        }

        move( headingTo )
        {
            this.direction = headingTo;
            console.log( headingTo );

            let navPos = [0,0];
            let ref = this.navigatorPositions.slice()[this.navigatorPositions.length - 1];

            navPos[0] += ref[0];
            navPos[1] += ref[1];

            switch(headingTo)
            {
                case "NORTH":
                    navPos[1]--; 
                    break;
                
                case "SOUTH":
                    navPos[1]++;
                    break;

                case "WEST":
                    navPos[0]--;
                    break;

                case "EAST":
                    navPos[0]++;
                    break;
            }

            if(navPos[0] > 0 && navPos[0] < 16  && navPos[1] > 0 && navPos[1] < 16)
            {
                this.printDot(ref, navPos);
                this.addNavPosition(navPos);
                this.addNavHistory(headingTo);
            }
        }

        displacement(headingTo)
        {
            let ref = this.navigatorPositions;
            let newArray = [];
            let outBoard = false;

            switch(headingTo)
            {
                case "NORTH":
                    for(let i = 0; i < ref.length; i++)
                    {
                        newArray[i] = [0, 0]; 
                        newArray[i][0] += ref[i][0];
                        newArray[i][1] += ref[i][1] - 1; 

                        if(newArray[i][1] <= 0)
                        {
                            outBoard = true;
                            break;
                        }
                    }

                    break;
                
                case "SOUTH":
                    for(let i = 0; i < ref.length; i++)
                    {
                        newArray[i] = [0, 0]; 
                        newArray[i][0] += ref[i][0];
                        newArray[i][1] += ref[i][1] + 1; 

                        if(newArray[i][1] >= 16)
                        {
                            outBoard = true;
                            break;
                        }
                    }
                    break;

                case "WEST":
                    for(let i = 0; i < ref.length; i++)
                    {
                        newArray[i] = [0, 0]; 
                        newArray[i][0] += ref[i][0] - 1;
                        newArray[i][1] += ref[i][1]; 

                        if(newArray[i][0] <= 0)
                        {
                            outBoard = true;
                            break;
                        }
                    }
                    break;

                case "EAST":
                    for(let i = 0; i < ref.length; i++)
                    {
                        newArray[i] = [0, 0]; 
                        newArray[i][0] += ref[i][0] + 1;
                        newArray[i][1] += ref[i][1]; 

                        if(newArray[i][0] >= 16)
                        {
                            outBoard = true;
                            break;
                        }
                    }
                    break;
            }

            if(!outBoard)
            {
                this.removeDots(ref);

                for(let i = 0; i < newArray.length; i++)
                {
                    let position = newArray[i];

                    let cId = this.axisX[position[0]]+position[1];
                    let element = document.getElementById(cId);

                    if(i == ref.length - 1)
                        element.classList.add("currentnavdot");

                    else
                        element.classList.add("navdot");
                }

                this.setNavPosition(newArray);
            }

        }

        removeDots(pos){

            for( let i = 0; i < pos.length; i++ )
            {
                let position = pos[i];

                let cId = this.axisX[position[0]]+position[1];
                let element = document.getElementById(cId);
                element.classList.remove("currentnavdot");
                element.classList.remove("navdot");
            }
        }

        printDot( from, to) { // hide the last ship position dot and print in the new one
            let cId = this.axisX[from[0]]+from[1];
            let element = document.getElementById(cId);
            element.classList.remove("currentnavdot");
            element.classList.add("navdot");

            let cId2 = this.axisX[to[0]]+to[1];
            let element2 = document.getElementById(cId2);
            element2.classList.add("currentnavdot");
        }
    }

    export default new CrossButtonController('lsCrossButton');

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .buttons {
        margin: 2px;
        margin-right: 20px;
        border: 1px solid black;
        background-color: white;
        color: black;
        height: 19vh;
        width: 12vw;
    }

    .dir-button{
        margin:0.5vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 4vh;
        width: 5vw;
    }

    .middle-buttons {
        display: flex;
        justify-content: center;
    }

    .centered {
        margin-left: 3.5vw;
    }

    .clear{
        float: left;
    }

</style>