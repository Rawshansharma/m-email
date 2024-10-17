import { MdArrowBack, MdDeleteOutline, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineAddTask, MdOutlineMarkEmailUnread, MdOutlineMore, MdOutlineReport } from "react-icons/md"
import { useNavigate, useParams } from "react-router-dom"
import { BiArchiveIn } from "react-icons/bi"
import { useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
 
const Mail = () => {
  const navigate = useNavigate();
   const {emailDetails} = useSelector(store => store.app);
   const {id} = useParams()
   const handleDelete = async() =>{
         try{
          const apiUrl = import.meta.env.VITE_API_URL;
        
          axios.delete(`${apiUrl}/api/delete/${id}` , {withCredentials:true});
          toast.success('Email deleted');
          navigate('/');
         }catch(err){
          console.log(err);
         }
   }
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
          <div onClick={handleDelete} className="text-gray-400 p-3  hover:bg-gray-200 rounded-full cursor-pointer ">
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
       <div className="overflow-y-auto p-4">
             <div className="flex justify-between bg-white items-center gap-1">
              <div className="flex items-center gap-2">
                 <h1 className="text-xl  font-medium">{emailDetails?.subject}</h1>
                 <span className="text-sm bg-gray-200 rounded-md px-2">Inbox</span>
              </div>
               <div className="flex-none text-gray-400 my-5 text-sm">
               <p>{new Date(emailDetails.updatedAt).toLocaleString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                     })}</p>
               </div>
             </div>
             <div className="text-gray-500 text-sm">
              <h1>{emailDetails?.to}</h1>
              <span>to me</span>
             </div>
             <div className="py-10">
              <p> {emailDetails.message} </p>
             </div>
       </div>
    </div>
  )
}

export default Mail