import { MdDelete } from 'react-icons/md'
import React from 'react'
import BookCover from '../components/BookCover'

function Wishlist() {
  return (
    <div className='p-10 flex flex-col items-center' style={{height:'87vh'}}>

      <h1 className='font-bold text-4xl text-purple-300'>Wishlist</h1>

      <div className='sm:w-1/2 md:w-3/4 lg:w-full flex justify-center mt-20'>
        <table>
          <thead className="text-purple-300">
            <tr>
              <th className="py-4 px-4 ">ID</th>
              <th className='py-4 px-4'>Cover</th>
              <th className="py-4 px-4 ">Book Name</th>
              <th className="py-4 px-4 ">Author</th>
              <th className="py-4 px-4 ">Price</th>
              <th className="py-4 px-4 ">Program</th>
              <th className="py-4 px-4 ">Campus</th>
              <th className="py-4 px-4 ">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="py-6 px-4 border-b">1</td>
              <td className="py-6 px-4 border-b"> <BookCover /></td>
              <td className="py-6 px-4 border-b">John Doe</td>
              <td className="py-6 px-4 border-b">john.doe@example.com</td>
              <td className="py-6 px-4 border-b">+923014734130</td>
              <td className="py-6 px-4 border-b">+FAST</td>
              <td className="py-6 px-4 border-b">Lahore</td>
              <td className="py-6 px-4 border-b"><button><MdDelete size={25} /></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Wishlist