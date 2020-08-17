<template>
  <div>
      <child-detail />

      <detail-swiper :detailSwipers="detailSwipers" />
  </div>
</template>

<script>
import ChildDetail from './childDetail/ChildDetail'
import DetailSwiper from './childDetail/DetailSwiper'

import { getDetail } from 'network/details'

export default {
  name: "Detail",
  components: { ChildDetail,DetailSwiper },
  data(){
    return{
      iid: '',
      detailSwipers: []
    }
  },
  activated(){
    this.iid = this.$route.params.iid;
    console.log(this.iid)
    this.getContDetail(this.iid);
  },
  methods: {
    getContDetail(dex){
        getDetail(dex).then(res =>{
        //   console.log(res.result.itemInfo.topImages);
        //   顶部轮播数据
          this.detailSwipers = res.result.itemInfo.topImages
        })
    }
  }
}
</script>

<style>

</style>