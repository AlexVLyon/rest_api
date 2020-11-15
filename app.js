import express, { json, urlencoded } from 'express';

import mongoose from 'mongoose';
import 'dotenv/config.js';
import connectDatabase from './config/db.js';
//import postsRoute from './routes/posts.js';
import cors from 'cors';
import user from './routes/user.js';
import poll from './routes/poll.js';


const app = express();

app.use(json());
app.use(urlencoded({extended: false}));


//Bodyparser her: innebyd i express

//MIDDLEWARE:
/*
app.use('/posts', postsRoute);
*/
//Middelware: ============================
//EVERY time it goes to the route '/posts' it will execute this function

/*app.use('/posts', () => {
    console.log('this is middelware running');
});*/

app.use(cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type']
  }));

app.use('/user', user);
app.use('/poll', poll)
  

//DB CONNECTION:

connectDatabase();

/*connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true,
        useNewUrlParser: true},
    () => {
        console.log('connected to DB!');
        console.log(connection.host);
        console.log(connection.port);
        
});*/

//Listen:

app.listen(3000)