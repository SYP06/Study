import User from './model/User.js'
import UserServiceOracleImpl from './service/Impl/UserServiceOracleImpl.js'
let user3 = new User(1,'lisi','22222');
let user4 = new User(2,'wangwu','99999');

let userService = new UserServiceOracleImpl();
userService.add(user3)
userService.add(user4)