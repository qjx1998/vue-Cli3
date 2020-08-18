import { request } from './request'

export function getDetail(iid){
   return request({
       url: '/detail',
       params: {
           iid
       }
   }) 
}

<<<<<<< HEAD
export class GoodInfo{
  constructor(itemInfo, colums, services){
=======
export class Goods{
    constructor(itemInfo, columns, services){
>>>>>>> b214e257ea3377f8622302eb5164f8f718f77574
      this.title = itemInfo.title;
      this.desc = itemInfo.desc;
      this.newPrice = itemInfo.price;
      this.oldPrice = itemInfo.oldPrice;
      this.discount = itemInfo.discountDesc;
      this.realPrice = itemInfo.lowNowPrice;
<<<<<<< HEAD
      this.colums = colums;
      this.services = services;
  }
=======
      this.columns = columns;
      this.services = services;
    }
}

export class Shop{
    constructor(shopInfo){
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;
    }
}

export class GoodsParam {
    constructor(info, rule){
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
    }
>>>>>>> b214e257ea3377f8622302eb5164f8f718f77574
}