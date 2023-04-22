"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const music_1 = require("../entity/music");
class MusicService {
    constructor() {
        this.findAllMusic = async () => {
            let listMusic = await music_1.Musics.find().populate("user");
            console.log(listMusic);
            return listMusic;
        };
        this.addBlog = async (music) => {
            await music_1.Musics.create(music);
        };
        this.addMusic = async (music) => {
            await music_1.Musics.create(music);
        };
    }
}
exports.default = new MusicService();
//# sourceMappingURL=musicService.js.map