import React from 'react'
import { Link } from 'react-router-dom'
import { WiDaySunny, WiMoonWaningCrescent5 } from 'react-icons/wi'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';

function Navbar() {

  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const changeTheme = () => {
    dispatch(toggleTheme());
  }

  return (
    <div className='flex justify-end items-end h-20  font-semibold'>
      <ul className='grid grid-cols-3 gap-5 text-white mr-10'>
        <span className='flex items-end justify-center hover:cursor-pointer transform hover:rotate-90 transition duration-300' onMouseDown={changeTheme} >{isDarkMode ? <WiDaySunny size={30} /> : <WiMoonWaningCrescent5 size={30} color='black' />} </span>
        <Link to="/login" className='text-center border-2 border-purple-500 px-3 py-1 hover:bg-purple-500 transition'>{isDarkMode ? <span className='text-white'>Login</span> : <span className='text-black hover:text-white'>Login</span>}</Link>
        <Link to="/signup" className='bg-purple-500 px-3 py-1'>Sign Up</Link>
      </ul>
    </div>
  )
}

export default Navbar
