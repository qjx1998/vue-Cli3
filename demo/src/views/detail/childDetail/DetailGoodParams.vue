<template>
  <div class="paramsData">
    <div v-for="item in size" :key="item.key" class="infos size">
      <span>{{ item[0] }}</span>
      <span class="addColor">{{ item[1] }}</span>
      <span class="addColor">{{ item[2] }}</span>
      <span class="addColor">{{ item[3] }}</span>
      <span class="addColor">{{ item[4] }}</span>
    </div>
    <div v-for="item in GoodsParam.infos" :key="item.key" class="infos infoData">
      <span class="infoFi">{{ item.key }}</span>
      <span class="addColor">{{ item.value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodParams",
  props: {
    GoodsParam : {
        type: Object,
        default(){
            return {}
        }
    }
  },
  data(){
    return{
      size: []
    }
  },
  mounted() {
    if(this.GoodsParam.sizes){
      this.size = this.GoodsParam.sizes[0]
    }
  },
  watch: {
    GoodsParam(){
      if(this.GoodsParam.sizes){
      this.size = this.GoodsParam.sizes[0]
    }
    }
  },
}
</script>

<style scoped>
  .paramsData{
    width: 94%;
    margin: auto;
    font-size: 13px;
  }
  .infos{
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    border-bottom: 1px solid #ccc;
  }
  .infoFi{
   display: inline-block;
   width: 30%;
  }
  .size>span{
    display: inline-block;
    width: 20%;
  }
  .addColor{
    color: var(--color-tint);
  }
  .infoData>span:nth-child(2){
    display: inline-block;
    width: 70%;
  }
</style>