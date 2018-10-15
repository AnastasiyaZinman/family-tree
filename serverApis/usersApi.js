
const express = require('express')
const sequelize = require('../dataAccess/da');
//---------------------------------------
const router = express.Router()
const {Person,Parent} = require('../dataAccess/userModel');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

//----------------Post-------------------
//Add new user
router.post('/add_user',jsonParser, function (req, res) {
    // if (!req.body) return res.sendStatus(400);
    console.log("here",req.body);
    Person.create({
        name: req.body.name   
})
    // Person.create(req.body)
//  .then(user => res.json(user))
    
})
//----------------Get-------------------

router.get('/getUsers', async(req,res) => {
    Person.findAll()
    .then(users => res.json(users))
})

router.get('/addParent', async(req,res) => {
    let person = await Person.find({  where:{name:""} })
    let parent = await Parent.create({ name: "Julius" })
    store.addCustomer(customer);
})

// const addRelationship = async function () {
//     let person = await Person.create({ name: "Target" })
//     let parent = await Parent.create({ name: "Julius" })
//     parson.addCustomer(customer)
//     //alternatively, could also do customer.addStore(store)
// }
// addRelationship()
    
module.exports = router;