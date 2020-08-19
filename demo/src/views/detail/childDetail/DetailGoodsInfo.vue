<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goodsInfo">
    <div class="infoDesc">
       <div>{{ detailInfo.desc }}</div>
    </div>
    <div class="effect">{{ detailInfo.detailImage[0].key }}</div>
    <img v-for="item in detailInfo.detailImage[0].list" :src="item" :key="item" class="infoImg" @load="imgLoad">
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
        type: Object,
        default(){
            return {}
        }
    }
  },
  data(){
    return {
      count: 0
    }
  },
  methods: {
    imgLoad(){
      if(++this.count === this.imgLength){
        this.$emit('imgLoad');
      }
    }  
  },
  computed: {
    imgLength(){
      return this.detailInfo.detailImage[0].list.length;
    }
  }
}
</script>

<style scopde>
  .goodsInfo{
      width: 96%;
      margin: auto;
      font-size: 13px;
  }
  .infoImg{
      width: 100%;
  }
  .effect{
      margin-top: 8px;
      margin-bottom: 8px;
  }
</style>