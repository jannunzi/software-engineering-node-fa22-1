import {Express, Request, Response} from "express";
import * as followsDao from "./follows-dao";

const findAllFollows = (req: Request, res: Response) =>
    followsDao.findAllFollows()
        .then(follows => res.json(follows));

const findFollowers = (req: Request, res: Response) =>
    followsDao.findFollowers(req.params.uid)
        .then(followers => res.json(followers));

const findFollowing = (req: Request, res: Response) =>
    followsDao.findFollowing(req.params.uid)
        .then(following => res.json(following));

const userFollowsUser = (req: Request, res: Response) =>
    followsDao.userFollowsUser(req.params.follower, req.params.followed)
        .then(status => res.json(status));

const userUnfollowsUser = (req: Request, res: Response) =>
    followsDao.userUnfollowsUser(req.params.follower, req.params.followed)
        .then(status => res.json(status));

export const followsController = (app: Express) => {
    app.get('/api/follows', findAllFollows);
    app.get('/api/users/:uid/followers', findFollowers);
    app.get('/api/users/:uid/following', findFollowing);
    app.post('/api/users/:follower/follows/:followed', userFollowsUser);
    app.delete('/api/users/:follower/follows/:followed', userUnfollowsUser);
}