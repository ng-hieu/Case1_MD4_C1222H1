import {model, Schema} from "mongoose";

export interface IUser {
    nameUser ?: string,
    password ?: string,
    ageUser ?: number,
    image ?: string
}

const userSchema = new Schema <IUser>({
    nameUser: String,
    password: String,
    ageUser: Number,
    image: String
})

const Users = model('User', userSchema);
export {Users}