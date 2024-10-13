import {RxHamburgerMenu} from 'react-icons/rx'
import {IoIosSearch} from 'react-icons/io'
import {CiCircleQuestion} from 'react-icons/ci'
import { IoSettingsOutline } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";



const Navbar = () => {
  return (
    <div className="flex items-center justify-items-start mx-3 h-16 z-10 top-0 sticky bg-white">
        <di className="flex items-center gap-10">
            <div className="flex items-center gap-2">
                <div className='p-2 cursor-pointer hover:bg-gray-200 rounded-full'>
                    <RxHamburgerMenu className='text-gray-500' />
                </div>
                <img  className='w-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6KTX6WYGaoZL2I8C2osgHWeCJ8FllQmhaUw&s" 
                alt="logo img" />
                <h1 className='text-gray-500 font-bold'>Gmail</h1>
            </div>
        </di>
        <div className='flex mx-[10%] bg-gray-100 rounded-2xl w-1/2 mt-1'>
            <div className='flex items-center'>
                <IoIosSearch className='text-gray-500 ml-4 text-2xl'/>
            <input type="text" placeholder='Search mail '  className='rounded-full bg-transparent w-full outline-none px-5 py-2'/>
            </div>
        </div>
        <div className='flex gap-6 ml-[12%]'>
             <div>
                <CiCircleQuestion className='text-2xl text-gray-500 cursor-pointer '/>
             </div>
             <div>
                <IoSettingsOutline className='text-2xl text-gray-500 cursor-pointer'/>
             </div>
             <div>
                <CgMenuGridR className='text-2xl text-gray-500 cursor-pointer'/>
             </div>
             <div className='text-red-500 bg-gray-400 rounded-full px-2'>
                <a href="/">R</a>
             </div>
        </div>
    </div>
  )
}

export default Navbar