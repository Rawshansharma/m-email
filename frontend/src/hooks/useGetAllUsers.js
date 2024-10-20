import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEmails } from "../redux/AppSlice";


const useGetAllUsers = () => {
    const dispatch = useDispatch()
     useEffect(() => {
        const fetchEmails = async() => {
          const apiUrl = import.meta.env.VITE_API_URL;
            try{
              const res = await axios.get(`${apiUrl}/getallemails` , {
                withCredentials: true,
              });
               dispatch(setEmails(res.data.emails))
            }catch(err){
                console.log(err);
            }
        }
        fetchEmails()
     },[dispatch])

}


export default useGetAllUsers;