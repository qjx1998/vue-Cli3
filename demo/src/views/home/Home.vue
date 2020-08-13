<template>
  <div class="home">
    <nav-top class="home-nav">
      <div slot="left">哈哈</div>
      <div slot="center">购物车</div>
      <div slot="right">aaaa</div>
    </nav-top>

  </div>
</template>

<script>
import NavTop from 'components/common/navbar/NavTop'
import { getHomeMultidata } from 'network/data'

export default {
  name: 'Home',
  components: { NavTop },
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
      // console.log(res)
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
