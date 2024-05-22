const {Model , DataTypes} = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class task extends Model {}

task.init({
   
},
{
    timestamps: true,
    paranoid: true,
    tableName: "tasks",
    sequelize,
});

module.exports = task;