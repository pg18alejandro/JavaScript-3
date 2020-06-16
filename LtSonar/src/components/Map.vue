<!--
@Copyright (c) 2020. Alejandro Lopez. All Rights Reserved.
-->
<template>

    <section class="component-style">  <!-- Just one main element per template -->
        <table>
            <div class="row" >
                <h3 v-for="(letter, i) in axisX" :key="i" class="axis-x">{{letter}}</h3>
            </div>
            <div v-for="m in 3" :key="m" class="row">
                <div>
                    <h3 v-for="n in axisY[m - 1]" :key="n" class="axis-y">{{ n }}</h3>
                </div>
                <div v-for="n in 3" :key="n" class="row sector">
                    <div v-for="n in 5" :key="n">
                        <div v-for="n in 5" :key="n" class="tile waterTile"></div>
                    </div>
                </div>
            </div>
        </table>
    </section>

</template>

<script>
    import Controller from '@/../lib/controller'

    // import other components you use here...

    class MapController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                axisX: ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"],
                axisY: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]],
            }
            this.props = { // props are passed in when using this component
            }
        }


    }

    export default new MapController('lsMap');

</script>

<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */

    .tile {
        border: 1px solid black;
        background-color: white;
        color: black;
        height: 4.5vh;
        width: 2.2vw;
    }

    .axis-y {
        height: 4.5vh;
        width: 2.2vw;
                text-align: center;
        text-shadow: 2px 2px rgb(49, 48, 48);
        padding-top: 0.6vw;
    }

    .axis-x {
        width: 2.2vw;
        text-align: center;
        text-shadow: 2px 2px rgb(49, 48, 48);
    }

    .row {
        display: flex;
    }

    .sector {
        border: 1px solid white;
    }

    .waterTile {
        background-image:url("../assets/waterTile.jpg");
        background-size:100% 100%;
        cursor: pointer;
    }
</style>