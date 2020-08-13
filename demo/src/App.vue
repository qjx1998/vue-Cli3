<template>
  <div id="app"> 
    <router-view/>
    <nav-img />
  </div>
</template>

<script>
import NavImg from 'components/content/mainTabbar/NavImg'
export default {
  components: { NavImg }
}
</script>

<style lang="scss">
  @import "assets/css/base.css";
</style>