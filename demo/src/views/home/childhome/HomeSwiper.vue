<template>
  <div class="scroll">
     <swiper>
      <swiper-item v-for="item in banner" :key="item.acm">
        <a :href="item.link"><img :src="item.image" @load="imageLoad"></a>
      </swiper-item>
    </swiper>
  </div>  
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index'
export default {
  name: 'HomeSwiper' ,
  props: {
      banner: {
          type: Array,
          default(){
              return []
          }
      }
  },
  components: {Swiper, SwiperItem },
  data(){
    return{
      isLoad: true
    }
  },
  methods: {
    imageLoad(){
      if(this.isLoad){
        this.$emit('swiperImageLoad');
        this.isLoad = false;
      }
    }
  }
}
</script>

<style scoped>
  .scroll{
      margin-top: 44px;
      overflow: hidden;
  }
</style>