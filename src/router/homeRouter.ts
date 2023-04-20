import {Router} from "express";
import BlogControler from "../controller/blogController";
import PageController from "../controller/pageController";
const homeRouter = Router();

// homeRouter.get('/', BlogControler.showAll)
// homeRouter.get('/information', PageController.pageInfor)
// homeRouter.get('/create', PageController.pageAddBlog)
export default homeRouter