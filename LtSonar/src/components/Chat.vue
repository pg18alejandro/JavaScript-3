<!--
<ls-chat user="Username" team"TeamName">
    -- user can add their own HTML code here, replaces 'slot' component --
</ls-chat user="Username" team"TeamName">

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="component-style">  <!-- Just one main element per template -->
        <div class="chat panel-left">
            <div class="chat-title">
                Chat
            </div>
            <pre class="messages">{{ chatLog }}</pre>

            <form class="some-formatting" v-on:submit.prevent='send()'>
                <input class="entry" type="text" v-model="newMsg" />
            </form>
            <div class="title"> From {{ playerName }} {{ team }}</div>
        </div>
        

    </section>

</template>
<script>
    import Controller from '@/../lib/controller'

    // import other components you use here...

    class ChatController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                theStream: "",
                newMsg: "",
            }
            this.props = { // props are passed in when using this component
                user: String,
                team: String,
            }

            this.injectGetters(['playerName', 'playerRole', 'chatLog']);

            this.injectActions(['sendMsg']);

            this.chatLog = "hello";
        }

        send()
        {
            this.sendMsg( `[${this.playerName} - ${this.playerRole}]: ${this.newMsg} \n` );
            this.newMsg = ``;
        }
    }

    export default new ChatController('lsChat');

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
        justify-content: center;
    }

    .messages{
        display: flex;
        flex-direction: column-reverse;
        bottom: 0px;
        min-width: 30vw;
        max-width: 30vw;
        max-height: 10vh;
        min-height: 10vh;
        border: 2px solid black;
        background: white;
        font-size: large;
        overflow: auto;
    }

    .clear{
        float: left;
    }

    .chat-title{
        font-size: 1vw;
        color: white;
    }

    .panel-left{
        display: flex;
        flex-direction: column;
        align-self: flex-end;
        align-items: flex-end;
        align-content: flex-end;
    }

</style>