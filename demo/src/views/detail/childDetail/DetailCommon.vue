<template>
  <div class="comment-info">
    <div class="info-header">
        <div class="header-title">用户评价</div>
        <div class="header-more">
            更多
            <img src="~assets/img/common/right.png" class="arrow-right">
        </div>
    </div>
    <div class="info-user">
        <img :src="avatar" class="avatar">
        <span>{{ uname }}</span>
    </div>
    <div class="info-detail">
        <p class="common-text">{{ common.content }}</p>
        <div class="info-other">
            <span class="date">{{ common.created | timeChange }}</span>
            <span>{{ common.style }}</span>
        </div>
        <div class="info-imgs">
            <img :src="item" v-for="(item,index) in common.images" :key="index" class="showImg">
        </div>
    </div>
  </div>
</template>

<script>

import { formatDate } from 'common/utils'
export default {
  name: "DetailCommon",
  props: {
      common: {
        type: Object,
        default(){
            return {}
        }
      }
  },
  data(){
    return{
      avatar: '',
      uname: ''  
    }
  },
  methods: {
    
  },
  created(){
    if(this.common.user){
        this.avatar = this.common.user.avatar;
        this.uname = this.common.user.uname;
    } 
  },
  watch: {
    common(){
        if(this.common.user){
          this.avatar = this.common.user.avatar;
          this.uname = this.common.user.uname;
        }
        
    }  
  },
  filters: {
      timeChange(dexs){

        const time = new Date(dexs * 1000);

        return formatDate(time,'yyyy-MM-dd hh:mm:ss')

      }
  }
}
</script>

<style scoped>
  .comment-info{
    width: 96%;
    margin: auto;
    font-size: 14px;
  }
  .info-header{
      display: flex;
      height: 40px;
      line-height: 40px;
      width: 96%;
      margin: auto;
  }
  .header-title,.header-more{
      flex: 1;
  }
  .header-more{
      text-align: right;
  }
  .arrow-right{
      height: 16px;
      vertical-align: middle;
  }
  .avatar{
      height: 30px;
      border-radius: 50%;
      vertical-align: middle;
  }
  .info-detail{
      margin-top: 10px;
  }
  .info-other{
      margin-top: 10px;
  }
  .date{
      margin-right: 20px;
  }
  .showImg{
      height: 80px;
      margin-right: 10px;
  }
  .info-imgs{
      width: 90%;
      margin: auto;
      margin-top: 10px;
  }
  .common-text{
    line-height: 20px;
  }
</style>