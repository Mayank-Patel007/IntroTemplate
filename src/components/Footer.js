import React from 'react';
import img1 from '../assets/image-retro-pcs.jpg';
import img2 from '../assets/image-top-laptops.jpg';
import img3 from '../assets/image-gaming-growth.jpg';

function Footer() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 w-full px-4 md:px-64 mt-5'>
            <div className='flex flex-col items-start p-4'>
                <div className='flex'>
                    <img className='h-24 w-32 object-cover mb-4' src={img1} alt='Reviving Retro PCs' />
                    <div className='px-4'>
                        <p className='font-bold text-2xl mb-1 text-gray-400'>01</p>
                        <p className='font-bold text-lg mb-1 hover:text-orange-400 cursor-pointer'>Reviving Retro PCs</p>
                        <p className='text-base text-gray-600'>What happens when old PCs are given modern upgrades?</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start p-4'>
                <div className='flex'>
                    <img className='h-24 w-32 object-cover mb-4' src={img2} alt='Top 10 Laptops of 2022' />
                    <div className='px-4'>
                        <p className='font-bold text-2xl mb-1 text-gray-400'>02</p>
                        <p className='font-bold text-lg mb-1 hover:text-orange-400 cursor-pointer'>Top 10 Laptops of 2022</p>
                        <p className='text-base text-gray-600'>Our best picks for various needs and budgets.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start p-4'>
                <div className='flex'>
                    <img className='h-24 w-32 object-cover mb-4' src={img3} alt='The Growth of Gaming' />
                    <div className='px-4'>
                        <p className='font-bold text-2xl mb-1 text-gray-400'>03</p>
                        <p className='font-bold text-lg mb-1 hover:text-orange-400 cursor-pointer'>The Growth of Gaming</p>
                        <p className='text-base text-gray-600'>How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
