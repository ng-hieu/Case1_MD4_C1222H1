"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blogs = void 0;
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    titleBlog: String,
    textBlog: String,
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    image: String
});
const Blogs = (0, mongoose_1.model)('Blog', blogSchema);
exports.Blogs = Blogs;
//# sourceMappingURL=blogs.js.map