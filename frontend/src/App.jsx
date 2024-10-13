import Inbox from "./components/Inbox"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Mail from "./components/Mail"
import SendEmail from "./components/SendEmail"
import Login from "./components/Login"
import Signup from "./components/Signup"


const appRoute = createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<Inbox/>,
      },
      {
        path:'/mail/:id',
        element:<Mail/>,
      }
    ]
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
])
 
const App = () => {
  return (
     <div className="bg-[#f6f8fc] h-screen">
      <Navbar/>
      <RouterProvider router={appRoute} />
       <div className="absolute bottom-0 right-10 z-10 w-[35%]">
       <SendEmail/>
       </div>
     </div>
  )
}

export default App