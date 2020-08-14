<template>
  <div class="scroll">
     <swiper>
      <swiper-item v-for="item in banner" :key="item.acm">
        <a :href="item.link"><img :src="item.image"></a>
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
   components: {Swiper, SwiperItem }
}
</script>

<style scoped>
  .scroll{
      margin-top: 44px;
  }
</style>