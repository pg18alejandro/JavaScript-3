<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="component-style">  <!-- Just one main element per template -->
            <!-- Put your HTML template here-->
                <div class="box">
                <!-- <div class="charge">
                    <p>Charge</p>
                    <div class="charge-action"></div>
                    <div class="charge-action"></div>
                    <div class="charge-action"></div>
                </div> -->

<!-- change -->
                    <div class="circle">
                    <!-- image -->
                    </div>

                    <!-- <symbol v-bind:class="`circle-square ${action}`"> -->
                    <!-- image -->
                    <!-- </symbol> -->


                    <div class="btns">
                        <button>Deny</button>
                         <p>{{action}}</p>
                        <button>Confirm</button>
                    </div>
                </div>
            <slot></slot>
    </section>
</template>
<script>
    import Controller from '@/../lib/controller'

    // import other components you use here...

    class OfficerPanel extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                someData: ""
            }
            this.props = { // props are passed in when using this component
                action: String,
                
            }
        }

    }

    export default new OfficerPanel('officerPanel'/* , { subComponent, anotherComponent } */);

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
    }
    
        .circle{
        margin-top: 2%;
        border: 1px solid black;
        width: 100px;
        height: 100px;
        border-top-left-radius: 50% 50%;
        border-top-right-radius: 50% 50%;
        border-bottom-right-radius: 50% 50%;
        border-bottom-left-radius: 50% 50%;
    }

        .btns{
        margin-top: 1%;
        display: flex;
        flex-direction: row;
    }

</style>
