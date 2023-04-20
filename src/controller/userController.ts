import {Request, Response} from 'express';
import UserService from "../service/userService";
import session from 'express-session';
import BlogService from "../service/blogService";

class UserController {
    private userService;
    private blogService;
    constructor() {
        this.userService = UserService;
        this.blogService = BlogService;
    }
    pageInfor = async (req: Request, res: Response) => {
        if (req.session['user']) {
            let id = await req.session['user']['_id'];
            let inforUser = await this.userService.findUser(id)
            let blogUser = await this.blogService.findBlogByUser(id)
            res.render('afSignIn/information', {inforUser: inforUser, listBlog: blogUser})
        }
        else {
            res.redirect(301, '/sign_in')
        }
    }
    registerUser = async (req:Request, res:Response) => {
        let user = req.body
        this.userService.register(user);
        res.redirect(301, '/sign_in')
    }
    signIn = async (req:Request, res:Response) => {
        let user = await this.userService.checkUser(req.body)
        if(!user){
            res.redirect(301, '/sign_in')
        } else {
            req.session['user'] = user;
            res.redirect(301, '/home_af')
        }
    }
}
export default new UserController();