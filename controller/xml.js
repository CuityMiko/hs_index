/**
 * XmlController 获取xml配置信息
 */
var parseString = require('xml2js').parseString;

var fs = require('fs'),
    xml2js = require('xml2js'),
    parser = new xml2js.Parser();


exports.index = function(req, res) {
    // var xml = "<root>Hello xml2js!</root>"
    // console.log(__dirname);
    // parseString(xml, function (err, result) {
    //     res.json(result);
    // });
    
    fs.readFile('./model/mapping/user.xml', function(err, data) {
        parser.parseString(data, function (err, result) {
            res.json(result['userbyid']);
        });
    });
};