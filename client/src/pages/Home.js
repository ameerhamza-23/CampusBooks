import React, { useEffect } from 'react'
import BookCard from '../components/BookCard'
import SearchBar from '../components/SearchBar'
import { IoFilter } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useGetAllBooksMutation } from "../features/book/bookApiSlice"
import { useState } from 'react';

function Home() {

  const [getAllBooks] = useGetAllBooksMutation()
  const [books, setBooks] = useState([])


  useEffect(() => {

    const getBooks = async () => {
      try {

        const result = await getAllBooks().unwrap()
        setBooks(result)

      }
      catch (err) {
        console.log("error occured")
      }
    }

    getBooks()

  }, [])

  return (
    <div className='p-4'>

      <div className='flex justify-between'>

        <div className='mt-4 flex gap-4 items-center '>
          <SearchBar />
          <span><button className='border border-purple-500 lg:mr-5 rounded-full px-6 hover:bg-purple-500 py-2 flex items-center gap-2'>filter<IoFilter /></button></span>
        </div>

        <div className='flex items-end'>
          <Link to="/book" className='bg-purple-600 text-white rounded-md p-2 px-8'>Sell</Link>
        </div>

      </div>


      <div className='mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>

        {books && books.map((book) => (
          <Link to={`/bookdetails/${book.bid}`} key={book.bid} >
            <BookCard book={book} key={book.bid} />
          </Link>
        ))}

      </div>


    </div >
  )
}

export default Home
