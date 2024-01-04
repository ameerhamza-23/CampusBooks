import React from 'react'
import { useSelector } from 'react-redux';
import axios from "axios"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {LineWave} from 'react-loader-spinner';
import Loader from './Loader';
import { setAuthData } from '../store/auth/authSlice';
import { useDispatch } from 'react-redux';

function LoginForm() {

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true)
    try {
      const { username, password } = user;
      const response = await axios.post('http://localhost:4000/api/auth/login', { username, password }, {withCredentials: true});
      const userData = {
        id:response.data.retUser.id,
        name:response.data.retUser.name,
        role:response.data.retUser.role,
        token: response.data.token
      }
      console.log("data: ",userData)
      // dispatch(setAuthData(userData));
      navigate('/home');
    }
    catch (err) {
      console.log(err.message);
    }
    setLoading(false);
  }

  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <div className='form flex h-full items-center'>
      <div className='flex flex-col gap-4 items-center text-white pb-20'>
        <img src='/images/log.png' alt='login' width={200}></img>
        <input style={isDarkMode ? { backgroundColor: '#303134', color: 'white' } : { backgroundColor: '#e9e9e9', color: 'black' }} type='text' placeholder='   Username' className='border-2 border-black rounded-md p-3 w-96' onChange={(e) => setUser({ ...user, username: e.target.value })} value={user.username} />
        <input style={isDarkMode ? { backgroundColor: '#303134', color: 'white' } : { backgroundColor: '#e9e9e9', color: 'black' }} type='password' placeholder='   Password' className='border-2 border-black rounded-md p-3 w-96' onChange={(e) => setUser({ ...user, password: e.target.value })} value={user.password} />
        <button className={loading ? 'rounded-lg text-white font-bold w-96 bg-purple-600 hover:bg-purple-500 transition-all justify-center' : 'p-4 rounded-lg text-white font-bold w-96 bg-purple-600 hover:bg-purple-500 transition-all justify-center'} style={{}} onClick={handleLogin}>{loading ? <Loader/> : 'Login'}</button>
      </div>
    </div>
  )
}

export default LoginForm