/**
 * @file Implements an Express Node HTTP server.
 */
import ActorController from "./actors/actors-controller";
import ActorsService from "./actors/actors-service";
import ActorsDao from "./actors/actors-dao";
import express, {Request, Response} from 'express';
import * as mongoose from "mongoose";
import * as moviesDao from "./movies/movies-dao";
import MoviesController from "./movies/movies-controller";
import UserDao from "./users/UserDao";
import UserController from "./users/UserController";
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

mongoose.connect('mongodb://localhost:27017/fsd', options);

const dbCallback = (movies: any) => {
    console.log('invoked when db returns data')
    console.log(movies);
}

// moviesDao
//     .findAllMovies()
//     .then(movies => console.log(movies));

function sayHello (req: Request, res: Response) {
    res.send('Hi from FSD 1!!!');
}


const sayHello2 = (req: Request, res: Response) =>
    res.send('Hi from FSD 2!!!');

const movieController = new MoviesController(app);


const actorDao = new ActorsDao();
const actorService = new ActorsService(actorDao);
const actorController = new ActorController(app, actorService);

const userDao = new UserDao();
const userController = new UserController(app, userDao);

require('./castings/castings-controller')(app);

app.get('/', sayHello);

app.get('/hello', sayHello2);

/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 4000;
app.listen(process.env.PORT || PORT);
