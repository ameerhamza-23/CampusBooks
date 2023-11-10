import React from 'react'
import {Link} from 'react-router-dom'
import {WiDaySunny} from 'react-icons/wi'


function Navbar() {
    return (
            <div className='flex justify-end items-end h-20  font-semibold'>
                <ul className='grid grid-cols-3 text-white mr-20'>
                    <span className='flex items-end justify-center hover:cursor-pointer'><WiDaySunny /></span>
                    <Link to="/login">Login &nbsp; &nbsp; | &nbsp;</Link>
                    <button>Sign Up</button>
                </ul>
            </div>
    )
}

export default Navbar