import React from 'react'
import { Link } from 'react-router-dom'
import { WiDaySunny, WiMoonWaningCrescent5 } from 'react-icons/wi'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';
//import { selectCurrentToken } from '../features/auth/authSlice';
import { selectCurrentUser } from '../features/auth/authSlice';
import { useLogoutMutation } from '../features/auth/authApiSlice';
import { setCredentials } from '../features/auth/authSlice';

function Navbar() {

  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();


  const handleLogout = async() => {

    const result = await logout().unwrap();
    console.log("result: ",result);
    dispatch(setCredentials({user: null, accessToken: null}));

  }

  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  // const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);

  const changeTheme = () => {
    dispatch(toggleTheme());
  }

  return (
    <div className='flex justify-end items-end h-20 font-semibold'>
      <ul className='grid grid-cols-3 gap-5 text-white mr-10'>
        <span className='flex items-end justify-center hover:cursor-pointer transform hover:rotate-90 transition duration-300' onMouseDown={changeTheme}>
          {isDarkMode ? <WiDaySunny size={30} /> : <WiMoonWaningCrescent5 size={30} color='black' />}
        </span>
        {user ? (  // Check if the user is logged in
          <>
            <button className='text-center border-2 border-purple-500 px-3 py-1 hover:bg-purple-500 transition' onClick={handleLogout}>
              {isDarkMode ? <span className='text-white'>Logout</span> : <span className='text-black hover:text-white'>Logout</span>}
            </button>
            {/* Add any additional logged-in user content or navigation items */}
          </>
        ) : (
          <>
            <Link to="/login" className='text-center border-2 border-purple-500 px-3 py-1 hover:bg-purple-500 transition'>
              {isDarkMode ? <span className='text-white'>Login</span> : <span className='text-black hover:text-white'>Login</span>}
            </Link>
            <Link to="/signup" className='bg-purple-500 px-3 py-1'>Sign Up</Link>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar
