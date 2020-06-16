<!--
<ls-chat user="Username" team"TeamName">
    -- user can add their own HTML code here, replaces 'slot' component --
</ls-chat user="Username" team"TeamName">

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="component-style">  <!-- Just one main element per template -->
        <div class="buttons">
            <form class="gamepad">
                <button class="dir-button" v-on:click='move("NORTH")'>NORTH</button>
                <button class="dir-button" v-on:click='move("SOUTH")'>SOUTH</button>
                <button class="dir-button" v-on:click='move("WEST")'>WEST</button>
                <button class="dir-button" v-on:click='move("EAST")'>EAST</button>
            </form>
        </div>
        
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'

    // import other components you use here...

    class ButtonController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                direction: "",
                axisX: ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"],
            }
            this.props = { 
            }

            this.injectActions(['setPosition', 'addDirection']);
            this.injectGetters(['captainPosition']);
        }

        move( headingTo )
        {
            console.log(this);
            this.direction = headingTo;
            console.log( headingTo );

            let pos = [0,0];
            let ref = this.captainPosition;

            pos[0] += ref[0];
            pos[1] += ref[1];

            switch(headingTo)
            {
                case "NORTH":
                    pos[1]--; 
                    break;
                
                case "SOUTH":
                    pos[1]++;
                    break;

                case "WEST":
                    pos[0]--;
                    break;

                case "EAST":
                    pos[0]++;
                    break;
            }

            this.printDot(ref, pos);
            this.setPosition(pos);
            this.addDirection(headingTo);
        }

        printDot( from, to) {
            let cId = this.axisX[from[0]]+from[1];
            let element = document.getElementById(cId);
            element.classList.remove("dot");

            let cId2 = this.axisX[to[0]]+to[1];
            let element2 = document.getElementById(cId2);
            element2.classList.add("dot");
        }
    }

    export default new ButtonController('lsButton');

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */

    .component-style {
        display: flex;
        flex-direction: column;
        height: 8vh;
        width: 100%;
        align-self: center;
    }

    .dir-button{
        margin-left: 10px;
        padding: 0.9em;
        min-width:15vw ;
    }

    .clear{
        float: left;
    }

</style>