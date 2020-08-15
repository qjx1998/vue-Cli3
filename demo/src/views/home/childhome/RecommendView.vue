<template>
  <div class="commend">
    <div v-for="item in recommends" :key="item.sort">
        <a :href="item.link">
            <img :src="item.image" class="comImg">
            <div class="commText">{{ item.title }}</div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
      recommends: {
          type: Array,
          default(){
              return []
          }
      }
  }
}
</script>

<style scoped>
.commend{
    display: flex;
    padding-top: 15px;
    padding-bottom: 15px;
    background: #fff;
}
.commend div{
    flex: 1;
    text-align: center;
}
.comImg{
    height: 70px;
    width: 70px;
}
.commText{
    padding-top: 5px;
    font-size: 14px;
}
</style>