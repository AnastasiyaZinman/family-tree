
const express = require('express')
//---------------------------------------
const router = express.Router()
const {Person,Parent} = require('../dataAccess/userModel');
// var bodyParser = require('body-parser');
// var jsonParser = bodyParser.json();
//----------------Get-------------------
router.get('/users', async(req,res) => {
    Person.findAll()
    .then(users => res.json(users))
})

router.get('/addParent', async(req,res) => {
    let store = await Store.create({ name: "Target" })
    let customer = await Customer.create({ name: "Julius" })
    store.addCustomer(customer);
})
//----------------Post-------------------

//Add new user
router.post('/api/add_user', (req, res) => {
    Person.create(req.body)
        .then(user => res.json(user))
})

module.exports = router;