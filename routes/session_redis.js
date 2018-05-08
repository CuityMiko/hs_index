/**
 * ShareRouter
 */
var Redis = require('../controller/session_redis.js');

module.exports = function(app) {
  // Redis
  app.get('/redis', Redis.index);

  // info
  app.get('/redis/info/:id', Redis.info);

  app.get('/redis/add', Redis.add);

  app.get('/redis/get/:key', Redis.get);

  app.get('/redis/del/:key', Redis.del);

  app.get('/redis/clear', Redis.flush);
};