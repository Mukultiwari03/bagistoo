import React from 'react'

const Footer = () => {
  return (


    
    <footer className="mt-9  bg-[#F1EADF] max-sm:mt-8 flex justify-between px-16 py-20 lg:flex-row flex-col-reverse">
       
        <div className="flex sm:gap-24 gap-5 items-start flex-wrap max-w-1180:gap-6 max-1060:justify-between mt-16 lg:mt-0 ">
            <ul className="grid gap-5 text-sm">
                <li><a href="/"> About Us </a></li>
                <li><a href="/"> Contact Us </a></li>
                <li><a href="/"> Customer Service </a></li>
                <li><a href="/"> What's New </a></li>
                <li><a href="/"> Terms of Use </a></li>
                <li><a href="/"> Terms &amp; Conditions </a></li>
            </ul>
            <ul className="grid gap-5 text-sm">
                    <li><a href="/"> Privacy Policy </a></li>
                    <li><a href="/"> Payment Policy </a></li>
                    <li><a href="/"> Shipping Policy </a></li>
                    <li><a href="/"> Refund Policy </a></li>
                    <li><a href="/"> Return Policy </a></li>
            </ul>
                
        </div>
        
        <div className="grid gap-2.5">
            <p className="max-w-[288px] leading-[45px] text-3xl italic"> Get Ready for our Fun Newsletter! </p>
            <p className="text-xs"> Subscribe to stay in touch. </p>
           
            <div className=" flex w-full items-center  bg-[#F1EADF] border-[2px] border-[#E9DECC]  hover:border-[#000] rounded-lg">
                <input type="email"  className="w-full rounded-lg text-sm text-gray-600 border-none outline-none hover:border-none hover:outline-none  max-w-full px-5 py-5 p-28 bg-[#F1EADF]  font-medium max-w-1060:w-full" placeholder="email@example.com"/>
            <button type="submit" className=" text-center me-5  w-[10rem] h-[3rem] bg-white rounded-xl text-xs font-medium"> Subscribe </button>
            </div>
       
        </div>
            
           </footer>

  )
}

export default Footer