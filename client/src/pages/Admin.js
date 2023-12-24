import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  Users  from "../components/admin/Users"
import  Books  from "../components/admin/Books"

export default function Admin() {

  const underlineStyle = 'hover:underline';
  const [tab, setTab] = useState("users");

  return (
    <div className='p-10' style={{height:'80vh'}}>
      <div className='breadcrumbs flex gap-3'>
        <button className={`${underlineStyle}`}>Home</button>
        <p>/</p>
        <button className={`${underlineStyle}`} onClick={() => setTab("users")}>Users</button>
        <p>/</p>
        <button className={`${underlineStyle}`} onClick={() => setTab("books")}>Admin</button>
      </div>

      <div className='w-3/4 h-full rounded-lg mx-auto my-10 overflow-x-auto overflow-y-auto' style={{ backgroundColor: '#303134' }}>
        {tab === "users" ? <Users /> : <Books />}
      </div>
    </div>
  )
}
