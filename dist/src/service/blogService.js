"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blogs_1 = require("../entity/blogs");
class BlogService {
    constructor() {
        this.findAll = async () => {
            let listBlog = await blogs_1.Blogs.find().populate("user");
            return listBlog;
        };
        this.findBlogByUser = async (id) => {
            return await blogs_1.Blogs.find({ user: id }).populate("user");
        };
        this.addBlog = async (blog) => {
            await blogs_1.Blogs.create(blog);
        };
        this.showBlogEdit = async (id) => {
            let blog = await blogs_1.Blogs.find({ _id: id });
            return blog[0];
        };
        this.editBlog = async (id, blog) => {
            await blogs_1.Blogs.updateOne({ _id: id }, {
                $set: {
                    titleBlog: `${blog.titleBlog}`,
                    textBlog: `${blog.textBlog}`,
                    image: `${blog.image}`
                }
            });
        };
        this.deleteById = async (id) => {
            await blogs_1.Blogs.deleteOne({ _id: id });
        };
    }
}
exports.default = new BlogService();
//# sourceMappingURL=blogService.js.map