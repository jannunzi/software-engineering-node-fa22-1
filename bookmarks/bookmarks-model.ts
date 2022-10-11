import mongoose from "mongoose";
import bookmarksSchema from "./bookmarks-schema";

const bookmarksModel = mongoose.model(
    'BookmarksModel', bookmarksSchema
);

export default bookmarksModel;