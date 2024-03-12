// BUILD YOUR SERVER HERE
const express = require('express');
const User = require('./users/model');

const server = express();
server.use(express.json());

server.get('/api/users', async(req, res) => {
    try{
        const users = await User.find()
        res.status(200).json(users)
    }
    catch(error){
        res.status(500).json({
            message: `The user's information could nto be retrieved`
        })
    }
})


module.exports = server;