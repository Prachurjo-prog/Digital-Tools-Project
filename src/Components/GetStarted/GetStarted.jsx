import React from 'react';
import user from '../../assets/user.png'
import product from '../../assets/Icon (Stroke).png'
import start from '../../assets/rocket-02.png'


const GetStarted = () => {
    return (
        <div className='bg-[#F9FAFC] md:pt-20 pt-15 pb-10'>
            <div className='md:max-w-[70%] max-w-[90%] mx-auto py-10'>
              <h1 className='md:text-5xl text-center text-3xl font-bold'>Get Started in 3 Steps</h1>
              <p className='text-lg text-center text-gray-600 md:pt-5 pt-2.5'>Start using premium digital tools in minutes, not hours.</p>  

              <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 pt-10'>
                
                <div className='bg-[#FFFFFF] p-5 flex flex-col items-center text-center rounded-lg mt-10 relative'>
                    <div className='pb-8'>
                        <p className='bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center absolute right-5 top-2.5' >01</p>
                    </div>
                    
                    <img src={user} alt='user' className='bg-[#F3E8FE] p-5  rounded-full items-center'/>
                    <h2 className='text-xl font-semibold pt-2.5'>Create Account</h2>
                    <p className='pt-2 '>Sign up for free in seconds. No credit card <br/> required to get started.</p>
                </div>
                <div className='bg-[#FFFFFF] p-5 flex flex-col items-center text-center rounded-lg mt-10 relative'>
                     <div className='pb-8'>
                        <p className='bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center absolute right-5 top-2.5' >02</p>
                    </div>
                    <img src={product} alt='user' className='bg-[#F3E8FE] p-5 rounded-full items-center'/>
                    <h2 className='text-xl font-semibold pt-2.5'>Choose Products</h2>
                    <p className='pt-2 '>Browse our catalog and select the tools<br/> that fit your needs.</p>
                </div>
                <div className='bg-[#FFFFFF] p-5 flex flex-col items-center text-center rounded-lg mt-10 relative'>
                     <div className='pb-8'>
                        <p className='bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center absolute right-5 top-2.5' >03</p>
                    </div>
                    <img src={start} alt='user' className='bg-[#F3E8FE] p-5 rounded-full items-center'/>
                    <h2 className='text-xl font-semibold pt-2.5'>Start Creating</h2>
                    <p className='pt-2 '>Download and start using your premium <br/>tools immediately.</p>
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default GetStarted;