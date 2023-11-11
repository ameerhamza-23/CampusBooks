import React from 'react'
import { useSelector } from 'react-redux';
function LoginForm() {

  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <div className='form '> 
            <div className='flex flex-col gap-4 items-center text-white'> 
                <img src='/images/log.png' alt='login' width={200}></img>
                <input style={isDarkMode ? {backgroundColor:'#303134', color:'white'} : {backgroundColor:'#e9e9e9',color:'black'}} type='email' placeholder='   Email' className='border-2 border-black rounded-md p-3 w-96'/>
                <input style={isDarkMode ? {backgroundColor:'#303134',color:'white'} : {backgroundColor:'#e9e9e9',color:'black'}} type='password' placeholder='   Password' className='border-2 border-black rounded-md p-3 w-96'/>
                <button className='p-4 rounded-lg text-white font-bold w-96 bg-purple-600 hover:bg-purple-500 transition-all' style={{}}>Login</button>
            </div>
    </div>
  )
}

export default LoginForm