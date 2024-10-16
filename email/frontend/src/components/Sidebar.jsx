import { FaPen } from "react-icons/fa";
import { MdInbox, MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineSend } from 'react-icons/md';
import { FaRegStar } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setOpen } from '../redux/AppSlice';

const sideBar = [
    {
        icon: <MdInbox size={'20px'} />,
        text: "Inbox",
    },
    {
        icon: <FaRegStar size={'20px'} />,
        text: "Starred",
    },
    {
        icon: <CiTimer size={'20px'} />,
        text: "Snoozed",
    },
    {
        icon: <MdOutlineSend size={'20px'} />,
        text: "Sent",
    },
    {
        icon: <MdOutlineDrafts size={'20px'} />,
        text: "Draft",
    },
    {
        icon: <MdOutlineKeyboardArrowDown size={'20px'} />,
        text: "More",
    },
];

const Sidebar = () => {
    const dispatch = useDispatch();
    
    return (
        <div className="flex flex-col p-4 text-gray-600 w-1/6 ">
            <button
                onClick={() => dispatch(setOpen(true))}
                className="flex bg-[#C2E7FF] px-4 py-5 cursor-pointer rounded-2xl hover:shadow-md"
            >
                <FaPen className="text-2xl" />
                <p className="ml-4">Compose</p>
            </button>
            <div className="mt-4">
                {sideBar.map((val, idx) => (
                    <div key={idx} className="flex p-2 mt-4 cursor-pointer hover:text-black hover:bg-gray-200 rounded-full">
                        <div className="mr-4 text-2xl">{val.icon}</div>
                        <div>{val.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
