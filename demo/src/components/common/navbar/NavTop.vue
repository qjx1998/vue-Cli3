<template>
  <div class="navtop">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="rigth"><slot name="rigth"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavTop',
  data(){
      return{

      }
  }
}
</script>

<style lang="scss" scoped>
  .navtop{
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      display: flex;
      height: 44px;
      line-height: 44px;
      text-align: center;
      box-shadow: 0px 1px 1px rgba(100,100,100,0.1);
      z-index: 8;
  }
  .left,.rigth{
      width: 60px;
  }
  .center{
      flex: 1;
  }
</style>