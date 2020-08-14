<template>
  <div class="control">
     <div v-for="(item,index) in titles" :key="index" @click="ticket(index)">
       <span :class="{ add_line : index === temp }">{{ item }}</span>
      </div> 
  </div>
</template>

<script>
export default {
  name: "TabContorl",
  props: {
      titles: {
          type: Array,
          default(){
              return []
          }
      }
  },
  data(){
    return {
      temp: 0
    }
  },
  methods: {
    ticket(dex){
      this.temp = dex
    }
  }
}
</script>

<style scoped>
  .control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .control>div{
    flex: 1;
  }
  .add_line{
    height: 34px;
    display: inline-block;
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-high-text);
  }
</style>