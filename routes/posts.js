const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//TRENGER IKKE /POSTS HER DA DET BLIR KALT I APP.JS KRÆSJER MED /POSTS.
//DA BLIR DET /posts/posts

router.get('/',(req, res) =>{
    res.send('We are on posts');
});

router.get('/specific',(req, res) =>{
    res.send('We are on specific posts');
});

router.post('/', (req,res) => {
    console.log(req.body); 
})

module.exports = router;