const express = require("express");
const server = express();

// The code below mentioned is used to create a port & start a server

server.listen(9000,()=>{
    console.log("server is running on 9000");
})

server.get("/",(request,response)=>{
    response.send("server is running");
})