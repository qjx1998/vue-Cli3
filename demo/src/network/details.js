import { request } from './request'

export function getDetail(iid){
   return request({
       url: '/detail',
       params: {
           iid
       }
   }) 
}

export class GoodInfo{
  constructor(itemInfo, colums, services){
      this.title = itemInfo.title;
      this.desc = itemInfo.desc;
      this.newPrice = itemInfo.price;
      this.oldPrice = itemInfo.oldPrice;
      this.discount = itemInfo.discountDesc;
      this.realPrice = itemInfo.lowNowPrice;
      this.colums = colums;
      this.services = services;
  }
}