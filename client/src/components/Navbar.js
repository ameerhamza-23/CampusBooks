import React from 'react'
import {Link} from 'react-router-dom'
import {WiDaySunny, WiMoonWaningCrescent5 } from 'react-icons/wi'

function Navbar() {
    

    return (
            <div className='flex justify-end items-end h-20  font-semibold'>
                <ul className='grid grid-cols-3 gap-5 text-white mr-10'>
                    <span className='flex items-end justify-center hover:cursor-pointer transform hover:rotate-180 transition duration-300' ><WiMoonWaningCrescent5 size={30}/></span>
                    <Link to="/login" className='border-2 border-purple-500 rounded-md px-3 py-1'>Login</Link>
                    <Link to="/signup" className='bg-purple-500 px-3 py-1 rounded-md'>Sign Up</Link>
                </ul>
            </div>
    )
}

export default Navbar