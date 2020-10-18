const sendResult = require('./utils/resultFormat')

function errorMiddleware(error, req, res, next) {
  if (error) {
    res.status(500).send(sendResult.returnError());
  } else {
    next();
  }
}

module.exports = errorMiddleware;
