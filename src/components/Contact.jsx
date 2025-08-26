import React from 'react'

const Contact = () => {
    return (
        <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
            <h1 className='text-2xl sm:text-4xl mb-2 font-bold text-center'>Contact<span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
            <p className='text-gray-500 text-center mb-12 max-w-80 mx-auto'>Ready to find your dream home? Contact us today!</p>


            <form className='max-w-2xl mx-auto text-gray-600 pt-8'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>
                        Your Name
                        <input className='px-4 py-2 w-full border border-gray-300 rounded mt-2' type='text' namep='Name' placeholder='Your Name' required />
                    </div>
                    <div className='w-full md:w-1/2 text-left md:pl-4'>
                        Your Email
                        <input className='px-4 py-2 w-full border border-gray-300 rounded mt-2' type='email' name='Email' placeholder='Your Email' required />
                    </div>
                </div>
                <div className='my-6 text-left'>
                    Message
                    <textarea className='px-4 py-2 w-full border border-gray-300 rounded mt-2 h-48 resize-none' name="Message" placeholder="Message" required></textarea>
                </div>
                <button className='bg-blue-6 00 text-white px-12 mb-10 py-2 rounded'>Send Message</button>
            </form>
        </div>
    )
}

export default Contact