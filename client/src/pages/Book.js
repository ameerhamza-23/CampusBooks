import BookImage from '../components/BookImage';
import {useSelector} from 'react-redux';

export default function Book() {

    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    return (
        <div className="p-4" style={{height:'87vh'}}>
            <div className="grid grid-cols-2 h-3/4 items-center">
                <div className="flex flex-col items-center">
                    <BookImage />
                    <div className="mt-4">
                        
                    </div>
                </div>
                <div className='flex flex-col gap-4 justify-center'>
                    <input style={isDarkMode ? {backgroundColor:'#303134', color:'white'} : {backgroundColor:'#e9e9e9',color:'black'}} type="text" placeholder="Name" className='border border-gray-400 rounded-md p-2 w-3/4 pl-4 focus:outline-none'/>
                    <input style={isDarkMode ? {backgroundColor:'#303134', color:'white'} : {backgroundColor:'#e9e9e9',color:'black'}} type="text" placeholder="Author" className="border border-gray-400 rounded-md p-2 w-3/4 pl-4 focus:outline-none" />
                    <input style={isDarkMode ? {backgroundColor:'#303134', color:'white'} : {backgroundColor:'#e9e9e9',color:'black'}} type="select" placeholder="Condition" className="border border-gray-400 rounded-md p-2 w-3/4 pl-4 focus:outline-none" />
                    <input style={isDarkMode ? {backgroundColor:'#303134', color:'white'} : {backgroundColor:'#e9e9e9',color:'black'}} type="text" placeholder="Price" className="border border-gray-400 rounded-md p-2 w-3/4 pl-4 focus:outline-none"/>
                    <button className="bg-purple-600 text-white rounded-md p-2 w-3/4">Post Book</button>
                </div>
            </div>
        </div>
    )
}