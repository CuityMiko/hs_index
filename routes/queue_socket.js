/**
 * Queue_socketRouter
 */
var Queue_socket = require('../controller/queue_socket.js');

module.exports = function(app) {
  // Queue_socket
  app.get('/queue_socket', Queue_socket.index);

  app.get('/queue_socket/result', Queue_socket.result);

  app.post('/queue_socket/addinfo', Queue_socket.addinfo);
};