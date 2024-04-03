import React from "react";
import Carousel from "./Carousel";
import MenKids from "./MenKids";
import Thegame from "./Thegame";
import Getready from "./Getready";
import Twoimg from "./Twoimg";
import Newbold from "./Newbold.jsx";
import Freeship from "./Freeship.jsx";
import Newproducts from "./Newproducts.jsx";
import Featuredproducts from "./Featured_products.jsx";
import Allproducts from "./Allproducts.jsx";
const Landingpage = () => {
  return (
    <div>
      <header className="App-header">
        <Carousel />
      </header>
      <div>
        <p
          className="md:text-2xl text-md font-bold text-center bg-[#E8EDFE] py-5"
          style={{ fontFamily: " DM Serif Display" }}
        >
          Get UPTO 40% OFF on your 1st order SHOP NOW
        </p>
      </div>
      <MenKids />
      <Newproducts />
      <Thegame />
      <Getready />
      <Featuredproducts />
      <Twoimg />
      <Allproducts />
      <Newbold />
      <Freeship />
     
    </div>
  );
};

export default Landingpage;
