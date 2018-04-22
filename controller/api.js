/**
 * IndexController
 */
exports.index = function(req, res) {
    res.json([
        { id: 1,name: 'zhangsan', age: 20 },
        { id: 2,name: 'lisi', age: 21 },
        { id: 3,name: 'wangwu', age: 22 },
    ])
};