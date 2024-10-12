 import {MdCropSquare, MdOutlineStarBorder} from 'react-icons/md'
 import {useNavigate} from 'react-router-dom'

const Email = () => {
    const navigate = useNavigate();
    const openMail = () => {
        navigate('/mail/1234')
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
                <h1>M-email</h1>
             </div>
          </div>
          <div className="flex-1 ml-4">
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos eum us!</p>
          </div>
          <div className="flex-none text-gray-400 text-sm">
            <p>12 days ago</p>
          </div>
    </div>
  )
}

export default Email