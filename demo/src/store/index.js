import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: [],
    dex: 0
  },
  mutations: {
    addCount(state){
      state.cartList[state.dex].count ++;
    },
    addToCart(state,payload){
      payload.count = 1;
      state.cartList.push(payload);
    },
    addDex(state,payLoad){
      state.dex = payLoad
    }
  },
  actions: {
    addCart({state, commit},payload){
      // let oldPrice = null;
      
      // for(let item of state.cartList){
      //   if(item.iid === payload.iid){
      //     oldPrice = item;
      //   }
      // }

      // if(oldPrice){
      //   oldPrice.count ++;
      // }else{
      //   payload.count = 1;
      //   state.cartList.push(payload)
      // }
     const i = state.cartList.findIndex(item =>  item.iid === payload.iid)
     if(i === -1){
       commit('addToCart',payload);
     }else{
       commit('addDex',i);
       commit('addCount');
     }
    }
  },
  modules: {
  }
})


