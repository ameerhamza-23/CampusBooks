import Avatar from "../Avatar"
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useGetAllBooksMutation } from "../../features/admin/adminApiSlice";
import { useEffect, useState } from "react";

export default function Books() {

  const [getAllBooks] = useGetAllBooksMutation()
  const [books, setBooks] = useState([])

  useEffect(() => {

    const getBooks = async () => {

      try {

        const result = await getAllBooks().unwrap()
        console.log(result)
        setBooks(result)
      }
      catch (err) {
        console.log(err)
      }
    }

    getBooks()

  }, [])

  return (


    <div className='p-10  flex justify-center'>

      <div className='sm:w-1/2 md:w-3/4 lg:w-full'>
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
              <tr className="text-center">
                <td className="py-2 px-4 border-b">{book.bid}</td>
                <td className="py-2 px-4 border-b"><Avatar /></td>
                <td className="py-2 px-4 border-b">{book.name}</td>
                <td className="py-2 px-4 border-b">{book.author}</td>
                <td className="py-2 px-4 border-b">{book.program}</td>
                <td className="py-4 px-4 border-b">{book.price}</td>
                <td className="py-4 px-4 border-b">New</td>
                <td className="py-2 px-4 border-b">Avaliable</td>
                <td className="py-2 px-4 border-b">Hamza</td>
                <td className="py-2 px-4 border-b">23-11-2001</td>
                <td className="py-2 px-4 border-b"><button><MdModeEdit size={25} /></button></td>
                <td className="py-2 px-4 border-b"><button><MdDelete size={25} /></button></td>
              </tr>
            ))}


          </tbody>
        </table>
      </div>
    </div>



  )
}
