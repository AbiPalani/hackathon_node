const route = require("express").Router();

const empservice = require("../services/employee.services");

//api for user
route.get("/",empservice.findReq);
route.post("/",empservice.insertReq);
route.put("/:id",empservice.updateReq);

module.exports = route;

