const express = require('express');
const User=express.Router();
const users = require('../model/userSchema');


User.get('/users', async (req, res) => {
    try {
        const{title,rating,q,page,limit}=req.query;
        const filters = {}

        if (title) filters.Title = new RegExp(title, 'i')
        if (q) filters.Title = new RegExp(q, 'i')
        if (rating) filters.Rating =  (rating)

        const data = await users.find(filters).limit(limit).skip((page-1)*limit);
      res.status(200).send(data)
    } catch(err) {
        console.error(err.message);
        return res.status(500).send({
            error: 'Something went wrong'
        })
    }
})

User.get('users/:id', async (req, res) => {
    console.log(req.params)
    try {
        const params=await req.params.id;
        console.log(params)
        const data = await users.findOne({id:params});
      res.status(200).send(data)
    } catch(err) {
        console.error(err.message);
        return res.status(500).send({
            error: 'Something went wrong'
        })
    }
})

User.patch('users/:id', async (req, res) => {
    try {
        const update=req.body;
        const data = await users.findByIdAndUpdate(req.params.id,{$set: { name: update.name,email: update.email}});
        res.status(200).send(data)
    } catch(err) {
        console.error(err.message);
        return res.status(500).send({
            error: 'Something went wrong'
        })
    }
})


module.exports =User;