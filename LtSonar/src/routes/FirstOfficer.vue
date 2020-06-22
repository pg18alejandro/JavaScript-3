<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>
    <!-- Main Container -->
    <section class="firstOfficer-container">
        <div class="firstOfficer">
            <!-- Title -->
            <h1 class="title">{{ name }}</h1>
        </div>

<!--  CHAT / DAMAGE / CHARGE -->
            <div class="topContainer">
                <div class="damage">
                    <div class="warning-box">
                        <!-- image of explotion -->
                    </div>

                    <div class="sumbarine-damage">
                    <p>Warning!</p>


                    </div>
                </div>

                <!-- CHARGING -->
                <div class="charge">
                    <p>Charge</p>
                        <div class="charge-1"></div>
                        <div class="charge-2"></div>
                        <div class="charge-3"></div>
                        <div class="charge-4"></div>
                </div>

                <!-- ChatBox -->
                <div class="chat">
                    <ls-chat v-bind:user="user" team="Team A">Ronaldinho Soccer 64</ls-chat>
                </div>
            </div>

<!-- ACTIONS  -->
        <div class="actions">
         <!-- BOX 1 -->
            <div class="attack">
                <div class="box">
                    <!-- mines -->
                <div class="charge">
                    <p>Charge</p>
                    <div class="charge-action"></div>
                    <div class="charge-action"></div>
                    <div class="charge-action"></div>
                </div>

                    <officerPanel action="Mine">
                        <!-- FILL INFO -->
                    </officerPanel>
                </div>
                <div class="box">
                    <!-- torpedo -->
                    <div class="charge">
                    <p>Charge</p>
                    <div class="charge-action"></div>
                    <div class="charge-action"></div>
                    <div class="charge-action"></div>
                </div>
                    <div class="circle">
                    <!-- image -->
                    </div>

                    <officerPanel action="Torpedo">
                        <!-- FILL INFO -->
                    </officerPanel>
                </div>
            </div>

        <!-- BOX 2 -->
            <div class="recon">
                <div class="box">
                    <!-- drones -->
                    <div class="charge">
                    <p>Charge</p>
                    <div class="charge-action"></div>
                    <div class="charge-action"></div>
                    <div class="charge-action"></div>
                    <div class="charge-action"></div>
                </div>

                    <officerPanel action="Drones">
                        <!-- FILL INFO -->
                    </officerPanel>

                </div>
                <div class="box">
                    <!-- sonar -->
                <div class="charge">
                    <p>Charge</p>
                    <div class="charge-action"></div>
                    <div class="charge-action"></div>
                    <div class="charge-action"></div>
                </div>
                    
                <officerPanel action="Sonar">
                        <!-- FILL INFO -->
                </officerPanel>

                </div>
            </div>

        <!-- BOX 3 -->
            <div class="deffense">
                <div class="box">
                    <!-- silent -->
                <div class="charge">
                    <p>Charge</p>
                    <div class="charge-action"></div>
                    <div class="charge-action"></div>
                    <div class="charge-action"></div>
                    <div class="charge-action"></div>
                    <div class="charge-action"></div>
                    <div class="charge-action"></div>
                </div>

                 <officerPanel action="Silent">
                        <!-- FILL INFO -->
                    </officerPanel>

                </div>

                <div class="box">
                    <!-- scenario -->
                <div class="charge">
                    <p>Charge</p>
                    <div class="charge-action"></div>
                    <div class="charge-action"></div>
                    <div class="charge-action"></div>
                    <div class="charge-action"></div>
                </div>

                    <officerPanel action="Scenario">
                        <!-- FILL INFO -->
                    </officerPanel>
                </div>
            </div>
    
        </div>

    </section>

</template>

<script>
    import Controller from '@/../lib/controller'
    import lsChat from '@/components/Chat.vue'
    import officerPanel from '@/components/OfficerPanel.vue'

    class FirstOfficerController extends Controller {
        
        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'First Officer Control Panel',
            }
            this.props = {
                user: String
            }
        }
    }

    export default new FirstOfficerController('lsFirstOfficer', {lsChat, officerPanel});
    

</script>

<style scoped>
/* Main container */
    .firstOfficer-container {
        color: black;
        text-align: center;

        display: inline-block;
        width: 90vw;

        display: grid;
        grid-template-rows: .5fr 1fr 2fr 2fr;
        position: relative;

        top: 0;
        bottom: 0;
    }

    .firstOfficer {
        padding: 1%;
    }

    .title{
        margin-top: 2%;
    }

    p{
        margin: 1%;
    }

/* TOP CONTAINER */
    .topContainer {
        /* border: 1px solid black; */
        margin: -0.5% 0% 3% 8%;
        display: grid;
        grid-template-columns: 2fr 1.5fr 4fr;
    }

/* redBox */
    .damage{
        display: flex;
        justify-content: center;
        align-items: center;

        /* background: red; */
        /* border: 2px solid white; */
    }

/* explotion - bomb! */
    .warning-box{
        display: flex;
        justify-content: center;
        align-items: flex-end;

        background-image: url("../assets/explotion.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size:contain;

        /* border: 1px solid black; */
        width: 120px;
        height: 120px;
        margin: 1%;
    }

    .sumbarine-damage{
        color: yellow;
        border: 1px solid black;
        /* background: white; */
        width: 250px;
        height: 100px;
        
        margin: 1%;
    }

    .charge{
        /* border: 1px solid black; */
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .charge-1{
        margin: 2%;
        border: 1px solid black;
        width: 30px;
        height: 40px;
    }

    .charge-2{
        margin: 2%;
        border: 1px solid black;
        width: 30px;
        height: 60px;
    }
    .charge-3{
        margin: 2%;
        border: 1px solid black;
        width: 30px;
        height: 80px;
    }
    .charge-4{
        margin: 2%;
        border: 1px solid black;
        width: 30px;
        height: 100px;
    }

    .charge-1:active{
        background: red;
        width: 35px;
        height: 45px;
    }

    .charge-2:active{
        background: orangered;
        width: 35px;
        height: 65px;
    }
    .charge-3:active{
        background: yellow;
        width: 35px;
        height: 85px;
    }
    .charge-4:active{
        background: green;
        width: 35px;
        height: 105px;
    }

    .chat{
        display: flex;
        width: 80%;
        /* border: 1px solid black; */
    }

/* ACTIONS CONTAINER */
    .actions {
        /* border: 1px solid black; */
        margin-right: 3%;
        margin-left: 1%;
        margin-top: -2%;

        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .box{
        border: 1px solid black;
        width: 510px;
        height: 240px;


        display: flex;
        align-items: center;
        flex-direction: column;
    }

/* charging boxes */
    .charge-action{
        margin: 2%;
        margin-top: 6%;
        border: 1px solid black;
        width: 30px;
        height: 40px;
    }
    /* .mines {
        background-image: url("/LtSonar/src/assets/mine.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: chocolate;
    } */

</style>
