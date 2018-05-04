/**
 * ApiController
 */
const requesthelper = require('../core/requesthelper.js');
const httphelper = require('../core/httphelper.js');

let index = function(req, res) {
    res.json([
        { id: 1,name: 'zhangsan', age: 20 },
        { id: 2,name: 'lisi', age: 21 },
        { id: 3,name: 'wangwu', age: 22 },
    ])
};

let movies = (req, res) => {
    requesthelper.get('/movie/coming_soon', {}).then((data) => {
        res.json(data);
    })

    // httphelper.get('/movie/coming_soon', {}).then((data) => {
    //     res.json(data);
    // })
}

let mocks = (req, res) => {
    requesthelper.post('/cstore/getpage', {
        pageindex: 1,
        pagesize: 100
    }).then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
    })

    // httphelper.post('/cstore/getpage', {
    //     pageindex: 1,
    //     pagesize: 100
    // }).then((data) => {
    //     res.json(data);
    // }).catch((err) => {
    //     console.log(err);
    // })
}

let goods = (req, res) => {
    httphelper.post('/api/scenic/goods/list-goods', {
        storeId: 4591,
        pageNO: 1,
        everyPageCount: 20
    }).then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = { index, movies, mocks, goods }