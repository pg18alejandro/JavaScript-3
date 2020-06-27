<!--
@copyright (c) 2020. Alejandro Lopez. All Rights Reserved.
-->
<template>
    <div class="panel">
        <span class="format">{{text}}</span>
    </div>

</template>
<script>
    import Controller from '@/../lib/controller'

    class ComponentController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
            }
            this.props = { // props are passed in when using this component
                text: String
            }
        }
    }

    export default new ComponentController('someTagName');

</script>
<style scoped>
    .panel {
        height: 5vh;
        width: 100%;
        background: white;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .format
    {
        font-weight: bold;
    }

</style>