const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url === "/employee" && req.method === "GET"){
        res.write(json.stringify(employees));
        res.end();
    }else if(req.url === "/admin" && req.method === "GET"){
        res.write(json.stringify(admins));
        res.end();
    }else if(req.url === "/management" && req.method === "GET"){
        res.write(json.stringify(managements));
        res.end();
    }
});

server.listen(3001);

console.log("Server running at port 3001");