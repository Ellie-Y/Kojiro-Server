const validate = require('validate.js');
const moment = require('moment');

validate.extend(validate.validators.datetime, {
  // 验证时自动触发，会将任何数据转化成时间戳返回
  parse(value, options) {
    let timeFormat = ['YYYY-MM-DD HH:mm:ss', 'YYYY/MM/DD HH:mm:ss', 'x'];
    if (options.dateOnly) {
      timeFormat = ['YYYY-MM-DD', 'YYYY/MM/DD', 'x']
    }

    return +moment.utc(value, timeFormat, true);
  },

  // Client 端显示错误消息时候现实的字符串
  format(value, options) {
    let format = 'YYYY-MM-DD';
    if (!options.dateOnly) {
      format += ' HH:mm:ss';
    }
    return moment.utc(value).format(format);
  }
})