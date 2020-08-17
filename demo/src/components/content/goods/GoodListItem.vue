<template>
  <div class="goods-item" @click="tickDetail">
    <img :src="goodList.show.img" @load="imageLoad">
    <div class="good-export">
        <p class="good-title">{{ goodList.title }}</p>
        <div class="star">
            <span class="price">{{ goodList.price }}</span>
            <span class="collect">{{ goodList.cfav }}</span>
        </div>       
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
      goodList: {
        type: Object,
        default(){
            return {}
        }
      }
  },
  methods: {
    imageLoad(){
      this.$bus.$emit('itemImageLoad');
    },
    tickDetail(){
      this.$router.push({path: `/Detail/${this.goodList.iid}`});
    
    }
  }
}
</script>

<style scoped>
.goods-item{
    float: left;
    width: 50%;
     text-align: center;
     background: #fff;
     padding-bottom: 5px;
}
.goods-item::after{
    content: ".";
    clear:both;/*清除浮动*/
    display:block;
}
.goods-item img{
    width: 90%;
    height: 240px;
    border-radius: 4px;
}
.good-export{
    font-size: 10px;
    position: relative;
}
.good-title{
    width: 80%;
    margin: auto;
    overflow:hidden;   
    text-overflow:ellipsis;
    white-space:nowrap;
    padding-top: 5px;
    padding-bottom: 5px;
}
.price{
    color: var(--color-high-text);
    text-align: right;
    padding-right: 10px;
}
.collect::before{
    content:"";
    position: absolute;
    background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
    height: 14px;
    width: 14px;
    top: -2px;
    left: 92px;
}
.star{
    position: relative;
    width: 100%;
}
.collect{
    text-align: left;
    padding-left: 20px;
}
.price,.collect{
    display: inline-block;
    width: 50%;
}
</style>