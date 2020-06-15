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
                <button class="dir-button centered" v-on:click='move("NORTH")'>NORTH</button>
                <div class="middle-buttons">
                    <button class="dir-button" v-on:click='move("WEST")'>WEST</button>
                    <button class="dir-button" v-on:click='move("EAST")'>EAST</button>
                </div>
                <button class="dir-button centered" v-on:click='move("SOUTH")'>SOUTH</button>
            </form>
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
            }
            this.props = { // props are passed in when using this component
            }

            this.injectActions(['addNavPosition', 'addNavHistory']);
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
                    navPos[1]++; 
                    break;
                
                case "SOUTH":
                    navPos[1]--;
                    break;

                case "WEST":
                    navPos[0]--;
                    break;

                case "EAST":
                    navPos[0]++;
                    break;
            }

            this.addNavPosition(navPos);
            this.addNavHistory(headingTo);
        }

        doIt( event ) {
            // A method that does something to the props or viewModel, or global state
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
        margin:1vw;
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