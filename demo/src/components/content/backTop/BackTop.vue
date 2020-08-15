<template>
  <div class="get-top">
      <img src="~assets/img/common/back-top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>

<style scoped>
  .get-top{
    position: fixed;
    z-index: 9;
    bottom: 60px;
    right: 20px;
    height: 36px;
    padding-top: 3px;
    width: 36px;
    text-align: center;
    background: #fff;
    border-radius: 50%;
  }
  .get-top img{
    position: fix;
    height: 30px;
    width: 30px;
  }
</style>