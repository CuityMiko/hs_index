/**
 * Student数据模型操作
 */
const mongodb=require('../../core/mongodb.js')
const q = require('q')

// Student Schema 结构
let studentSchema = new mongodb.mongoose.Schema({
    username   : {type : String},
    age        : {type : Number, default : 18},
    phone      : {type : String}
});

/**
 * 获取学生列表
 */
studentSchema.statics.getStudents = () => {
    var deferred = q.defer();
    mongodb.db.model('Student').find({}).sort({'_id':-1}).exec((err, res) => {
        if (err)
            deferred.reject(err);
        else
            deferred.resolve(res);
    })
    return deferred.promise;
}

/**
 * 根据学生Id获取学生信息
 * @param {*} id 
 */
studentSchema.statics.getStudentById = (id) => {
    var deferred = q.defer();
    mongodb.db.model('Student').findOne({ _id: id}, (err, res) => {
        if (err)
            deferred.reject(err);
        else
            deferred.resolve(res);
    })
    return deferred.promise;
}

/**
 * 按照姓名查找内容
 */
studentSchema.statics.findByName=(name)=>{
    return new Promise((resolve,reject)=>{
        mongodb.db.model('Student').find({username:name},(err,result)=>{
            if(err)
                reject(err);
            else
                resolve(result);
        })
    })
}

/**
 * 封装修改方法
 * conditions:查询条件
 * updated:修改内容
 */
studentSchema.statics.modifyStudent=(conditions,updated)=>{
    let _conditions = conditions;
    let _update = {$set : updated};
    let _options = {upsert : true};
    var deferred = q.defer();
    mongodb.db.model('Student').update(_conditions,_update,_options,(err,result)=>{
        if(err)
            deferred.reject(err);
        else
            deferred.resolve(result);
    })
    return deferred.promise;
}

/**
 * 封装删除方法
 */
studentSchema.statics.deleteStudent=(conditions)=>{
    var deferred = q.defer();
    mongodb.db.model('Student').remove(conditions,(err,result)=>{
        if(err)
            deferred.reject(err);
        else
            deferred.resolve(result);
    })
    return deferred.promise;
}

// 定义模型并指定Schema
let StudentModel = mongodb.db.model('Student', studentSchema);

module.exports=StudentModel;