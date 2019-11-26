const Sequelize = require('sequelize');

const database = "db_ragnarok";
const user = "root";
const password = "123456";
const host = "localhost";
const port = 3106;

const con = new Sequelize(database, user, password, {
   host,
   port,
   dialect: 'mysql',
   logging: false
});

module.exports = con;
