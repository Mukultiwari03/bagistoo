const express = require("express");
const mongoose = require("mongoose");
const Server = express();
const cors = require("cors");

Server.use(
  cors({
    origin: "http://localhost:3000",
  })
);

mongoose.connect("mongodb://localhost:27017/store", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    maxlength: 40,
  },
  phone: {
    type: Number,
    required: true,
    maxLength: 10,
  },
  status: {
    type: String,
    maxLength: 10,
  },
  gender: {
    type: String,
    maxLength: 6,
  },
  category: {
    type: String,
    maxLength: 10,
  },
  balance: {
    type: Number, // Changed to Number
    maxLength: 15,
  },
  orders: {
    type: Number,
    maxLength: 3,
  },
  addresses: {
    type: Number,
    maxLength: 3,
  },
});
const userSchema = new mongoose.Schema({
  name: String,
});

const User = mongoose.model("User", userSchema);
const Customer = mongoose.model("Customer", customerSchema);

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

Server.get("/customers", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.send(customers);
  } catch (er) {
    console.error("Error getting customers: ", er);
    response.status(500).send("Internal Server Error");
  }
});

// Server.get("/registerUser", async (request, response) => {
//     try {
//         const newUser = new Customer({
//             name: "Sumit"
//         });
//         await newUser.save();
//         response.send("User added successfully");
//     } catch (error) {
//         console.error("Error adding user:", error);
//         response.status(500).send("Internal Server Error");
//     }
// });

// Server.post("/newcustomers", async (req, res) => {
//   console.log(req.query);
//   try {
//     const newCustomer = new Customer({
//       name: req.query.name,
//       email: req.query.email,
//       phone: req.query.phone,
//       status: req.query.status,
//       gender: req.query.gender,
//       category: req.query.category,
//       balance: req.query.balance,
//       orders: req.query.orders,
//       addresses: req.query.addresses,
//     });
//     await newCustomer.save();
//     res.send("Customer added successfully");
//     console.log("Customer added successfully");
//   } catch (err) {
//     console.error("Error adding customer:", err);
//     console.log(err);
//     res.status(500).send("Internal Server Error");
//   }
// });
//body is undefined

Server.use(express.json()); // Add this line to parse JSON request bodies

Server.post("/newcustomers", async (req, res) => {
  console.log(req.body);
  try {
    //   take the data from body
    const newCustomer = new Customer({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      status: req.body.status,
      gender: req.body.gender,
      category: req.body.category,
      balance: req.body.balance,
      orders: req.body.orders,
      addresses: req.body.addresses,
    });
    await newCustomer.save();
    res.send("Customer added successfully");
    console.log("Customer added successfully");
  } catch (err) {
    console.error("Error adding customer:", err);
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});
