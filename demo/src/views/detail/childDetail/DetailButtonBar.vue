<template>
  <div class="buttonBar">
    <div>
      <div><img src="~assets/img/common/collection.png" class="bar-icon"></div>
      <div>客服</div>
    </div>
    <div>
      <div><img src="~assets/img/common/shop.png" class="bar-icon"></div>
      <div>店铺</div>
    </div>
    <div>
      <div><img src="~assets/img/common/kefu.png" class="bar-icon"></div>
      <div>客服</div>
    </div>
    <div class="addbuy bg1" @click="addToCart">加入购物车</div>
    <div class="addbuy bg2">立即购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailButtonBar",
  methods: {
    addToCart(){
      this.$emit('addCart');
    }
  }
}
</script>

<style scoped>
  .buttonBar{
      position: fixed;
      width: 100%;
      height: 49px;
      bottom: 0px;
      background: #fff;
      border-top: 1px solid rgba(100,100,100,0.1);
      display: flex;
      font-size: 13px;
      text-align: center;
  }
  .buttonBar>div{
    flex: 1;
    padding-top: 4px;
  }
  .bar-icon{
    height: 26px;
    width: 26px;
  }
  .addbuy{
    line-height: 44px;
  }
  .bg1{
    background-color: yellow;
    color: #000;
  }
  .bg2{
    background-color: var(--color-high-text);
    color: #fff;
  }
</style>