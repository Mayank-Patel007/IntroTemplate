import React from 'react';
import mainimg from '../assets/image-web-3-desktop.jpg';

function Middle() {
    return (
        <div className='flex flex-col lg:flex-row justify-between w-full px-4 md:px-64 gap-10'>
            <div className='items-start w-full lg:w-2/3'>
                <img src={mainimg} alt="Main" />
                <div className='grid grid-cols-1 lg:grid-cols-2 pt-3 px-2 mt-5 gap-5'>
                    <div className='text-3xl lg:text-6xl font-bold text-center sm:text-left'>
                        The Bright Future of Web 3.0?
                    </div>
                    <div>
                        <div className='font-normal text-gray-600'>
                            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                        </div>
                        <button className='bg-red-500 hover:bg-black p-2 text-white px-10 mt-7'>
                            READ MORE
                        </button>
                    </div>
                </div>
            </div>
            <div className='bg-black w-full lg:w-1/3 p-8'>
                <p className='text-orange-400 font-bold text-5xl pb-3'>New</p>
                <div className='border-b border-white my-7 pb-7'>
                    <p className='text-white font-bold text-xl hover:text-orange-400 cursor-pointer pb-2'>
                        Hydrogen VS Electric Cars
                    </p>
                    <p className='text-gray-400'>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
                <div className='border-b border-white my-7 pb-7'>
                    <p className='text-white font-bold text-xl hover:text-orange-400 cursor-pointer pb-2'>
                        The Downsides of AI Artistry
                    </p>
                    <p className='text-gray-400'>What are the possible adverse effects of on-demand AI image generation?</p>
                </div>
                <div className='my-7'>
                    <p className='text-white font-bold text-xl hover:text-orange-400 cursor-pointer pb-2'>
                        Is VC Funding Drying Up?
                    </p>
                    <p className='text-gray-400'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div>
            </div>
        </div>
    );
}

export default Middle;
