<template>
  <div class="wrapper">
      <nav-bar>
      <tab-nav query="/Home" :fontColor="color">
        <img src="~assets/img/tabbar/home.svg" class="navs" slot="inActive">
        <img src="~assets/img/tabbar/home_active.svg" class="navs" slot="active">
        <div class="item" slot="eachItem" >首页</div>
      </tab-nav>
      <tab-nav query="/Category" :fontColor="color">
        <img src="~assets/img/tabbar/category.svg" class="navs" slot="inActive">
        <img src="~assets/img/tabbar/category_active.svg" class="navs" slot="active">
        <div class="item" slot="eachItem">微淘</div>
      </tab-nav>
      <tab-nav query="/ShopCart" :fontColor="color">
        <img src="~assets/img/tabbar/shopcart.svg" class="navs" slot="inActive">
        <img src="~assets/img/tabbar/shopcart_active.svg" class="navs" slot="active">
        <div class="item" slot="eachItem">购物车</div>
      </tab-nav>
      <tab-nav query="/Profile" :fontColor="color">
        <img src="~assets/img/tabbar/profile.svg" class="navs" slot="inActive">
        <img src="~assets/img/tabbar/profile_active.svg" class="navs" slot="active">
        <div class="item" slot="eachItem">我的</div>
      </tab-nav>
    </nav-bar>
  </div>  
</template>

<script>
import TabNav from 'components/common/tabBar/TabNav'
import NavBar from 'components/common/tabBar/NavBar'
export default {
   name: 'NavImg',
   data(){
     return{
       color: '#FF5777'
     }
   },
   components: { TabNav,NavBar },
}
</script>

<style scoped>
  .wrapper{
    position: fixed;
    bottom: 0px;
    width: 100%;
    z-index: 2;
  }
</style>