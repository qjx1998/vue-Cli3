<template>
  <div class="home">
    <nav-top class="home-nav"><div slot="center">购物车</div></nav-top>
    <!-- 轮播图 -->
    <home-swiper :banner="banner"></home-swiper>

    <recommend-view :recommends="recommends"></recommend-view>

    <feature-view />

    <tab-control :titles="['流行','新款','精选']"></tab-control>

    <div class="zhanwei"></div>


 
  </div>
</template>

<script>
import HomeSwiper from './childhome/HomeSwiper'
import RecommendView from './childhome/RecommendView'
import FeatureView from './childhome/FeatureView'

import NavTop from 'components/common/navbar/NavTop'
import TabControl from 'components/content/tabControl/TabControl'


import { getHomeMultidata } from 'network/data'


export default {
  name: 'Home',
  components: { HomeSwiper,RecommendView,FeatureView,NavTop,TabControl },
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
        this.recommends = res.recommend.list;
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
  .zhanwei{
    height: 150px;
    width: 100%;
  }
</style>
