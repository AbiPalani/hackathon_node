const route = require("express").Router();

const mgservice = require("../services/management.services");
const empservice = require("../services/employee.services");

route.post("/register",mgservice.register);
route.post("/login",mgservice.login);

route.get("/",empservice.findReq);
route.post("/",empservice.insertReq);
route.put("/:id",empservice.updateReq);

route.get("/",mgservice.findEmployee);
route.post("/",mgservice.insertEmployee);
route.put("/:email_id",mgservice.deleteEmployee);

module.exports = route;

