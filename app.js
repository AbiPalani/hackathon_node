const express =require("express");

const empRoutes=require("./routes/employee.route");
const adminRoutes=require("./routes/admin.route");
const manageRoutes=require("./routes/management.route");

const app=express();
const port=process.env.port || 3001;


//parse the request body to json 
app.use(express.json());

//Employee Middleware
app.use("/employee",(req,res,next)=>{ 
    next();
});

app.use("/admin",(req,res,next)=>{
    next();
});

app.use("/management",(req,res,next)=>{
    next();
});


app.use("/employee",empRoutes);
app.use("/admin",adminRoutes);
app.use("/management",manageRoutes);

app.listen(port, ()=> console.log(`Server running at port- ${port}`));
