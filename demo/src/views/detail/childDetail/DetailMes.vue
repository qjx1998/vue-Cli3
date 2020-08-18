<template>
  <div>
      <div class="control" v-if="Object.keys(detailMes)">
          <div class="de-title">{{ detailMes.title }}</div>
          <div class="price"><span class="now-price">{{detailMes.newPrice}}</span><span class="old-price"><del>{{ detailMes.oldPrice }}</del></span><span class="discount" v-if="detailMes.discount">{{ detailMes.discount }}</span></div>
          <div class="columns">
              <div v-for="item in detailMes.columns" :key="item">{{ item }}</div>
          </div>
          <div class="add-bg"></div>
          <div class="services">
            <div v-for="item in serviceLength - 2" :key="item">
                <img :src="detailMes.services[item - 1].icon" class="icon">
                <span class="youhui">{{ detailMes.services[item - 1].name }}</span>
            </div>
          </div>
      </div>
      <div v-else>商品已下架</div>
  </div>
</template>

<script>
export default {
  name: "DetailMes",
  props: {
    detailMes: {
        type: Object,
        default(){
          return {}
        }
    }
  },
  computed: {
    serviceLength(){
      return  this.detailMes.services ? this.detailMes.services.length : 2
    }
  }
}
</script>

<style scoped>
    .control{
      background: #fff; 
    }
    .price,.de-title,.columns,.services{
      width: 96%;
      margin: auto;
      padding-top: 13px;
    }
    .now-price{
        font-size: 20px;
        color: var(--color-high-text);
    }
    .old-price{
        font-size: 12px;
    }
    .discount{
        background: var(--color-high-text);
        color: #fff;
        font-size: 12px;
        border-radius: 8px;
        padding: 3px;
    }
    .old-price,.discount{
        margin-left: 8px;
    }
    .columns,.services{
        display: flex;
        font-size: 12px;
    }
    .columns>div,.services>div{
        flex: 1;
        padding-bottom: 5px;
    }
    .columns>div:nth-child(2){
        text-align: center;
    }
    .columns>div:last-child{
        text-align: right;
    }
    .icon{
        height: 12px;
        padding-right: 3PX;
    }
    .youhui{
        font-size: 12px;
    }
    .services>div:last-child{
        text-align: right;
    }
    .services{
        margin-top: 4px;
        padding-top: 8px;
        padding-bottom: 6px;
    }
    .add-bg{
        height: 2px;
        width: 100%;
        background: #E6E6FA;
    }
</style>