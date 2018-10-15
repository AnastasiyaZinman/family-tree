const Sequelize = require('sequelize');
const sequelize = require('../dataAccess/da');
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


// Parent.sync()
// Person.sync()
module.exports = {Person : Person, Parent : Parent};

