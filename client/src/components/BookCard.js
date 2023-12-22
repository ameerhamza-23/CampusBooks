import Avatar from "./Avatar";

export default function BookCard() {
  return (
    <div className="w-80 h-64 relative">
      <div className="img-div w-80 h-48 overflow-hidden">
        <img src="images/book2.jpeg" alt="book image" className="w-full h-full object-fill" />
      </div>

      <div className="card-footer h-16 rounded-br-lg rounded-bl-lg flex justify-between text-center" style={{ backgroundColor: '#303134' }}>
        <div className="h-full flex items-center px-4">
          PKR. 500
        </div>
        <div className="h-full flex items-center px-4">
          logo
        </div>
      </div>
      <div className="avatar absolute -top-5 -right-5">
        <Avatar />
      </div>
    </div >
  )
}
