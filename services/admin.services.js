const {ObjectId} = require("mongodb");

const db = require("../mongo");

const employee_service ={
    async findEmployee(req,res) {
        try{
            const data=await db.users.find().toArray();
            res.send(data);
        }catch(err){
            console.log("Error Reading Data-",err);
            res.sendStatus(500);
        }
    },

async insertEmployee(req,res){
    try{
        const {insertedId:email_id} = await db.users.insertOne(req.body);
        res.send({...req.body,email_id});
    }catch (err){
        console.log("Error Inserting Data",err);
        res.sendStatus(500);
    }
},
async deleteEmployee(req,res){
    try{
        await db.users.deleteOne(
            {email_id:ObjectId(req.params.email_id)}
            );
            res.end();
        }catch(err){
            console.log("Error Deleting Data",err);
            res.sendStatus(500);
        }
},
};







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

module.exports=leads_service;
module.exports=contacts_service;
module.exports=serviceReq;
module.exports=employee_service;