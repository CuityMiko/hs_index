/**
 * MongoRouter
 */
var Mongo = require('../controller/mongo.js');

module.exports = function(app) {
  // Mongo
  app.get('/mongo', Mongo.index);

  // student opreate
  app.get('/mongo/student', Mongo.student);

  // student opreate
  app.get('/mongo/student/:id', Mongo.student);

  // add student
  app.post('/mongo/student/add', Mongo.addstudent);

  // modify student
  app.post('/mongo/student/modify', Mongo.modifystudent);

  // delete student
  app.post('/mongo/student/delete/:id', Mongo.deletestudent);

  // mongo pager
  app.get('/mongo/pager/:pageindex/:pagesize', Mongo.pager);
};