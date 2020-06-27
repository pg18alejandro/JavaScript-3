<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="master-container">
        <div>
            <h1 class="title">{{ name }}</h1>
        </div>
        <div class="image-container" @click="smth()">
            <!--Image of submariwne-->
        </div>
        <div class="control-panel-container">
            <!--Container of different panels-->
            <div class="parent-block-click">
                <!--West Panel-->
                <div class="block-click" v-if="captainHistory[captainHistory.length - 1] != 'WEST'">

                </div>
                <lsControlPanel letter="W">

                </lsControlPanel>
            </div>
            <div class="parent-block-click">
                <!--North Panel-->
                <div class="block-click" v-if="captainHistory[captainHistory.length - 1] != 'NORTH'">

                </div>
                <lsControlPanel letter="N">

                </lsControlPanel>
            </div>
            <div class="parent-block-click">
                <!--South Panel-->
                <div class="block-click" v-if="captainHistory[captainHistory.length - 1] != 'SOUTH'">

                </div>
                <lsControlPanel letter="S">

                </lsControlPanel>
            </div>
            <div class="parent-block-click">
                <!--East Panel-->
                <div class="block-click" v-if="captainHistory[captainHistory.length - 1] != 'EAST'">

                </div>
                <lsControlPanel letter="E">

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
                currentHeading: ""
            }

            this.injectGetters(["captainHistory"]);
            this.injectGetters(["engineerSymbolGroup"]);
        }

        smth()
        {
            console.log(this.captainHistory[this.captainHistory.length - 1])
        }

        vue_created()
        {
            console.log(this.engineerSymbolGroup)
        }
    }

    export default new EngineerController('lsEngineer', {lsControlPanel,lsChat});

</script>
<style scoped>
/* Local styles for this template */
    .master-container {
        display: flex;
        flex-direction: column;
        width: 80vw;
        margin: 2vw;
    }
    .image-container {
        background-image: url("../assets/engineerSubmarine.png");
        background-size: cover;
        background-repeat: round;
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
    .parent-block-click{
        position: relative;
        display: block;
    }
    .block-click{
        position: absolute;
        width: 100%;
        height: 100%;
       
    }
</style>
