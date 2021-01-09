"use strict";
/*
UserServuceMySQLImpl:MySQL的实体类,使用这个实现类用来对MySQL数据库进行操作
*/
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
/*
User:用户表对应的用户类
*/
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
var user5 = new User(1, 'lisi', '22222');
var user6 = new User(2, 'wangwu', '99999');
// let userService = new UserServiceMySQLImpl();
var userService = new UserServiceOracleImpl();
userService.add(user5);
userService.add(user6);
