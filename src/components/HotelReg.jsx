import React from 'react'
import { assets, cities } from '../assets/assets'

const HotelReg = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70'>
        <form className='flex flex-col md:flex-row items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] rounded-xl p-6 md:p-10 max-w-6xl w-full mx-auto gap-6'>
            <img src={assets.regImage} alt='reg-image' className='w-1/2 rounded-xl hidden md:block' />

            <div className='relative flex flex-col items-center md:w-1/2 p-8 md:p-10'>
                <img src={assets.closeIcon} alt='close-icon' className='h-4 w-4 absolute top-4 right-4 cursor-pointer' />
                <p className='text-2xl font-semibold mt-6'>Register Your hotel</p>

                {/*Hotel Name*/}
                <div className='w-full mt-4'>
                    <label htmlFor='name' className='font-medium text-gray-500'>Hotel Name</label>
                    <input id='name' type='text' placeholder='Type here' className='border border-gray-200 rounded w-full w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required />
                </div>
                {/*Phone*/}
                <div className='w-full mt-4'>
                    <label htmlFor='contact' className='font-medium text-gray-500'>Phone</label>
                    <input id='contact' type='text' placeholder='Type here' className='border border-gray-200 rounded w-full w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required />
                </div>
                {/*Address*/}
                <div className='w-full mt-4'>
                    <label htmlFor='address' className='font-medium text-gray-500'>Address</label>
                    <input id='address' type='text' placeholder='Type here' className='border border-gray-200 rounded w-full w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required />
                </div>
                {/*Select City Input with datalist*/}
                <div className='w-full mt-4 max-w-60 mr-auto'>
                    <label htmlFor='city' className='font-medium text-gray-500'>City</label>
                    <input
                        id='city'
                        type='text'
                        placeholder='Type or select city'
                        className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light'
                        list='city-list'
                        required
                    />
                    <datalist id='city-list'>
                        {cities.map((city) => (
                            <option key={city} value={city} />
                        ))}
                    </datalist>
                </div>
                <button className='bg-indigo-500 text-white rounded px-6 py-2 mt-6 hover:bg-indigo-600 transition-all mr-auto cursor-pointer'>Register</button>
            </div>
        </form>
      
    </div>
  )
}

export default HotelReg
