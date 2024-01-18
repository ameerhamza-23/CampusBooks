
import { useGetAllUsersMutation } from "../../features/admin/adminApiSlice";
import { useEffect, useState } from "react";
import UserRow from "./UserRow"

export default function Users() {

  const [getAllUsers] = useGetAllUsersMutation()
  
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

  },[])

  

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
              <UserRow user={user} key={user.id}/>
            ))}


          </tbody>
        </table>
      </div>
    </div>



  )
}
