import {Express, Request, Response} from "express";
import * as castingsDao from './castings-dao';

module.exports = (app: Express) => {
    const findActorsInMovie = (req: Request, res: Response) =>
        castingsDao.findActorsInMovie(req.params.mid)
            .then(actors => res.json(actors));
    const findMoviesForActor = (req: Request, res: Response) =>
    {
        castingsDao.findMoviesForActor(req.params.aid)
            .then(movies => res.json(movies));
    }
    const addActorToMovie = (req: Request, res: Response) =>
        castingsDao.addActorToMovie(req.params.aid, req.params.mid)
            .then(status => res.send(status));
    const addMovieToActor = (req: Request, res: Response) =>
        castingsDao.addMovieToActor(req.params.mid, req.params.aid)
            .then(status => res.send(status));
    const removeActorFromMovie = (req: Request, res: Response) =>
        castingsDao.removeActorFromMovie(
            req.params.aid, req.params.mid);
    const removeMovieFromActor = (req: Request, res: Response) =>
        castingsDao.removeMovieFromActor(
            req.params.mid, req.params.aid);

    app.get('/api/movies/:mid/actors', findActorsInMovie);
    app.get('/api/actors/:aid/movies', findMoviesForActor);

    app.post('/api/actors/:aid/movies', addMovieToActor);
    app.post('/api/movies/:aid/actors', addActorToMovie);

    app.delete('/api/actors/:aid/movies', removeMovieFromActor);
    app.delete('/api/movies/:aid/actors', removeActorFromMovie);
}