"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    nameUser: String,
    password: String,
    ageUser: Number,
    image: String
});
const Users = (0, mongoose_1.model)('User', userSchema);
exports.Users = Users;
//# sourceMappingURL=users.js.map