import { useSelector } from "react-redux";
import useGetAllUsers from "../hooks/useGetAllUsers"
import Email from "./Email"
import { useEffect, useState } from "react";

 
const Emails = () => {
   useGetAllUsers();
   const {emails,sarchText} = useSelector(store => store.app)
   const [filterEmail , setFilterEmail] = useState(emails);
   useEffect(() => {
     const filtereddata = emails.filter((email) => email.subject.toLowerCase().includes(sarchText.toLowerCase()) || email.to.toLowerCase().includes(sarchText.toLowerCase()) || email.message.toLowerCase().includes(sarchText.toLowerCase()))
     setFilterEmail(filtereddata);
   }, [sarchText , emails])
   
  return (
    <div>
       {
       filterEmail && filterEmail.map((email) => <Email key={email._id} email={email} />)
       }
    </div>
  )
}

export default Emails