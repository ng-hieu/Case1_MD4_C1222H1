import {Request, Response} from 'express';
import userService from "../service/userService";
import session from 'express-session';
class PageController {
    pageAddBlog = async (req: Request, res: Response) => {
        if (req.session['user']) {
            res.render('afSignIn/addNewBlog')
            let idUser = await req.session['user']['_id'];
            res.render('afSignIn/addNewBlog', {idUser:idUser})
        } else {
            res.redirect(301, '/sign_in')
        }
    }
    signIn = (req: Request, res: Response) => {
        res.render('signIn_Register/signIn')
    }
    register = (req: Request, res: Response) => {
        res.render('signIn_Register/register')
    }
    signOut =  (req: Request, res: Response) => {
       req.session.destroy(function (err) {
           res.redirect(301, '/home_bf')
           return res.status(200).json({status: 'success', session: 'cannot access session here'})
       })
    }
}

export default new PageController();