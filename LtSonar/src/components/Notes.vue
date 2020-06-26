<!--
<ls-chat user="Username" team"TeamName">
    -- user can add their own HTML code here, replaces 'slot' component --
</ls-chat user="Username" team"TeamName">

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="component-style">  <!-- Just one main element per template -->
        
        <div class="notes">
            <div v-if="captain">
                <lsHistory v-for="notes in captainHistory.length" :key="notes" v-bind:text="captainHistory[captainHistory.length - notes]"/>
            </div>
            <div v-else>
                <lsHistory v-for="notes in navigatorHistory.length" :key="notes" v-bind:text="navigatorHistory[navigatorHistory.length - notes]"/>
            </div>
        </div>

    </section>

</template>
<script>
    import Controller from '@/../lib/controller'
    import lsHistory from '@/components/HistoryComponent.vue'

    // import other components you use here...

    class NotesController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                direction: "",
            }
            this.props = { // props are passed in when using this component
                captain: Boolean
            }

            this.injectGetters(['captainHistory', 'navigatorHistory']);
        }
    }

    export default new NotesController('lsNotes', {lsHistory});

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
        background-color: rgb(97, 97, 97);
        color: black;
        height: 42vh;
        width: 18vw;
        overflow: auto;
    }

</style>