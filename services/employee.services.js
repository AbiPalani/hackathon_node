const {ObjectId, LEGAL_TCP_SOCKET_OPTIONS} = require("mongodb");

const db = require("../mongo");

const leads_service ={
    async findReq(req,res) {
        try{
            const data=await db.leads.find().toArray();
            res.send(data);
        }catch(err){
            console.log("Error Reading Data-",err);
            res.sendStatus(500);
        }
    },

async insertReq(req,res){
    try{
        const {insertedId:id} = await db.leads.insertOne(req.body);
        res.send({...req.body,id});
    }catch (err){
        console.log("Error Inserting Data",err);
        res.sendStatus(500);
    }
},
async updateReq(req,res){
    try{
        const {value} =await db.leads.findOneAndUpdate(
            {id:ObjectId(req.params.id)},
            {$set:{...req.body}},
            );
            res.send(value);
        }catch(err){
            console.log("Error Updating Data",err);
            res.sendStatus(500);
        }
},
};

const contacts_service ={
    async findReq(req,res) {
        try{
            const data=await db.contacts.find().toArray();
            res.send(data);
        }catch(err){
            console.log("Error Reading Data-",err);
            res.sendStatus(500);
        }
    },

async insertReq(req,res){
    try{
        const {insertedId:id} = await db.contacts.insertOne(req.body);
        res.send({...req.body,id});
    }catch (err){
        console.log("Error Inserting Data",err);
        res.sendStatus(500);
    }
},
async updateReq(req,res){
    try{
        const {value} =await db.contacts.findOneAndUpdate(
            {id:ObjectId(req.params.id)},
            {$set:{...req.body}},
            );
            res.send(value);
        }catch(err){
            console.log("Error Updating Data",err);
            res.sendStatus(500);
        }
},
};

const serviceReq ={
    async findReq(req,res) {
        try{
            const data=await db.serviceReq.find().toArray();
            res.send(data);
        }catch(err){
            console.log("Error Reading Data-",err);
            res.sendStatus(500);
        }
    },

async insertReq(req,res){
    try{
        const {insertedId:id} = await db.serviceReq.insertOne(req.body);
        res.send({...req.body,id});
    }catch (err){
        console.log("Error Inserting Data",err);
        res.sendStatus(500);
    }
},
async updateReq(req,res){
    try{
        const {value} =await db.serviceReq.findOneAndUpdate(
            {id:ObjectId(req.params.id)},
            {$set:{...req.body}},
            );
            res.send(value);
        }catch(err){
            console.log("Error Updating Data",err);
            res.sendStatus(500);
        }
},
};

module.exports= leads_service;
module.exports=contacts_service;
module.exports=serviceReq;