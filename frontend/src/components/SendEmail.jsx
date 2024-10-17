import {RxCross2} from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { setEmails, setOpen } from '../redux/AppSlice';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const SendEmail = () => {
    const {open , emails}= useSelector(store => store.app)
    const dispatch = useDispatch();
    const [data,setData] = useState({
      to:"",
      subject:"",
      message:""
    })
     const handleChange =(e) => {
       const {name , value} = e.target;
       setData((prev) => ({
        ...prev,
        [name]:value
       }))
     }
     const submitMessage = async(e) => {
        e.preventDefault();
        console.log(data)
       try{
        const apiUrl = import.meta.env.VITE_API_URL;
            const res = await axios.post(`${apiUrl}/api/create` , data , {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
           })
           
           dispatch(setEmails([...emails, res.data.email]));
           toast.success("Email sent successfully");
           dispatch(setOpen(false))
       }catch(err) {
        console.log(err);
        toast.error("Something went wrong");
       }
     }
  return (
    <div className={` ${open ? "block" : "hidden"}  bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
          <div className='flex items-center justify-between bg-[#f2f6fc] px-4 py-3'> 
            <h1 className='text-gray-500 font-bold'>New message</h1>
           
          <button onClick={()=> dispatch(setOpen(false))} className='p-2 rounded -full hover:bg-gray-200 cursor-pointer'>
            <RxCross2 className='text-gray-500 '/>
          </button>
          </div>
          <form onSubmit={submitMessage} className='flex flex-col p-3 gap-2 '>
            <input name='to' value={data.to} type="email" onChange={handleChange} placeholder='To'  className='outline-none py-1 border-b-2  border-b-gray-200'/>
            <input name='subject' value={data.subject} type="text" onChange={handleChange}  placeholder='Subject'className='outline-none py-1 border-b-2  border-b-gray-200'/>
            <textarea name='message' value={data.message} rows={10} onChange={handleChange} cols={30} placeholder='Message' className='outline-none py-1 border-b-2  border-b-gray-200'></textarea>
            <button type='submit' className='bg-blue-600 w-[15%] text-white p-2 rounded-full items-center hover:bg-blue-700'>Submit</button>
          </form>
    </div>
  )
}

export default SendEmail