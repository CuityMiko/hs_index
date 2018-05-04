//user模型
var db = require('../core/db.js');
var q = require('q');

function User(user) {
    this.id = user.id;
    this.name = user.name;
    this.password = user.password;
}
User.queryUserList = function () {
    var deferred = q.defer();
    db.query('select * from applets_user ',function(err,data){
        if(err){
            deferred.reject(err);
        }
        else{
            deferred.resolve(data);
        }
    });
    return deferred.promise;
}
User.queryUserById = function (id,cb) {
     db.query('SELECT * FROM USER WHERE id=?',[id],function(err,data){
        if(err){
            cb(err);
        }
        else{
            cb(null,data);
        }
    })
}
User.addUser = function (user,cb) {
    // INSERT INTO USER VALUES(NULL,'klt','123456')
  db.query('INSERT INTO USER VALUES(NULL,?,?)', [user.name, user.password], function (err,data) {
    if(err){
        cb(err);
    }
    else{
         cb(null,data);
    }
  })

}
User.updataUser = function () {
    db.query("UPDATE USER SET u_name=?,pw=? WHERE id=?",[user.name,user.password,user.id],function(err,data){
        if(err){
            console.log(err);
            cb(err);
        }
        else{
            cb(null,data);
        }
    })
}
User.deleteUser = function () { }


module.exports = User