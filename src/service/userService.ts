import {Users} from "../entity/users";
import {Blogs} from "../entity/blogs";
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
    showUserEdit = async (id) => {
        let user = await Users.find({_id: id});
        // console.log(typeof product)
        // console.log(product)
        return user[0];
    }
    editUser = async (id, user) => {
        await Users.updateOne({_id: id},
            {
                $set:
                    {
                        nameUser: `${user.nameUser}`,
                        ageUser: `${user.ageUser}`,
                        image: `${user.image}`
                    }
            })
    }
}
export default new UserService()