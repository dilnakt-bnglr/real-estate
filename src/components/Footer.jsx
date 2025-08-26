import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
                <div className='w-full md:w-1/3 mb-10 md:mb-0'>
                    <img src={assets.logo_dark} />
                    <p className='text-gray-400 mb-4 mx-w-80'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                </div>
                <div>
                    <h3 className='text-white font-bold text-lg mb-4'>Company</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <a href="#Header" className='hover:text-white'>Home</a>
                        <a href="#About" className='hover:text-white'>About Us</a>
                        <a href="#Contact" className='hover:text-white'>Contact Us</a>
                        <a href="#" className='hover:text-white'>Privacy Policy</a>
                    </ul>
                </div>
                <div className='w-full md:w-1/3'>
                    <h3 className='text-white font-bold text-lg mb-4'>Subscribe to our newsletter</h3>
                    <p className='text-gray-400 mb-4 mx-w-80'>The latest news, articles and resources, sent to your inbox weekly.</p>
                    <div className='flex gap-2 w-full'>
                        <input type="email" placeholder="Enter your email" className='pt-2 rounded text-gray-400 bg-gray-800 border border-gray-700 focus:outline-none w-full md:w-auto' />
                        <button className='bg-blue-500 text-white py-2 px-4 rounded'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='text-center py-4 text-gray-400 mt-10 border-t border-gray-700'>
                Copyright © 2024 Your Company. All rights reserved.
            </div>
        </div>
    )
}

export default Footer