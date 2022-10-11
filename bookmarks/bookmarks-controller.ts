import {Express, Request, Response} from "express";
import * as bookmarkDao from "./bookmarks-dao";

const findAllBookmarks = async (req: Request, res: Response) => {
    const bookmarks = await bookmarkDao.findAllBookmarks();
    res.json(bookmarks);
}

const findTuitsBookmarkedByUser = async (req: Request, res: Response) => {
    const me = req.params.uid;
    const tuits = await bookmarkDao.findMyBookmarks(me);
    res.json(tuits);
}

const findUsersWhoBookmarkedTuit = async (req: Request, res: Response) => {
    const tuit = req.params.tid;
    const users = await bookmarkDao.findWhoBookmarkedThisTuit(tuit);
    res.json(users);
}

const userBookmarksTuit = async (req: Request, res: Response) => {
    const user = req.params.uid;
    const tuit = req.params.tid;
    const bookmark = await bookmarkDao.userBookmarksTuit(user, tuit);
    res.json(bookmark);
}

const userUnbookmarksTuit = async (req: Request, res: Response) => {
    const user = req.params.uid;
    const tuit = req.params.tid;
    const status = await bookmarkDao.userUnbookmarksTuit(user, tuit);
    res.json(status);
}

const bookmarksController = (app: Express) => {
    app.post('/api/users/:uid/bookmarks/:tid', userBookmarksTuit);
    app.delete('/api/users/:uid/bookmarks/:tid', userUnbookmarksTuit);
    app.get('/api/bookmarks', findAllBookmarks);
    app.get('/api/users/:uid/bookmarks', findTuitsBookmarkedByUser);
    app.get('/api/tuits/:tid/bookmarks', findUsersWhoBookmarkedTuit);
}

export default bookmarksController;