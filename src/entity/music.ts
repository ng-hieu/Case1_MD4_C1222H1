import {model, Schema} from "mongoose";
import {IUser} from "./users";

export interface IMusic {
    titleMusic ?: string,
    textMusic ?: string,
    user ?: IUser,
    image ?: string,
    music ?: string
}

const blogSchema = new Schema <IMusic>({
    titleMusic: String,
    textMusic: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    image: String,
    music: String
})

const Musics = model('Music', blogSchema);
export {Musics}