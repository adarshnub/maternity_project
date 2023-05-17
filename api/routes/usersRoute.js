const express = require('express');
const router = express.Router();
const User = require("../models/User");



router.post("/register",async (req, res)=>{
    const { firstName,
            lastName,
            date,
            email,
            phone,
            password,
            confirmPassword  } = req.body;
    try{
        const userDoc = await User.create({
            firstName,
            lastName,
            password,
            confirmPassword,
            email,
            phone,
            date,
        });
        res.json(userDoc);
    }catch(e){
        return res.status(400).json(e);
    }
})