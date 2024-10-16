import Inbox from "./components/Inbox"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import Mail from "./components/Mail"
import SendEmail from "./components/SendEmail"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux'; // Assuming authentication state is in Redux

// Define your routes
const appRoute = (user) => createBrowserRouter([
  {
    path: '/',
    element: user ? <Body/> : <Navigate to="/signup" />, // Redirect to signup if not authenticated
    children: [
      {
        path: '/',
        element: <Inbox/>,
      },
      {
        path: '/mail/:id',
        element: <Mail/>,
      }
    ]
  },
  {
    path: '/login',
    element:<Login/> // Redirect to homepage if already logged in
  },
  {
    path: '/signup',
    element: user ? <Navigate to="/" /> : <Signup/> // Redirect to homepage if already logged in
  },
]);

const App = () => {
  // Assuming authentication state is stored in Redux
  const {user} = useSelector(store => store.app); // Modify based on your auth slice

  return (
    <div className="bg-[#f6f8fc] h-screen">
      <Navbar/>
      <RouterProvider router={appRoute(user)} />
      <div className="absolute bottom-0 right-10 z-10 w-[35%]">
        <SendEmail/>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
