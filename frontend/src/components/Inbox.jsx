import { FaCaretDown, FaUserFriends } from "react-icons/fa"
import { IoMdMore, IoMdRefresh } from "react-icons/io"
import { MdChatBubble, MdCropSquare, MdInbox, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdUpdate } from "react-icons/md"
import {GoTag} from "react-icons/go"
import { useState } from "react"
import Emails from "./Emails"


const mailType = [
    {
        icon : <MdInbox/>,
        text:'Primary',
    },
    {
        icon : <GoTag/>,
        text:'Promotions',
    },
    {
        icon : <FaUserFriends/>,
        text:'Socials',
    },
    {
        icon : <MdUpdate/>,
        text:'Updates',
    },
    {
        icon : <MdChatBubble/>,
        text:'Forms',
    }
]

const Inbox = () => {
    const [selected , setSelected] = useState(0)
  return (
    <div className="flex-1 bg-white rounded-xl mx-5 ">
        <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-600">
         <div className="flex gap-2 p-4">
            <MdCropSquare size={'20px'}/>
            <FaCaretDown size={'20px'}/>
        </div>
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer ">
            <IoMdRefresh size={'20px'}/>
        </div>
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer ">
            <IoMdMore size={'20px'}/>
        </div>
         </div>
         <div className="flex gap-2 mr-5 text-gray-600 items-center">
             <span>1 to 50</span>
             <MdKeyboardArrowLeft className="text-2xl  hover:bg-gray-200 cursor-pointer rounded-full"/>
             <MdKeyboardArrowRight className="text-2xl  hover:bg-gray-200 cursor-pointer rounded-full"/>
         </div>
        </div>    
        <div className="h-90vh overflow-y-auto ">
            <div className="flex items-center gap-2">
                {
                    mailType.map((item,index)=>{
                        return(
                            <div onClick={() => setSelected(index)} key={index} className={` ${selected === index  ? "border-b-4 border-b-blue-400 text-blue-600 " : "border-b-4 border-b-transparent " } flex items-center gap-2 w-1/6 cursor-pointer text-gray-500`}>
                                <span className="text-2xl m-2">{item.icon}</span>
                                <span>{item.text}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>    
        <Emails/> 
    </div>
  )
}

export default Inbox