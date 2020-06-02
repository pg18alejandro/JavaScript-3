<!--
@Copyright (c) 2020. Alejandro Lopez. All Rights Reserved.
-->
<template>

    <section class="component-style">  <!-- Just one main element per template -->
        <table>
            <div class="row" >
                <h3 v-for="(letter, i) in axisX" :key="i" class="axis-x">{{letter}}</h3>
            </div>
            <!--<tr class="row">
                <div>
                    <h3 v-for="(row, j) in axisY" :key="j" class="axis-y">{{row}}</h3>
                </div>
            </tr>-->
            <div class="row">
                <div>
                    <h3 class="axis-y">1</h3>
                    <h3 class="axis-y">2</h3>
                    <h3 class="axis-y">3</h3>
                    <h3 class="axis-y">4</h3>
                    <h3 class="axis-y">5</h3>
                </div>
                <div class="row sector">
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                </div>
                <div class="row sector">
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                </div>
                <div class="row sector">
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div>
                    <h3 class="axis-y">6</h3>
                    <h3 class="axis-y">7</h3>
                    <h3 class="axis-y">8</h3>
                    <h3 class="axis-y">9</h3>
                    <h3 class="axis-y">10</h3>
                </div>
                <div class="row sector">
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                </div>
                <div class="row sector">
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                </div>
                <div class="row sector">
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div>
                    <h3 class="axis-y">11</h3>
                    <h3 class="axis-y">12</h3>
                    <h3 class="axis-y">13</h3>
                    <h3 class="axis-y">14</h3>
                    <h3 class="axis-y">15</h3>
                </div>
                <div class="row sector">
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                </div>
                <div class="row sector">
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                </div>
                <div class="row sector">
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                    </div>
                    <div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
                        <div class="tile waterTile"></div>
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
                axisY: ["1", "2", "3", "4", "5"]
            }
            this.props = { // props are passed in when using this component
            }
        }

        doIt( event ) {
            // A method that does something to the props or viewModel, or global state
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