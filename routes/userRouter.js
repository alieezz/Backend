const route = require("express").Router();

const routes=require("express");
routes.Router();

const{
userName,
userAdd,
userDelete,
} = require("../controllers/userCOntroller");


route.get("/userName", userName)
route.get("/userAdd", userAdd)
route.get("/userDelete", userDelete)

module.exports = route;