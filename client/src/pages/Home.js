import React from 'react'
import BookCard from '../components/BookCard'
import SearchBar from '../components/SearchBar'
import { IoFilter } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='p-4'>

      <div className='mt-4 flex gap-4 items-center '>
        <SearchBar />
        <span><button className='border border-purple-500 lg:mr-5 rounded-full px-6 hover:bg-purple-500 py-2 flex items-center gap-2'>filter<IoFilter /></button></span>
      </div>

      <div className='mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10'>

        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />

        <BookCard />
        <BookCard />
      </div>


    </div>
  )
}

export default Home
