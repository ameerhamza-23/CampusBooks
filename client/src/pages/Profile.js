import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
  // Demo data
  const demoProfile = {
    id: 1,
    image: 'demo-image.jpg',
    name: 'Ameer Hamza',
    city: 'New York',
    uni_name: 'Demo University',
    uni_campus: 'Main Campus',
    program: 'Computer Science',
    semester: 'Spring',
    rollno: '12345',
  };

  return (
    <div className="p-4" style={{ minHeight: '87vh' }}>
      <div className='grid grid-cols-3'>

        <div className='col-span-1 flex justify-center'>
          <div className='w-64 h-64'>
            <img src='/images/prof.jpg' className='h-full h-full overflow-fit rounded-xl' />
          </div>
        </div>
        <div className='col-span-2 pt-4'>
          <div className='flex flex-col gap-10'>

            <div className='flex gap-4'>
              <h1 className='font-bold text-3xl'>Ameer Hamza</h1>
              <span className='flex gap-2 items-end'><i>icon</i><h1>Lahore</h1></span>
            </div>

            <div>
              <div className='flex gap-4'>
                <h1 className='font-bold text-xl'>Rating</h1>
                <h1 className='flex items-end'>4.5 / 5</h1>
              </div>
            </div>

            <div className='flex gap-4'>
              <button className='bg-purple-600 text-white rounded-md p-2 px-4'>Report User</button>
              <button className='bg-purple-600 text-white rounded-md p-2 px-4'>Block User</button>
            </div>

          </div>

        </div>

        <div className='col-span-1 flex justify-center pt-10'>

          <div className='flex flex-col gap-4'>
            <span className='flex gap-2 font-bold text-3xl'><i>icon</i><h1>Education</h1></span>
            <h1 className="text-lg">FAST NUCES</h1>
            <h1 className="text-md">Lahore</h1>
            <h1 className="text-md">Program: CS</h1>
            <h1 className="text-md">Semester: 6</h1>
            <h1 className="text-md">Roll No: 21L-5409</h1>
          </div>

        </div>
        <div className='col-span-2 pt-10'>

          <div className='flex flex-col gap-4'>

            <span className='flex gap-4 font-bold text-xl '><i>icon</i><h1>About</h1></span>
            <h1 className="text-lg">Phone No: 03014734130</h1>
            <h1 className="text-lg">Email: ameerhamza@gmail.com</h1>
            <h1 className="text-lg">Birthday: 23/11/2001</h1>
            <h1 className="text-lg">Gender: Male</h1>
          </div>

        </div>

      </div>
    </div>
  );
}
