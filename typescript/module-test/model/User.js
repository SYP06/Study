var User = /** @class */ (function () {
    function User(userId, username, password) {
        this.userId = userId;
        this.username = username;
        this.password = password;
    }
    User.prototype.getUserId = function () {
        return this.userId;
    };
    User.prototype.setUserId = function (userId) {
        this.userId = userId;
    };
    User.prototype.getUsername = function () {
        return this.username;
    };
    User.prototype.setUsername = function (username) {
        this.username = username;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.setPassword = function (password) {
        this.password = password;
    };
    return User;
}());
export default User;
