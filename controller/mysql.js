/**
 * MysqlController
 */

let UserModel = require('../model/user.js');

// get userlist
exports.index = function(req, res) {
    UserModel.queryUserList().then((data) => {
        res.render('user/index',{ model: {users: data} });
    })
};

// get user by id
exports.user = (req, res) => {
    // url?id= => req.query.id
    // url/:id => req.params.id
    if (req.params && parseInt(req.params.id) > 0) {
        let _id = req.params.id || 1;
        UserModel.queryUserById(_id).then((data) => {
            if (data.length > 0) {
                res.render('user/user',{ model: {
                    user: data[0],
                    id: _id,
                    title: '修 改'
                }});
            } else {
                res.render('user/user',{ model: {
                    user: {},
                    id: _id,
                    title: '修 改'
                }});
            }
        })
    } else {
        res.render('user/user',{ model: {
            title: '添 加'
        }});
    }
}

// 添加用户
exports.adduser = (req, res) => {
    let _user = new UserModel({
        ali_user_id : req.body.user_id,
        ali_user_name : req.body.user_name,
        ali_user_phone : req.body.user_phone,
        ali_user_avatar : req.body.user_avatar,
        access_token : req.body.access_token
    });
    UserModel.addUser(_user).then((data) => {
        res.json({
            success: true
        });
    }).catch((err) => {
        console.log(err);
        res.json({
            success: false
        });
    })
}

// 修改用户
exports.modifyuser = (req, res) => {
    let _user = new UserModel({
        id : req.body.id,
        ali_user_id : req.body.user_id,
        ali_user_name : req.body.user_name,
        ali_user_phone : req.body.user_phone,
        ali_user_avatar : req.body.user_avatar,
        access_token : req.body.access_token
    });
    UserModel.updateUser(_user).then((data) => {
        res.json({
            success: true
        });
    }).catch((err) => {
        console.log(err);
        res.json({
            success: false
        });
    })
}

// 删除用户
exports.deleteuser = (req, res) => {
    let _id = req.params.id || 1;
    UserModel.deleteUser(_id).then((data) => {
        res.json({
            success: true
        });
    }).catch((err) => {
        console.log(err);
        res.json({
            success: false
        });
    })
}