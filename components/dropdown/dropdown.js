// components/dropdown.js
const chineseNumber = '一二三四五六七八九十'.split('');

const singleSelectOptions = new Array(8).fill(null).map((_, i) => ({
  label: `选项${chineseNumber[i]}`,
  value: `option_${i + 1}`,
  disabled: false,
}));
//第九个为禁用选项
singleSelectOptions.push({
  label: '禁用选项',
  value: 'disabled',
  disabled: true,
});
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    singleSelect: {
      value: 'option_3',
      options: singleSelectOptions,
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleSingleSelect(e) {
      console.log("输出数据为===》",e.detail);
      this.setData({
        'singleSelect.value': e.detail.value,
      });
    },
  }
})
