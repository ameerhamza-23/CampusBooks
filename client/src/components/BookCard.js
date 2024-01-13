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
    <div className="w-96 relative mx-auto sm:mx-0">
      <div className="w-96 h-64 overflow-hidden">

        <img src="images/book2.jpeg" alt="book image" className="w-full h-full object-cover" />

      </div >
      <div>
        <div className="flex justify-between p-4 text-lg rounded-bl-lg rounded-br-lg" style={{ backgroundColor: '#303134' }}>
          <div className="flex flex-col gap-2 max-w-full">
              <h2 className="text-wrap overflow-x-hidden">Computer Networks</h2>
              <h1 className="font-bold">Rs 500</h1>
          </div>
          <span onClick={addToWishlist} className="flex items-center hover:cursor-pointer">{!flag ? <FaRegHeart /> : <FaHeart color={'#9370DB'} />}</span>
        </div>
      </div>
      <div className="absolute -top-5 -right-5">
        <Avatar />
      </div>
    </div>

  )
}
