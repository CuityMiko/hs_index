/**
 * IndexRouter
 */
var Index = require('../controller/index.js');

module.exports = function(app) {
  // 首页
  app.get('/', Index.index);

  // api
  require('./api')(app);
};