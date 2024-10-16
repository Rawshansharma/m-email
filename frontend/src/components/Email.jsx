 import {MdCropSquare, MdOutlineStarBorder} from 'react-icons/md'
import { useDispatch } from 'react-redux';
 import {useNavigate} from 'react-router-dom'
import { setEmailsDetails } from '../redux/AppSlice';

const Email = ({email}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const openMail = () => {
         dispatch(setEmailsDetails(email))
        navigate(`/mail/${email._id}`)
    }
  return (
    <div onClick={openMail} className="flex items-center justify-between border-b border-gray-200 px-4 py-3 gap-3 text-sm hover:cursor-pointer  hover:shadow-lg">
          <div className='flex gap-3 items-center '>
             <div className='text-gray-400 '>
                <MdCropSquare/></div>
             <div className='text-gray-400'>
                <MdOutlineStarBorder/>
             </div>
             <div>
                <h1>{email?.subject}</h1>
             </div>
          </div>
          <div className="flex-1 ml-4">
             <p>{email?.message}</p>
          </div>
          <div className="flex-none text-gray-400 text-sm">
          <p>{new Date(email.updatedAt).toLocaleString('en-US', {
               year: 'numeric',
               month: 'short',
               day: 'numeric',
               hour: '2-digit',
               minute: '2-digit',
         })}</p>
          </div>
    </div>
  )
}

export default Email