import React from 'react';

const Popularity = () => {
    return (
        <div className=' bg-linear-to-r from-purple-500 to-purple-700 text-white  items-center md:py-15 py-10  mt-10'>
            <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center gap-10 text-center'>
              <div>
                <h2 className='text-5xl pb-4'>50K+</h2>
                <p>Active Users</p>
            </div>
            <div>
                <h2 className='text-5xl pb-4'>200+</h2>
                <p>Premium Tools</p>
            </div>
            <div className=''>
                <h2 className='text-5xl pb-4'>4.9</h2>
                <p>Rating</p>
            </div>  
            </div>
            
        </div>
    );
};

export default Popularity;