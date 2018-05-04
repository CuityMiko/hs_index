/**
 * ApiRouter
 */
var Api = require('../controller/api.js');

module.exports = function(app) {
  // 首页
  app.get('/api/index', Api.index);

  // movies
  app.get('/api/movie', Api.movies);

  // mocks
  app.get('/api/mocks', Api.mocks);

  // goods
  app.get('/api/goods', Api.goods);
};