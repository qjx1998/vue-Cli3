import { debounce } from 'common/utils'

export const itemListenerMixin = {
  data(){
    return{
      itemImgList: null 
    }
  },
  mounted(){
    // 图片加载时间监听
    const refresh = debounce(this.$refs.scroll.refresh,100);

    this.itemImgList = () => {
        refresh();
    }
    this.$bus.$on('itemImageLoad', this.itemImgList ); 

    this.getThemeTop = debounce(() => {
      this.themeTops.push(0);
      this.themeTops.push(this.$refs.goodsParam.$el.offsetTop);
      this.themeTops.push(this.$refs.common.$el.offsetTop);
      this.themeTops.push(this.$refs.goodList.$el.offsetTop);
    },1000)
  }
}