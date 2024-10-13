import {RxCross2} from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { setOpen } from '../redux/AppSlice';

const SendEmail = () => {
    const {open}= useSelector(store => store.app)
    const dispatch = useDispatch();
  return (
    <div className={` ${open ? "block" : "hidden"}  bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
          <div className='flex items-center justify-between bg-[#f2f6fc] px-4 py-3'> 
            <h1 className='text-gray-500 font-bold'>New message</h1>
           
          <button onClick={()=> dispatch(setOpen(false))} className='p-2 rounded -full hover:bg-gray-200 cursor-pointer'>
            <RxCross2 className='text-gray-500 '/>
          </button>
          </div>
          <form action="" className='flex flex-col p-3 gap-2 '>
            <input type="text" placeholder='To'  className='outline-none py-1 border-b-2  border-b-gray-200'/>
            <input type="text"  placeholder='Subject'className='outline-none py-1 border-b-2  border-b-gray-200'/>
            <textarea rows={10} cols={30} placeholder='Message' className='outline-none py-1 border-b-2  border-b-gray-200'></textarea>
            <button className='bg-blue-600 w-[15%] text-white p-2 rounded-full items-center hover:bg-blue-700'>Submit</button>
          </form>
    </div>
  )
}

export default SendEmail