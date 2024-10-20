import {RxHamburgerMenu} from 'react-icons/rx'
import {IoIosSearch} from 'react-icons/io'
import {CiCircleQuestion} from 'react-icons/ci'
import { IoSettingsOutline } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";
import {useDispatch, useSelector} from "react-redux"
import { useEffect, useState } from 'react';
import { setEmails, setEmailsDetails, setSarchText, setUserAuth } from '../redux/AppSlice';
import axios from "axios"
import toast from "react-hot-toast";


const Navbar = () => {
    const {user} = useSelector(state => state.app)
    const [text,setText] = useState("");
    const dispatch = useDispatch()

   const handleLogout = async() => {
       try{
        const apiUrl = import.meta.env.VITE_API_URL;
           const res  = await axios.post(`${apiUrl}/logout`);
          console.log(res);
          localStorage.removeItem('token');
          toast.success('Logout Success');
          dispatch(setUserAuth(null));
          dispatch(setEmails([]));
          dispatch(setEmailsDetails([]));
       }catch(err){
        console.log(err);
       }
   }

    useEffect(() =>{
        dispatch(setSarchText(text))
    },[text])


  return (
    <div className="flex items-center justify-items-start mx-3 h-16 z-10 top-0 sticky bg-white">
        <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
                <div className='p-2 cursor-pointer hover:bg-gray-200 rounded-full'>
                    <RxHamburgerMenu className='text-gray-500' />
                </div>
                <img  className='w-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6KTX6WYGaoZL2I8C2osgHWeCJ8FllQmhaUw&s" 
                alt="logo img" />
                <h1 className='text-gray-500 font-bold'>Gmail</h1>
            </div>
        </div>
        <div className='flex mx-[10%] bg-gray-100 rounded-2xl w-1/2 mt-1'>
            <div className='flex items-center'>
                <IoIosSearch className='text-gray-500 ml-4 text-2xl'/>
            <input onChange={(e) => setText(e.target.value)} value={text} type="text" placeholder='Search mail '  className='rounded-full bg-transparent w-full outline-none px-5 py-2'/>
            </div>
        </div>
        <div className='flex gap-6 ml-[12%] mt-4'>
             <div>
                <CiCircleQuestion className='text-2xl text-gray-500 cursor-pointer '/>
             </div>
             <div>
                <IoSettingsOutline className='text-2xl text-gray-500 cursor-pointer'/>
             </div>
             <div>
                <CgMenuGridR className='text-2xl text-gray-500 cursor-pointer'/>
             </div>
             <div>
                <button className='text-sm' onClick={handleLogout}>
                    {
                        user ? "Logout" : ""
                    }
                </button>
             </div>
             <div   className='text-red-500 items-center'>
                  {
                    !user ? "" : <img className='rounded-full size-8' src={user.profilePhoto} alt="" />
                  }
             </div>
        </div>
    </div>
  )
}

export default Navbar