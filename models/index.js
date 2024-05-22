const sequelize = require("../bin/dbConnection")

const users = require("./definitions/users");
const task = require("./definitions/task");

const models ={users,task};

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };