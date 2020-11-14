const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')


//IMPort routes:

const postsRoute = require('./routes/posts');

//Bodyparser her: innebyd i express
app.use(express.json())


//MIDDLEWARE:
app.use('/posts', postsRoute);

//Middelware: ============================
//EVERY time it goes to the route '/posts' it will execute this function

/*app.use('/posts', () => {
    console.log('this is middelware running');
});*/

//ROUTES: ==================

app.get('/',(req,res) =>{
    res.send('We are on home');
});



//DB CONNECTION:

mongoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true,
        useNewUrlParser: true},
    () => {
        console.log('connected to DB!');
});


//Listen:

app.listen(3000)