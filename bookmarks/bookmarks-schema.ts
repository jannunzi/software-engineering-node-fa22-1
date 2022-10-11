import mongoose from "mongoose";

const bookmarksSchema = new mongoose.Schema({
    tuit: {type: mongoose.Schema.Types.ObjectId,
           ref: 'TuitModel'},
    user: {type: mongoose.Schema.Types.ObjectId,
           ref: 'UserModel'}
}, {collection: 'bookmarks'});

export default bookmarksSchema;
