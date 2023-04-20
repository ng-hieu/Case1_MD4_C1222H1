"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blogService_1 = __importDefault(require("../service/blogService"));
class BlogController {
    constructor() {
        this.checkTemplate = async (req, res) => {
            let listBlogService = await this.blogService.findAll();
            res.render('index', { listBlog: listBlogService });
        };
        this.showAll = async (req, res) => {
            if (req.session['user']) {
                let listBlogService = await this.blogService.findAll();
                res.render('afSignIn/homeAfSignIn', { listBlog: listBlogService });
            }
            else {
                res.redirect(301, '/sign_in');
            }
        };
        this.addNewBlog = async (req, res) => {
            let idUser = req.session['user']._id;
            req.body.user = idUser;
            this.blogService.addBlog(req.body);
            res.redirect(301, '/home_af');
        };
        this.bfEditBlog = async (req, res) => {
            let id = req.params.id;
            let blogNeedEdit = await this.blogService.showBlogEdit(id);
            console.log(blogNeedEdit);
            res.render('afSignIn/editBlog', { blog: blogNeedEdit });
        };
        this.afEditBlog = async (req, res) => {
            let id = req.params.id;
            let blog = req.body;
            await this.blogService.editBlog(id, blog);
            res.redirect(301, '/information');
        };
        this.deleteBlog = async (req, res) => {
            let id = req.params.id;
            await this.blogService.deleteById(id);
            res.redirect(301, '/information');
        };
        this.blogService = blogService_1.default;
    }
}
exports.default = new BlogController();
//# sourceMappingURL=blogController.js.map