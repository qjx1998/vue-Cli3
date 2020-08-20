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
  }
}