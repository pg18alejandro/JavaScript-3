<!--
@Copyright (c) 2020. Alejandro Lopez. All Rights Reserved.
-->
<template>

    <section class="component-style">  
        <div>
            <div class="row" >
                <h3 v-for="(letter, i) in axisX" :key="i" class="axis-x">{{letter}}</h3>
            </div>
            <div v-for="m in 3" :key="m" class="row"><!-- Grid -->
                <div>
                    <h3 v-for="n in axisY[m - 1]" :key="n" class="axis-y">{{ n }}</h3>
                </div>
                <div v-for="z in 3" :key="z" class="row sector"><!-- Section -->
                    <div v-for="k in 5" :key="k"><!-- Column -->
                        <div v-for="n in 5" :key="n" class="tile waterTile"> <!-- Tile -->
                            <div :id="axisX[k + (5 * (z-1))]+axisY[m - 1][n-1]" ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    import Controller from '@/../lib/controller'

    class MapController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                axisX: ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"],
                axisY: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]],
            }
            this.props = {
            }
        }
    }

    export default new MapController('lsMap');

</script>

<style scoped>

    .tile {
        border: 1px solid black;
        background-color: white;
        color: black;
        height: 4.5vh;
        width: 2.2vw;
        display: flex;
        justify-content: center;
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

    .currentnavdot{
        height: 25px;
        width: 25px;
        background-color: rgb(189, 114, 17);
        border-radius: 50%;
        align-self: center;
    }    
    
    .navdot{
        height: 25px;
        width: 25px;
        background-color: rgb(107, 74, 30);
        border-radius: 50%;
        align-self: center;
    }

    .dot {
        height: 25px;
        width: 25px;
        background-color: rgb(189, 17, 17);
        border-radius: 50%;
        align-self: center;
    }
</style>