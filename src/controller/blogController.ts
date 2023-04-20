import {Request, Response} from 'express';
import BlogService from '../service/blogService'

class BlogController {
    private blogService

    constructor() {
        this.blogService = BlogService;
    }

    checkTemplate = async (req: Request, res: Response) => {
        let listBlogService = await this.blogService.findAll();
        res.render('index', {listBlog: listBlogService})
    }
    //trong phan /home
    showAll = async (req: Request, res: Response) => {
        if (req.session['user']) {
            let listBlogService = await this.blogService.findAll()
            res.render('afSignIn/homeAfSignIn', {listBlog: listBlogService});
        } else {
            res.redirect(301, '/sign_in')
        }
    }
    addNewBlog = async (req: Request, res: Response) => {
        let idUser = req.session['user']._id;
        req.body.user = idUser;
        this.blogService.addBlog(req.body);
        res.redirect(301, '/home_af')
    }
    bfEditBlog = async (req: Request, res: Response) => {
        let id = req.params.id;
        let blogNeedEdit = await this.blogService.showBlogEdit(id);
        console.log(blogNeedEdit)
        res.render('afSignIn/editBlog', {blog: blogNeedEdit})
    }
    afEditBlog = async (req: Request, res: Response) =>{
        let id = req.params.id;
        let blog = req.body;
        await this.blogService.editBlog(id, blog);
        res.redirect(301, '/information')
    }
    deleteBlog = async (req: Request, res: Response) =>{
        let id = req.params.id;
        // console.log('checkkk')
        // console.log(id)
        await this.blogService.deleteById(id);
        res.redirect(301, '/information');
    }
}

export default new BlogController();