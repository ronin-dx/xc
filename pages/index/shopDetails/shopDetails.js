// pages/index/shopDetails/shopDetails.js
Page({
  data: {
    swiperLists: [{
        img: 'http://img.alicdn.com/imgextra/i1/4/O1CN01YyvpGT1BtsDzF8fVp_!!4-0-luban.jpg'
      },
      {
        img: 'https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg'
      },
      {
        img: 'https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg'
      },
      {
        img: 'https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg'
      },
      {
        img: 'https://img.alicdn.com/tfs/TB1wOidVWL7gK0jSZFBXXXZZpXa-520-280.jpg'
      }
    ],
    currentSwiperIndex: 1
  },
  onLoad(options) {
    let id = options.id
    console.log(id);
  },
  bindchange(e) {
    console.log(e);
    this.setData({
      currentSwiperIndex: e.detail.current + 1
    })
  }
})