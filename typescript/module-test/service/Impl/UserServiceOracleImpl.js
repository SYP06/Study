var UserServiceOracleImpl = /** @class */ (function () {
    function UserServiceOracleImpl() {
    }
    UserServiceOracleImpl.prototype.add = function (user) {
        console.log("username=" + user.getUsername() + ",password=" + user.getPassword() + ",\u5DF2\u6DFB\u52A0\u3002\u3002\u3002");
        localStorage.setItem('user', JSON.stringify(user));
        console.log('数据已存入Oracle数据库');
        return true;
    };
    UserServiceOracleImpl.prototype.delete = function (userId) {
        throw new Error("Method not implemented.");
    };
    UserServiceOracleImpl.prototype.update = function (userId) {
        throw new Error("Method not implemented.");
    };
    UserServiceOracleImpl.prototype.get = function (username, password) {
        throw new Error("Method not implemented.");
    };
    return UserServiceOracleImpl;
}());
export default UserServiceOracleImpl;
