import Avatar from "../Avatar"
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import {useDeleteBookMutation } from "../../features/admin/adminApiSlice";

export default function BookRow ({book}) {

    const [deleteBook] = useDeleteBookMutation()

    const deleteBookWrapper = async(bid) => {
        try {
    
          const result = await deleteBook({bID:bid}).unwrap()
          //books = books.filter((book)=> book.bid !== result.bid)
    
        }
        catch(err) {
          console.log(err)
        }
      }

    return (
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
                <td className="py-2 px-4 border-b"><button onClick={(()=> {deleteBookWrapper(book.bid)})}><MdDelete size={25} /></button></td>
              </tr>
    )
}