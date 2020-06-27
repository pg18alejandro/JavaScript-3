<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>
  <section class="parent-block-click">
    <!-- Just one main element per template -->
    <div v-if="crossed == true" class="cross"></div>
    <div v-on:click="changeCrossed" class="circular-square" :style="BGImage()"></div>
  </section>
</template>
<script>
import Controller from "@/../lib/controller";

// import other components you use here...

class ComponentController extends Controller {
  constructor(name, subComponentList = []) {
    super(name, subComponentList);
    this.vm = {};
    this.props = {
      // props are passed in when using this component
      imageUrl: String,
      panel: String,
      position: Number,
      circuit: Number,
      crossed: Boolean
    };

    this.injectActions(["addSymbol"]);
    this.injectActions(["crossSymbol"]);
    this.injectGetters(["captainHistory"]);
    this.injectGetters(["engineerSymbolGroup"]);
  }

  BGImage() {
    return {
      backgroundImage: `url(${require(`../assets/${this.imageUrl}`)})`
    };
  }
  huehue()
  {
    
    for (let index = 0; index < this.engineerSymbolGroup.length; index++) {
      const element = this.engineerSymbolGroup[index];
      if(element.dir === this.panel && element.pos === this.position && element.circuit === this.circuit)
            {
                return element.crossed
            }
    }
  }

  changeCrossed() {
    if (this.captainHistory[this.captainHistory.length - 1] != this.panel)
      return;
    if (this.crossed == true) return;
    this.crossed = true;
    this.crossSymbol({dir:this.panel, pos:this.position, circuit:this.circuit, cross: this.crossed});
  }

  vue_mounted()
  {
    //reload crossed value
    this.addSymbol({dir:this.panel, pos:this.position, circuit:this.circuit});
    this.crossed = this.huehue();
    this.crossSymbol({dir:this.panel, pos:this.position, circuit:this.circuit, cross: this.crossed});
  }
}

export default new ComponentController("lsSymbol");
</script>
<style scoped>
.circular-square {
  border: black;
  border-style: solid;
  border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
  height: 50px;
  width: 50px;
  /*background-image: url("../assets/sonar_logo.png");*/
  background-size: cover;
  background-repeat: no-repeat;
}
.parent-block-click {
  position: relative;
  display: block;
}
.cross {
  width: 100%;
  height: 100%;
  position: absolute;
  transform: rotate(45deg);
  -ms-transform: rotate(45deg); /* IE 9 */
  -webkit-transform: rotate(45deg); /* Safari and Chrome */
}

.cross:before,
.cross:after {
  content: "";
  position: absolute;
  z-index: -1;
  background: rgb(0, 0, 0);
}

.cross:before {
  left: 50%;
  width: 30%;
  margin-left: -15%;
  height: 100%;
}

.cross:after {
  top: 50%;
  height: 30%;
  margin-top: -15%;
  width: 100%;
}
</style>