<template>
  <div class="navtop" :style="{ background: bg }">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="rigth"><slot name="rigth"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavTop',
  props: {
    bg: {
      type: String,
      default(){
        return 'var(--color-tint)'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .navtop{
      display: flex;
      height: 44px;
      line-height: 44px;
      text-align: center;
      box-shadow: 0px 1px 1px rgba(100,100,100,0.1);
  }
  .left,.rigth{
      width: 60px;
  }
  .center{
      flex: 1;
  }
</style>