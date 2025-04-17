let express= require("express");
let route = express.Router();
let func = require("../Function/Logic");


route.get("/i",func.home)

module.exports = route
