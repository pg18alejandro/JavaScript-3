<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="master-container">
        <div>
            <h1 class="title">{{ name }}</h1>
        </div>
        <div class="image-container">
            <!--Image of submariwne-->
        </div>
        <div class="control-panel-container">
            <!--Container of different panels-->
            <div>
                <!--West Panel-->
                <lsControlPanel v-bind:title=title letter="W">

                </lsControlPanel>
            </div>
            <div>
                <!--North Panel-->
                <lsControlPanel v-bind:title=title letter="N">

                </lsControlPanel>
            </div>
            <div>
                <!--South Panel-->
                <lsControlPanel v-bind:title=title letter="S">

                </lsControlPanel>
            </div>
            <div>
                <!--East Panel-->
                <lsControlPanel v-bind:title=title letter="E">

                </lsControlPanel>
            </div>
                <lsChat>

                </lsChat>
        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'
    import lsControlPanel from '@/components/ControlPanel.vue'
    import lsChat from '@/components/Chat.vue'
    class EngineerController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Engineer Control Panel',
            }
        }
    }

    export default new EngineerController('lsEngineer', {lsControlPanel,lsChat});

</script>
<style>
/* Local styles for this template */
    .master-container {
        display: flex;
        flex-direction: column;
        width: 80vw;
        margin: 2vw;
    }
    .image-container {
        background-image: url("../assets/sonar_logo.png");
        background-size: contain;
        background-repeat: repeat;
        flex: 50%;
    }
    .control-panel-container{
        display: flex;
        flex: 50%;
        flex-direction: row;
    }

    .title{
        align-content: center;
        text-align: center;
    }

    .chat-box{
        display: flex;
    }
</style>
