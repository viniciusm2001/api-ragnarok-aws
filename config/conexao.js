const Sequelize = require('sequelize');

const database = "db_ragnarok";
const user = "root";
const password = "bcd127";
const host = "localhost";

const con = new Sequelize(database, user, password, {
   host,
   dialect: 'mysql',
   logging: false
});

module.exports = con;