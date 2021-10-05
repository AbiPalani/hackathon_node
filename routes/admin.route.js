const route = require("express").Router();

const admservice = require("../services/admin.services");
const empservice = require("../services/employee.services");


route.get("/",admservice.findEmployee);
route.post("/",admservice.insertEmployee);
route.put("/:email_id",admservice.deleteEmployee);

route.get("/",empservice.findReq);
route.post("/",empservice.insertReq);
route.put("/:id",empservice.updateReq);

module.exports = route;

