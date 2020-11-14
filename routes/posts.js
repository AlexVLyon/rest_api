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

//Bruk som Model du allerede kan fra OOP/Android

router.post('/', (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
    .then(data =>{
        res.json(data);
    })
    .catch(err => {
        res.json({ message: err });
    });
});

module.exports = router;