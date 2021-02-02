// pages/tabbar/sort/sort.js
Page({

  data: {

  },
  onLoad: function (options) {

  },
  onShopList() {
    console.log(666);
    wx.navigateTo({
      url: '/pages/shopList/shopList',
    })
  }
})