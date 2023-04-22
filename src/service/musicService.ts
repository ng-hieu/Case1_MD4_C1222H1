import {Musics} from "../entity/music";
class MusicService {
    findAllMusic = async () => {
        let listMusic = await Musics.find().populate("user");
        console.log(listMusic)
        return listMusic;
    }
    addBlog = async (music) => {
        await Musics.create(music);
    }
    addMusic = async (music) => {
        await Musics.create(music);
    }
}
export default new MusicService();