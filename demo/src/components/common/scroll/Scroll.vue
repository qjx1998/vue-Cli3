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
    },
    pullUpLoad: {
      type: Boolean,
      default: false
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
    },
    finishPullUp(){
      this.scroll.finishPullUp();
    },
    refresh(){
      this.scroll.refresh();
    },
    scrollY(){
      return this.scroll ? this.scroll : 0;
    }
  },
  mounted(){ 
    this.scroll = new BScroll(this.$refs.wrappers,{
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad
    })

    this.scroll.on('scroll', pos =>{   
      if(Math.abs(pos.y) > 2000){
        this.$emit('isShow',true);
      }else{
        this.$emit('isShow',false);
      }

      this.$emit('scrollHigh',pos.y)

      // if(Math.abs(pos.y) > )
    })

    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp');
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