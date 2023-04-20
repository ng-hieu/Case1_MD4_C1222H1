"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogController_1 = __importDefault(require("../controller/blogController"));
const pageController_1 = __importDefault(require("../controller/pageController"));
const userController_1 = __importDefault(require("../controller/userController"));
const router = (0, express_1.Router)();
router.get('/home_af', blogController_1.default.showAll);
router.get('/information', userController_1.default.pageInfor);
router.get('/create', pageController_1.default.pageAddBlog);
router.post('/create', blogController_1.default.addNewBlog);
router.get('/home_bf', blogController_1.default.checkTemplate);
router.get('/sign_in', pageController_1.default.signIn);
router.post('/sign_in', userController_1.default.signIn);
router.get('/register', pageController_1.default.register);
router.post('/register', userController_1.default.registerUser);
router.get('/edit/:id', blogController_1.default.bfEditBlog);
router.post('/edit/:id', blogController_1.default.afEditBlog);
router.get('/delete/:id', blogController_1.default.deleteBlog);
router.get('/sign_out', pageController_1.default.signOut);
router.get('/change/:id', userController_1.default.bfChangeInfor);
router.post('/change/:id', userController_1.default.afChangeInfor);
exports.default = router;
//# sourceMappingURL=router.js.map