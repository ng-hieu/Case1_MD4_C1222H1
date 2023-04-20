import {Users} from "../entity/users";
class UserService {
    findUser = async (id) => {
        return await Users.findOne({_id: id});
    }
    register = async (user) => {
        await Users.create(user)
    }
    checkUser = async (user) => {
        let check = await Users.findOne({nameUser: user.nameUser, password: user.password})
        return check;
    }
}
export default new UserService()