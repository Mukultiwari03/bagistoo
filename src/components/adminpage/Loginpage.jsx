import React  from 'react';
import { Link } from 'react-router-dom';
// import Admin from './Admin';
const Loginpage = () => {
   
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-50">
            <img src='https://demo.bagisto.com/bagisto-common/themes/admin/default/build/assets/logo-f02a1643.svg' alt='Bagisto Logo' className='mb-5'  />
            <div className='w-[19rem] h-[21rem] border-slate-200 outline-1 border-[0.5px] px-4 py-6 rounded-md drop-shadow-md bg-white'>
            <div className='border-b-2 mb-4'>
            <h2 className="text-2xl font-bold mb-2 ">Sign In</h2>

            </div>
            <div className="flex items-center mb-4 ">
                <label htmlFor="email" className='block w-full'>
                <span className='font-medium text-sm' required>Email Address*</span>
                <input type="email" id="email"  className=" w-full border border-gray-300 rounded px-2 py-1 " />
                   
                </label>
            </div>
            <div className="flex items-center  mb-8">
            <label htmlFor="password" className='block w-full'>
                <span className='font-medium text-sm'required>Password*</span>
                <input type="password" id="password"  className=" w-full border border-gray-300 rounded px-2 py-1 " />
                 </label>
            </div>
           

            <hr />
            <div className="flex items-center justify-between   mt-[1.9rem]  ">
                <label htmlFor="showpassword" className="mr-2">
                 
                <span className='text-blue-500 text-sm'>Forgot Password ?</span>
                </label>
                <div>
                <Link to='/Admin' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
               
                Sign in
                </Link>

                </div>
            </div>
            
            </div>
        </div>
    );
};

export default Loginpage;
