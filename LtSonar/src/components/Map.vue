<!--
<ls-chat user="Username" team"TeamName">
    -- user can add their own HTML code here, replaces 'slot' component --
</ls-chat user="Username" team"TeamName">

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="component-style">  <!-- Just one main element per template -->
        <div class="map" id="ma">
        </div>
    </section>

</template>

<script>
    import Controller from '@/../lib/controller'

    // import other components you use here...

    class MapController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                
            }
            this.props = { // props are passed in when using this component
            }

            this.createGrid();
        }

        createGrid() {

        }

        doIt( event ) {
            // A method that does something to the props or viewModel, or global state
        }

    }

    export default new MapController('lsMap');

</script>

<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .map{
        border: 1px solid black;
        background-color: gray;
        color: black;
        height: 70vh;
        width: 36vw;
    }
</style>