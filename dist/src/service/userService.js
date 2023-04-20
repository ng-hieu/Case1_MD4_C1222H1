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
        this.showUserEdit = async (id) => {
            let user = await users_1.Users.find({ _id: id });
            return user[0];
        };
        this.editUser = async (id, user) => {
            await users_1.Users.updateOne({ _id: id }, {
                $set: {
                    nameUser: `${user.nameUser}`,
                    ageUser: `${user.ageUser}`,
                    image: `${user.image}`
                }
            });
        };
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map