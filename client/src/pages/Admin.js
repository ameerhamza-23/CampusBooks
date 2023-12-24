import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Admin() {

  const underlineStyle = 'hover:underline';
  const [tab, setTab] = useState("users");

  return (
    <div className='p-10'>
      <div className='breadcrumbs flex gap-3'>
        <button className={`${underlineStyle}`}>Home</button>
        <p>/</p>
        <button className={`${underlineStyle}`}>Users</button>
        <p>/</p>
        <button className={`${underlineStyle}`}>Admin</button>
      </div>
    </div>
  )
}
