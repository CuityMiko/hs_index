/**
 * ApiRouter
 */
var Api = require('../controller/api.js');

module.exports = function(app) {
  // 首页
  app.get('/testapi/index', Api.index);
};