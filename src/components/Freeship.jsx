import React from 'react';
import { HiOutlineTruck } from "react-icons/hi2";
import { IoBagRemoveOutline } from "react-icons/io5";
import { PiCurrencyDollarLight } from "react-icons/pi";
import { MdOutlineHeadphones } from "react-icons/md";

const Freeship = () => {

    const dat = [
        {
            icon: <HiOutlineTruck />,
            title: "Free Shipping",
            content: "Enjoy free shipping on all orders"
        },
        {
            icon: <IoBagRemoveOutline />,
            title: "Product Replace",
            content: "Easy Product Replacement Available!"
        },
        {
            icon: <PiCurrencyDollarLight />,
            title: "Email Available ",
            content: "No cost EMI available on all major credit cards"
        },
        {
            icon: <MdOutlineHeadphones />,
            title: "24/7 Support ",
            content: "Dedicated 24/7 support via chat and email"
        },
    ];

    return (
        <div className='flex flex-wrap items-center justify-center gap-5 my-10'>
            {dat.map((item, index) => (
                <div key={index} className='flex items-center gap-5'>
                    <div className='text-[2rem] text-gray-500 rounded-full p-2 outline  outline-[1.7px]' width="100px" height="100px">{item.icon}</div>
                    <div>
                    <p className=' sm:text-xl  font-bold' style={{fontFamily:" DM Serif Display"}}>
                 {item.title}</p>
                 <p className='w-[15rem]'>{item.content}</p>
                        
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Freeship;
