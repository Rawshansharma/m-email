import { MdArrowBack, MdDeleteOutline, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineAddTask, MdOutlineMarkEmailUnread, MdOutlineMore, MdOutlineReport } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { BiArchiveIn } from "react-icons/bi"
 
const Mail = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
          <div className="flex p-2 gap-4">
          <div onClick={() => navigate('/')} className="text-gray-400 p-3  hover:bg-gray-200 rounded-full cursor-pointer ">
            <MdArrowBack />
          </div>
          <div  className="text-gray-400 p-3   hover:bg-gray-200 rounded-full cursor-pointer ">
            <BiArchiveIn />
          </div>
          <div  className="text-gray-400 p-3  hover:bg-gray-200 rounded-full cursor-pointer ">
            <MdOutlineReport />
          </div>
          <div  className="text-gray-400 p-3  hover:bg-gray-200 rounded-full cursor-pointer ">
            <MdDeleteOutline />
          </div>
          <div  className="text-gray-400 p-3  hover:bg-gray-200 rounded-full cursor-pointer ">
            <MdOutlineMarkEmailUnread />
          </div>
          <div  className="text-gray-400 p-3  hover:bg-gray-200 rounded-full cursor-pointer ">
            <MdOutlineAddTask />
          </div>
          <div  className="text-gray-400 p-3  hover:bg-gray-200 rounded-full cursor-pointer ">
            <MdOutlineMore />
          </div>
          </div>
          <div className="flex gap-2 mr-5 text-gray-600 items-center">
             <span>1 to 50</span>
             <MdKeyboardArrowLeft className="text-2xl  hover:bg-gray-200 cursor-pointer rounded-full"/>
             <MdKeyboardArrowRight className="text-2xl  hover:bg-gray-200 cursor-pointer rounded-full"/>
         </div>
      </div>
       <div className="">

       </div>
    </div>
  )
}

export default Mail