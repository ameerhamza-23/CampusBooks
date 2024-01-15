import BookImage from '../components/BookImage';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useUploadBookMutation } from '../features/book/bookApiSlice';
import { TailSpin } from 'react-loader-spinner'

export default function Book() {

    const [uploadBook] = useUploadBookMutation()

    const [inputData, setInputData] = useState({
        name: "",
        author: "",
        condition: "",
        price: "",
        edition: "",
        semester: "",
        subject: "",
        uID: useSelector((state) => state.auth.user.id)
    })

    const [loading, setLoading] = useState(false);
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const userid = useSelector((state) => state.auth.user)
    const handleSubmit = async () => {
        setLoading(true)
        const data = await uploadBook({ ...inputData }).unwrap()
        setLoading(false)
    }

    return (
        <div className="p-4" style={{ height: '87vh' }}>
            <div className="grid grid-cols-2 h-3/4 items-center">
                <div className="flex flex-col items-center">
                    <BookImage />
                    <div className="mt-8">
                        <input type="file" className="block w-full text-gray-800 text-sm

                            file:mr-4 file:px-4 file:py-2 file:text-sm file:border-0

                            file:rounded-full file:font-semibold file:text-violet-700 file:bg-violet-50

                            hover:file:bg-amber-100 hover:file:cursor-pointer" />
                    </div>
                </div>
                <div className='flex flex-col gap-4 justify-center'>
                    <input value={inputData.name} onChange={(e) => setInputData({ ...inputData, name: e.target.value })} style={isDarkMode ? { backgroundColor: '#303134', color: 'white' } : { backgroundColor: '#e9e9e9', color: 'black' }} type="text" placeholder="Name" className='border border-gray-400 rounded-md p-2 w-3/4 pl-4 focus:outline-none' />
                    <input value={inputData.author} onChange={(e) => setInputData({ ...inputData, author: e.target.value })} style={isDarkMode ? { backgroundColor: '#303134', color: 'white' } : { backgroundColor: '#e9e9e9', color: 'black' }} type="text" placeholder="Author" className="border border-gray-400 rounded-md p-2 w-3/4 pl-4 focus:outline-none" />
                    <input value={inputData.condition} onChange={(e) => setInputData({ ...inputData, condition: e.target.value })} style={isDarkMode ? { backgroundColor: '#303134', color: 'white' } : { backgroundColor: '#e9e9e9', color: 'black' }} type="select" placeholder="Condition" className="border border-gray-400 rounded-md p-2 w-3/4 pl-4 focus:outline-none" />
                    <input value={inputData.price} onChange={(e) => setInputData({ ...inputData, price: e.target.value })} style={isDarkMode ? { backgroundColor: '#303134', color: 'white' } : { backgroundColor: '#e9e9e9', color: 'black' }} type="text" placeholder="Price" className="border border-gray-400 rounded-md p-2 w-3/4 pl-4 focus:outline-none" />
                    <input value={inputData.edition} onChange={(e) => setInputData({ ...inputData, edition: e.target.value })} style={isDarkMode ? { backgroundColor: '#303134', color: 'white' } : { backgroundColor: '#e9e9e9', color: 'black' }} type="text" placeholder="Edition" className="border border-gray-400 rounded-md p-2 w-3/4 pl-4 focus:outline-none" />
                    <input value={inputData.semester} onChange={(e) => setInputData({ ...inputData, semester: e.target.value })} style={isDarkMode ? { backgroundColor: '#303134', color: 'white' } : { backgroundColor: '#e9e9e9', color: 'black' }} type="text" placeholder="Semester" className="border border-gray-400 rounded-md p-2 w-3/4 pl-4 focus:outline-none" />
                    <input value={inputData.subject} onChange={(e) => setInputData({ ...inputData, subject: e.target.value })} style={isDarkMode ? { backgroundColor: '#303134', color: 'white' } : { backgroundColor: '#e9e9e9', color: 'black' }} type="text" placeholder="Subject" className="border border-gray-400 rounded-md p-2 w-3/4 pl-4 focus:outline-none" />
                    {loading ? <div className='flex justify-center gap-3'><h1>Uploading</h1> <TailSpin width={25} height={25} color='#5D3FD3' strokeWidth={5} /></div> : <button className="bg-purple-600 text-white rounded-md p-2 w-3/4" onClick={handleSubmit}>Post Book</button>}
                </div>
            </div>
        </div>
    )
}