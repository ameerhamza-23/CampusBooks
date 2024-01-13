import BookImage from '../components/BookImage';

export default function Book() {



    return (
        <div className="p-4" style={{height:'87vh'}}>
            <div className="grid grid-cols-2 h-3/4 items-center">
                <div className="flex flex-col items-center">
                    <BookImage />
                    <div className="mt-4">
                        <input type="text" placeholder="Price" className="border border-gray-400 rounded-md p-2" />
                    </div>
                </div>
                <div className='flex flex-col gap-4 justify-center'>
                    <input type="text" placeholder="Name" className='border border-gray-400 rounded-md p-2 w-3/4'/>
                    <input type="text" placeholder="Author" className="border border-gray-400 rounded-md p-2 w-3/4" />
                    <input type="select" placeholder="Condition" className="border border-gray-400 rounded-md p-2 w-3/4" />
                </div>
            </div>
        </div>
    )
}