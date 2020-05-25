<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="captain-container">
        <div class="captain">
            <h1 class="title">{{ name }}</h1>
            <div class="map panel-main">Put map here</div>
                <ls-chat v-bind:user="user" team="Team A">Ronaldinho Soccer 64</ls-chat>
            <div class="status panel-status">Sub is not sunk</div>
            <div class="controls panel-controls">Buttons here</div>
        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'
    import lsChat from '@/components/Chat.vue'

    class CaptainController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Captain Control Panel',
            }
            this.props = {
                user: String
            }
        }
    }

    export default new CaptainController('lsCaptain', { lsChat });

</script>
<style>
/* Local styles for this template */
    .about-container {
        display: inline-block;
        width: 100%;
    }

    .about {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .title {
        text-shadow: 2px 2px #777;
    }
</style>
