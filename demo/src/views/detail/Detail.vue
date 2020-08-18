<template>
  <div id="detail">
      <child-detail />
    <scroll class="contain" ref="scroll" @isShow="isShow" :probe-type="3" :pull-up-load="true">
      <detail-swiper :detailSwipers="detailSwipers" />

      <detail-mes :detailMes="detailMes" />

      <shop-mes :shop="shop" />

      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad" />

      <detail-good-params :GoodsParam="GoodsParam" />
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
  import BackTop from 'components/content/backTop/BackTop' 

  import Scroll from 'components/common/scroll/Scroll'

  import { getDetail,Goods,Shop,GoodsParam } from 'network/details'

  export default {
    name: "Detail",
    components: { ChildDetail,DetailSwiper,DetailMes,ShopMes,DetailGoodsInfo,DetailGoodParams,Scroll,BackTop },
    data(){
      return{
        iid: '',
        detailSwipers: [],
        detailMes: {},
        shop: {},
        detailInfo: {},
        GoodsParam: {},
        isShows: false
      }
    },
    created(){
      this.iid = this.$route.params.iid;
      this.getContDetail(this.iid);
    },
    methods: {
      getContDetail(dex){
          getDetail(dex).then(res =>{
          //   console.log(res.result.itemInfo.topImages);
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
          })
      },
      imgLoad(){
        this.$refs.scroll.refresh();
      },
      scrollTop(){
        this.$refs.scroll.scrollTo(0,0);
      },
      isShow(dex){
        this.isShows = dex;
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
</style>