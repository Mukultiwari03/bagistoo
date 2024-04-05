import React, { useState, useEffect } from "react";
import axios from "axios";
import Custcom from "./Custcomp";

const Customers = () => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "",
    gender: "",
    category: "",
    balance: "",
    order: "",
    addresses: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/customers");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setCustomerData({
      ...customerData,
      [e.target.name]: e.target.value,
    });
    
  };

  const handleSubmit = async () => {
    console.log(customerData);
    console.log("Submitted");
    try {
      const response = await axios.post(
        "http://localhost:9000/newcustomers",
        customerData
      );
      console.log(response);
    } catch (err) {}
    setShowForm(false);
  };

  const AddcustomerHandler = () => {
    setShowForm(true);
  };

  // const newCustomerHandler = async (e) => {
  //   setCustomerData({
  //     ...customerData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // newCustomerHandler();

  return (
    <div className="px-4 py-8">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">Customers</h2>
        <button
          onClick={AddcustomerHandler}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Customer
        </button>
      </div>
      <div className="mt-4 flex items-center justify-between px-4 py-2 border-[1px] rounded-sm">
        <div className="flex space-x-4 items-center">
          <input type="checkbox" className="w-4 h-4" />
          <span>
            <p className="text-sm  text-slate-500 ">
              Customer Name / Email / Contact Number
            </p>
          </span>
        </div>
        <div>
          <span>
            <p className="text-sm  text-slate-500 mr-[2.75rem]">
              Status / Gender / Group
            </p>
          </span>
        </div>
        <div>
          <span>
            <p className="text-sm text-slate-500">
              Revenue / Order / Count / Address Count
            </p>
          </span>
        </div>
      </div>
      {showForm ? (
        <form onSubmit={handleSubmit} className="mt-4">
          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={customerData.name}
              onChange={handleInputChange}
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full  border-none outline-none shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={customerData.email}
              onChange={handleInputChange}
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full  border-none outline-none shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          {/* Phone */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={customerData.phone}
              onChange={handleInputChange}
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full  border-none outline-none shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          {/* Status */}
          <div className="mb-4">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <input
              type="text"
              id="status"
              name="status"
              value={customerData.status}
              onChange={handleInputChange}
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full  border-none outline-none shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          {/* Gender */}
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={customerData.gender}
              onChange={handleInputChange}
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full  border-none outline-none shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          {/* Category */}
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={customerData.category}
              onChange={handleInputChange}
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full  border-none outline-none shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          {/* Balance */}
          <div className="mb-4">
            <label
              htmlFor="balance"
              className="block text-sm font-medium text-gray-700"
            >
              Balance
            </label>
            <input
              type="text"
              id="balance"
              name="balance"
              value={customerData.balance}
              onChange={handleInputChange}
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full  border-none outline-none shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          {/* Order */}
          <div className="mb-4">
            <label
              htmlFor="order"
              className="block text-sm font-medium text-gray-700"
            >
              Order
            </label>
            <input
              type="text"
              id="order"
              name="order"
              value={customerData.order}
              onChange={handleInputChange}
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full  border-none outline-none shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          {/* Addresses */}
          <div className="mb-4">
            <label
              htmlFor="addresses"
              className="block text-sm font-medium text-gray-700"
            >
              Addresses
            </label>
            <input
              type="text"
              id="addresses"
              name="addresses"
              value={customerData.addresses}
              onChange={handleInputChange}
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full  border-none outline-none shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      ) : (
        <Custcom data={data} />
      )}
    </div>
  );
};

export default Customers;
