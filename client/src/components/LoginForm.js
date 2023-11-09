import React from 'react'

function LoginForm() {
  return (
    <div className='form '> 
            <div className='flex flex-col gap-4 items-center'> 
                <img src='/images/log.png' alt='login' width={200}></img>
                <input type='email' placeholder='   Email' className='border-2 border-black rounded-md p-3 w-96'/>
                <input type='password' placeholder='   Password' className='border-2 border-black rounded-md p-3 w-96'/>
                <button className='p-4 rounded-lg text-white font-bold w-96' style={{backgroundColor:'#b49de5'}}>Login</button>
            </div>
    </div>
  )
}

export default LoginForm