import Avatar from "./Avatar";

export default function BookCard() {
  return (
    <div className="w-76">
      <div className="w-76 h-64 overflow-hidden">

        <img src="images/book2.jpeg" alt="book image" className="w-full h-full object-cover" />

      </div >
      <div>
        <div className="flex justify-between p-4 text-lg rounded-bl-lg rounded-br-lg" style={{backgroundColor:'#303134'}}>
            <h1 className="font-bold">Rs 500</h1>
             <h1>logo</h1>
        </div>
      </div>
    </div>

  )
}
