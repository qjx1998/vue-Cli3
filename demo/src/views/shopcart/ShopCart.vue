<template>
  <div class="home">
    <nav-top class="shopCart">
      <div slot="center">购物车{{ shopNum }}</div>
    </nav-top>
  </div>
</template>

<script>
import NavTop from 'components/common/navbar/NavTop';

export default {
  name: 'ShopCart',
  components: {
    NavTop
  },
  data(){
    return{
      shopNum: '1'
    }
  }
}
</script>

<style scoped>
  .shopCart{
    background-color: #fff;
  }
</style>
