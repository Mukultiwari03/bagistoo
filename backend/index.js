// const express = require("express");
// const server = express();

// // The code below mentioned is used to create a port & start a server

// server.listen(9000,()=>{
//     console.log("server is running on 9000");
// })
// var client= require("mongodb").MongoClient;

// var db_url = " mongodb://127.0.0.1:27017/mydb"
// server.get("/",(request,response)=>{
//     response.send("server is running");
// })
// server.get("/products",(request,response)=>{
//     const props = {
//         "id": 8,
//         "title": "Microsoft Surface Laptop 4",
//         "description": "Style and speed. Stand out on ...",
//         "price": 1499,
//         "discountPercentage": 10.23,
//         "rating": 4.43,
//         "stock": 68,
//         "brand": "Microsoft Surface",
//         "category": "laptops",
//         "thumbnail": "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
//         "images": [
//           "https://cdn.dummyjson.com/product-images/8/1.jpg",
//           "https://cdn.dummyjson.com/product-images/8/2.jpg",
//           "https://cdn.dummyjson.com/product-images/8/3.jpg",
//           "https://cdn.dummyjson.com/product-images/8/4.jpg",
//           "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg"
//         ]
//       }
//     response.send(props);
// })

// server.get("/registerUser", (req,res)=>{
//   console.log("reached...")
//   response.send("response recieved...")
//   client.connect(db_url,function(err,db){
//     if(err) throw err;
//     var db_ob = db.db("mydb");
//     var data = {name:"submit"};
//     db_ob.collection("users").insertOne(data,function(err,res){
//       if(err) throw err;
//       response.send("Data Inserted..."+res);
//       db.close();
//     })
//   })
// })

// import express from "express";
// import mongoose from "mongoose";

// const Server = express();
// const PORT = 9000;

// // Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connected to MongoDB");
//     // Start the server after successfully connecting to MongoDB
//     Server.listen(PORT, () => {
//       console.log("Server is running on port", PORT);
//     });
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });

// // Define schema
// const userSchema = new mongoose.Schema({
//   name: String,
//   address: String
// });

// // Create model
// const User = mongoose.model('User', userSchema);

// // Route to add a user
// Server.get("/addUser",  (request, response) => {
//   try {
    
//     const newUser = new User({
//       name: "Anil",
//       address: "Chd"
//     });

   
//      newUser.save();

//     response.send("User added successfully");
//   } catch (error) {
//     console.error("Error adding user:", error);
//     response.status(500).send("Internal Server Error");
//   }
// });

const express = require("express");
const mongoose = require("mongoose");
const Server = express();

mongoose.connect("mongodb://localhost:27017/store", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
    name: String
});

const User = mongoose.model('User', userSchema);

console.log("Connected...");

Server.listen(9000, () => {
    console.log("Server is running on port 9000");
});

Server.get("/users", async (request, response) => {
    try {
        const users = await User.find();
        console.log(users);
        response.send(users);
    } catch (error) {
        console.error("Error getting users:", error);
        response.status(500).send("Internal Server Error");
    }
});

Server.get("/registerUser", async (request, response) => {
    try {
        const newUser = new User({
            name: "Sumit"
        });
        await newUser.save();
        response.send("User added successfully");
    } catch (error) {
        console.error("Error adding user:", error);
        response.status(500).send("Internal Server Error");
    }
});
