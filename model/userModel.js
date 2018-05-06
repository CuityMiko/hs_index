//user模型
var db = require('../core/db.js');
var q = require('q');

// 声明User类
function User(user) {
    this.id = user.id;
    this.ali_user_id = user.ali_user_id;
    this.ali_user_name = user.ali_user_name;
    this.ali_user_phone = user.ali_user_phone;
    this.ali_user_avatar = user.ali_user_avatar;
    this.access_token = user.access_token;
}

// 获取所有
User.queryUserList = function () {
    var deferred = q.defer();
    db.query('SELECT * FROM applets_user ORDER BY id DESC',function(err,data){
        if(err){
            deferred.reject(err);
        }
        else{
            deferred.resolve(data);
        }
    });
    return deferred.promise;
}

// 获取分页数据
User.queryUserPageList = function (page) {
    var deferred = q.defer();
    db.query('SELECT * FROM applets_user ORDER BY id DESC LIMIT ?,?',[(page.pageindex-1) * page.pagesize, page.pagesize],function(err,data){
        if(err){
            deferred.reject(err);
        }
        else{
            deferred.resolve(data);
        }
    });
    return deferred.promise;
}

// 根据Id获取
User.queryUserById = function (id) {
    var deferred = q.defer();
    db.query('select * from applets_user WHERE id=?',[id],function(err,data){
        if(err){
            deferred.reject(err);
        }
        else{
            deferred.resolve(data);
        }
    });
    return deferred.promise;
}

// 添加User
User.addUser = function (user) {
    var deferred = q.defer();
    db.query('INSERT INTO applets_user VALUES(NULL,?,?,?,?,?)', [user.ali_user_id, user.ali_user_name, user.ali_user_phone, user.ali_user_avatar, user.access_token], function (err,data) {
        if(err){
            deferred.reject(err);
        }
        else{
            deferred.resolve(data);
        }
    })
    return deferred.promise;
}

// 更新User
User.updateUser = function (user) {
    var deferred = q.defer();
    db.query("UPDATE applets_user SET ali_user_id=?,ali_user_name=?,ali_user_phone=?,ali_user_avatar=?,access_token=? WHERE id=?",[user.ali_user_id, user.ali_user_name, user.ali_user_phone, user.ali_user_avatar, user.access_token, user.id],function(err,data){
        if(err){
            deferred.reject(err);
        }
        else{
            deferred.resolve(data);
        }
    })
    return deferred.promise;
}

// 删除User
User.deleteUser = function (id) { 
    var deferred = q.defer();
    db.query("delete from applets_user WHERE id=?",[id],function(err,data){
        if(err){
            deferred.reject(err);
        }
        else{
            deferred.resolve(data);
        }
    })
    return deferred.promise;
}

module.exports = User