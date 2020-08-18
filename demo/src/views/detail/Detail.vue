<template>
  <div>
      <child-detail />
    <scroll>
      <detail-swiper :detailSwipers="detailSwipers" />

      <detail-mes :detailMes="detailMes" />

      <shop-mes :shop="shop" />
    </scroll>
  </div>
</template>

<script>
import ChildDetail from './childDetail/ChildDetail'
import DetailSwiper from './childDetail/DetailSwiper'
import DetailMes from './childDetail/DetailMes'
import ShopMes from './childDetail/ShopMes'

import Scroll from 'components/common/scroll/Scroll'

import { getDetail,Goods,Shop } from 'network/details'

export default {
  name: "Detail",
  components: { ChildDetail,DetailSwiper,DetailMes,ShopMes,Scroll },
  data(){
    return{
      iid: '',
      detailSwipers: [],
      detailMes: {},
      shop: {}
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
        })
    }
  }
}
</script>

<style>

</style>