<!--
@copyright (c) 2020. Pedro Avelino. All Rights Reserved.
-->
<template>

    <section class="component-style">  <!-- Just one main element per template -->
        <div class="chat panel-left">
            
            <!--We only render the chat if the player is logged in-->
            <div class="chat-title">
                Chat
            </div>

            <pre class="messages">{{ chatLog }}</pre>

            <div v-if=" playerName != null || playerRole != null">
                
                <form class="some-formatting" v-on:submit.prevent='send()'>
                    <input class="entry" type="text" v-model="newMsg" />
                </form>
                
                <div class="title"> From {{ playerName }} {{ team }}</div>
            
            </div>
            <div v-else class="chat-title">
                You must login to use the chat.
            </div>

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
        height: 17vh;
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
        color: black;
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