/**
 * MongoController
 */
let studentModel = require('../model/mongo_model/student.js');

// 获取学生列表
let index = function(req, res) {
    studentModel.getStudents().then((result) => {
        res.render('student/index', { model: {
            students: result
        }});
    }).catch((err) => {
        console.log(err);
    })
};

let student = (req, res) => {
    // url?id= => req.query.id
    // url/:id => req.params.id
    if (req.params && req.params.id) {
        studentModel.getStudentById(req.params.id).then((result) => {
            res.render('student/student',{ model: {
                student: result,
                id: req.params.id,
                title: '修 改'
            }});
        }).catch((err) => {
            console.log(err);
        })
    } else {
        res.render('student/student',{ model: {
            title: '添 加'
        }});
    }
}

// 添加学生
let addstudent = (req, res) => {
    let student = {
        username: req.body.username,
        age: req.body.age,
        phone: req.body.phone
    }
    studentModel.create(student).then((result) => {
        res.json({ success: true });
    }).catch((err) => {
        console.log(err);
        res.json({ success: false });
    })
}

// 修改学生信息
let modifystudent = (req, res) => {
    studentModel.modifyStudent({ _id: req.body.id },{ username: req.body.username, age: req.body.age, phone: req.body.phone })
    .then((result) => {
        res.json({ success: true });
    }).catch((err) => {
        console.log(err);
        res.json({ success: false });
    })
}

// 删除学生信息
let deletestudent = (req, res) => {
    studentModel.deleteStudent({ _id: req.params.id })
    .then((result) => {
        res.json({ success: true });
    }).catch((err) => {
        console.log(err);
        res.json({ success: false });
    })
}

module.exports = { index, student, addstudent, modifystudent, deletestudent }