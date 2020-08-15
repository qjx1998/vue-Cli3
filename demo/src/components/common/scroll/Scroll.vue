<template>
  <div class="wrapper" ref="wrappers">
      <div class="contain">
          <slot></slot>
      </div>
  </div>
</template>

<script>

import BScroll from "better-scroll";

export default {
  name: 'Scroll',
  data(){
    return{
        scroll: null
    }
  },
  methods: {
    scrollTo(x, y, time=1000){
      this.scroll.scrollTo(x, y, time);    
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrappers,{
        probeType: 3,
        click: true
    })
  }
}
</script>

<style scoped>
.wrapper{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
}
</style>