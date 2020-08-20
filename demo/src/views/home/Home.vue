<template>
  <div class="home">
    <nav-top class="home-nav"><div slot="center">购物车</div></nav-top>
    <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClicks" ref="tabControl1" v-show="isTabFixed"></tab-control>
    <scroll
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @isShow="isShow"
      @pullingUp="loadMore"
      @scrollHigh="scrollHigh"
      >    
      <home-swiper :banner="banner" class="home-swiper" @swiperImageLoad="swiperImageLoad"></home-swiper>

      <recommend-view :recommends="recommends" class="recommend-view"></recommend-view>

      <feature-view />

      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClicks" ref="tabControl2" v-show="!isTabFixed"></tab-control>

      <good-list :goods="showGoods" class="good-list"></good-list>

    </scroll> 
    

    <back-top class="get-back" @click.native="backUp" v-if="isShows"></back-top> 

  </div>
</template>

<script>
    import HomeSwiper from './childhome/HomeSwiper'
    import RecommendView from './childhome/RecommendView'
    import FeatureView from './childhome/FeatureView'


    import NavTop from 'components/common/navbar/NavTop'
    import TabControl from 'components/content/tabControl/TabControl'
    import GoodList from 'components/content/goods/GoodList'
    import Scroll from 'components/common/scroll/Scroll'
    import BackTop from 'components/content/backTop/BackTop'


    import { getHomeMultidata,getHomeGoods } from 'network/data'
    import { itemListenerMixin } from 'common/mixin'



export default {
  name: 'Home',
  components: { HomeSwiper,
                RecommendView,
                FeatureView,
                NavTop,
                TabControl,
                GoodList,
                Scroll,
                BackTop 
              },
  mixins: [ itemListenerMixin ],
  data(){
    return{
      banner: [],
      recommends: [],
      goods: {
        'pop': {page: 0,list: []},
        'new': {page: 0,list: []},
        'sell': {page: 0,list: []}
      },
      currentType: 'pop',
      isShows: false,
      tabOffset: null,
      isTabFixed: false,
      saveY: 0
    }
  },
  methods: {
    // 主页头部信息
    // 网络请求
    getMultidata(){
      getHomeMultidata().then(res => {
        res = res.data;
        if(res){
          this.banner = res.banner.list;
          this.recommends = res.recommend.list;
        }  
      })
    },
    getGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page ++;  

        // 完成下拉加载更多      
        this.$refs.scroll.finishPullUp();
      })
    },
    // 事件监听
    tabClicks(index){
      switch(index){
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
        default: 
          this.currentType = 'pop';
      }

      this.$refs.tabControl1.temp = index;
      this.$refs.tabControl2.temp = index;
    
    },
    backUp(){
      this.$refs.scroll.scrollTo(0,0,1000);
    },
    isShow(dex){
     this.isShows = dex
    },
    loadMore(){
      this.getGoods(this.currentType);
    },
    swiperImageLoad(){     
      this.tabOffset = this.$refs.tabControl2.$el.offsetTop;
    },
    scrollHigh(dex){
      if(Math.abs(dex) > 656){
        this.isTabFixed = true;
      }else{
        this.isTabFixed = false;
      }
    }
   
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list;
    }
  },
  created(){
    this.getMultidata();

    this.getGoods('pop');

    this.getGoods('new');

    this.getGoods('sell');
  
  },
  activated(){
    this.$refs.scroll.scrollTo(0, -this.saveY,0);
    this.$refs.scroll.refresh();
  },
  deactivated(){
    this.saveY = this.$refs.scroll.scrollY();

    this.$bus.$off('itemImageLoad',this.itemImgList);
  }
}
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
  .zhanwei{
    width: 100%;
    clear: both;
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }
  .good-list{
    clear: both;
  }
  .recommend-view{
    margin-top: -3px;
  }

</style>
