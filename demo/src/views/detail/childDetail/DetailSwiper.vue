<template>
  <div>
      <swiper class="swiperItem">
         <swiper-item v-for="item in detailSwipers" :key="item">
           <img :src="item" class="detailSwiper">    
         </swiper-item> 
      </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index'

export default {
  name: "DetailSwiper",
  components: { Swiper, SwiperItem },
  props: {
    detailSwipers: {
        type: Array,
        default(){
            return []
        }
    }
  },
  data(){
      return{
       
      }
  }
}
</script>

<style scoped>
    .detailSwiper{
      width: 100%; 
    }
    .swiperItem{
        height: 360px;
        overflow: hidden;
        background: #fff;
    }
</style>