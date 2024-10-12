import Inbox from "./components/Inbox"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Mail from "./components/Mail"

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
  }
])
 
const App = () => {
  return (
     <div className="bg-[#f6f8fc] h-screen">
      <Navbar/>
      <RouterProvider router={appRoute} />
      
     </div>
  )
}

export default App