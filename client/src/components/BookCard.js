import React, { useState } from "react";
import Avatar from "./Avatar";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function BookCard() {

  const [flag, setFlag] = useState(false)
  const addToWishlist = () => {
    setFlag(!flag)
  }

  return (
    <div className="w-56 relative mx-auto sm:mx-0">
      <div className="w-56 h-64 overflow-hidden">

        <img src="images/book2.jpeg" alt="book image" className="w-full h-full object-cover" />

      </div >
      <div>
        <div className="flex justify-between p-4 text-lg rounded-bl-lg rounded-br-lg" style={{ backgroundColor: '#303134' }}>
          <h1 className="font-bold">Rs 500</h1>
          <span onClick={addToWishlist} className="flex items-center hover:cursor-pointer">{!flag ? <FaRegHeart /> : <FaHeart color={'#9370DB'} />}</span>
        </div>
      </div>
      <div className="absolute -top-5 -right-5">
        <Avatar />
      </div>
    </div>

  )
}
