"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Musics = void 0;
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    titleMusic: String,
    textMusic: String,
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    image: String,
    music: String
});
const Musics = (0, mongoose_1.model)('Music', blogSchema);
exports.Musics = Musics;
//# sourceMappingURL=music.js.map