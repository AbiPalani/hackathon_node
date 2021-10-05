const {MongoClient} = require("mongodb");

const url="mongodb://localhost:27017";

const DB_Name= "users";



const client = new MongoClient(url);

module.exports ={
    db:null,

    leads:null,
    contacts:null,
    serviceReq:null,
    users:null,


    async connect(){
      //connection to database
     await client.connect();
     console.log("Connected to database:",url);

     //select the database
     this.db=client.db(DB_Name);
     console.log("Selected Database:",DB_Name);

      //select the collection
     this.leads =this.db.collection("leads");
     this.contacts = this.db.collection("contacts");
     this.serviceReq=this.db.collection("serviceReq");
     this.users=this.db.collection("users");

  },
};

