import {Router} from 'express';
import BlogControler from '../controller/blogController'
import PageController from '../controller/pageController'
import UserController from "../controller/userController";
const router = Router();
router.get('/home_af', BlogControler.showAll)
router.get('/information', UserController.pageInfor)
router.get('/create', PageController.pageAddBlog)
router.post('/create',BlogControler.addNewBlog)
router.get('/home_bf', BlogControler.checkTemplate)
router.get('/sign_in', PageController.signIn)
router.post('/sign_in', UserController.signIn)
router.get('/register', PageController.register)
router.post('/register', UserController.registerUser)
router.get('/edit/:id', BlogControler.bfEditBlog)
router.post('/edit/:id', BlogControler.afEditBlog)
router.get('/delete/:id', BlogControler.deleteBlog)
router.get('/sign_out', PageController.signOut)
router.get('/change/:id', UserController.bfChangeInfor)
router.post('/change/:id', UserController.afChangeInfor)
router.get('/search', BlogControler.searchBlog)
//router.post('/search', BlogControler.searchBlog)
export default router