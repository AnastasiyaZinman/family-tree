const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://sql7260491:77E6J8Rgwr@sql7.freesqldatabase.com:3306/sql7260491');
const Person = sequelize.define('person', {
    name: {
        type: Sequelize.STRING,
        notNull: true
    },
    imgUrl: {
        type: Sequelize.STRING
    }
    });
    
    const Parent = sequelize.define('parent', {});
Person.belongsToMany(Person, { through: Parent, as: 'userId', otherKey: 'userId' });
Person.belongsToMany(Person, { through: Parent, as: 'parentId', otherKey: 'parentId' });

const addRelationship = async function () {
    let person = await Person.create({ name: "Vanessa Shatz", imgUrl: "https://image.flaticon.com/icons/png/512/163/163835.png"})
   let parent = await Parent.find({ where:{id:2} })

    person.addParent(parent);
    //alternatively, could also do customer.addStore(store)
}

addRelationship()