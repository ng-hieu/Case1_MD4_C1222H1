import {model, Schema} from "mongoose";
import {IUser} from "./users";

export interface IBlog {
    titleBlog ?: string,
    textBlog ?: string,
    user ?: IUser,
    image ?: string
}

const blogSchema = new Schema <IBlog>({
    titleBlog: String,
    textBlog: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    image: String
})

const Blogs = model('Blog', blogSchema);
export {Blogs}