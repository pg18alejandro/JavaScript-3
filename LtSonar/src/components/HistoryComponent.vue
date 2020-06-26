<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>
 <!-- Just one main element per template -->
    <div class="panel">
        <span class="format">{{text}}</span>
    </div>

</template>
<script>
    import Controller from '@/../lib/controller'

    // import other components you use here...

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

    export default new ComponentController('someTagName'/* , { subComponent, anotherComponent } */);

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