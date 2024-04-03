import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
 const Newproducts=()=> {

 const data = [
        {
            id: "a1",
            image: "https://demo.bagisto.com/bagisto-common/cache/medium/product/521/Ca725Cof60gloeFYBf4ccYnfkxGEh8G3LIgn1LVF.webp",
            productName: "Adorable BunnyHop Baby Shoes",
            price: "$19"
        },
        {
            id: "a2",
            image: "https://demo.bagisto.com/bagisto-common/cache/medium/product/306/cFWJlmL8oJBhzD5sRzh3vp9Cyc2lnWP98fAnnqBH.webp",
            productName: "Adventure Seeker Boys' Half Sleeve Graphic T-Shirt",
            price: "$56"
        },
        {
            id: "a3",
            image: "https://demo.bagisto.com/bagisto-common/cache/medium/product/59/ifkPboTqNbmEaDE0Oiceb2gp518QoV6ISyfh24pL.webp",
            productName: "AeroFit Women's Fitness Performance Jacket",
            price: "$120"
        },
        {
            id: "a4",
            image: "https://demo.bagisto.com/bagisto-common/cache/medium/product/174/6zgmyY14TQ2WqCxEEdENs8tSfI6bAJbq0bjljQOq.webp",
            productName: "All-in-One Smart Casual Outfit Set",
            price: "$168"
        },
        {
            id: "a5",
            image: "https://demo.bagisto.com/bagisto-common/cache/medium/product/184/46b2yaNraeL4zEOXSjzVUnKf50h3gFebIfs5axaa.webp",
            productName: "Arctic Cozy Knit Unisex Beanie",
            price: "$12"
        },
        {
            id: "a6",
            image: "https://demo.bagisto.com/bagisto-common/cache/medium/product/182/pJpBLP0t16lAXy62nHdYhjDgSWKzteiijuGu0QSJ.webp",
            productName: "Arctic Bliss Stylish Winter Scarf",
            price: "$24"
        },
        {
            id: "a7",
            image: "https://demo.bagisto.com/bagisto-common/cache/medium/product/479/kExtv9yWu6yqFYHMrkZvDMR16FPfIWcplQqwGDI3.webp",
            productName: "AquaStride Men's Stylish Waterproof Casual Sports Shoes",
            price: "$230"
        },
        {
            id: "a8",
            image: "https://demo.bagisto.com/bagisto-common/cache/medium/product/175/aKFTZ36lejYZmrAL5hlOWWiYCkN2BMXVUwM6z6bL.webp",
            productName: "Arctic Frost Winter Accessories Bundle",
            price: "$17"
        },
        {
            id: "a9",
            image: "https://demo.bagisto.com/bagisto-common/cache/medium/product/183/shw0pym2GqbsEbnuvsGLknszOzTjv2gDkYYDWGHn.webp",
            productName: "Arctic Touchscreen Winter Gloves",
            price: "$27"
        },
    ]
  var settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    autoplaySpeed:1500,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className='w-[85%] mx-auto gap-3'>
     <div>
     <p className=' sm:text-3xl text-3xl font-bold   py-5' style={{fontFamily:" DM Serif Display"}}>
            New Products</p>
    </div>   
  
    <Slider {...settings} className='overflow-hidden '>
        {data.map((item) => (
            <div key={item.id} className='px-3'>
                <img src={item.image} alt={item.productName} className='rounded-[12px]'/>
                <div>
                    <p>{item.productName}</p>
                    <p className='font-bold text-xl'>{item.price}</p>
                </div>
            </div>
        ))}
    </Slider>

    <div className='flex items-center justify-center my-8'>
        <button className='font-medium text-lg outline outline-[1px]  rounded-[12px] w-[150px] h-[50px]'>View All</button>
    </div>
    </div>
);
}

export default Newproducts