<template>
  <div id="detail">
      <child-detail @getDex="getDex" ref="detailTops" />
    <scroll class="contain" ref="scroll"
     @isShow="isShow" 
     :probe-type="3" 
     :pull-up-load="true"
      @scrollHigh="contScroll">
      
      <detail-swiper :detailSwipers="detailSwipers" />

      <detail-mes :detailMes="detailMes" />

      <shop-mes :shop="shop" />

      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad" />

      <detail-good-params :GoodsParam="GoodsParam" ref="goodsParam" />

      <DetailCommon :common="common" ref="common" />

      <div class="zhanwei"></div>

      <good-list :goods="reCommonent" ref="goodList">
        <good-list-item />
      </good-list>

    </scroll>

    <back-top v-if="isShows" @click.native="scrollTop" />
  </div>
</template>

<script>
  import ChildDetail from './childDetail/ChildDetail'
  import DetailSwiper from './childDetail/DetailSwiper'
  import DetailMes from './childDetail/DetailMes'
  import ShopMes from './childDetail/ShopMes'
  import DetailGoodsInfo from './childDetail/DetailGoodsInfo'
  import DetailGoodParams from './childDetail/DetailGoodParams'
  import DetailCommon from './childDetail/DetailCommon'
  import BackTop from 'components/content/backTop/BackTop' 
  import GoodList from 'components/content/goods/GoodList'
  import GoodListItem from 'components/content/goods/GoodListItem'


  import Scroll from 'components/common/scroll/Scroll'

  import { getDetail,getRecommend,Goods,Shop,GoodsParam } from 'network/details'
  import { itemListenerMixin } from 'common/mixin'

  export default {
    name: "Detail",
    components: { ChildDetail,
                  DetailSwiper,
                  DetailMes,
                  ShopMes,
                  DetailGoodsInfo,
                  DetailGoodParams,
                  Scroll,
                  DetailCommon,
                  BackTop,
                  GoodList,
                  GoodListItem 
                },
    mixins: [ itemListenerMixin ],
    data(){
      return{
        iid: '',
        detailSwipers: [],
        detailMes: {},
        shop: {},
        detailInfo: {},
        GoodsParam: {},
        common: {},
        reCommonent: [],
        isShows: false,
        themeTops: [],
        getThemeTop: null
      }
    },
    created(){
      this.iid = this.$route.params.iid;
      this.getContDetail(this.iid);
      this.getRecommends();
      
    },
    destroyed() {
      this.$bus.$off('itemImageLoad', this.itemImgList)
    },
    methods: {
      getContDetail(dex){
          getDetail(dex).then(res =>{
            
            let data = res.result;
            //   顶部轮播数据
            this.detailSwipers = data.itemInfo.topImages
            //   商品详细信息
            this.detailMes = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
            //   创造店铺信息
            this.shop = new Shop(data.shopInfo);
            //   商品详情数据
            this.detailInfo = data.detailInfo;
            //   获取参数信息
            this.GoodsParam = new GoodsParam(data.itemParams.info, data.itemParams.rule);

            //   获取评论信息
            this.common = data.rate.cRate === 0 ? {} : data.rate.list[0];
                 
          })

      },
      getRecommends(){
        getRecommend().then( res => {
          this.reCommonent = res.data.list;
        })
      },
      imgLoad(){
        this.$refs.scroll.refresh();
        this.getThemeTop();
        
      },
      scrollTop(){
        this.$refs.scroll.scrollTo(0,0);
      },
      isShow(dex){
        this.isShows = dex;
      },
      getDex(dex){
       this.$refs.scroll.scrollTo(0,-this.themeTops[dex],2000);
    },
    contScroll(dex){
      if(Math.abs(dex) < this.themeTops[1]){
        this.$refs.detailTops.currentIndex = 0;
      }else if(Math.abs(dex) >= this.themeTops[1] - 20 && Math.abs(dex) <= this.themeTops[2] - 20){
        this.$refs.detailTops.currentIndex = 1;
      }else if(Math.abs(dex) <= this.themeTops[3] - 20 && Math.abs(dex) >= this.themeTops[2] - 20){
        this.$refs.detailTops.currentIndex = 2;
      }else if(Math.abs(dex) > this.themeTops[3] - 20){
        this.$refs.detailTops.currentIndex = 3;
      }
      }
    }
    
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 99;
    height: 100vh;
    background: #fff;
  }
  .contain{
    height: calc(100% - 44px);
  }
  .zhanwei{
    margin: 5px auto 5px auto;
    width: 96%;
    height: 4px;
    background: #E6E6FA;
  }
</style>