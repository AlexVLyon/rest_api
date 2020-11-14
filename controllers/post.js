import { userService } from '../services/index.js';

import catchAsyncErrors from '../middleware/catchAsync.js';

export const create = catchAsyncErrors(async (req, res) =>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({ message: err});
    }
});

export const get = catchAsyncErrors( async (req, res) =>{
    const post = await Post.findById(req.params.postId)
    try{res.json(post);}
    catch (err) 
    {
        res.json({ message: err});
    }
});

export const update = catchAsyncErrors(async (req,res) => {
        const updatedPost = await Post.updateOne(
        {_id: req.params.postId }, 
        {$set: {title: req.body.title}} );
        res.json(updatedPost);

});

export const listEvents = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const events = await userService.listUserEvents(id);
  res.status(200).json(events);
});


export const remove = catchAsyncErrors(async (req,res) => {
        const removedPost = await Post.deleteOne({_id: req.params.postId } );
        res.json(removedPost);
});
