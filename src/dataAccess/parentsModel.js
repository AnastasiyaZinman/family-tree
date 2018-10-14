const sequelizeConnection =require("../dataAccess/da");
import User from './userModel';
const Parent = sequelizeConnection.define('parent', {
    userName: {
        type: Sequelize.STRING
    },
    parentName: {
        type: Sequelize.STRING
    }
});
Parent.hasMany(User, {
    foreignKey: {
      name: 'uid',
      allowNull: false
    }
  });
