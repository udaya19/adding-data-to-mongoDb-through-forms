const {User} = require('../models/user');
const express = require('express');
const router = express.Router();

router.post('/add-user',async (req,res)=>{
    let user = new User({
        name:req.body.name,
        email:req.body.email
    })
    user = await user.save();
    res.redirect('/');
})

module.exports = router;