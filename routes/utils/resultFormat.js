// 公司一般有一套统一的 API 响应格式

function returnError(error = 'server internal error', code = 500) {  //* 默认参数，调用时可以传参
  return {
    code,
    msg: error
  }
}

function returnData(result) {
  return {
    code: 200,
    msg: 'success',
    data: result
  }
}

module.exports = {
  returnError,
  returnData
}