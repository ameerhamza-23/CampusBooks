import Avatar from "../Avatar"
export default function Users() {
  return (

    <div>

      <div className='p-10 flex justify-center items-center'>

        <div className='sm:w-1/2 md:w-3/4 lg:w-full'>
          <table>
            <thead>
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
              <tr className="text-center">
                <td className="py-2 px-4 border-b">1</td>
                <td className="py-2 px-4 border-b"><Avatar/></td>
                <td className="py-2 px-4 border-b">John Doe</td>
                <td className="py-2 px-4 border-b">john.doe@example.com</td>
                <td className="py-2 px-4 border-b">+923014734130</td>
                <td className="py-2 px-4 border-b">+FAST</td>
                <td className="py-2 px-4 border-b">Lahore</td>
                <td className="py-2 px-4 border-b">Active</td>
                <td className="py-2 px-4 border-b">23-11-2001</td>
                <td className="py-2 px-4 border-b"><button>edit-btn</button></td>
                <td className="py-2 px-4 border-b"><button>delete-btn</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


    </div>

  )
}
