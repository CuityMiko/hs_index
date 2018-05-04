/**
 * MysqlController
 */

let usermodel = require('../model/user.js');

exports.index = function(req, res) {
    console.log(req.query.id)
    usermodel.queryUserList().then((data) => {
        res.json(data);
    })
};