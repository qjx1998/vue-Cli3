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
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
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
        probeType: this.probeType,
        click: true
    })

    this.scroll.on('scroll', pos =>{   
      if(Math.abs(pos.y) > 2000){
        this.$emit('isShow',true);
      }else{
        this.$emit('isShow',false);
      }
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