import {
  getShopLists
} from "../../api/index"
Page({

  data: {
    list: [],
    txtShow: false,
    pageSize: 6,
    currentPage: 1
  },

  onLoad(options) {
    console.log(options.id);
    this.getShopLists(options.id)
  },
  getShopLists(id) {
    let data = {
      id,
      pageSize: this.data.pageSize,
      currentPage: this.data.currentPage
    }
    getShopLists(data).then(res => {
      console.log('获取列表: ', res);
      if(res.code == 1) {
        this.setData({
          list: this.data.list.concat(res.data)
        })
      }
    })
  },
  onDetailClick() {

  }
})