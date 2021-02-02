// components/list.js
Component({
  properties: {
    list: {
      type: Array,
      value: []
    },
    txtShow: {
      type: Boolean,
      value: false
    }
  },
  data: {

  },
  methods: {
    onDetailClick(e) {
      console.log(e);
      let id = e.currentTarget.dataset
      this.triggerEvent('onDetailClick', id)
    }
  }
})