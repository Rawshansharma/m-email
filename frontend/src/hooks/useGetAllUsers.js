import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEmails } from "../redux/AppSlice";


const useGetAllUsers = () => {
    const dispatch = useDispatch()
     useEffect(() => {
        const fetchEmails = async() => {
            try{
              const res = await axios.get("http://localhost:5000/email/getallemails" , {
                withCredentials: true,
              });
               dispatch(setEmails(res.data.emails))
            }catch(err){
                console.log(err);
            }
        }
        fetchEmails()
     },[])

}


export default useGetAllUsers;