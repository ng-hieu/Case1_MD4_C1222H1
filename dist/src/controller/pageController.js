"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PageController {
    constructor() {
        this.pageAddBlog = async (req, res) => {
            if (req.session['user']) {
                res.render('afSignIn/addNewBlog');
            }
            else {
                res.redirect(301, '/sign_in');
            }
        };
        this.signIn = (req, res) => {
            res.render('signIn_Register/signIn');
        };
        this.register = (req, res) => {
            res.render('signIn_Register/register');
        };
        this.signOut = (req, res) => {
            req.session.destroy(function (err) {
                res.redirect(301, '/home_bf');
                return res.status(200).json({ status: 'success', session: 'cannot access session here' });
            });
        };
    }
}
exports.default = new PageController();
//# sourceMappingURL=pageController.js.map