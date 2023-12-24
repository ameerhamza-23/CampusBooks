import React from 'react'
import BookCard from '../components/BookCard'
import SearchBar from '../components/SearchBar'

function Home() {
  return (
    <div className='p-4'>

      <div className='mt-4 flex justify-center items-center sm:justify-between'>
        <SearchBar />
        <h1>filter</h1>
      </div>

      <div className='mt-14 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>

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
