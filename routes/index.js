/**
 * IndexRouter
 */
var Index = require('../controller/index.js');

module.exports = function(app) {
  // 首页
  app.get('/', Index.index);

  // api
  require('./api')(app);

  // msql
  require('./mysql')(app);

  // share
  require('./share')(app);

  // xml
  require('./xml')(app);

  // mongodb
  require('./mongo')(app);

  // notice
  require('./notice')(app);
};