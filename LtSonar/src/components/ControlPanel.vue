<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>
  <section class="component-style" >
    <div>
      <!-- Put your HTML template here-->
      <div class="panel-top">
        <!--W-->
        <h3>{{letter}}</h3>
      </div>
      <div class="central-circuit">
        <!--Central circuits-->
        <!-- Top left symbol -->
        <lsSymbol v-if="letter == 'W'" :imageUrl="imageRed" :panel="'WEST'" :circuit="1" :position="1"></lsSymbol>
        <lsSymbol v-if="letter == 'N'" :imageUrl="imageYellow" :panel="'NORTH'" :circuit="2" :position="1"></lsSymbol>
        <lsSymbol v-if="letter == 'S'" :imageUrl="imageGreen" :panel="'SOUTH'" :circuit="3" :position="1"></lsSymbol>
         <lsSymbol v-if="letter == 'E'" :imageUrl="imageGreen" :panel="'EAST'" :circuit="2" :position="1"></lsSymbol>
        <!-- Top right symbol -->
        <template v-if="letter == 'W'">
          <lsSymbol :imageUrl="imageYellow" :panel="'WEST'" :circuit="1" :position="2"></lsSymbol>
        </template>
        <template v-else>
          <div></div>
        </template>
        <!-- Bottom left symbol -->
        <template v-if="letter == 'W'">
          <div></div>
        </template>
        <template v-else>
          <lsSymbol v-if="letter == 'N'" :imageUrl="imageRed" :panel="'NORTH'" :circuit="2" :position="3"></lsSymbol>
          <lsSymbol v-if="letter == 'S'" :imageUrl="imageYellow" :panel="'SOUTH'" :circuit="3" :position="3"></lsSymbol>
          <lsSymbol v-if="letter == 'E'" :imageUrl="imageYellow" :panel="'EAST'" :circuit="3" :position="3"></lsSymbol>
        </template>
        <!-- Bottom right symbol -->
        <lsSymbol v-if="letter == 'W'" :imageUrl="imageGreen" :panel="'WEST'" :circuit="1" :position="4"></lsSymbol>
        <lsSymbol v-if="letter == 'N'" :imageUrl="imageYellow" :panel="'NORTH'" :circuit="2" :position="4"></lsSymbol>
        <lsSymbol v-if="letter == 'S'" :imageUrl="imageRed" :panel="'SOUTH'" :circuit="3" :position="4"></lsSymbol>
        <lsSymbol v-if="letter == 'E'" :imageUrl="imageRed" :panel="'EAST'" :circuit="1" :position="4"></lsSymbol>
      </div>
      <div class="reactors">
        <!--Reactors-->
        <!-- Left reactor -->
        <lsSymbol v-if="letter == 'W'" :imageUrl="imageGreen"  :panel="'WEST'" :circuit="0" :position="5"></lsSymbol>
        <lsSymbol v-if="letter == 'N'" :imageUrl="imageGreen"  :panel="'NORTH'" :circuit="0" :position="5"></lsSymbol>
        <lsSymbol v-if="letter == 'S'" :imageUrl="imageRed"  :panel="'SOUTH'" :circuit="0" :position="5"></lsSymbol>
        <lsSymbol v-if="letter == 'E'" :imageUrl="imageBlue"  :panel="'EAST'" :circuit="4" :position="5"></lsSymbol>

        <!-- Middle reactor -->
        <lsSymbol v-if="letter == 'W'" :imageUrl="imageBlue" :panel="'WEST'" :circuit="4" :position="6"></lsSymbol>
        <lsSymbol v-if="letter == 'S'" :imageUrl="imageBlue" :panel="'SOUTH'" :circuit="4" :position="6"></lsSymbol>
        <lsSymbol v-if="letter == 'N'" :imageUrl="imageRed" :panel="'NORTH'" :circuit="0" :position="6"></lsSymbol>
        <lsSymbol v-if="letter == 'E'" :imageUrl="imageGreen" :panel="'EAST'" :circuit="0" :position="6"></lsSymbol>

        <!-- Right reactor -->
        <lsSymbol v-if="letter == 'W'" :imageUrl="imageBlue" :panel="'WEST'" :circuit="4" :position="7"></lsSymbol>
        <lsSymbol v-if="letter == 'N'" :imageUrl="imageBlue" :panel="'NORTH'" :circuit="4" :position="7"></lsSymbol>
        <lsSymbol v-if="letter == 'E'" :imageUrl="imageBlue" :panel="'EAST'" :circuit="4" :position="7"></lsSymbol>
        <lsSymbol v-if="letter == 'S'" :imageUrl="imageYellow" :panel="'SOUTH'" :circuit="0" :position="7"></lsSymbol>
      </div>
    </div>
  </section>
</template>
<script>
import Controller from "@/../lib/controller";
import lsSymbol from "@/components/Symbol.vue";

// import other components you use here...

class ComponentController extends Controller {
  constructor(name, subComponentList = []) {
    super(name, subComponentList);
    this.vm = {
      imageRed: "mineTorpedoSymbol.png",
      imageGreen: "sonarSymbol.png",
      imageYellow: "silenceScenarioSymbol.png",
      imageBlue: "reactorSymbol.png"
    };
    this.props = {
      // props are passed in when using this component
      letter: String
    };
  }


}

export default new ComponentController("lsControlPanel", { lsSymbol });
</script>
<style scoped>
/*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
.component-style {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 12.5vw;
}
.panel-top {
  text-align: center;
  align-content: center;
}
.central-circuit {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  column-gap: 10px;
  row-gap: 15px;
  align-content: center;
  justify-content: center;
  flex: 70%;
  margin: 20px;
}
.reactors {
  flex: 30%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}
</style>