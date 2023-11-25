import React from 'react'
import {Link} from 'react-router-dom'

function Admin() {

  const underlineStyle='hover:underline';

  return (
    <div className='p-10'>
      <div className='breadcrumbs flex gap-3'>
        <Link to="/home" className={`${underlineStyle}`}>Home</Link>
        <p>/</p>
        <Link to="/admin/users" className={`${underlineStyle}`}>Users</Link>
        <p>/</p>
        <Link to="/admin/books" className={`${underlineStyle}`}>Admin</Link>
      </div>
      <div className='table pt-10'>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">1</td>
              <td className="py-2 px-4 border-b">John Doe</td>
              <td className="py-2 px-4 border-b">john.doe@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin