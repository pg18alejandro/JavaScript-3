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
            }
            this.props = { // props are passed in when using this component
            }
        }

        move( headingTo )
        {
            this.direction = headingTo;
            console.log( headingTo );
        }

        doIt( event ) {
            // A method that does something to the props or viewModel, or global state
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
        height: 20vh;
        width: 100%;
    }

    .gamepad{

    }

    .dir-button{
        margin-left: 10px;
        padding: 0.9em;
        min-width:10vw ;
    }

    .clear{
        float: left;
    }

</style>