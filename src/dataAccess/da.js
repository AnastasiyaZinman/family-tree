const Sequelize = require('sequelize');

const DB_URI = process.env.CONNECTION_STRING ||
'mysql://sql7260491:77E6J8Rgwr@sql7.freesqldatabase.com:3306/sql7260491';
const sequelize = new Sequelize(DB_URI);

sequelize
    .authenticate()
    .then(() => { console.log('Connection has been established successfully.'); })
    .catch(err => { console.error('Unable to connect to the database:', err); });

exports.sequelize = sequelize;
// const Sequelize = require('sequelize');
// const sequelize = class Singleton {
//     constructor() {
//         const sequelize = new Sequelize('mysql://sql7260491:77E6J8Rgwr@sql7.freesqldatabase.com:3306/sql7260491');
//      this.start(sequelize)
//     }
//         start = (sequelize) => {
//             sequelize
//             .authenticate()
//             .then(() => {
//                 console.log('Connection has been established successfully.');
//             })
//             .catch(err => {
//                 console.error('Unable to connect to the database:', err);
//             }) 
//         }
// }
// const DBconnection = new Singleton().sequelize;
// export default DBconnection;