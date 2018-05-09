/**
 * QueueRouter
 */
var Queue = require('../controller/queue.js');

module.exports = function(app) {
  // Queue
  app.get('/queue', Queue.index);

  // Queue listen
  app.get('/queue/info', Queue.info);

  app.get('/queue/getinfo', Queue.getinfo);

  // Queue deal
  app.get('/queue/deal', Queue.deal);
};