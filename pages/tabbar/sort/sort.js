// pages/tabbar/sort/sort.js
import { getSortLists } from '../../../api/sort'
Page({
  data: {
    lists: []
  },
  onLoad: function (options) {
    this.getSortLists()
  },
  getSortLists() {
    getSortLists().then(res => {
      console.log(res);
      if(res.code == 1) {
        this.setData({
          lists: res.data
        })
      }
    })
  },
  onShopList(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/shopList/shopList?id=${id}`,
    })
  }
})