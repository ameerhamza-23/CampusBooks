import Avatar from "../components/Avatar"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useGetBookMutation } from "../features/book/bookApiSlice"

export default function BookDetails() {
  const { id } = useParams()

  const [getBook] = useGetBookMutation()
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(false)
  useEffect(() => {

    const getBookWrapper = async () => {
      try {
        setLoading(true)
        const response = await getBook({ id }).unwrap()
        setBook(response)

      }
      catch (err) {
        console.log("error: ", err)
      }
      setLoading(false)
    }

    getBookWrapper()

  }, [])

  return (

    <div className="p-4">

      <div className="grid grid-cols-2 gap-20">
        <div className="col-span-1 flex justify-center">
          <div style={{ width: '50rem', height: '50rem' }} className="">
            <img src="/images/algo.jpeg" className="w-full h-full overflow-fill rounded-xl" />
          </div>
        </div>
        <div className="col-span-1">
          <div className="pt-10 flex flex-col gap-4">
            <h1 className="font-bold text-4xl">{book.name}</h1>
            <h1>by Ameer Hamza</h1>
            <h1 className="font-bold text-lg pt-4">Edition: {book.edition}</h1>
            <h1 className="font-bold text-lg pt-4">Author: {book.author}</h1>
            <h1 className="font-bold text-lg pt-4">Condition: {book.condition}</h1>
            <span className="flex justify-between">
              <h1 className="font-bold text-2xl pt-10">Price: {book.price}</h1>
              <span className="flex items-center gap-4"><h1 className="text-md">Sold by: Ameer Hamza</h1><Avatar /></span>
            </span>



          </div>
        </div>
      </div>

    </div>

  )
}
