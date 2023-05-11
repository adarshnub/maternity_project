const express = require('express');
const router = express.Router();
const Post = require("../models/Post");

router.get("/getallposts",async (req, res)=>{
    try{
        const posts = await Post.find();
        res.send(posts);
    }catch(error){
        return res.status(400).json(error);
    }
})