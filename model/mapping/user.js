// 获取所有
let queryUserList = `SELECT * FROM applets_user ORDER BY id DESC`;

// 获取分页数据
let queryUserPageList = `SELECT * FROM applets_user ORDER BY id DESC LIMIT ?,?`;

// 根据Id获取
let queryUserById = `select * from applets_user WHERE id=?`;

// 添加User
let addUser = `INSERT INTO applets_user VALUES(NULL,?,?,?,?,?)`;

// 更新User
let updateUser = `UPDATE applets_user SET ali_user_id=?,ali_user_name=?,ali_user_phone=?,ali_user_avatar=?,access_token=? WHERE id=?`;

// // 删除User
let deleteUser = `delete from applets_user WHERE id=?`;

exports.User = {
    queryUserList,
    queryUserPageList,
    queryUserById,
    addUser,
    updateUser,
    deleteUser
}