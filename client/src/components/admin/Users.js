import Avatar from "../Avatar"
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useGetAllUsersMutation, useDeleteUserMutation } from "../../features/admin/adminApiSlice";
import { useEffect, useState } from "react";

export default function Users() {

  const [getAllUsers] = useGetAllUsersMutation()
  const [deleteUser] = useDeleteUserMutation()
  const [users, setUsers] = useState([])

  useEffect(() => {

    const getUsers = async () => {
      try {
        const result = await getAllUsers().unwrap()
        setUsers(result)
        console.log(result)
      }
      catch (err) {
        console.log(err)
      }
    }

    getUsers()

  }, [])

  const deleteUserWrapper = async(uid)=> {
    try {
      const response = await deleteUser({uID:uid}).unwrap()
      console.log("response: ",response)
    }
    catch(err) {
      console.log(err)
    }
  }

  return (


    <div className='p-10  flex justify-center'>

      <div className='sm:w-1/2 md:w-3/4 lg:w-full'>
        <table>
          <thead className="text-purple-300">
            <tr>
              <th className="py-4 px-4 ">ID</th>
              <th className="py-4 px-4 ">Image</th>
              <th className="py-4 px-4 ">Name</th>
              <th className="py-4 px-4 ">Email</th>
              <th className="py-4 px-4 ">Phone</th>
              <th className="py-4 px-4 ">University</th>
              <th className="py-4 px-4 ">Campus</th>
              <th className="py-4 px-4 ">Account Status</th>
              <th className="py-4 px-4 ">Member Since</th>
              <th className="py-4 px-4 ">Edit</th>
              <th className="py-4 px-4 ">Delete</th>
            </tr>
          </thead>
          <tbody>

            {users.map((user) => (
              <tr className="text-center">
                <td className="py-2 px-4 border-b">{user.id}</td>
                <td className="py-2 px-4 border-b"><Avatar /></td>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.username}</td>
                <td className="py-2 px-4 border-b">user.phone</td>
                <td className="py-2 px-4 border-b">+FAST</td>
                <td className="py-2 px-4 border-b">Lahore</td>
                <td className="py-2 px-4 border-b">Active</td>
                <td className="py-2 px-4 border-b">23-11-2001</td>
                <td className="py-2 px-4 border-b"><button><MdModeEdit size={25} /></button></td>
                <td className="py-2 px-4 border-b"><button onClick={()=> deleteUserWrapper(user.id)} ><MdDelete size={25} /></button></td>
              </tr>
            ))}


          </tbody>
        </table>
      </div>
    </div>



  )
}
