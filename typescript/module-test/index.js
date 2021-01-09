import User from './model/User.js';
import UserServiceOracleImpl from './service/Impl/UserServiceOracleImpl.js';
var user3 = new User(1, 'lisi', '22222');
var user4 = new User(2, 'wangwu', '99999');
var userService = new UserServiceOracleImpl();
userService.add(user3);
userService.add(user4);
