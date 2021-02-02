const app = getApp()
import { getShopLists } from '../../../api/index'
Page({
  data: {
    list: [],
    pageSize: 4,
    currentPage: 1,
    txtShow: false
  },

  onLoad() {
    this.getData()
  },
  /**页面上拉触底事件的处理函数*/
  onReachBottom() {
    this.data.currentPage++;
    this.getData();
  },
  getData() {
    wx.showLoading({
      title: '加载中',
    })
    let data = {
      pageSize: this.data.pageSize,
      currentPage: this.data.currentPage
    }
    getShopLists(data).then(res => {
      wx.hideLoading()
      console.log(res);
      if(res.code == 1) {
        if(res.data.length == 0) {
          this.setData({
            txtShow: true
          })
        }
        this.setData({
          list: this.data.list.concat(res.data)
        })
      }
    })
  },
  onDetailClick(e) {
    // 接收子组件传递过来的参数
    let id = e.detail.id
    console.log(id);
    wx.navigateTo({
      url: `/pages/index/shopDetails/shopDetails?id=${id}`,
    })
  }
})