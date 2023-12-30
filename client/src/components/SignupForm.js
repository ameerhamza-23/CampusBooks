import React from 'react'
import { useSelector } from 'react-redux';
import {useState} from 'react';
import axios from "axios"
import {useNavigate} from 'react-router-dom';

export default function SignupForm() {

  const [user, setUser] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSignup = async() => {

   
    try {
      const {username, name, email, password} = user;
      const newUser = await axios.post('http://localhost:4000/api/auth/register', {username, name, email, password});
      console.log(newUser.data);
      navigate('/home');
    }
    catch(err) {
      console.log(err.message);
    }

  }

  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <div className='form h-full flex text-center items-center'> 
            <div className='flex w-full flex-col gap-4 items-center text-white'> 
            <input style={isDarkMode ? {backgroundColor:'#303134', color:'white'} : {backgroundColor:'#e9e9e9',color:'black'}} type='text' placeholder='   Name' className='border-2 border-black rounded-md p-3 w-96' onChange={(e) => setUser({...user, name:e.target.value})} value={user.name}/>
            <input style={isDarkMode ? {backgroundColor:'#303134', color:'white'} : {backgroundColor:'#e9e9e9',color:'black'}} type='text' placeholder='   Username' className='border-2 border-black rounded-md p-3 w-96' onChange={(e) => setUser({...user, username:e.target.value})} value={user.username}/>
                <input style={isDarkMode ? {backgroundColor:'#303134', color:'white'} : {backgroundColor:'#e9e9e9',color:'black'}} type='email' placeholder='   Email' className='border-2 border-black rounded-md p-3 w-96' onChange={(e) => setUser({...user, email:e.target.value})} value={user.email}/>
                <input style={isDarkMode ? {backgroundColor:'#303134',color:'white'} : {backgroundColor:'#e9e9e9',color:'black'}} type='password' placeholder='   Password' className='border-2 border-black rounded-md p-3 w-96' onChange={(e) => setUser({...user, password:e.target.value})} value={user.password}/>
                <button className='p-4 rounded-lg text-white font-bold w-96 bg-purple-600 hover:bg-purple-500 transition-all' style={{}} onClick={handleSignup}>Signup</button>
            </div>
    </div>
  )
}