<template>
  <div>
    <div class="tab-nav-item" @click="link">
        <slot v-if="!isActive" name="active"></slot>
        <slot v-else name="inActive"></slot>
        <div :style="myColor"><slot name="eachItem"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TabNav',
    props: { 
        fontColor: {
            type: String,
            default: '#000'
        },
        query: {
            type: String,
            default: '/Home'
        }
    },
    data(){
        return{
            
        }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.query) === -1;
      },
      myColor(){
        return this.isActive ? { } : { color: this.fontColor };
      }
    },
  methods: {
    link(){
      this.$router.replace(this.query);
    }  
  }
}
</script>

<style scoped>
.tab-nav-item{
    vertical-align: middle;
    font-size: 12px;
    padding-top: 5px;
}
.tab-nav-item img{
    height: 20px;
    widows: 20px;
}
</style>