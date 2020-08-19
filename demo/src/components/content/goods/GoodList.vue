<template>
  <div class="goods">
     <good-list-item v-for="(goodList,index) in goods" :key="index" :goodList="goodList"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem'

export default {
  name: "GoodList",
  components: { GoodListItem },
  props: {
    goods: {
        type: Array,
        default(){
            return []
        }
    }
  }
}
</script>

<style scoped>
.goods{
    width: 100%;
    background: #fff;
    overflow: hidden;
}
</style>