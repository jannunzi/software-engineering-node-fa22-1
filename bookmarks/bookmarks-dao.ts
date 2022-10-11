import bookmarksModel from "./bookmarks-model";

export const userBookmarksTuit = async (user: string, tuit: string) => {
    const bookmark = await bookmarksModel.create({user, tuit}) // same as {user: user, tuit: tuit})
    return bookmark;
}

export const userUnbookmarksTuit = async (user: string, tuit: string) => {
    const status = await bookmarksModel.deleteOne({user, tuit}) // same as {user: user, tuit: tuit})
    return status;
}

export const findAllBookmarks = async () => {
    const bookmarks = await bookmarksModel
        .find()
        .populate('user', 'username')
        .populate('tuit', 'tuit')
        .exec();
    return bookmarks;
}

export const findMyBookmarks = async (me: string) => {
    const bookmarks = await bookmarksModel.find({user: me})
        // .populate('user')
        .populate('tuit')
        .exec();
    return bookmarks;
}

export const findWhoBookmarkedThisTuit =
        async (tuit: string) => {
    const who = await bookmarksModel
        .find({tuit}) // same as {tuit: tuit}
        .populate('user', 'username')
//      .populate('tuit')
        .exec();
    return who;
}
