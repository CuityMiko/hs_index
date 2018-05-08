/**
 * RedisController
 */
exports.index = function(req, res) {
    res.json(req.session.cjuser);
};

exports.info = (req, res) => {
    let _user = {
        id: req.params.id || 1,
        name: 'zhangsan' + req.params.id,
        pwd: '123456'
    }
    req.session.cjuser = _user;
    res.json({ success: true, user: _user });
}