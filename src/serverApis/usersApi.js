
const express = require('express')
//---------------------------------------
const router = express.Router()
const {User,Parent} = require('../dataAccess/userModel');
// var bodyParser = require('body-parser');
// var jsonParser = bodyParser.json();
//----------------Get-------------------
router.get('/users', async(req,res) => {
    User.findAll()
    .then(users => res.json(users))
})
//----------------Post-------------------

//Add new user
router.post('/api/users', (req, res) => {
    User.create(req.body)
        .then(user => res.json(user))
})

module.exports = router;