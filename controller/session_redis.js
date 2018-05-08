/**
 * RedisController
 */
var redis = require('../core/redisdb.js');

exports.index = function(req, res) {
    res.json(req.session.cjuser);
};

/**
 * redis作为session
 * @param {*} req 
 * @param {*} res 
 */
exports.info = (req, res) => {
    let _user = {
        id: req.params.id || 1,
        name: 'zhangsan' + req.params.id,
        pwd: '123456'
    }
    req.session.cjuser = _user;
    res.json({ success: true, user: _user });
}

/**
 * redis添加key
 * @param {*} req 
 * @param {*} res 
 */
exports.add = function(req, res) {
    let _num =  Math.floor(Math.random() * 1000);
    let _user = {
        name: 'zhangsan' + _num,
        age: _num
    }
    redis.set(`user${_num}`, JSON.stringify(_user)).then((result) => {
        res.json(_user);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    })
};

/**
 * redis根据key获取值
 * @param {*} req 
 * @param {*} res 
 */
exports.get = function(req, res) {
    redis.get(`user${req.params.key}`).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    })
};

/**
 * 根据key删除redis缓存
 * @param {*} req 
 * @param {*} res 
 */
exports.del = function(req, res) {
    let _key = 'user' + req.params.key;
    redis.exists(_key).then((result) => {
        if (result.exists) {
            redis.delete(_key).then((data) => {
                if (data.delete) {
                    res.json({
                        success: true,
                        data: JSON.stringify(data)
                    })
                } else {
                    res.json({
                        success: false,
                        data: JSON.stringify(data)
                    })
                }
            }).catch((err) => {
                res.json({
                    success: false,
                    data: JSON.stringify(err)
                })
            })
        } else {
            res.json({ success: false, msg: 'key is not exists!'})
        }
    })
};

/**
 * 清空所有key
 * @param {*} req 
 * @param {*} res 
 */
exports.flush = function(req, res) {
    redis.clear().then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    })
};