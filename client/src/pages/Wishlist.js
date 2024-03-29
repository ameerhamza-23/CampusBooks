import { MdDelete } from 'react-icons/md'
import React from 'react'
import BookCover from '../components/BookCover'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useGetWishlistMutation, useRemoveFromWishlistMutation } from '../features/book/bookApiSlice';
import { TailSpin } from 'react-loader-spinner';

function Wishlist() {

  const [getWishlist] = useGetWishlistMutation()
  const [removeFromWishlist] = useRemoveFromWishlistMutation()
  const [loading, setLoading] = useState(false)
  const userid = useSelector((state) => state.auth.user.id)
  const [books, setBooks] = useState([])
  const data = {
    uID: userid
  };

  useEffect(() => {

    const getWS = async () => {

      setLoading(true)
      const result = await getWishlist({ ...data }).unwrap()
      setBooks(result)
      setLoading(false)

    }

    getWS()

  }, [])

  const removeFromWS = async (bid) => {
    try {
      await removeFromWishlist({ bID: bid, uID:userid }).unwrap();

      const updatedWishlist = await getWishlist({ ...data }).unwrap();
      setBooks(updatedWishlist);
    } catch (error) {
      console.error("Error removing book:", error);
    }
  }

  return (
    <div className={!loading ? 'p-10 flex flex-col items-center': 'p-10 flex justify-center items-center'} style={{ height: '87vh' }}>

      {loading ? <><TailSpin /></> : <><h1 className='font-bold text-4xl text-purple-300'>Wishlist</h1>

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
              {books && books.map((book) => (
                <tr className="text-center">
                  <td className="py-6 px-4 border-b">{book.bid}</td>
                  <td className="py-6 px-4 border-b"> <BookCover /></td>
                  <td className="py-6 px-4 border-b">{book.book_name}</td>
                  <td className="py-6 px-4 border-b">{book.author}</td>
                  <td className="py-6 px-4 border-b">{book.price}</td>
                  <td className="py-6 px-4 border-b">{book.subject}</td>
                  <td className="py-6 px-4 border-b">{book.semester}</td>
                  <td className="py-6 px-4 border-b"><button onClick={() => removeFromWS(book.bid)}><MdDelete size={25} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div></>}


    </div>
  )
}

export default Wishlist