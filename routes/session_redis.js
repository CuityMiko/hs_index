/**
 * ShareRouter
 */
var Redis = require('../controller/session_redis.js');

module.exports = function(app) {
  // Redis
  app.get('/redis', Redis.index);

  // info
  app.get('/redis/:id', Redis.info);
};