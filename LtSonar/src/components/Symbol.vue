<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>
  <section>
    <!-- Just one main element per template -->
    <div
      class="circular-square" :style="BGImage"></div>
  </section>
</template>
<script>
import Controller from "@/../lib/controller";

// import other components you use here...

class ComponentController extends Controller {
  constructor(name, subComponentList = []) {
    super(name, subComponentList);
    this.vm = {
      someData: "Hello world"
    };
    this.props = {
      // props are passed in when using this component
      imageUrl: String
    };
    this.computed = {
      BGImage() {
        return {
            backgroundImage: `url(${require(`../assets/${this.imageUrl}`)})`
        };
      }
    };
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
</style>