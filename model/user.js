//user模型
var db = require('../core/db.js');
var q = require('q');
var usermapping = require('./mapping/user.js')

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
    db.query(usermapping.User.queryUserList, function(err,data){
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
    db.query(usermapping.User.queryUserPageList, [(page.pageindex-1) * page.pagesize, page.pagesize],function(err,data){
        if(err){
            deferred.reject(err);
        }
        else{
            db.query(usermapping.User.getTotal, [],function(err,result){
                if(err){
                    deferred.reject(err);
                }
                else{
                    deferred.resolve({ total: result[0].total, data: data});
                }
            });
        }
    });
    return deferred.promise;
}

// 根据Id获取
User.queryUserById = function (id) {
    var deferred = q.defer();
    db.query(usermapping.User.queryUserById, [id],function(err,data){
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
    db.query(usermapping.User.addUser, [user.ali_user_id, user.ali_user_name, user.ali_user_phone, user.ali_user_avatar, user.access_token], function (err,data) {
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
    db.query(usermapping.User.updateUser, [user.ali_user_id, user.ali_user_name, user.ali_user_phone, user.ali_user_avatar, user.access_token, user.id],function(err,data){
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
    db.query(usermapping.User.deleteUser, [id],function(err,data){
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