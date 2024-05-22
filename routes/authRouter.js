const route = require("express").Router();

const{
login,
logout,
resetPassword,
} = require("../controllers/authController");

route.get("/login", login);
route.post("/logout", logout);
route.get("/resetPassword", resetPassword);


module.exports = route;