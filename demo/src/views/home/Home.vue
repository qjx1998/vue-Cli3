<template>
  <div class="home">
    <nav-top class="home-nav">
      <div slot="left">哈哈</div>
      <div slot="center">购物车</div>
      <div slot="right">aaaa</div>
    </nav-top>

    <swiper>
      <swiper-item v-for="item in banner" :key="item.acm">
        <a :href="item.link"><img :src="item.image"></a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import NavTop from 'components/common/navbar/NavTop'
import { getHomeMultidata } from 'network/data'
import { Swiper, SwiperItem } from 'components/common/swiper/index'

export default {
  name: 'Home',
  components: { NavTop, Swiper, SwiperItem },
  data(){
    return{
      banner: [],
      recommends: []
     
    }
  },
  methods: {

  },
  created(){
    getHomeMultidata().then(res => {
      res = res.data;
      console.log(res)
      if(res){
        this.banner = res.banner.list;
        this.recommends = res.recommends;
      }
      
    })
  }
}
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
