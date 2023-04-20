"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
const blogService_1 = __importDefault(require("../service/blogService"));
class UserController {
    constructor() {
        this.pageInfor = async (req, res) => {
            if (req.session['user']) {
                let id = await req.session['user']['_id'];
                let inforUser = await this.userService.findUser(id);
                let blogUser = await this.blogService.findBlogByUser(id);
                res.render('afSignIn/information', { inforUser: inforUser, listBlog: blogUser });
            }
            else {
                res.redirect(301, '/sign_in');
            }
        };
        this.registerUser = async (req, res) => {
            let user = req.body;
            this.userService.register(user);
            res.redirect(301, '/sign_in');
        };
        this.signIn = async (req, res) => {
            let user = await this.userService.checkUser(req.body);
            if (!user) {
                res.redirect(301, '/sign_in');
            }
            else {
                req.session['user'] = user;
                res.redirect(301, '/home_af');
            }
        };
        this.userService = userService_1.default;
        this.blogService = blogService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map