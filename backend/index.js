const express = require("express");
const server = express();

// The code below mentioned is used to create a port & start a server

server.listen(9000,()=>{
    console.log("server is running on 9000");
})

server.get("/",(request,response)=>{
    response.send("server is running");
})
server.get("/products",(request,response)=>{
    const props = {
        "id": 8,
        "title": "Microsoft Surface Laptop 4",
        "description": "Style and speed. Stand out on ...",
        "price": 1499,
        "discountPercentage": 10.23,
        "rating": 4.43,
        "stock": 68,
        "brand": "Microsoft Surface",
        "category": "laptops",
        "thumbnail": "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
        "images": [
          "https://cdn.dummyjson.com/product-images/8/1.jpg",
          "https://cdn.dummyjson.com/product-images/8/2.jpg",
          "https://cdn.dummyjson.com/product-images/8/3.jpg",
          "https://cdn.dummyjson.com/product-images/8/4.jpg",
          "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg"
        ]
      }
    response.send(props);
})