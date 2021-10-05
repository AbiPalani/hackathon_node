const {ObjectId} = require("mongodb");
const bcrypt =require("bcrypt");

const db = require("../mongo");

const employee_service ={
    async register(req,res){
        try{
            const user=db.users.findOne({email_id:req.body.email_id});
            if(user)
            return res.sendStatus(400).send({error:"user already exists"});

            const salt = await bcrypt.genSalt({$password});
            const newPass=await bcrypt.hash(req.body.password);

            await db.users.insertOne(req.body);
            res.send({message:"User Registered successfully"})
        }catch(err){
            console.log("Error Registering user",err)
            res.sendStatus(500);
        }
    },
    async login(req,res){
        try{
            const user =await  db.users.findOne({email_id:req.body.email_id});
            if(!user) return res.status(400).send({error:"User doesn't exixst"});

            const isValid = await bcrypt.compare(req.body.password,user.password);
            if(!isValid)
            return res.status(403).send({error:"password incorrect"})
        }catch(err){
            console.log("Error Registering user",err)
            res.sendStatus(500);
        }
    },


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