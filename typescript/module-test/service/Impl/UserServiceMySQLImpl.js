var UserServiceMySQLImpl = /** @class */ (function () {
    function UserServiceMySQLImpl() {
    }
    UserServiceMySQLImpl.prototype.add = function (user) {
        console.log("username=" + user.getUsername() + ",password=" + user.getPassword() + ",\u5DF2\u6DFB\u52A0\u3002\u3002\u3002");
        localStorage.setItem('user', JSON.stringify(user));
        console.log('数据已存入MySQL数据库');
        return true;
    };
    UserServiceMySQLImpl.prototype.delete = function (userId) {
        throw new Error("Method not implemented.");
    };
    UserServiceMySQLImpl.prototype.update = function (userId) {
        throw new Error("Method not implemented.");
    };
    UserServiceMySQLImpl.prototype.get = function (username, password) {
        throw new Error("Method not implemented.");
    };
    return UserServiceMySQLImpl;
}());
export default UserServiceMySQLImpl;
