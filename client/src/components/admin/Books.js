import { useGetAllBooksMutation } from "../../features/admin/adminApiSlice";
import { useEffect, useState } from "react";
import BookRow from "./BookRow"
import { setBooks, selectBooks } from "../../features/admin/adminSlice";
import { useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";

export default function Books() {

  const [getAllBooks] = useGetAllBooksMutation()
  //const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  const books = useSelector(selectBooks)

  useEffect(() => {

    const getBooks = async () => {

      //try {
      // setLoading(true)
      //const result = await getAllBooks().unwrap()
      //setBooks(result)
      //console.log("resukt: ", result)
      //  }
      // catch (err) {
      // console.log(err)
      // }
      // setLoading(false)
      console.log("books: ", books)
    }

    getBooks()

  }, [])



  return (


    <div className='p-10  flex justify-center'>

      {loading ? <TailSpin /> : <div className='sm:w-1/2 md:w-3/4 lg:w-full'>
        <table>
          <thead className="text-purple-300">
            <tr>
              <th className="py-4 px-4 ">ID</th>
              <th className="py-4 px-4 ">Image</th>
              <th className="py-4 px-4 ">Name</th>
              <th className="py-4 px-4 ">Author</th>
              <th className="py-4 px-4 ">Genre</th>
              <th className="py-4 px-4 ">Price</th>
              <th className="py-4 px-4">Conition</th>
              <th className="py-4 px-4">Avaliability</th>
              <th className="py-4 px-4">Uploaded By</th>
              <th className="py-4 px-4">Upload Date</th>
              <th className="py-4 px-4">Edit Book</th>
              <th className="py-4 px-4">Delete Book</th>
            </tr>
          </thead>
          <tbody>

            {books && books.map((book) => (
              <BookRow book={book} key={book.bid} />))}


          </tbody>
        </table>
      </div>}


    </div>



  )
}
