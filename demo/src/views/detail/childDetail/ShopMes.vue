<template>
  <div class="shopMes">
      <div class="getBg"></div>
    <div class="shopName">
        <span><img :src="shop.logo" class="shopLogo"></span>
        <span class="shopTitle">{{ shop.name }}</span>
    </div>
    <div class="shopProce">
        <div class="contPrice">
            <div class="sells">
                <div>{{ shop.sells }}</div>
                <div>总销量</div>
            </div>
            <div class="sells addBorder">
                <div>{{ shop.goodsCount }}</div>
                <div>全部宝贝</div>
            </div>
        </div>
        <div>
            <div v-for="item in shop.score" :key="item.name" class="production">
                <span>{{ item.name }}</span>
                <span :style="{ color: (!item.isBetter ? '#339900' : '#ff5777') }">{{ item.score }}</span>
                <span :style="{ background: (!item.isBetter ? '#339900' : '#ff5777') }">{{ item.isBetter ? '高' : '低' }}</span>
            </div>
        </div>
        
    </div>
    <div class="enterShop"><span class="enter">进入店铺</span></div>
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
        z-index: 999;
    }
    .getBg{
        width: 100%;
        height: 4px;
        background: #E6E6FA;
    }
    .shopName{
        width: 96%;
        margin: auto;
        padding-top: 20px;
    }
    .shopTitle{
        padding-left: 6px;
    }
    .shopProce{
        display: flex;
        height: 105px;
    }
    .shopProce>div{
        flex: 1;
    }
    .contPrice{
        display: flex;
        margin-top: 30px;
        font-size: 13px;
    }
    .sells{
        width: 50%;
        height: 40px;
        text-align: center;
    }
    .sells>div{
        margin-top: 5px;
    }
    .addBorder{
        border-right: 1px solid #ccc;
    }
    .production{
        width: 70%;
        margin: auto;
        font-size: 13px;
        height: 30px;
        line-height: 30px;
    }
    .production>span:first-child{
        display: inline-block;
        width: 55%;
    }
    .production>span:nth-child(2){
        display: inline-block;
        width: 25%;
    }
    .production>span:last-child{
        color: #fff;
        margin-left: 10px;
    }
    .enter{
        display: inline-block;
        height: 30px;
        line-height: 30px;
        border-radius: 10px;
        width: 30%;
        text-align: center;
        background: #ccc;
        margin-left: 35%;
    }
    .enterShop{
        height: 60px;
        width: 100%;
        background: #fff;
    }
</style>