<!--
<ls-chat user="Username" team"TeamName">
    -- user can add their own HTML code here, replaces 'slot' component --
</ls-chat user="Username" team"TeamName">

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="component-style">  <!-- Just one main element per template -->
        <div class="chat panel-left">
            <div class="messages">
                    {{ theStream }}
            </div>

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
        }

        send()
        {
            this.theStream += `[${this.playerName} - ${this.playerRole}]: ${this.newMsg}`;
            this.theStream += "\n";
            this.newMsg = ``;

            //this.sendMsg( "newMsg" );
        }

        doIt( event ) {
            // A method that does something to the props or viewModel, or global state
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
        min-width: 30vw;
        max-height: 10vh;
        min-height: 10vh;
        border: 2px solid black;
        background: white;
        overflow: scroll;
    }

    .clear{
        float: left;
    }

    .panel-left{
        display: flex;
        flex-direction: column;
        align-self: flex-end;
        align-items: flex-end;
        align-content: flex-end;
    }

</style>