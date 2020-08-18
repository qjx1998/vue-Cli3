<template>
  <div>
      <child-detail />

      <detail-swiper
       :detailSwipers="detailSwipers"
       :goods="goods"  />


  </div>
</template>

<script>
import ChildDetail from './childDetail/ChildDetail'
import DetailSwiper from './childDetail/DetailSwiper'

import { getDetail,GoodInfo } from 'network/details'

export default {
  name: "Detail",
  components: { ChildDetail,DetailSwiper },
  data(){
    return{
      iid: '',
      detailSwipers: [],
      goods: {}
    }
  },
  mounted(){
    this.iid = this.$route.params.iid;
    this.getContDetail(this.iid);
  },
  methods: {
    getContDetail(dex){
        getDetail(dex).then(res =>{
          console.log(res);
          const data = res.result;
        //   顶部轮播数据
          this.detailSwipers = data.itemInfo.topImages;
        //   获取商品信息
          this.goods = new GoodInfo(data.itemInfo, data.columns, data.shopInfo.services);
        })
    }
  }
}
</script>

<style>

</style>