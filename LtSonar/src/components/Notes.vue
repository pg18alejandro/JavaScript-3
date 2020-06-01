<!--
<ls-chat user="Username" team"TeamName">
    -- user can add their own HTML code here, replaces 'slot' component --
</ls-chat user="Username" team"TeamName">

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="component-style">  <!-- Just one main element per template -->
        
        <div class="notes">

        </div>

    </section>

</template>
<script>
    import Controller from '@/../lib/controller'

    // import other components you use here...

    class NotesController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                direction: "",
            }
            this.props = { // props are passed in when using this component
            }
        }

        doIt( event ) {
            // A method that does something to the props or viewModel, or global state
        }
    }

    export default new NotesController('lsNotes');

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .component-style {
        display: flex;
        height: 42vh;
        width: 100%;
        justify-content: center;
    }
    .notes {
        margin:1vw;
        border: 1px solid black;
        background-color: green;
        color: black;
        height: 42vh;
        width: 18vw;
    }

</style>