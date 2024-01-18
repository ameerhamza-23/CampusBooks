import Avatar from "../Avatar"
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useDeleteUserMutation } from "../../features/admin/adminApiSlice";

export default function UserRow({user}) {


    const [deleteUser] = useDeleteUserMutation()

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
    )
}