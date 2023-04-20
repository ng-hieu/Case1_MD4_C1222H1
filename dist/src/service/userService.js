"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../entity/users");
class UserService {
    constructor() {
        this.findUser = async (id) => {
            return await users_1.Users.findOne({ _id: id });
        };
        this.register = async (user) => {
            await users_1.Users.create(user);
        };
        this.checkUser = async (user) => {
            let check = await users_1.Users.findOne({ nameUser: user.nameUser, password: user.password });
            return check;
        };
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map