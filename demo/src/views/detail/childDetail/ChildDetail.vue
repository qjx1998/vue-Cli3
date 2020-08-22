<template>
  <div>
      <nav-top class="detail-bg">
          <div slot="left" @click="returns"><img src="~assets/img/common/left.png" class="return"></div>
          <div slot="center">
              <div v-for="(item,index) in titles" :key="item" class="detail-item" @click="active(index)"><span :class="{ spanItem : currentIndex === index }">{{ item }}</span></div>
          </div>
      </nav-top>
  </div>
</template>

<script>

import NavTop from 'components/common/navbar/NavTop'

export default {
  name: "ChildDetail",
  components: { NavTop },
  data(){
    return{
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods:{
    active(dex){
      this.currentIndex = dex
      this.$emit('getDex',dex);
    },
    returns(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
    .detail-bg{
      background: #fff;   
    }
  .return{
      height: 30px;
      margin-top: 7px;
  }
  .detail-item{
      float: left;
      width: 25%;
  }
  .spanItem{
      display: inline-block;
      height: 35px;
      color: var(--color-high-text);
      border-bottom: 2px solid var(--color-high-text);
  }
</style>