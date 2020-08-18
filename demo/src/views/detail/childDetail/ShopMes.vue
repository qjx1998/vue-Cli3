<template>
  <div class="shopMes">
    <div class="shopName">
        <span><img :src="shop.logo" class="shopLogo"></span>
        <span class="shopTitle">{{ shop.name }}</span>
    </div>
    <div class="shopProce">
        <div class="contPrice">
            <div></div>
            <div></div>
        </div>
        <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopMes",
  props: {
      shop: {
        type: Object,
        default(){
            return {}
        }
      }
  },
  mounted(){
      console.log(this.shop)
  }
}
</script>

<style scoped>
    .shopLogo{
       height: 40px; 
       border-radius: 50%;
       vertical-align: middle;
    }
    .shopMes{
        width: 100%;
        background: #fff;
        margin-top: 4px;
    }
    .shopName{
        width: 96%;
        margin: auto;
    }
    .shopTitle{
        padding-left: 6px;
    }
    .shopProce{
        display: flex;
        height: 400px;
    }
    .shopProce>div{
        flex: 1;
    }
</style>